import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Guatemala-Stad",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -90.95736948783178,
            14.40612445691508
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -88.08665690442572,
            20.488558138835046
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kingston",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -77.50756529671135,
            18.332712803160163
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Willemstad",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -68.9353920390722,
            12.117340258024669
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Managua",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -84.3459141665863,
            12.677054005790922
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nassau",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -77.87348999805191,
            24.378036006334398
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oranjestad",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -70.24528154493282,
            13.352703888186042
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Panama-Stad",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -80.68591028632278,
            8.1693143365828
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Port-au-Prince"
        },
        "geometry": {
          "coordinates": [
            -72.17159681087227,
            19.193035148797264
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Port of Spain",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -61.076020870517354,
            10.450285931617657
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "San Jose",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -83.30569903945502,
            9.615676540760077
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "San Juan",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -66.43117730982839,
            18.17115339530048
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "San Salvador",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -88.77643439472229,
            13.689829647888516
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "St. Domingo",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -70.16822892575037,
            18.792317802465348
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tegucigalpa",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -87.65917154047776,
            15.479420498407023
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kralenrijk",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -67.43286103844277,
            13.72725851616724
          ],
          "type": "Point"
        },
        "id": 15
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_amerika_hoofdsteden: QuizerQuestionnaireDTO = {id: 33, title: 'Wereld - Midden Amerika Hoofdsteden', questions: questions, mapBounds: [[-98.70703591490317, 4.727946991070567], [-55.38333125833704, 30.539729943230498]]}
