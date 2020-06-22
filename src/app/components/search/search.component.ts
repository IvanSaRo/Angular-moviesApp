import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
 public searched: any;
  typeSearch: string;

  drop: string;

  loading: boolean;


  constructor(private moviesService: MoviesService, public activated: ActivatedRoute) {
    this.typeSearch = "movie";
    this.drop = "Películas";



    this.activated.params.subscribe(params => {
      if(params['text']){
        this.searched = params['text'];
        this.buscar(params['text'])
      }
    })
  }

  ngOnInit(): void {
  }

  typeOfSearch(type: string){
    this.typeSearch = type;
    if (type == "movie") {
      this.drop = "Peliculas";
    }else{
      this.drop = "Series TV";
    }
  }

  buscar(word: string){

    if (word.length == 0) {return} else {this.loading = true}

    this.moviesService.search(word, this.typeSearch)
        .subscribe(data => this.searched = data)

      this.loading = false;

  }

}
