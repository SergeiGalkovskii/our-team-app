import { Component, Input } from '@angular/core';
import { Blocks } from 'src/app/shared/types';
import { OurTeamBlock } from 'src/app/main/main.model';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
  @Input() data: Blocks<OurTeamBlock>;
}
