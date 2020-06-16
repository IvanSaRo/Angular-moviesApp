import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { FilmImagePipe } from 'src/app/pipes/film-image.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  onCinema: any;
  popular: any;
  comedy: any;


  constructor(private moviesService: MoviesService) {
    this.moviesService.getNew()
        .subscribe((data) => this.onCinema = data)

    this.moviesService.getPopular()
        .subscribe((data) => this.popular = data)

    this.moviesService.getComedy().subscribe((data) => {this.comedy = data; console.log(data)})
    }

    }








