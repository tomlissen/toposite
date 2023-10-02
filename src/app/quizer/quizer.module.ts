import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizerComponent} from './quizer/quizer.component';
import {QuizerRoutingModule} from './quizer-routing.module';
import {MapComponent} from './map/map.component';
import {QuizerEffects} from './quizer/quizer.effects';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        QuizerComponent,
        MapComponent
    ],
    imports: [
        CommonModule,
        QuizerRoutingModule,
        EffectsModule.forFeature(QuizerEffects),
        ReactiveFormsModule,
        FontAwesomeModule
    ],
})
export class QuizerModule {
}
