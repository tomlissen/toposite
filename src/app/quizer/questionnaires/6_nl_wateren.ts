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
              "answer": "Zwarte Water",
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
              "answer": "Amsterdam-Rijnkanaal",
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
              "answer": "IJssel",
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
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Eems Dollard",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              7.126482152213782,
              53.31167066302038
            ],
            "type": "Point"
          },
          "id": 0
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Noordzee",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              4.242571019400771,
              52.37274126969049
            ],
            "type": "Point"
          },
          "id": 1
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "IJsselmeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.346696995965061,
              52.80408249126995
            ],
            "type": "Point"
          },
          "id": 2
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Waddenzee",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.143449925652504,
              53.16125698744736
            ],
            "type": "Point"
          },
          "id": 3
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Markermeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.242326878777902,
              52.537602198893865
            ],
            "type": "Point"
          },
          "id": 4
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Gooimeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.1818996556689,
              52.32072948963932
            ],
            "type": "Point"
          },
          "id": 5
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Eemmeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.310989011137394,
              52.28546016437306
            ],
            "type": "Point"
          },
          "id": 6
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Wolderwijd",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.569167722074553,
              52.34926027475643
            ],
            "type": "Point"
          },
          "id": 7
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Ketelmeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.747695554105746,
              52.59520060461688
            ],
            "type": "Point"
          },
          "id": 8
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Zwarte Meer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.953689125003137,
              52.63022277718636
            ],
            "type": "Point"
          },
          "id": 9
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Westerschelde",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              3.7481830728161185,
              51.379145983485955
            ],
            "type": "Point"
          },
          "id": 10
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Oosterschelde",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              3.995375455628789,
              51.543424745253986
            ],
            "type": "Point"
          },
          "id": 11
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Haringvliet",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              4.06404000641183,
              51.69860173199339
            ],
            "type": "Point"
          },
          "id": 12
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Hollands Diep",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              4.4540546548497275,
              51.70243180464044
            ],
            "type": "Point"
          },
          "id": 13
        },
        {
          "type": "Feature",
          "properties": {
            "answer": "Veluwemeer",
            "type": "water"
          },
          "geometry": {
            "coordinates": [
              5.696186330599261,
              52.39662957914683
            ],
            "type": "Point"
          },
          "id": 14
        }
      ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_wateren: QuizerQuestionnaireDTO = {id: 6, title: 'Nederland - Wateren', questions: questions, mapBounds: [[7.216701822903872, 53.53059305288514], [3.0794520793278934, 50.74089933212963]]}
