import { Component, OnInit } from '@angular/core';
import {Station, STATIONS} from "../stations"
import { StationService } from '../station.service';



@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit{
  stations:  Station[] = [];
  selectedStation?: Station;

  constructor(private stationService: StationService ) { }

  ngOnInit() {
    this.getStations();
  }

  onSelect(station: Station): void {
    this.selectedStation = station;
  }
  
  getStations(): void {
    this.stationService.getStations()
        .subscribe(stations => this.stations = stations);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/