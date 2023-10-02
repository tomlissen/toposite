import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {quizerReducer, QuizerReducerState} from './quizer/quizer/quizer.reducer';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EffectsModule} from '@ngrx/effects';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export interface RootState {
    quizer: QuizerReducerState;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        StoreModule.forRoot<RootState>({
            quizer: quizerReducer
        }),
        NgbModule,
        EffectsModule.forRoot(),
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
