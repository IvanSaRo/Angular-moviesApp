import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { ROUTES } from "./app.routes";

import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { DatePipe } from '@angular/common';
import { FilmImagePipe } from './pipes/film-image.pipe';
import { GaleryComponent } from './components/home/galery.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilmImagePipe,
    GaleryComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
