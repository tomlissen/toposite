import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Ankara",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            34.0260756,
            39.8201218
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tbilisi",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            42.8393149,
            42.2238098
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Abu Dhabi",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            53.5827621,
            24.0137732
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Doha",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            50.7637596,
            25.30814
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amman",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            35.9751697,
            30.910587
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Asjchabad",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            58.0579383,
            39.4872888
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bagdad",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            43.5581794,
            32.9920103
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Beiroet",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            35.3612861,
            34.0766839
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Damascus",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            38.2447969,
            34.9898057
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Koeweit",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            47.3094702,
            29.4413822
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tasjkent",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            69.4474133,
            41.4866988
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bisjkek",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            74.3139213,
            41.5127246
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Doesjanbe"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            69.0309907,
            38.5584633
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Jerevan",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            44.308727,
            40.3233279
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Jeruzalem"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            34.4789695,
            31.7890446
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kabul",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            69.3220499,
            34.8078716
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Manama",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            50.2554369,
            26.2329621
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bakoe",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            47.5845214,
            40.5481335
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Masqat",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            57.4280053,
            22.4198649
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Riyad",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            49.0865438,
            21.9538362
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sana´a",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            44.5603292,
            15.7834136
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            64.7200868,
            32.5974963
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Teheran",
          "type": "stad"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            51.1380875,
            35.5149931
          ]
        }
      }
    ]
  }



//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_oosten_hoofdsteden: QuizerQuestionnaireDTO = {
  id: 42,
  title: 'Wereld - Midden Oosten Hoofdsteden',
  questions: questions,
  mapBounds: [[33.8326292, 9.1760537], [81.725066, 43.8324903]]
}
