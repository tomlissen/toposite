import {RootState} from '../../app.module';
import {allQuestions, QuizerFeedback, QuizerGameState, QuizerStats} from './quizer.reducer';
import {createSelector} from '@ngrx/store';
import {Feature} from "geojson";

const gameState = (rootState: RootState): QuizerGameState => rootState.quizer.gameState;
const gameStats = (rootState: RootState): QuizerStats => rootState.quizer.stats;
const questions = (rootState: RootState): Feature[] => rootState.quizer.questions;
const mapBounds = (rootState: RootState): number[][] => rootState.quizer.mapBounds;
const currentIndex = (rootState: RootState): number => rootState.quizer.currentCustomIndex;
const feedback = (rootState: RootState): QuizerFeedback | null => rootState.quizer.feedback;

export const selectScore = createSelector(
    gameState,
    questions,
    gameStats,
    (gameState, questions, gameStats) => {
        if (gameState === QuizerGameState.new) {
            return null;
        }
        return (gameStats.correct / questions.length * 10).toFixed(1);
    }
)

export const selectCurrentlyInGame = createSelector(
    gameState,
    (currentlyInGame) => currentlyInGame
);

export const selectGameStats = createSelector(
    gameStats,
    (gameStats) => gameStats
);

export const selectAllQuestions = createSelector(
    gameState,
    questions,
    mapBounds,
    (currentlyInGame, questions, mapBounds) => {
      let x: allQuestions = {features : currentlyInGame ? questions : null, mapBounds: mapBounds}
      return x
    }
);

export const selectCurrentQuestion = createSelector(
    gameState,
    questions,
    currentIndex,
    (gameState, questions, currentIndex) => {
        if (gameState === QuizerGameState.new) {
            return null;
        }
        return questions[currentIndex] ?? null;
    }
)

export const selectProgress = createSelector(
    questions,
    currentIndex,
    gameState,
    (questions, currentIndex, gameState) => {
        if (!questions || gameState === QuizerGameState.new) return null;
        return { current: currentIndex, total: questions.length };
    }
)

export const selectFeedback = createSelector(feedback, f => f);
