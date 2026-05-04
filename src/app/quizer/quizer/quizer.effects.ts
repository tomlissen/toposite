import {Injectable} from '@angular/core';
import {filter, map, Observable, withLatestFrom} from 'rxjs';
import {QuizerGameState} from './quizer.reducer';
import {selectCurrentlyInGame, selectCurrentQuestion} from './quizer.selectors';
import {Store} from '@ngrx/store';
import {RootState} from '../../app.module';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {quizerAnsweredCorrect, quizerAnsweredIncorrect, quizerSessionFinished, quizerSubmitQuestionAnswer} from './quizer.actions';
import {Feature} from "geojson";

@Injectable()
export class QuizerEffects {

    currentQuestion$: Observable<Feature | null> = this.store.select(selectCurrentQuestion);
    currentlyInGame$: Observable<QuizerGameState> = this.store.select(selectCurrentlyInGame);

    constructor(
        private readonly store: Store<RootState>,
        private actions$: Actions
    ) {
    }

    handleQuestionAnswer$ = createEffect(() => this.actions$.pipe(
        ofType(quizerSubmitQuestionAnswer),
        withLatestFrom(this.currentQuestion$, this.currentlyInGame$),
        map(([{answer}, currentQuestion]) => {
            const correctAnswer: string = currentQuestion?.properties?.['answer'] ?? '';
            const answerMatched = correctAnswer === answer;
            return answerMatched
                ? quizerAnsweredCorrect()
                : quizerAnsweredIncorrect({ correctAnswer, givenAnswer: answer });
        })
    ))

    handleFinishedQuestion$ = createEffect(() => this.actions$.pipe(
        ofType(quizerAnsweredCorrect, quizerAnsweredIncorrect),
        withLatestFrom(this.store),
        filter(([_, store]) => store.quizer.currentCustomIndex === store.quizer.questions.length),
        map(() => quizerSessionFinished())
    ))
}
