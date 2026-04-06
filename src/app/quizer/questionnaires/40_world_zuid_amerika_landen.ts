import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "answer": "Colombia",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -72.39006192137492,
          3.0994798546548594
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "venezuela",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -65.58065834392158,
          8.04666673079275
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Guyana",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -59.27533271576527,
          6.159223872889413
        ],
        "type": "Point"
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Suriname",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -55.81368105322984,
          4.2942491242692995
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Frans Guyana",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -53.13831357753635,
          5.374982405634157
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Ecuador",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -78.15661483672156,
          -1.269277665972254
        ],
        "type": "Point"
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Peru",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -76.8550847134113,
          -8.397569485992761
        ],
        "type": "Point"
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Brazillie",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -52.191127661334065,
          -10.105018017431405
        ],
        "type": "Point"
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Bolivia",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -66.83760634667468,
          -17.641529860747923
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Paraguay",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -60.00114925354785,
          -22.57609671398849
        ],
        "type": "Point"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Argentinie",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -63.6354036861879,
          -33.3950782299291
        ],
        "type": "Point"
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Uruguay",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -55.37624093042855,
          -33.02960476671483
        ],
        "type": "Point"
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Chili",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -72.95257581803628,
          -39.87843054100956
        ],
        "type": "Point"
      },
      "id": 12
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Falklandeilanden",
        "type": "Gebied"
      },
      "geometry": {
        "coordinates": [
          -59.912436829825026,
          -51.79956714886561
        ],
        "type": "Point"
      },
      "id": 13
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Galapagoseilanden",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -91.32003073900022,
          -1.1305202753523957
        ],
        "type": "Point"
      },
      "id": 14
    }
  ]
}

//Mapbounds are southwestern | northeastern corner of the bounds
export const world_zuid_amerika_landen: QuizerQuestionnaireDTO = {id: 40, title: 'Wereld - Zuid Amerika Landen', questions: questions, mapBounds: [[-111.7015785728652, -57.935367443171195], [-31.662220913572753, 20.784312297922554]]}
