import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { OurTeamComponent } from './our-team/our-team.component';
import { MainResolver } from './main.resolver';
import { MemberComponent } from './our-team/member/member.component';

@NgModule({
  declarations: [MainComponent, OurTeamComponent, MemberComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: [MainResolver]
})
export class MainModule { }
