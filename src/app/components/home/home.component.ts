import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  object: any = {};
  constructor(private moviesService: MoviesService) {
    this.moviesService.getNew().subscribe((data) => {
      console.log(data)} )

    this.moviesService.getPopular().subscribe((data) => {
      console.log(data)} )

    this.moviesService.getComedy().subscribe((data) => {
      console.log(data)} )
    }

    }








