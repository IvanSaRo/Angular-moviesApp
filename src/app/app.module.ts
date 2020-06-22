import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { ROUTES } from "./app.routes";

import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { GaleryComponent } from './components/home/galery.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/search/cards.component';

import { TitleOkPipe } from './pipes/title-ok.pipe';
import { FilmImagePipe } from './pipes/film-image.pipe';
import { DatePipe } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { LoadingComponent } from './shared/loading/loading.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilmImagePipe,
    GaleryComponent,
    SearchComponent,
    CardsComponent,
    TitleOkPipe,
    MovieComponent,
    LoadingComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
