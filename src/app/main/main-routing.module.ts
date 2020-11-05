import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MainResolver } from './main.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { mainData: MainResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
