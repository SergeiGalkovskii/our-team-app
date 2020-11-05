import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MemberCard } from 'src/app/main/main.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent {
  @Input() member: MemberCard;

}
