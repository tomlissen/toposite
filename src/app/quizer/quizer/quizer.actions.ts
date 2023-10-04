import {createAction, props} from '@ngrx/store';

export const quizerStartNewSession = createAction(
    '[Quizer] Start new session',
    props<{ mode: string, qid: number }>()
);

export const quizerSubmitQuestionAnswer = createAction(
    '[Quizer] Submit question answer',
    props<{ answer: string }>()
);

export const quizerAnsweredCorrect = createAction(
    '[Quizer] Answer correctly'
);

export const quizerAnsweredIncorrect = createAction(
    '[Quizer] Answer incorrectly'
);

export const quizerSessionFinished = createAction(
    '[Quizer] Session finished'
);
