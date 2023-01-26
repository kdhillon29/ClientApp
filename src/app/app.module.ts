import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PlayersListComponent } from './players-list/players-list.component';

import { RouterModule } from '@angular/router';
// import { PlayerFormComponent } from './players-list/player-form/player-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './players-list/player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PlayersListComponent, pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
