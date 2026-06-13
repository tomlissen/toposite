import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": 0,
        "properties": {"number": 1, "answer": "Georgie"},
        "geometry": {"type": "Point", "coordinates": [43.5, 42.1]}
      },
      {
        "type": "Feature",
        "id": 1,
        "properties": {"number": 2, "answer": "Turkije"},
        "geometry": {"type": "Point", "coordinates": [35.2, 39.0]}
      },
      {
        "type": "Feature",
        "id": 2,
        "properties": {"number": 3, "answer": "Armenie"},
        "geometry": {"type": "Point", "coordinates": [44.9, 40.3]}
      },
      {
        "type": "Feature",
        "id": 3,
        "properties": {"number": 4, "answer": "Azerbeidzjan"},
        "geometry": {"type": "Point", "coordinates": [47.6, 40.3]}
      },
      {
        "type": "Feature",
        "id": 4,
        "properties": {"number": 5, "answer": "Syrie"},
        "geometry": {"type": "Point", "coordinates": [38.5, 35.0]}
      },
      {
        "type": "Feature",
        "id": 5,
        "properties": {"number": 6, "answer": "Irak"},
        "geometry": {"type": "Point", "coordinates": [43.7, 33.0]}
      },
      {
        "type": "Feature",
        "id": 6,
        "properties": {"number": 7, "answer": "Libanon"},
        "geometry": {"type": "Point", "coordinates": [35.8, 33.9]}
      },
      {
        "type": "Feature",
        "id": 7,
        "properties": {"number": 8, "answer": "Palestina"},
        "geometry": {"type": "Point", "coordinates": [35.2, 31.9]}
      },
      {
        "type": "Feature",
        "id": 8,
        "properties": {"number": 9, "answer": "Israel"},
        "geometry": {"type": "Point", "coordinates": [35.0, 31.5]}
      },
      {
        "type": "Feature",
        "id": 9,
        "properties": {"number": 10, "answer": "Jordanie"},
        "geometry": {"type": "Point", "coordinates": [36.5, 31.2]}
      },
      {
        "type": "Feature",
        "id": 10,
        "properties": {"number": 11, "answer": "Saudi-Arabië"},
        "geometry": {"type": "Point", "coordinates": [44.5, 23.9]}
      },
      {
        "type": "Feature",
        "id": 11,
        "properties": {"number": 12, "answer": "Koeweit"},
        "geometry": {"type": "Point", "coordinates": [47.5, 29.3]}
      },
      {
        "type": "Feature",
        "id": 12,
        "properties": {"number": 13, "answer": "Jemen"},
        "geometry": {"type": "Point", "coordinates": [47.5, 15.6]}
      },
      {
        "type": "Feature",
        "id": 13,
        "properties": {"number": 14, "answer": "Oman"},
        "geometry": {"type": "Point", "coordinates": [57.0, 20.5]}
      },
      {
        "type": "Feature",
        "id": 14,
        "properties": {"number": 15, "answer": "Verenigde Arabische Emiraten"},
        "geometry": {"type": "Point", "coordinates": [54.3, 24.3]}
      },
      {
        "type": "Feature",
        "id": 15,
        "properties": {"number": 16, "answer": "Qatar"},
        "geometry": {"type": "Point", "coordinates": [51.2, 25.3]}
      },
      {
        "type": "Feature",
        "id": 16,
        "properties": {"number": 17, "answer": "Bahrein"},
        "geometry": {"type": "Point", "coordinates": [50.55, 26.05]}
      },
      {
        "type": "Feature",
        "id": 17,
        "properties": {"number": 18, "answer": "Iran"},
        "geometry": {"type": "Point", "coordinates": [53.7, 32.4]}
      },
      {
        "type": "Feature",
        "id": 18,
        "properties": {"number": 19, "answer": "Turkmenistan"},
        "geometry": {"type": "Point", "coordinates": [59.4, 39.1]}
      },
      {
        "type": "Feature",
        "id": 19,
        "properties": {"number": 20, "answer": "Oezbekistan"},
        "geometry": {"type": "Point", "coordinates": [64.6, 41.4]}
      },
      {
        "type": "Feature",
        "id": 20,
        "properties": {"number": 21, "answer": "Afghanistan"},
        "geometry": {"type": "Point", "coordinates": [66.0, 33.9]}
      },
      {
        "type": "Feature",
        "id": 21,
        "properties": {"number": 22, "answer": "Tadzjikistan"},
        "geometry": {"type": "Point", "coordinates": [71.0, 38.8]}
      },
      {
        "type": "Feature",
        "id": 22,
        "properties": {"number": 23, "answer": "Kirgistan"},
        "geometry": {"type": "Point", "coordinates": [74.8, 41.2]}
      }
    ]
  }


//Mapbounds are southwestern | northeastern corner of the bounds
export const world_midden_oosten_landen: QuizerQuestionnaireDTO = {
  id: 42,
  title: 'Wereld - Midden Oosten Landen',
  questions: questions,
  mapBounds: [[33.8326292, 9.1760537], [81.725066, 43.8324903]]
}
