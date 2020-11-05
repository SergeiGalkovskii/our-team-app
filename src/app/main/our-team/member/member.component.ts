import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemberCard } from '../../main.model';

const CORRECT_BREAKPOINTS = {
  'w200': '200w',
  'w400': '400w',
  'w1080': '1080w',
  'w1920': '1920w',
  'w2560': '2560w'
};

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent {
  @Input() member: MemberCard;


  get memberImg() {
    return this.member ? Object.entries(this.member.imageUrl).map(([key, value]) => `${value} ${CORRECT_BREAKPOINTS[key]}`).join(',') : '';
  }

}
