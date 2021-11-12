import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Station } from "../stations";
import { StationService } from '../station.service';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  station: Station | undefined;

  constructor(
    private route: ActivatedRoute,
    private stationService: StationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getStation();
    console.log(this.station?.title);
  }

  getStation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stationService.getStation(id)
      .subscribe(station => this.station = station);     
  }

  goBack(): void{
    this.location.back();
  }

}
