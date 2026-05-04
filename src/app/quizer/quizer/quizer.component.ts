import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {allQuestions, QuizerFeedback, QuizerGameState, QuizerStats} from './quizer.reducer';
import {selectAllQuestions, selectCurrentlyInGame, selectCurrentQuestion, selectFeedback, selectGameStats, selectProgress, selectScore} from './quizer.selectors';
import {RootState} from '../../app.module';
import {quizerGoToMenu, quizerStartNewSession, quizerSubmitQuestionAnswer} from './quizer.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import {Feature} from "geojson";
import {questionnaires} from "../questionnaires/questionnaires";

interface QuizGroup { label: string; prefix: string; }

const GROUPS: QuizGroup[] = [
    { label: 'Nederland', prefix: 'Nederland' },
    { label: 'Europa', prefix: 'Europa' },
    { label: 'Wereld', prefix: 'Wereld' },
];

@Component({
    selector: 'app-quizer',
    templateUrl: './quizer.component.html',
    styleUrls: ['./quizer.component.scss'],
    standalone: false
})
export class QuizerComponent implements OnInit {

    @ViewChild('answerInput') answerInput?: ElementRef<HTMLInputElement>;

    faCheck = faCheckCircle;
    faWrong = faTimesCircle;

    currentQuestion$: Observable<Feature | null> = this.store.select(selectCurrentQuestion);
    allQuestions$: Observable<allQuestions | null> = this.store.select(selectAllQuestions);
    currentlyInGame$: Observable<QuizerGameState> = this.store.select(selectCurrentlyInGame);
    gameStats$: Observable<QuizerStats> = this.store.select(selectGameStats);
    selectScore$: Observable<string | null> = this.store.select(selectScore);
    progress$: Observable<{ current: number; total: number } | null> = this.store.select(selectProgress);
    feedback$: Observable<QuizerFeedback | null> = this.store.select(selectFeedback);

    formGroup: FormGroup = new FormGroup({
        answer: new FormControl(null, [Validators.required])
    });

    readonly groups = GROUPS;
    readonly questionnaires = questionnaires;
    activeTab = GROUPS[0].label;

    constructor(private readonly store: Store<RootState>) {}

    ngOnInit() {
        this.currentQuestion$.pipe(
            tap(() => {
                this.formGroup.reset();
                setTimeout(() => this.answerInput?.nativeElement?.focus(), 50);
            })
        ).subscribe();
    }

    quizzesForGroup(prefix: string) {
        return this.questionnaires.filter(q => q.title.startsWith(prefix));
    }

    otherQuizzes() {
        return this.questionnaires.filter(q => !GROUPS.some(g => q.title.startsWith(g.prefix)));
    }

    startQuizer(mode: string, qid: number) {
        this.store.dispatch(quizerStartNewSession({ mode, qid }));
    }

    handleSubmit() {
        if (!this.formGroup.valid) {
            this.formGroup.markAllAsTouched();
            return;
        }
        this.store.dispatch(quizerSubmitQuestionAnswer({ answer: this.formGroup.get('answer')!.value }));
    }

    clickedOnAnswer(answer: string) {
        this.store.dispatch(quizerSubmitQuestionAnswer({ answer }));
    }

    goToMenu() {
        this.store.dispatch(quizerGoToMenu());
    }

    progressPercent(progress: { current: number; total: number }): number {
        return Math.round(progress.current / progress.total * 100);
    }
}
