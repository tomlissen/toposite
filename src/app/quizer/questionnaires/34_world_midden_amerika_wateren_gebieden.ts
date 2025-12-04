import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Atlantische Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -45.28120270203539,
            37.0615273043135
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Caribische Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -74.71936686593536,
            14.725991071543561
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Mexico",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -89.43594408471301,
            24.92163045768737
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Panama",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -81.97447339618117,
            3.7099236914844624
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Antillen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            -74.80849268165838,
            20.120422105429142
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -102.00280864178916,
            1.1222404583859742
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kleine Antillen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            -59.66349056115129,
            14.223228387480006
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Panamakanaal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -78.83227065257176,
            10.272030046885348
          ],
          "type": "Point"
        },
        "id": 7
      }
    ]
  }


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_amerika_wateren_gebieden: QuizerQuestionnaireDTO = {id: 34, title: 'Wereld - Midden Amerika Wateren Gebieden', questions: questions, mapBounds: [[-110.9002204760204, -5.52199019612425], [-40.25333728620893, 44.71703432331023]]}
