import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Lelystad",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.451556187314452,
            52.52550247137725
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oostvaardersplassen",
          'type': 'gebied'
        },
        "geometry": {
          "coordinates": [
            5.3612756490435345,
            52.46721202722139
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Biddinghuizen",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.680013495016823,
            52.43382468858158
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Almere",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.183581611709883,
            52.34697908225951
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Emmeloord",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.761337558866842,
            52.69783817592301
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zeewolde",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.530360395321168,
            52.30915060883535
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Urk",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.598675779649739,
            52.68401288574722
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Dronten",
          'type': 'plaats'
        },
        "geometry": {
          "coordinates": [
            5.748555141857651,
            52.519598857821705
          ],
          "type": "Point"
        },
        "id": 7
      }
    ]
  }
//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_flevoland: QuizerQuestionnaireDTO = {id: 11, title: 'Nederland - Provincie Flevoland', questions: questions, mapBounds: [[4.989581797723616, 52.203548644799184], [6.086400942616365, 52.88108805067699]]}
