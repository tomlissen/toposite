import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { GeoJSONSource, Map } from 'maplibre-gl';
import { Feature, Position } from 'geojson';
import { questionnaires } from '../quizer/questionnaires/questionnaires';

export interface EditorFeature {
  id: string;
  answer: string;
  featureType: string;
  geometry: { type: 'Point'; coordinates: Position } | { type: 'Polygon'; coordinates: Position[][] };
}

export type DrawMode = 'point' | 'polygon';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    standalone: false
})
export class EditorComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') private mapContainer!: ElementRef<HTMLElement>;

  private map: Map | null = null;
  private polygonVertices: Position[] = [];
  private featureCounter = 0;

  drawMode: DrawMode = 'point';
  features: EditorFeature[] = [];
  quizTitle = '';
  nextId = questionnaires.length + 1;
  generatedCode = '';
  copied = false;

  readonly featureTypes = ['plaats', 'provincie', 'hoofdstad', 'water', 'gebied', 'gebergte', 'land'];

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/befa2bdc-5ee9-4d55-a39a-3408cf2c65d7/style.json?key=5BNqd53oYYyhsEYYsqZk`,
      center: [10, 20],
      zoom: 1.5,
    });

    this.map.on('load', () => {
      this.map!.addSource('editorSource', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] }
      });

      this.map!.addSource('previewSource', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] }
      });

      this.map!.addLayer({
        id: 'editorFill',
        type: 'fill',
        source: 'editorSource',
        paint: { 'fill-color': '#f08', 'fill-opacity': 0.4 },
        filter: ['==', ['geometry-type'], 'Polygon']
      });
      this.map!.addLayer({
        id: 'editorLine',
        type: 'line',
        source: 'editorSource',
        paint: { 'line-color': '#f08', 'line-width': 2 },
        filter: ['==', ['geometry-type'], 'Polygon']
      });
      this.map!.addLayer({
        id: 'editorPoint',
        type: 'circle',
        source: 'editorSource',
        paint: {
          'circle-radius': 8,
          'circle-color': ['match', ['get', 'featureType'],
            'hoofdstad', 'black',
            'provincie', 'purple',
            'gebied', 'purple',
            'gebergte', 'gray',
            'water', 'blue',
            '#f08'
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff'
        },
        filter: ['==', ['geometry-type'], 'Point']
      });

      // In-progress polygon preview
      this.map!.addLayer({
        id: 'previewLine',
        type: 'line',
        source: 'previewSource',
        paint: { 'line-color': '#09f', 'line-width': 2, 'line-dasharray': [3, 2] },
        filter: ['==', ['geometry-type'], 'LineString']
      });
      this.map!.addLayer({
        id: 'previewDot',
        type: 'circle',
        source: 'previewSource',
        paint: { 'circle-radius': 5, 'circle-color': '#09f', 'circle-stroke-width': 1, 'circle-stroke-color': '#fff' },
        filter: ['==', ['geometry-type'], 'Point']
      });

      this.map!.on('click', (e) => {
        if (this.drawMode === 'point') {
          this.addPoint([e.lngLat.lng, e.lngLat.lat]);
        } else {
          this.polygonVertices = [...this.polygonVertices, [e.lngLat.lng, e.lngLat.lat]];
          this.refreshPreview([e.lngLat.lng, e.lngLat.lat]);
        }
      });

      this.map!.on('dblclick', (e) => {
        e.preventDefault();
        if (this.drawMode === 'polygon' && this.polygonVertices.length >= 3) {
          this.finishPolygon();
        }
      });

      this.map!.on('mousemove', (e) => {
        if (this.drawMode === 'polygon' && this.polygonVertices.length > 0) {
          this.refreshPreview([e.lngLat.lng, e.lngLat.lat]);
        }
      });
    });
  }

  private addPoint(coords: Position): void {
    const id = `f${++this.featureCounter}`;
    this.features = [...this.features, {
      id,
      answer: '',
      featureType: 'plaats',
      geometry: { type: 'Point', coordinates: coords }
    }];
    this.refreshEditorSource();
  }

  private finishPolygon(): void {
    const id = `f${++this.featureCounter}`;
    const ring = [...this.polygonVertices, this.polygonVertices[0]];
    this.features = [...this.features, {
      id,
      answer: '',
      featureType: 'gebied',
      geometry: { type: 'Polygon', coordinates: [ring] }
    }];
    this.polygonVertices = [];
    this.clearPreview();
    this.refreshEditorSource();
  }

  cancelPolygon(): void {
    this.polygonVertices = [];
    this.clearPreview();
  }

  setDrawMode(mode: DrawMode): void {
    if (this.drawMode === 'polygon') {
      this.cancelPolygon();
    }
    this.drawMode = mode;
    this.map!.getCanvas().style.cursor = mode === 'polygon' ? 'crosshair' : '';
  }

  deleteFeature(id: string): void {
    this.features = this.features.filter(f => f.id !== id);
    this.refreshEditorSource();
  }

  trackById(_: number, f: EditorFeature) {
    return f.id;
  }

  private refreshEditorSource(): void {
    const source = this.map!.getSource('editorSource') as GeoJSONSource;
    source.setData({
      type: 'FeatureCollection',
      features: this.features.map(f => ({
        type: 'Feature' as const,
        geometry: f.geometry,
        properties: { answer: f.answer, featureType: f.featureType }
      }))
    });
  }

  private refreshPreview(mousePos: Position): void {
    const source = this.map!.getSource('previewSource') as GeoJSONSource;
    const verts = [...this.polygonVertices, mousePos];
    const features: Feature[] = this.polygonVertices.map(v => ({
      type: 'Feature',
      geometry: { type: 'Point' as const, coordinates: v },
      properties: {}
    }));
    if (verts.length >= 2) {
      features.push({
        type: 'Feature',
        geometry: { type: 'LineString' as const, coordinates: verts },
        properties: {}
      });
    }
    source.setData({ type: 'FeatureCollection', features });
  }

  private clearPreview(): void {
    (this.map!.getSource('previewSource') as GeoJSONSource)
      .setData({ type: 'FeatureCollection', features: [] });
  }

  generateCode(): void {
    const lngs: number[] = [];
    const lats: number[] = [];

    this.features.forEach(f => {
      if (f.geometry.type === 'Point') {
        lngs.push(f.geometry.coordinates[0]);
        lats.push(f.geometry.coordinates[1]);
      } else {
        f.geometry.coordinates[0].forEach(c => { lngs.push(c[0]); lats.push(c[1]); });
      }
    });

    const bounds = [[Math.max(...lngs), Math.max(...lats)], [Math.min(...lngs), Math.min(...lats)]];

    const featuresCode = this.features.map(f => {
      const geomLines = JSON.stringify(f.geometry, null, 2)
        .split('\n').map((l, i) => i === 0 ? l : '            ' + l).join('\n');
      return `          {
            'type': 'Feature',
            'properties': {
              'type': '${f.featureType}',
              'answer': '${f.answer.replace(/'/g, "\\'")}'
            },
            'geometry': ${geomLines}
          }`;
    }).join(',\n');

    const varName = this.quizTitle.toLowerCase()
      .replace(/[àáâä]/g, 'a').replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i').replace(/[òóôö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

    this.generatedCode =
`import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection = {
    'type': 'FeatureCollection',
    'features': [
${featuresCode}
    ]
}

export const ${varName}: QuizerQuestionnaireDTO = {
    id: ${this.nextId},
    title: '${this.quizTitle.replace(/'/g, "\\'")}',
    questions,
    mapBounds: ${JSON.stringify(bounds)}
}
`;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.generatedCode).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
