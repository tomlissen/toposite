import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Lauwersoog",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.202267054346663,
            53.388365920214994
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Winschoten",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            7.0125087535652995,
            53.101569409483034
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ter Apel",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            7.077053431299817,
            52.851013270494406
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Groningen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.522138817439156,
            53.21370517312096
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Pieterburen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.43562148345481,
            53.41716798920328
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Delfzijl",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.927259667048446,
            53.32786225539684
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Stadskanaal",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.9808180166580485,
            52.95966559889291
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hoogezand",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.736372215876656,
            53.12397296471272
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hondsrug",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            6.663587792048844,
            53.120676469770416
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rottumerplaat",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            6.480940086970321,
            53.536495311266975
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rottumeroog",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            6.586683495173645,
            53.53812760272368
          ],
          "type": "Point"
        },
        "id": 10
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_noordbrabant: QuizerQuestionnaireDTO = {id: 17, title: 'Nederland - Provincie Noord-Brabant', questions: questions, mapBounds: [[4.066561744105002, 51.20431594387648], [6.112185050921653, 51.840703018258665]]}
