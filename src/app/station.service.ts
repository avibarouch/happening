import {Station, STATIONS} from "./stations"
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class StationService {

  constructor() { }

  getStations(): Observable<Station[]> {
    const heroes = of(STATIONS);
    return heroes;
  }
  getStation(id: number): Observable<Station> {
    // For now, i assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step.
    const Station = STATIONS.find(h => h.id === id)!;
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(Station);
  }

}
