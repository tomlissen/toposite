import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {GeoJSONSource, Map} from 'maplibre-gl';
import {Feature} from 'geojson';
import {allQuestions, QuizerGameState} from "../quizer/quizer.reducer";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    standalone: false
})
export class MapComponent implements OnChanges, AfterViewInit, OnDestroy {

  private map: Map | null = null;
  private mapLoaded = false;
  private disableClick = false;

  // Always track latest input values so we can apply them once the map loads
  private latestAllQuestions: allQuestions | null = null;
  private latestFeature: Feature | null = null;

  @ViewChild('map') private mapContainer!: ElementRef<HTMLElement>;

  @Input() feature?: Feature;
  @Input() allQuestions?: allQuestions;
  @Input() gameState?: QuizerGameState;

  @Output() clickedOnAnswer = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/befa2bdc-5ee9-4d55-a39a-3408cf2c65d7/style.json?key=5BNqd53oYYyhsEYYsqZk`,
      scrollZoom: false,
      dragPan: false,
      dragRotate: false,
      touchZoomRotate: false,
      doubleClickZoom: false
    });

    this.map.on('load', () => {
      this.mapLoaded = true;

      this.map.addSource('quizerSource', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] }
      });

      this.map.addSource('quizerHighlightSource', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] }
      });

      this.map.addLayer({
        id: 'quizerLayerFill',
        type: 'fill',
        source: 'quizerSource',
        layout: {},
        paint: { 'fill-color': '#f08', 'fill-opacity': 0.4 }
      });

      this.map.addLayer({
        id: 'quizerLayerPoint',
        type: 'circle',
        source: 'quizerSource',
        layout: {},
        paint: {
          'circle-radius': ['match', ['get', 'type'], 'hoofdstad', 10, 'provincie', 10, 7],
          'circle-color': ['match', ['get', 'type'], 'hoofdstad', 'black', 'provincie', 'purple', 'gebied', 'purple', 'water', 'blue', 'black']
        },
        filter: ['==', ['geometry-type'], 'Point']
      });

      this.map.addLayer({
        id: 'quizerLayerHighlightPoint',
        type: 'circle',
        source: 'quizerHighlightSource',
        layout: {},
        paint: {
          'circle-radius': 12,
          'circle-color': 'white',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#000'
        },
        filter: ['==', ['geometry-type'], 'Point']
      });

      // Flush any data that arrived before the map finished loading
      this.applyAllQuestions();
      this.applyFeature();

      ['quizerLayerFill', 'quizerLayerPoint'].forEach(layerId => {
        this.map.on('mouseenter', layerId, () => { this.map.getCanvas().style.cursor = 'pointer'; });
        this.map.on('mouseleave', layerId, () => { this.map.getCanvas().style.cursor = 'default'; });
        this.map.on('click', layerId, (event) => {
          if (!this.disableClick && this.gameState === 'ongoingClickOnMap') {
            this.clickedOnAnswer.emit(event.features[0].properties['answer']);
            this.disableClick = true;
            setTimeout(() => { this.disableClick = false; }, 1000);
          }
        });
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Always capture latest values regardless of map state or gameState
    if ('allQuestions' in changes) {
      this.latestAllQuestions = changes['allQuestions'].currentValue ?? null;
    }
    if ('feature' in changes) {
      this.latestFeature = changes['feature'].currentValue ?? null;
    }

    if (!this.mapLoaded) return; // will be applied in the 'load' handler

    if ('allQuestions' in changes) this.applyAllQuestions();
    if ('feature' in changes || 'gameState' in changes) this.applyFeature();
  }

  private applyAllQuestions(): void {
    if (!this.map || !this.mapLoaded) return;
    const source = this.map.getSource('quizerSource') as GeoJSONSource;
    const data = this.latestAllQuestions;
    source.setData({ type: 'FeatureCollection', features: data?.features ?? [] });
    if (data?.mapBounds?.length) {
      this.map.fitBounds(data.mapBounds as any, { animate: true });
    }
  }

  private applyFeature(): void {
    if (!this.map || !this.mapLoaded) return;
    const source = this.map.getSource('quizerHighlightSource') as GeoJSONSource;
    const showHighlight = this.gameState !== 'ongoingClickOnMap';
    source.setData({
      type: 'FeatureCollection',
      features: showHighlight && this.latestFeature ? [this.latestFeature] : []
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
