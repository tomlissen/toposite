import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "answer": "Bahama's",
        "Type": "land"
      },
      "geometry": {
        "coordinates": [
          -76.33405737562097,
          25.074204130536756
        ],
        "type": "Point"
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Costa Rica",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -84.26520331226529,
          10.068917032224917
        ],
        "type": "Point"
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Cuba",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -79.06464317461271,
          22.024872728454326
        ],
        "type": "Point"
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Dominicaanse Replubliek",
        "Type": "land"
      },
      "geometry": {
        "coordinates": [
          -69.90544648752812,
          18.707249459747345
        ],
        "type": "Point"
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "El Salvador",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -88.92737483867994,
          13.712766820484063
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Guatemala",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -90.29237565427354,
          14.712518562541447
        ],
        "type": "Point"
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Belize",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -88.86670813576436,
          16.465490355605837
        ],
        "type": "Point"
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Haiti",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -72.24403153697443,
          19.007692861708648
        ],
        "type": "Point"
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Honduras",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -87.95670759203492,
          15.122871771086807
        ],
        "type": "Point"
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Jamaica",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -77.30590916562664,
          18.050989945505876
        ],
        "type": "Point"
      },
      "id": 12
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Nicaragua",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -85.44435478776528,
          13.494543674842063
        ],
        "type": "Point"
      },
      "id": 13
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Panama",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -82.42909130071622,
          8.910104218602058
        ],
        "type": "Point"
      },
      "id": 14
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Puerto Rico",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -66.8853156855761,
          18.21482041925495
        ],
        "type": "Point"
      },
      "id": 15
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Trinidad en Tobago",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -61.27247207328011,
          10.463782341620231
        ],
        "type": "Point"
      },
      "id": 16
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Curacao",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -70.01439877216721,
          11.908336300291325
        ],
        "type": "Point"
      },
      "id": 16
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Bonaire",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -69.26642643429427,
          12.136950457355425
        ],
        "type": "Point"
      },
      "id": 16
    },
    {
      "type": "Feature",
      "properties": {
        "answer": "Aruba",
        "type": "land"
      },
      "geometry": {
        "coordinates": [
          -70.59420684119382,
          12.040901902615545
        ],
        "type": "Point"
      },
      "id": 16
    }
  ]
}

//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_amerika: QuizerQuestionnaireDTO = {id: 32, title: 'Wereld - Midden Amerika', questions: questions, mapBounds: [[-98.70703591490317, 4.727946991070567], [-55.38333125833704, 30.539729943230498]]}
