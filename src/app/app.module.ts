import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StationListComponent } from './station-list/station-list.component';

import { AppRoutingModule } from './app-routing.module';
import { InformationComponent } from './information/information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StationComponent } from './station/station.component';
import { HotMapComponent } from './hot-map/hot-map.component';


const appRoutes: Routes = [
  { path: 'stations-list', component: StationListComponent },
  { path: 'detail/:id', component: StationComponent },
  {
    path: 'information',
    component: InformationComponent,
    data: {title: "מידע"}
  },
  { path: '',
    redirectTo: 'stations-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only

    ),
    AppRoutingModule
  ],
  exports: [
    TopBarComponent,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StationListComponent,
    StationComponent,
    HotMapComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/