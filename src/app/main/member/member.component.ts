import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent {
  @Input() member: Member;

}
