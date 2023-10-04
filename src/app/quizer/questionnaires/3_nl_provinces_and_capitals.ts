import {QuizerQuestion, QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";

const questions: QuizerQuestion[] = [
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Groningen'
          },
          'geometry': {
            'coordinates': [
              6.569665033582822,
              53.22073056888877
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'provincie',
            'answer': 'Friesland'
          },
          'geometry': {
            'coordinates': [
              5.821164583724567,
              53.09022027331227
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Leeuwarden'
          },
          'geometry': {
            'coordinates': [
              5.780110643756814,
              53.208710248661305
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Assen'
          },
          'geometry': {
            'coordinates': [
              6.549591616891945,
              52.98773952197982
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Zwolle'
          },
          'geometry': {
            'coordinates': [
              6.08790303301123,
              52.50981978794988
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Lelystad'
          },
          'geometry': {
            'coordinates': [
              5.465627115606367,
              52.51389199669052
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Haarlem'
          },
          'geometry': {
            'coordinates': [
              4.638988936495423,
              52.38236788582384
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Den Haag'
          },
          'geometry': {
            'coordinates': [
              4.293839268299735,
              52.07968741819087
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Utrecht'
          },
          'geometry': {
            'coordinates': [
              5.111976546042854,
              52.09155773530682
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Arnhem'
          },
          'geometry': {
            'coordinates': [
              5.910999153157292,
              51.98428366162969
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Den Bosch'
          },
          'geometry': {
            'coordinates': [
              5.299049153343049,
              51.68844270068436
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Middelburg'
          },
          'geometry': {
            'coordinates': [
              3.6090529248018868,
              51.51118830527801
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },  {
    featureCollection: {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'properties': {
            'type': 'hoofdstad',
            'answer': 'Maastricht'
          },
          'geometry': {
            'coordinates': [
              5.691085019668378,
              50.862424401483565
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
]

export const nl_provinces_and_capitals: QuizerQuestionnaireDTO = {id : 3, title : 'test', questions : questions}
