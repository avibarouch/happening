import {Station, STATIONS} from "./stations"
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor() { }

  getStations(): Observable<Station[]> {
    const heroes = of(STATIONS);
    return heroes;
  }
}
