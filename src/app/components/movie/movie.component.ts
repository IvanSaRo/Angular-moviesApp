import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent {
  movie: any;
  constructor(private moviesService: MoviesService, public activated: ActivatedRoute) {


    this.activated.params.subscribe(params => {

      this.moviesService.getMovie(params["id"])
            .subscribe(movie => {
                this.movie = movie;
                console.log(this.movie)
            })
      }
    )
  }



}
