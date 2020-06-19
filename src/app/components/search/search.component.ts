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
  searched: any;
  typeSearch: string;




  constructor(private moviesService: MoviesService, public activated: ActivatedRoute) {
    this.typeSearch = "movie";

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
  }

  buscar(word: string){

    if (!word) return;

    this.moviesService.search(word, this.typeSearch)
        .subscribe(data => {this.searched = data; console.log(data)})

  }

}
