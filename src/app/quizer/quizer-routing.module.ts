import {RouterModule, Routes} from '@angular/router';
import {QuizerComponent} from './quizer/quizer.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: QuizerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuizerRoutingModule {

}
