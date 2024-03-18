import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Noordwijk",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.435052722540291,
            52.24530007619535
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Leiden",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.496045668971163,
            52.163273947197126
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Randstad",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.397664609097063,
            52.12108259798953
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Den Haag",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.273367227770137,
            52.09102762888111
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Delft",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.36919035945823,
            52.01701412357892
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Zoetermeer",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.511955198909703,
            52.06200482779616
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Groene Hart",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.668767677878236,
            52.133542034014766
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Gouda",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.715519810100687,
            52.01062449818161
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Lek",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.924685553971642,
            51.94737420686394
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nieuwe Waterweg",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.070457392214479,
            51.96465788249074
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hoek van Holland",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.125381329355463,
            51.98250816948948
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Schiedam",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.399995479240573,
            51.91062427089864
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rotterdam",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.4794585640540845,
            51.922156902223065
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Nieuwe Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.525032980346083,
            51.89980973859886
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Oude Maas",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.523864405569327,
            51.83053506145893
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Dordrecht",
          "type": "plaats"
        },
        "geometry": {
          "coordinates": [
            4.652407631003683,
            51.82620185140459
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Biesbosch",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.729533566265189,
            51.78356974526656
          ],
          "type": "Point"
        },
        "id": 16
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Hollands Diep",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.525032980346083,
            51.69383861194498
          ],
          "type": "Point"
        },
        "id": 17
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Haringvliet",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            4.17796627167013,
            51.79152116185546
          ],
          "type": "Point"
        },
        "id": 18
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Rijnmond",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            4.175629122116618,
            51.85941247591063
          ],
          "type": "Point"
        },
        "id": 19
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const nl_zuidholland: QuizerQuestionnaireDTO = {id: 13, title: 'Nederland - Provincie Zuid-Holland', questions: questions, mapBounds: [[3.747032296345992, 51.70683235432429], [5.057903804439093, 52.292498694665255]]}
