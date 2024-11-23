import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Theems",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -0.5525145605071486,
            51.58023929532729
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            7.2382555181086445,
            51.20436679621346
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Elbe",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            11.936812730468915,
            52.00250120938921
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oder",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            16.394418290914587,
            51.58023929532729
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Wijsel",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            21.333927155191077,
            52.29819160713049
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Seine",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            2.7003327403575383,
            48.857485118317726
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Loire",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            1.6160503067354455,
            47.95107483480069
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rhone",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.3106423027806215,
            44.2208358318822
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Donau",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            11.575385252595396,
            49.09471602067333
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Po",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            10.250151167057112,
            45.247795705890326
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Douro",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -4.08647212194154,
            41.99297876343414
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tage",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -6.014085337269535,
            40.1770324659949
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ebre",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            0.29081622119872463,
            41.60378625850032
          ],
          "type": "Point"
        },
        "id": 12
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_rivieren: QuizerQuestionnaireDTO = {id: 22, title: 'Europa - Rivieren', questions: questions, mapBounds: [[-31.97596309898063, 31.247710209868515], [32.25886551611751, 75.93042286814389]]}
