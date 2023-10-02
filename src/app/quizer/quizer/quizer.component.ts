import {Component, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, Observable, subscribeOn, tap} from 'rxjs';
import {QuizerGameState, QuizerQuestion, QuizerStats} from './quizer.reducer';
import {selectAllQuestions, selectCurrentlyInGame, selectCurrentQuestion, selectGameStats, selectScore} from './quizer.selectors';
import {RootState} from '../../app.module';
import {quizerStartNewSession, quizerSubmitQuestionAnswer} from './quizer.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faTimesSquare} from '@fortawesome/free-solid-svg-icons/faTimesSquare';
import {faCheckSquare} from '@fortawesome/free-regular-svg-icons/faCheckSquare';

@Component({
    selector: 'app-quizer',
    templateUrl: './quizer.component.html',
    styleUrls: ['./quizer.component.scss']
})

export class QuizerComponent implements OnInit {

    faCheck = faCheckSquare;
    faTimesSquare = faTimesSquare;

    currentQuestion$: Observable<QuizerQuestion | null> = this.store.select(selectCurrentQuestion);
    allQuestions$: Observable<QuizerQuestion[] | null> = this.store.select(selectAllQuestions);
    currentlyInGame$: Observable<QuizerGameState> = this.store.select(selectCurrentlyInGame);
    gameStats$: Observable<QuizerStats> = this.store.select(selectGameStats);
    selectScore$: Observable<string | null> = this.store.select(selectScore);

    formGroup: FormGroup = new FormGroup({
        answer: new FormControl(null, [
            Validators.required
        ])
    })

    constructor(
        private readonly store: Store<RootState>
    ) {

    }

  ngOnInit() {
      this.currentQuestion$.pipe(
        tap(() => this.formGroup.reset())
      ).subscribe();
  }

  startQuizer(mode: string, id: string) {
        this.store.dispatch(quizerStartNewSession({mode: mode, id: id}));
    }

    handleSubmit() {
        if (!this.formGroup.valid) {
            this.formGroup.markAllAsTouched();
            this.formGroup.markAsDirty();

            return;
        }

        this.store.dispatch(quizerSubmitQuestionAnswer({answer: this.formGroup.get('answer').value}));
    }

    clickedOnAnswer(answer: string) {
        this.store.dispatch(quizerSubmitQuestionAnswer({answer}));
    }

    getAllFeatures(){
      return this.allQuestions$.pipe(
        map((questions) => questions.map(value => value.featureCollection.features[0]))
      )
    }
}

