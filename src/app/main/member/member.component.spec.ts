import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesetPipe } from 'src/app/shared/pipes/imageset.pipe';

import { MemberComponent } from './member.component';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberComponent, ImagesetPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    component.member = {
      imageUrl: {
        w1080: ''
      },
      block: {
        title: '',
        description: '',
        link: '',
        text: ''
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
