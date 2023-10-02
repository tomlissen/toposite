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
import {fullFeatureList} from "../../constants";
import {QuizerGameState} from "../quizer/quizer.reducer";

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
    gameState?: QuizerGameState;


  @Output() clickedOnAnswer = new EventEmitter<string>();

    ngAfterViewInit(): void {
        this.map = new Map({
            container: this.mapContainer.nativeElement,
            style: `https://api.maptiler.com/maps/befa2bdc-5ee9-4d55-a39a-3408cf2c65d7/style.json?key=5BNqd53oYYyhsEYYsqZk`,
            center: [5.2,52.0],
            zoom: 6.8,
            scrollZoom: false,
            dragPan: false,
            dragRotate: false,
            touchZoomRotate: false
        });

        this.map.on('load', () => {

            this.map.addSource('quizerSource', {
                type: 'geojson',
                data: {'type': 'FeatureCollection', 'features': fullFeatureList}
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
                'circle-radius': ['match', ['get', 'type'], 'hoofdstad', 7, 'provincie', 7, /* other */ 7],
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
              'circle-radius': 10,
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

//                this.map.on('click', layerId, (event) => {
                  this.map.on('click',  (event) => {
                  if (this.gameState === 'ongoingClickOnMap') {
                    const bbox = [
                      [event.point.x - 5, event.point.y - 5],
                      [event.point.x + 5, event.point.y + 5]
                    ];

                    // Find features intersecting the bounding box.
                    const selectedFeatures = this.map.queryRenderedFeatures(bbox, {
                      layers: ['quizerLayerPoint']
                    });
                    const feature = selectedFeatures[0];
                    if (feature) {
                      this.clickedOnAnswer.emit(feature.properties['answer']);
                    }
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
    }


}
