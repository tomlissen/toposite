import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Harderwijk",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.598855135144305,
            52.32310879743221
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Apeldoorn",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.932326281962503,
            52.197801677801124
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zutphen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.160268584851792,
            52.10974630415643
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Winterswijk",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.742787803344527,
            51.978636537175504
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nijmegen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.839460899304299,
            51.864088575631854
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "lek",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.204786434095837,
            51.96000665427357
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Veluwe",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.8235656861115785,
            52.170119747708355
          ],
          "type": "Point"
        },
        "id": 19
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "IJssel",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.127513369771037,
            52.05556221890396
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Achterhoek",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            6.4314610534305245,
            52.03470194456011
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Doetinchem",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.256658041972571,
            51.94312295163664
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Land van Maas en Waal",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.678766094069886,
            51.83281930465776
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Waal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.680070590566345,
            51.89565310789129
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Betuwe",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.228714802815375,
            51.86424717722997
          ],
          "type": "Point"
        },
        "id": 18
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amsterdam-Rijnkanaal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.060056157570045,
            52.12432431765927
          ],
          "type": "Point"
        },
        "id": 19
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tiel",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.462884540186138,
            51.88614605906929
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.525459993801007,
            51.817891278179985
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.162236103927285,
            51.84299593400908
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Arnhem",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.916117928256938,
            51.975003385996814
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Neder-Rijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.573770373939567,
            51.95292478274081
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ede",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.616034844661215,
            52.04771341269526
          ],
          "type": "Point"
        },
        "id": 20
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_gelderland: QuizerQuestionnaireDTO = {id: 15, title: 'Nederland - Provincie Gelderland', questions: questions, mapBounds: [[4.946094801658035, 51.697316365207485], [6.9527391400831675, 52.47874005016891]]}
