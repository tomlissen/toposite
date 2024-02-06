import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Hondsrug",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            6.789145215799408,
            52.965466707416056
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Assen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.552572081337047,
            53.02918464219374
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zuid-Laren",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.693731740469019,
            53.116349164423156
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Meppel",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.186602590349651,
            52.69143696360686
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hoogeveen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.474548188663277,
            52.72010166412616
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Coevorden",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.704966138702048,
            52.63934311086217
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Emmen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.899714188619129,
            52.69958080643909
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Westerbork",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.61007620992163,
            52.8492656710028
          ],
          "type": "Point"
        },
        "id": 6
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_drenthe: QuizerQuestionnaireDTO = {id: 9, title: 'Nederland - Provincie Drenthe', questions: questions, mapBounds: [[6.049093625946625, 52.60660023042479], [7.18067487198968, 53.230735584487974]]}
