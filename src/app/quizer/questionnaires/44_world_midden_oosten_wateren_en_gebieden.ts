import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Zwarte Zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            33.8827482,
            43.0740256
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kapische Zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            50.4173732,
            41.9116991
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Middellandse Zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            31.5131996,
            33.8551337
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Suezkanaal",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            35.7823927,
            25.5379776
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rode zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            39.3048082,
            18.501276
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Aden",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            49.4108331,
            13.216319
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Arabische Zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            64.1440266,
            18.0709492
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Golf van Oman",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            62.5297562,
            23.854758
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Perzische Golf",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            50.6780927,
            27.446233
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Eufraat",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            39.7025006,
            33.9608076
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tigris",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            42.579718,
            34.0176082
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zagrosgebergte",
          "type": "gebied"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            49.0192044,
            32.5285414
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Taurusgebergte",
          "type": "gebied"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            30.5228071,
            38.0057337
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Vruchtbare Sikkel",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            33.6740452,
            32.0072167
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Dode Zee",
          "type": "water"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            35.0456387,
            31.4405916
          ]
        }
      }
    ]
  }




//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_oosten_wateren_gebieden: QuizerQuestionnaireDTO = {
  id: 44,
  title: 'Wereld - Midden Oosten Wateren en Gebieden',
  questions: questions,
  mapBounds: [[33.8326292, 9.1760537], [81.725066, 43.8324903]]
}
