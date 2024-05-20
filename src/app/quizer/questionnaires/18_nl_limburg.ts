import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Heerlen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.003861643579597,
            50.91453887643581
          ],
          "type": "Point"
        },
        "id": 6
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
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kerkrade",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.067667242108314,
            50.85731256081917
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sittard",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.873492510421045,
            50.99739312553368
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Heuvelland",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.857654078718184,
            50.85186380474377
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Roermond",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.986427482954895,
            51.19212215850504
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.09249788587087,
            51.30280791314598
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Venlo",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.164268516779373,
            51.358862790152614
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Weert",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.72548904018052,
            51.26812153430831
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Groote Peel",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.7622335193102,
            51.331896061729566
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Venray",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.992284750085275,
            51.534039375759306
          ],
          "type": "Point"
        },
        "id": 11
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_limburg: QuizerQuestionnaireDTO = {id: 18, title: 'Nederland - Provincie Limburg', questions: questions, mapBounds: [[5.47453105093183, 50.63043719131542], [6.3046158331862046, 51.647891202203255]]}
