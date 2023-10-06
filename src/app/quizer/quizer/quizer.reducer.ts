import {createReducer, on} from '@ngrx/store';
import {Feature, FeatureCollection} from 'geojson';
import {quizerAnsweredCorrect, quizerAnsweredIncorrect, quizerSessionFinished, quizerStartNewSession} from './quizer.actions';
import {questionnaires} from "../questionnaires/questionnaires";

export enum QuizerQuestionType {
    clickFeatureOnMap,
    answerHighlightedFeature
}

export class QuizerQuestionnaireDTO {
  readonly id: number;
  readonly title: string;
  readonly questions: FeatureCollection;
  readonly mapBounds: number[][];
}

export interface allQuestions {
    features: Feature[];
    mapBounds: number[][];
}

export interface QuizerStats {
    correct: number;
    incorrect: number;
}

export enum QuizerGameState {
    new = 'new',
    ongoingClickOnMap = 'ongoingClickOnMap',
    ongoingTypeAnswer = 'ongoingTypeAnswer',
    finished = 'finished',
}

export interface QuizerReducerState {
    gameState: QuizerGameState;
    questions: Feature[];
    mapBounds:  number[][];
    currentCustomIndex: number;
    stats: QuizerStats;
}

const initialState: QuizerReducerState = {
    gameState: QuizerGameState.new,
    questions: null,
    mapBounds: null,
    currentCustomIndex: 0,
    stats: {
        correct: 0,
        incorrect: 0
    }
};

export const quizerReducer = createReducer(
    initialState,
    on(quizerStartNewSession, (_state, {mode, qid  }) => ({
        ..._state,
        questions: questionnaires.find(({ id }) => id === qid).questions.features.sort((a,b)=>Math.random()<.5?-1:1),
        mapBounds: questionnaires.find(({ id }) => id === qid).mapBounds,
        gameState: mode === 'clickMode' ? QuizerGameState.ongoingClickOnMap : QuizerGameState.ongoingTypeAnswer,
        currentCustomIndex: 0,
        stats: {
            correct: 0,
            incorrect: 0
        }
    })),
    on(quizerAnsweredCorrect, (_state) => ({
        ..._state,
        currentCustomIndex: _state.currentCustomIndex + 1,
        stats: {
            ..._state.stats,
            correct: _state.stats.correct + 1,
        }
    })),
    on(quizerAnsweredIncorrect, (_state) => ({
        ..._state,
        currentCustomIndex: _state.currentCustomIndex + 1,
        stats: {
          ..._state.stats,
          incorrect: _state.stats.incorrect + 1,
        }
    })),
    on(quizerSessionFinished, (state) => ({
        ...state,
        gameState: QuizerGameState.finished
    }))
);
