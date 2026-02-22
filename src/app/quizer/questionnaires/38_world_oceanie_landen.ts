import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Australie",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            136.4918675690053,
            -26.01017932293002
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Papoea-Nieuw-Guinea",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            143.67485974154476,
            -6.52814852800158
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Solomoneilanden",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            159.35480606940376,
            -8.698645539260653
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nieuw-Caledonie",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            165.74942105227444,
            -21.35924011563968
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Vanuatu",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            167.4137728971308,
            -15.714444317791262
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Fiji",
          "type": "lanf"
        },
        "geometry": {
          "coordinates": [
            178.97663834560848,
            -17.8111854688036
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tasmanie",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            147.21272406875784,
            -42.2423474420711
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nieuw-Zeeland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            172.52839160368347,
            -42.112515961451116
          ],
          "type": "Point"
        },
        "id": 7
      }
    ]
  }


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_oceanie_landen: QuizerQuestionnaireDTO = {id: 38, title: 'Wereld - Oceanie Landen', questions: questions, mapBounds: [[125.64404731252193, -47.708397132591195], [187.2218998212121, 2.0293233174070338]]}
