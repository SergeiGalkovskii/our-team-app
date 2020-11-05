import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { OurTeamComponent } from 'src/app/main/our-team/our-team.component';
import { MainResolver } from 'src/app/main/main.resolver';
import { MemberComponent } from 'src/app/main/our-team/member/member.component';
import { ImagesetPipe } from 'src/app/shared/pipes/imageset.pipe';

@NgModule({
  declarations: [MainComponent, OurTeamComponent, MemberComponent, ImagesetPipe],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: [MainResolver]
})
export class MainModule { }
