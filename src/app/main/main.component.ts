import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurTeamBlock } from 'src/app/main/main.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  ourTeamData: OurTeamBlock;
  error: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['mainData']) {
      const { data, error } = this.route.snapshot.data['mainData'];
      this.ourTeamData = data && data[0];
      this.error = error;
    }
  }

}
