import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurTeamBlock } from './main.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  ourTeamData: OurTeamBlock;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['mainData']) {
      this.ourTeamData = this.route.snapshot.data['mainData'].data[0];
    }
  }

}
