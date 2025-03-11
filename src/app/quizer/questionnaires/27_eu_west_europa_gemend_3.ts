import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Frankrijk",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            1.6437168634298303,
            45.652619722423935
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nederland",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            5.820212163305456,
            52.30726784982764
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oostenrijk",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            16.381926238956027,
            48.04162707214735
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Corsica",
          "type": "land"
        },
        "geometry": {
          "coordinates": [
            9.193535290129091,
            42.03384419249164
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bordeaux",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            -0.8862754816882727,
            44.974859591840186
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Keulen",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            7.426556509412251,
            51.68915325311244
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bern",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            5.820212163305456,
            47.22983378291522
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Brussel",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            4.334343643158064,
            51.112931293764404
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Munchen",
          "type": "stad"
        },
        "geometry": {
          "coordinates": [
            11.482575983331401,
            48.33612704447728
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oostzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            18.389856671588802,
            55.47657097541111
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Het Kanaal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            0.720068864418522,
            50.478349655313764
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Middellandse zee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.302115467138691,
            39.63391853066466
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Noordzee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            3.892598947978456,
            56.48750827094227
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Atlantische Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -4.460391651774245,
            44.974859591840186
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ardennen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.896564164295569,
            49.78330119491679
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
            0.8807032990286245,
            42.745676258863654
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
            12.245589547731157,
            46.76421428851296
          ],
          "type": "Point"
        },
        "id": 16
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const eu_west_europa_gemengd_3: QuizerQuestionnaireDTO = {id: 27, title: 'Europa - West Europa Gemengd 3', questions: questions, mapBounds: [[21.482069537843017, 58.17787762815445], [-8.275459473777488, 37.91207279195237]]}
