import {QuizerQuestion, QuizerQuestionnaireDTO} from "../quizer/quizer.reducer";

const questions: QuizerQuestion[] = [
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
            'type': 'provincie',
            'answer': 'Groningen'
          },
          'geometry': {
            'coordinates': [
              6.753804134769723,
              53.32266606728277
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
            'answer': 'Drenthe'
          },
          'geometry': {
            'coordinates': [
              6.663563027307049,
              52.89229498000165
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
            'answer': 'Overijssel'
          },
          'geometry': {
            'coordinates': [
              6.402866494632946,
              52.433161866583305
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
            'answer': 'Gelderland'
          },
          'geometry': {
            'coordinates': [
              6.0970506376551725,
              52.11720665039729
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
            'answer': 'Utrecht'
          },
          'geometry': {
            'coordinates': [
              5.31496103963579,
              52.04634568519924
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
            'answer': 'Noord-Holland'
          },
          'geometry': {
            'coordinates': [
              4.753460815416901,
              52.322986984355
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
            'answer': 'Zuid-Holland'
          },
          'geometry': {
            'coordinates': [
              4.537884836474831,
              51.99081078189519
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
            'answer': 'Zeeland'
          },
          'geometry': {
            'coordinates': [
              3.9964381916927607,
              51.63748697116918
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
            'answer': 'Noord-Brabant'
          },
          'geometry': {
            'coordinates': [
              5.345041408790962,
              51.540928246729464
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
            'answer': 'Limburg'
          },
          'geometry': {
            'coordinates': [
              5.90654163300988,
              50.88773225637314
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
            'answer': 'Flevoland'
          },
          'geometry': {
            'coordinates': [
              5.520510228859365,
              52.42399122128549
            ],
            'type': 'Point'
          }
        }
      ]
    }
  },
]

export const nl_provinces: QuizerQuestionnaireDTO = {id : 1, title : 'test', questions : questions}
