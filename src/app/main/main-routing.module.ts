import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { MainResolver } from 'src/app/main/main.resolver';

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
