import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OurTeamBlock } from 'src/app/main/main.model';
import { RequestResponse } from 'src/app/shared/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  dataRes$: Observable<RequestResponse<OurTeamBlock>>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataRes$ = this.route.data.pipe(
      map(data => data.mainData)
    );
  }

}
