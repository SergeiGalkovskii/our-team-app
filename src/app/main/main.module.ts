import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/main/main.component';
import { MainRoutingModule } from 'src/app/main/main-routing.module';
import { MainResolver } from 'src/app/main/main.resolver';
import { MemberComponent } from 'src/app/main/member/member.component';
import { ImagesetPipe } from 'src/app/shared/pipes/imageset.pipe';
import { SectionComponent } from 'src/app/shared/components/section/section.component';

@NgModule({
  declarations: [MainComponent, MemberComponent, ImagesetPipe, SectionComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: [MainResolver]
})
export class MainModule { }
