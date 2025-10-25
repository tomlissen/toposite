import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "answer": "Appalachen",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -81.57964051590508,
          36.30761290685105
        ],
        "type": "Point"
      },
      "id": 0
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Atlantische Oceaan",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -56.24072015662303,
          35.32247933112036
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Baffinbaai",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -62.42909460210822,
          70.8428012866971
        ],
        "type": "Point"
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Beafortzee",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -136.33511377894413,
          71.64153563388328
        ],
        "type": "Point"
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Beringzee",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -170.36914613936926,
          57.170980874723426
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Colorado",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -115.09489650291235,
          34.96108682108509
        ],
        "type": "Point"
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Golf van Alaska",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -144.6573041736467,
          56.42279700556472
        ],
        "type": "Point"
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Golf van Mexico",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -90.50096070961234,
          25.984085195751774
        ],
        "type": "Point"
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Grote Oceaan",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -147.26575190929952,
          41.2111389529839
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Hudsonbaai",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -84.91142984749905,
          59.327189497252846
        ],
        "type": "Point"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Mississipi",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -96.21470336866211,
          42.414599522206515
        ],
        "type": "Point"
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Sierra Nevada",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -120.41318019373978,
          39.498378595828825
        ],
        "type": "Point"
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Newfoundland",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -55.925446592125695,
          48.69544424702303
        ],
        "type": "Point"
      },
      "id": 12
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Ohio",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -84.95777287492412,
          41.06624744497245
        ],
        "type": "Point"
      },
      "id": 13
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Rio Grande",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -101.27239870640794,
          31.346964448759124
        ],
        "type": "Point"
      },
      "id": 14
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Rocky Mountains",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -118.67894831401395,
          49.01241266751521
        ],
        "type": "Point"
      },
      "id": 15
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Missouri",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -101.97893762036898,
          47.38572140319755
        ],
        "type": "Point"
      },
      "id": 16
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Tsjoektsenzee",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -170.8343663264745,
          68.82212333896695
        ],
        "type": "Point"
      },
      "id": 17
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Jucatan",
        "type": "gebied"
      },
      "geometry": {
        "coordinates": [
          -89.51816041049572,
          18.908670309978547
        ],
        "type": "Point"
      },
      "id": 18
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Yukon",
        "type": "water"
      },
      "geometry": {
        "coordinates": [
          -150.28050701121956,
          65.05636454798227
        ],
        "type": "Point"
      },
      "id": 19
    }
  ]
}

//Mapbounds are southwestern | northeastern corner of the bounds
export const world_noord_amerika_water_gebied: QuizerQuestionnaireDTO = {id: 31, title: 'Wereld - Noord Amerika Water en Gebieden', questions: questions, mapBounds: [[-186.68360997872395, 2.264137471145972], [-42.15179678373218, 75.11694398902307]]}
