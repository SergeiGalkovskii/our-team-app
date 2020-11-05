import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ImagesetPipe } from '../shared/pipes/imageset.pipe';

import { MainComponent } from './main.component';
import { MemberComponent } from './our-team/member/member.component';
import { OurTeamComponent } from './our-team/our-team.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, OurTeamComponent, MemberComponent, ImagesetPipe],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                'mainData': {
                  data: [
                    {
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
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
