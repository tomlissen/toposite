import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Mijdrecht",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.881343922703792,
            52.21389213754898
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Wijk bij Duurstede",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.3242230313258005,
            51.96399300723593
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nieuwegein",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.097491355384562,
            52.01070915723014
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Veenendaal",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.572869293045727,
            52.03041912443166
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amersfoort",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.395024000765034,
            52.165560898196446
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zeist",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.212121496381201,
            52.07447577354469
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Utrecht",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            5.112662991692787,
            52.0786200451293
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Randstad",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.986232689123625,
            52.23684976713491
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amsterdam-Rijnkanaal",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.20706428427809,
            51.99929415382658
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Lek",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.890145659170997,
            51.940616655697994
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nederrijn",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            5.502911192290242,
            51.97749378948512
          ],
          "type": "Point"
        },
        "id": 10
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_utrecht: QuizerQuestionnaireDTO = {id: 14, title: 'Nederland - Provincie Utrecht', questions: questions, mapBounds: [[4.701342645105342, 51.85323733094506], [5.690870479882079, 52.317299620912564]]}
