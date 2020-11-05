import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesetPipe } from 'src/app/shared/pipes/imageset.pipe';
import { MemberComponent } from './member/member.component';

import { OurTeamComponent } from './our-team.component';

describe('OurTeamComponent', () => {
  let component: OurTeamComponent;
  let fixture: ComponentFixture<OurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OurTeamComponent, MemberComponent, ImagesetPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeamComponent);
    component = fixture.componentInstance;
    component.data = {
      type: '',
      id: '',
      attributes: {
        title: '',
        memberCards: {
          first: {
            imageUrl: {
              w1080: ''
            },
            block: {
              title: '',
              description: '',
              link: '',
              text: ''
            }
          }
        }
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
