import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Polen",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            16.763430643483616,
            53.166259010643245
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hongarije",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            19.796112707025458,
            47.05947940844254
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bulgarije",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            25.98783858675631,
            43.50480692975157
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Moskou",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            47.53251741316774,
            54.15829268199039
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Praag",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            18.59567605687357,
            49.044122603829095
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Boekarest",
          "type": "hoofdstad"
        },
        "geometry": {
          "coordinates": [
            26.556466473670213,
            45.5317317020845
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sint-Petersburg",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            30.211689684335994,
            60.08249595033985
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zwarte Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            37.666753777605294,
            43.212816687454165
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Witte Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            37.53923039184028,
            65.60114202154068
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Wijsel",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            21.681240364590536,
            51.66611510014573
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Dnjepr",
          "type": "Water"
        },
        "geometry": {
          "coordinates": [
            36.37534121552835,
            48.493389861815814
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kaukasus",
          "type": "Gebergte"
        },
        "geometry": {
          "coordinates": [
            45.10451003786693,
            43.863501517245226
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Karpaten",
          "type": "Gebergten"
        },
        "geometry": {
          "coordinates": [
            25.027421746487704,
            49.21134859583964
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rusland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            70.4918426961689,
            64.6838890020203
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oekraine",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            31.35606914268388,
            50.24577531243668
          ],
          "type": "Point"
        },
        "id": 14
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_oost_europa_gemend: QuizerQuestionnaireDTO = {id: 25, title: 'Europa - Oost Europa Gemend', questions: questions, mapBounds: [[7.932842664625753, 40.35724433498774], [73.47423726658855, 69.27713930002562]]}
