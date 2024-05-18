import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Venray",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.916310741474689,
            51.527325064634
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Venlo",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.164693187136351,
            51.421793905268515
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.119660356932087,
            51.34651322251912
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Roermond",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.9861701745704465,
            51.223791993077015
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Groote Peel",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.695065093608719,
            51.311339861681176
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Weert",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.635557425124233,
            51.26507096312011
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sittard",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.868763152966864,
            51.0026740505086
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Heer en Kerkrade",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.003861643579597,
            50.91453887643581
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Heuvelland",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            6.063369312063173,
            50.87700542470179
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maastricht",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.714364877981438,
            50.796765161940215
          ],
          "type": "Point"
        },
        "id": 9
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_limburg: QuizerQuestionnaireDTO = {id: 18, title: 'Nederland - Provincie Limburg', questions: questions, mapBounds: [[5.418434850926275, 50.732677186354465], [6.3046158331862046, 51.647891202203255]]}
