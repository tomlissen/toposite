import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Karazee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            79.8369237605238,
            76.14747993690457
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Laptezee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            154.72835193520802,
            74.42613090479219
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zee van Ochotsk",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            149.59854895570095,
            52.97294298211878
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Beringzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            186.4618470265416,
            60.33189438093504
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            199.99863707787887,
            37.9619920779876
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zuid-Chinese Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            135.58745227391023,
            18.25809649001235
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Bengalen",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            62.18339617316457,
            7.983262564154529
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Arabische Zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -0.9146985436906903,
            -10.479999734567869
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amoer",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            124.49445187232305,
            45.54717962988025
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Baikalmeer",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            106.8638347853954,
            53.134529688519194
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Yellow River",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            114.05076993151602,
            38.710646377759474
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Yangzi",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            108.25683918296068,
            31.226578591177386
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ganges",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            75.42867442876374,
            29.959562997818622
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oeral",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            58.07033479578604,
            60.39539496889449
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Siberie",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            87.79764466759991,
            64.18948890245412
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Binnen Mongolie",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            115.32170663120485,
            48.58414978914175
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Himalaya",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            56.51646713583955,
            44.22047603779231
          ],
          "type": "Point"
        },
        "id": 16
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Mount Everest",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            88.09904919252273,
            33.50261515412254
          ],
          "type": "Point"
        },
        "id": 17
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Molukken",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            137.6087635261244,
            -3.71878777316644
          ],
          "type": "Point"
        },
        "id": 18
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Java",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            107.90838272709959,
            -7.5641447713106515
          ],
          "type": "Point"
        },
        "id": 19
      }
    ]
  }


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_azie_wateren_gebieden: QuizerQuestionnaireDTO = {id: 37, title: 'Wereld - Azie Wateren en Gebieden', questions: questions, mapBounds: [[-23.503762040989955, -25.583720268241365], [221.12851187913355, 82.02255681765939]]}
