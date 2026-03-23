import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Indische Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            86.74628978553227,
            -2.566289243974566
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Australische Bocht",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            131.31255221299932,
            -36.55599210017911
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tasmanzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            175.03064368515913,
            -27.96313964043822
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Timorzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            118.97823114752077,
            -12.951939485382994
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Salomonzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            122.10211117320489,
            3.03601976350231
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Stille Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            164.37114357863783,
            41.21086144425615
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Koraalzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            183.2084297593201,
            6.925804594110176
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Eyremeer",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            137.8782239040395,
            -31.404231996706024
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Darling",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            145.0740578722877,
            -25.761232329688397
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Murrumbidgee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            146.75818922655662,
            -29.690241396380465
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Murray",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            144.461646470733,
            -33.47146591344066
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Great Barrier Beef",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            148.44232058082775,
            -15.60878610544188
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Uluru",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            129.76377283346113,
            -24.513844559545774
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Blue Mountains",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            152.72920039169998,
            -28.88907314478967
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "snowy Mountains",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            150.12645193509894,
            -34.23433958590218
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tasmanie",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            146.31445069014558,
            -42.357877808857644
          ],
          "type": "Point"
        },
        "id": 15
      }
    ]
  }


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_oceanie_wateren_gebieden: QuizerQuestionnaireDTO = {id: 39, title: 'Wereld - Oceanie Wateren Gebieden', questions: questions, mapBounds: [[67.72143675748711, -48.76984302638168], [192.8120331849375, 53.83406642299414]]}
