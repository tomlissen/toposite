import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features":
      [
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Eems",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  7.339935186409747,
                  53.31277927249943
                ],
              "type": "Point"
            },
          "id": 0
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Noordzeekanaal",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  4.636855172083585,
                  52.46445691947778
                ],
              "type": "Point"
            },
          "id": 1
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Zwarte water",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  6.105920165183164,
                  52.56561454549981
                ],
              "type": "Point"
            },
          "id": 2
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Nieuwe Waterweg",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  4.172429495622794,
                  51.96804404189996
                ],
              "type": "Point"
            },
          "id": 3
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Amsterdam-rijnkanaal",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.0478658900927655,
                  52.13270353409831
                ],
              "type": "Point"
            },
          "id": 4
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Nieuwe Maas",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  4.863035634812718,
                  51.940396930677764
                ],
              "type": "Point"
            },
          "id": 5
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Lekkanaal",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.1037448088899,
                  52.01535624047199
                ],
              "type": "Point"
            },
          "id": 6
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Ijssel",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  6.167236579534489,
                  52.185906612722164
                ],
              "type": "Point"
            },
          "id": 8
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Oude Maas",
              "type ": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  4.831268627978204,
                  51.82163344735167
                ],
              "type": "Point"
            },
          "id": 9
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Lek",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.236901774205506,
                  51.97128237144395
                ],
              "type": "Point"
            },
          "id": 10
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Nederrijn",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.486429899544618,
                  51.9809103458615
                ],
              "type": "Point"
            },
          "id": 10
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Waal",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.641965345293443,
                  51.89634124921315
                ],
              "type": "Point"
            },
          "id": 11
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Rijn",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  6.011032337507714,
                  51.90795748404366
                ],
              "type": "Point"
            },
          "id": 12
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Maas-Waalkanaal",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  5.813093161310206,
                  51.81289450049405
                ],
              "type": "Point"
            },
          "id": 13
        },
        {
          "type": "Feature",
          "properties":
            {
              "answer": "Maas",
              "type": "water"
            },
          "geometry":
            {
              "coordinates":
                [
                  6.115625229482248,
                  51.537498500684535
                ],
              "type": "Point"
            },
          "id": 14
        }
      ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_rivieren_en_kanalen: QuizerQuestionnaireDTO = {id: 5, title: 'Nederland - Rivieren en Kanalen', questions: questions, mapBounds: [[7.216701822903872, 53.53059305288514], [3.0794520793278934, 50.74089933212963]]}
