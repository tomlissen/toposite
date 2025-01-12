import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Zweden",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            16.526084160303327,
            63.8413330303045
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Estland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            25.6887541983302,
            58.702081628218565
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Litouwen",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            23.59577672362343,
            55.24226964813468
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Noord-Ierland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            -6.418496430075237,
            54.49599287350708
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oslo",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            10.395054734728433,
            59.95035606082351
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kopenhagen",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            11.691967772233767,
            55.505458035159705
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Edinburgh",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -2.8056672541674175,
            55.5578857898237
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Liverpool",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -2.8519855769357605,
            53.239780773301675
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bergen",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            5.855859103458442,
            60.63890401362218
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Keltische Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -9.799733992143132,
            50.642320608422295
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oostzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            20.12190251601976,
            59.99671142792957
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Noordkaap",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            23.48209947100284,
            71.52372800017005
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Scandinavische Hooglanden",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            11.977178692095208,
            66.39585449357705
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Schotse Hooglanden",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            -5.337157529625955,
            58.96459291022049
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Schotland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            -2.944622222471537,
            57.224047443434756
          ],
          "type": "Point"
        },
        "id": 15
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_noord_europa_gemend: QuizerQuestionnaireDTO = {id: 24, title: 'Europa - Noord Europa Gemend', questions: questions, mapBounds: [[-16.64475412064874, 47.24433679604769], [42.6485369111702, 72.80329150212697]]}
