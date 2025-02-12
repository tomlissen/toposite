import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Spanje",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            -4.980714626592857,
            40.53834145867515
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Italie",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            15.469589207728319,
            40.8513352529107
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kroatie",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            16.962080326072737,
            45.63579550550955
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Griekenland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            22.10641141483015,
            39.27170185132363
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Turkije",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            28.616213101221177,
            39.17329956178884
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Lissabon",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -7.7434141200908755,
            40.61070125006117
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Madrid",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -5.164983539177911,
            42.698721469830986
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Florence",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            11.284173892777233,
            45.56952494255776
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sarajevo",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            18.08174119770311,
            44.14905926888022
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Athene",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            23.607134012211333,
            38.304083444244895
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nicosia",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            32.847876893869596,
            37.577832221288574
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Biskaje",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -8.80521732193688,
            39.74235992554071
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Straat van Gibraltar",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -7.811417404761215,
            35.2941277040769
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Adriatische Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            16.411701378123524,
            42.33823611792681
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ebre",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            0.9469529816718705,
            41.96155004177487
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Pyreneeen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            -0.1296650045399872,
            43.19458838057554
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Alpen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            7.332790587177385,
            46.217810914996335
          ],
          "type": "Point"
        },
        "id": 16
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_zuid_europa_gemend_1: QuizerQuestionnaireDTO = {id: 26, title: 'Europa - Zuid Europa Gemend 1', questions: questions, mapBounds: [[-12.03783882110875, 34.561131952068166], [35.11846134606668, 47.947450583955145]]}
