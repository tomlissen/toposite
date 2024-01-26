import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "IJssel",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.095393154385619,
            52.34166925812383
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Deventer",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.180918891537658,
            52.24465735074037
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zwarte Water",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            6.0140406091198315,
            52.634130986893155
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Giethoorn",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.126087455886648,
            52.72229927548224
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Weerribben",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            6.035496388287754,
            52.767037930591414
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Kampen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.921065566058616,
            52.57477029736839
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zwolle",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.095095774865797,
            52.51532913358369
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Salland",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            6.371636928587094,
            52.521131815364015
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Raalte",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.381172830439965,
            52.364190281394684
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Slagharen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.522800434964665,
            52.61407166996793
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oostmarsum",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.865279195771308,
            52.40376550440695
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Almelo",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.633466537295277,
            52.346512483210745
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Twente",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            6.53547821471642,
            52.30373498285567
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hengelo",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.724427080230271,
            52.27254275094046
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Enschede",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.83857710738053,
            52.23760444003824
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Haaksbergen",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            6.724427080230271,
            52.15061147443308
          ],
          "type": "Point"
        },
        "id": 15
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_overijssel: QuizerQuestionnaireDTO = {id: 12, title: 'Nederland - Provincie Overijssel', questions: questions, mapBounds: [[5.639303212384931, 52.11735195377989], [7.125232271712662, 52.86307761640529]]}
