import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doashboards',
  templateUrl: './doashboards.component.html',
  styleUrls: ['./doashboards.component.scss']
})
export class DoashboardsComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
