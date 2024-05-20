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
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amsterdam-Rijnkanaal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.514432059999564,
            52.1447303166957
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ede",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.617850327050974,
            52.08381451066026
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nederrijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.636845518958808,
            51.99813260701046
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Arnhem",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.824686861153765,
            51.99943204323108
          ],
          "type": "Point"
        },
        "id": 9
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
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tiel",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.463778214913162,
            51.89666033574639
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nijmwegen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.839460899304299,
            51.864088575631854
          ],
          "type": "Point"
        },
        "id": 11
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
        "id": 10
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
        "id": 19
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
        "id": 18
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.13012188182239,
            51.85055054616325
          ],
          "type": "Point"
        },
        "id": 19
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
        "id": 19
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
        "id": 19
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
        "id": 19
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maas",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.479178130122932,
            51.82395106495588
          ],
          "type": "Point"
        },
        "id": 19
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
        "id": 19
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_noordholland: QuizerQuestionnaireDTO = {id: 10, title: 'Nederland - Provincie Noord-Holland', questions: questions, mapBounds: [[4.25625660123535, 52.16447458647238], [5.376972923771632, 53.19700884799087]]}
