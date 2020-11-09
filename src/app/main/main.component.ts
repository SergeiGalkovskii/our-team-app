import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MemberCard } from 'src/app/main/main.model';
import { OurTeamSection, RequestResponse } from 'src/app/shared/types';
import { Member } from 'src/app/shared/models/member';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  dataRes$: Observable<RequestResponse<OurTeamSection>>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataRes$ = this.route.data.pipe(
      map(res => {
        const { data, error } = res.mainData;

        if (data[0] && data[0].attributes) {
          return {
            error,
            data: {
              title: data[0].attributes.title,
              members: Object.values(data[0].attributes.memberCards).map(memberCard => new Member(memberCard as MemberCard))
            }
          };
        }

        return {
          error,
          data
        };
      })
    );
  }

}
