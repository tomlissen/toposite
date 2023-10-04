import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {GeoJSONSource, Map} from 'maplibre-gl';
import {FeatureCollection} from 'geojson';
import {QuizerGameState, QuizerQuestion} from "../quizer/quizer.reducer";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges, AfterViewInit, OnDestroy {

  private map: Map | null = null;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  @Input()
  featureCollection?: FeatureCollection;

  @Input()
  allFeatures?: QuizerQuestion[];

  @Input()
  gameState?: QuizerGameState;


  @Output() clickedOnAnswer = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/befa2bdc-5ee9-4d55-a39a-3408cf2c65d7/style.json?key=5BNqd53oYYyhsEYYsqZk`,
      center: [5.2, 52.0],
      zoom: 6.8,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      touchZoomRotate: false
    });

    this.map.on('load', () => {

      this.map.addSource('quizerSource', {
        type: 'geojson',
        data: {'type': 'FeatureCollection', 'features': []}
      });

      this.map.addSource('quizerHighlightSource', {
        type: 'geojson',
        data: {'type': 'FeatureCollection', 'features': []}
      });


      this.map.addLayer({
        id: 'quizerLayerFill',
        'type': 'fill',
        'source': 'quizerSource',
        'layout': {},
        'paint': {
          'fill-color': '#f08',
          'fill-opacity': 0.4
        }
      });
      this.map.addLayer({
        'id': 'quizerLayerPoint',
        'type': 'circle',
        'source': 'quizerSource',
        'layout': {},
        'paint': {
          'circle-radius': ['match', ['get', 'type'], 'hoofdstad', 10, 'provincie', 10, /* other */ 7],
          'circle-color': ['match', ['get', 'type'], 'hoofdstad', 'black', 'provincie', 'purple', /* other */ 'black']
        },
        filter: ['==', ['geometry-type'], 'Point']
      });
      this.map.addLayer({
        'id': 'quizerLayerHighlightPoint',
        'type': 'circle',
        'source': 'quizerHighlightSource',
        'layout': {},
        'paint': {
          'circle-radius': 12,
          'circle-color': 'yellow'
        },
        filter: ['==', ['geometry-type'], 'Point']
      });

      ['quizerLayerFill', 'quizerLayerPoint'].map((layerId) => {
        this.map.on('mouseenter', layerId, () => {
          this.map.getCanvas().style.cursor = 'pointer';
        });

        this.map.on('mouseleave', layerId, () => {
          this.map.getCanvas().style.cursor = 'default';
        });

        this.map.on('click', layerId, (event) => {
          if (this.gameState === 'ongoingClickOnMap') {

            const feature = event.features[0];
            this.clickedOnAnswer.emit(feature.properties['answer']);
          }
        })


      });
    });

  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('featureCollection') && this.gameState === 'ongoingTypeAnswer') {
      console.log("collec change")
      const change: SimpleChange = changes['featureCollection'];
      if (!this.map) {
        return;
      }

      const source = this.map.getSource('quizerHighlightSource') as GeoJSONSource;

      if (change.currentValue) {
        source.setData(change.currentValue);
      } else {
        source.setData({
          type: 'FeatureCollection',
          features: []
        });
      }
    }
    if (changes.hasOwnProperty('allFeatures') && (this.gameState === 'ongoingTypeAnswer' || this.gameState === 'ongoingClickOnMap')) {
      console.log("Allfeatures change")
      const change: SimpleChange = changes['allFeatures'];
      if (!this.map) {
        return;
      }

      const source = this.map.getSource('quizerSource') as GeoJSONSource;
      if (change.currentValue) {
        source.setData({
          type: 'FeatureCollection',
          features: change.currentValue.map((value: { featureCollection: { features: any[]; }; }) => value.featureCollection.features[0])
        });
      } else {
        source.setData({
          type: 'FeatureCollection',
          features: []
        });
      }
    }

  }


}
