import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Noordelijke IJszee"
        },
        "geometry": {
          "coordinates": [
            -0.17724402376958892,
            64.45823199842931
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Botnische Golf"
        },
        "geometry": {
          "coordinates": [
            19.538367791261095,
            62.24892629219383
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Oostzee"
        },
        "geometry": {
          "coordinates": [
            19.97844841213194,
            58.6044755377028
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Noordzee"
        },
        "geometry": {
          "coordinates": [
            6.071900792601156,
            55.94111675902457
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Het Kanaal"
        },
        "geometry": {
          "coordinates": [
            -4.225985735785457,
            49.67714233555816
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Atlantische Oceaan"
        },
        "geometry": {
          "coordinates": [
            -10.916965770679383,
            48.14591140750784
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Golf van Biskaje"
        },
        "geometry": {
          "coordinates": [
            -2.3161995162782887,
            44.42721924253482
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Middellandse Zee"
        },
        "geometry": {
          "coordinates": [
            6.004867022532295,
            39.70696705495553
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Adriatische Zee"
        },
        "geometry": {
          "coordinates": [
            18.1018797218112,
            41.563999030267155
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Zwarte Zee"
        },
        "geometry": {
          "coordinates": [
            32.57634000360696,
            43.41996595969897
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Straat van Gibraltar"
        },
        "geometry": {
          "coordinates": [
            -7.490644254697912,
            35.89624297111105
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "type": "water",
          "answer": "Egeische Zee"
        },
        "geometry": {
          "coordinates": [
            25.0244476826704,
            36.516877732599795
          ],
          "type": "Point"
        },
        "id": 11
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_zee_en_meren: QuizerQuestionnaireDTO = {id: 21, title: 'Europa - Zee en Meren', questions: questions, mapBounds: [[-31.97596309898063, 31.247710209868515], [32.25886551611751, 75.93042286814389]]}
