import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "answer": "Caracas",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -67.22823971623878,
          9.896747358317114
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Bogota",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -73.73214596623883,
          3.7912174353087806
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Georgetown",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -59.05441159123872,
          5.718065222561151
        ],
        "type": "Point"
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Paramaribo",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -55.802458466238335,
          4.054271346780553
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Cayenne",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -53.196743310806866,
          4.0446284560418775
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Quito",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -79.61946451869377,
          -1.9527226001694231
        ],
        "type": "Point"
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Lima",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -75.49931138119265,
          -11.108407890353575
        ],
        "type": "Point"
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Brasillia",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -50.33054982384925,
          -9.96366867391309
        ],
        "type": "Point"
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Sucre",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -64.48238016570063,
          -17.27040250099803
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Asuncion",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -58.212581912982,
          -23.23320908433132
        ],
        "type": "Point"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Santiago",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -69.76692440727813,
          -26.883534348229645
        ],
        "type": "Point"
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Buenos Aires",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -61.34748103934132,
          -33.98088117274985
        ],
        "type": "Point"
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Montevideo",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -56.06293679776381,
          -33.15997408244923
        ],
        "type": "Point"
      },
      "id": 12
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Stanley",
        "type": "stad"
      },
      "geometry": {
        "coordinates": [
          -59.29837881710645,
          -51.75030724778107
        ],
        "type": "Point"
      },
      "id": 13
    }
  ]
}


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_zuid_amerika_hoofdsteden: QuizerQuestionnaireDTO = {id: 41, title: 'Wereld - Zuid Amerika Hoofdsteden', questions: questions, mapBounds: [[-111.7015785728652, -57.935367443171195], [-31.662220913572753, 20.784312297922554]]}
