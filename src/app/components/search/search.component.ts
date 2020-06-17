import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  searched: any;
  typeSearch: string;


  constructor(private moviesService: MoviesService) {
    this.typeSearch = "movie";
  }

  ngOnInit(): void {
  }

  typeOfSearch(type: string){
    this.typeSearch = type;
  }

  buscar(word: string){

    if (!word) return;

    this.moviesService.search(word, this.typeSearch)
        .subscribe(data => this.searched = data)

  }

}
