import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Vlieland",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            4.9010740799690495,
            53.23143906425355
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oost-Vlieland",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.073337780648245,
            53.303167342427884
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "West-Terschelling",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.2399294659301745,
            53.38461432776555
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Terschelling",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            5.34896780645721,
            53.41318400608597
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ballum",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.701377277079786,
            53.4470041373271
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Ameland",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            5.831461309860174,
            53.45263820983979
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "schiermonnikoog",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            6.131837167370378,
            53.47235157880186
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "schiermonnikoog",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            6.280842514010089,
            53.496276936489636
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Dokkum",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.980466656498521,
            53.30166924751779
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Harlingen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.422287897659658,
            53.15867445692169
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Leeuwarden",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.758141218656391,
            53.184193654195724
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Drachten",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.947354357245445,
            53.09054904219553
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sneek",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.6493436639673575,
            53.0507593381962
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Heerenveen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.840064714396362,
            52.97960025000785
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hemmer",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.648486310790759,
            52.85410086111233
          ],
          "type": "Point"
        },
        "id": 14
      }
    ]
  }
//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_friesland: QuizerQuestionnaireDTO = {id: 7, title: 'Nederland - Provincie Friesland', questions: questions, mapBounds: [[4.470632882413582, 52.7282373340675], [6.4904831368553175, 53.590425137084594]]}
