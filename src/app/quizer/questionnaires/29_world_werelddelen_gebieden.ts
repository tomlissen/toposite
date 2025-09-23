import {QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";
import {FeatureCollection} from "geojson";

const questions: FeatureCollection =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "answer": "Rocky Mountains",
          "type": "gebergte"
        },
        "geometry": {
          "coordinates": [
            -115.59127033232917,
            45.69123276427675
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amerika",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            -90.74552260079702,
            40.016049164718254
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -123.11337744371122,
            -3.4495841339973623
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Andes",
          "type": "gebergte"
        },
        "geometry": {
          "coordinates": [
            -80.03221853307123,
            -12.024243325305704
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Amazonewoud",
          "type": "gebergte"
        },
        "geometry": {
          "coordinates": [
            -61.11297943474872,
            -5.2677740654379335
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Atlantische Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            -31.48043626869938,
            45.0507116394495
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Noordelijke IJszee",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            33.939101336345715,
            75.0118750321272
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Europa",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            18.439001834104886,
            49.82553806422618
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Sahara",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            11.372780002200642,
            24.901838848307335
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Afrika",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            25.04933838653122,
            5.429946477733253
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Indische Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            87.96150695444936,
            -11.577995139794552
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Siberie",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            121.01318971658031,
            66.42417580177388
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Azie",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            100.95423741956228,
            38.96059016523816
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Himalaya",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            81.5791130417619,
            29.164156974385207
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Midden-Oosten",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            47.84360236041422,
            35.883931288889016
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Grote Oceaan",
          "type": "water"
        },
        "geometry": {
          "coordinates": [
            163.8664059874804,
            28.964918615183947
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "answer": "Antarctica",
          "type": "gebied"
        },
        "geometry": {
          "coordinates": [
            57.046682582015535,
            -68.8567759120054
          ],
          "type": "Point"
        },
        "id": 16
      }
    ]
  }

//Mapbounds are southwestern | northeastern corner of the bounds
export const world_werelddelen_gebieden: QuizerQuestionnaireDTO = {id: 29, title: 'Wereld - Werelddelen en gebieden', questions: questions, mapBounds: [[-187.59775576462945, -57.136247820146295], [180.83974423537234, 82.89698495680184]]}
