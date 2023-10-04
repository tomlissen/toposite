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
]

export const nl_provinces: QuizerQuestionnaireDTO = {id : 1, title : 'test', questions : questions}
