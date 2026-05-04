import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootState} from './app.module';
import {quizerGoToMenu} from './quizer/quizer/quizer.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
    constructor(private store: Store<RootState>) {}

    goHome() {
        this.store.dispatch(quizerGoToMenu());
    }
}
