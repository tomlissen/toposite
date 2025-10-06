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
import {Feature} from 'geojson';
import {allQuestions, QuizerGameState} from "../quizer/quizer.reducer";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges, AfterViewInit, OnDestroy {

  private map: Map | null = null;

  private disableClick: boolean = false;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  @Input()
  feature?: Feature;

  @Input()
  allQuestions?: allQuestions;

  @Input()
  gameState?: QuizerGameState;


  @Output() clickedOnAnswer = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/494c11cf-acdb-4319-9d8b-754c15880ddc/style.json?key=5BNqd53oYYyhsEYYsqZk`,
      //center: [5.2, 52.0],
      //zoom: 6.8,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      touchZoomRotate: false,
      doubleClickZoom: false
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
          'circle-color': ['match', ['get', 'type'], 'hoofdstad', 'black', 'provincie', 'purple', 'gebied', 'purple', 'water', 'blue', /* other */ 'black']
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
          'circle-color': 'white',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000'

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
          if (!this.disableClick && this.gameState === 'ongoingClickOnMap') {

            const feature = event.features[0];
            this.clickedOnAnswer.emit(feature.properties['answer']);

            // Set timeout to prevent another click for 1 second.
            this.disableClick = true;
            setTimeout(() => {
              this.disableClick = false;
              }, 1000);
          }
        })

      });
    });

  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('feature') && this.gameState === 'ongoingTypeAnswer') {
      const change: SimpleChange = changes['feature'];
      if (!this.map) {
        return;
      }

      const source = this.map.getSource('quizerHighlightSource') as GeoJSONSource;
      if (change.currentValue) {
        source.setData({
          type: 'FeatureCollection',
          features: [change.currentValue]//.map((value: { featureCollection: { features: any[]; }; }) => value.featureCollection.features[0])
        });
      } else {
        source.setData({
          type: 'FeatureCollection',
          features: []
        });
      }
    }
    if (changes.hasOwnProperty('allQuestions') && (this.gameState === 'ongoingTypeAnswer' || this.gameState === 'ongoingClickOnMap')) {
      const change: SimpleChange = changes['allQuestions'];
      if (!this.map) {
        return;
      }

      const source = this.map.getSource('quizerSource') as GeoJSONSource;
      if (change.currentValue) {
        source.setData({
          type: 'FeatureCollection',
          features: change.currentValue.features//.map((value: { featureCollection: { features: any[]; }; }) => value.featureCollection.features[0])
        });
        this.map.fitBounds(change.currentValue.mapBounds)
      } else {
        source.setData({
          type: 'FeatureCollection',
          features: []
        });
      }
    }

  }


}
