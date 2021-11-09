import { Component, OnInit } from '@angular/core';
import { Station, STATIONS } from '../stations';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit{
  stations = STATIONS;
  selectedStation?: Station;

  constructor() { }

  ngOnInit() {
  }

  onSelect(station: Station): void {
    this.selectedStation = station;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/