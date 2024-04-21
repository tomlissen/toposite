import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Biesbosch",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.848341707152201,
            51.755521759103175
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Den Bosch",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.313454825799255,
            51.71450575378188
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oss",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.480534295605139,
            51.74433926750925
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kaatsheuvel",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.06358823131572,
            51.62208359394961
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Loonse en Drunense Duinen",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.176479764968036,
            51.62208359394961
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Bergen op Zoom",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.241737866326844,
            51.51542440232657
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Roosendaal",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.5789072468351435,
            51.51355095459704
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Breda",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.812216416383478,
            51.591234296693045
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Tilburg",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.084661317597096,
            51.54913328689224
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Veghel",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.466987311566498,
            51.58749356347718
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Helmond",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.682233835730045,
            51.49481223924866
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Eindhoven",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.5422483340013855,
            51.4244734123931
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Groote Peel",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            5.795125369382362,
            51.3399236848758
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.769738089313336,
            51.752376182938946
          ],
          "type": "Point"
        },
        "id": 13
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_noordbrabant: QuizerQuestionnaireDTO = {id: 17, title: 'Nederland - Provincie Noord-Brabant', questions: questions, mapBounds: [[4.030403235479582, 51.22876569760086], [6.0998388399788155, 51.836097942463056]]}
