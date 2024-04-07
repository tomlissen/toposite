import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Renesse",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.7590306091902335,
            51.73548109834388
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zierikzee",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.9087193298937564,
            51.637571253176645
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Domburg",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.50909164434691,
            51.55994463833494
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Vlissingen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.5695164490342677,
            51.45053088294094
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Middelburg",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.7027256775498927,
            51.479619537939755
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Goes",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.893613128721512,
            51.477053637770524
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Cadzand",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.3992283630966824,
            51.35457824539421
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Terneuzen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            3.776883392393785,
            51.31940237911138
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zeeuws-Vlaanderen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            3.9320652771591256,
            51.29021167358772
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oosterschelde",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.139432220518671,
            51.4804748059187
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Westerschelde",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            3.6505406189564837,
            51.413715731144606
          ],
          "type": "Point"
        },
        "id": 10
      }
    ]
  }
//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_zeeland: QuizerQuestionnaireDTO = {id: 16, title: 'Nederland - Provincie Zeeland', questions: questions, mapBounds: [[3.224820404112137, 51.18531567127047], [4.334439544737251, 51.758437939163116]]}
