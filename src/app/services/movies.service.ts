import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
urlMovieDb: string = "https://api.themoviedb.org/3";
apiKey: string = "fed0c84a124ab65be547c1d9786cf616";
headers = new HttpHeaders({
  'content-Type' : 'application/json'
});

data1 = new Date();
data2 = new Date();

/* `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`, {headers: this.headers} */
constructor(private http: HttpClient, private datePipe: DatePipe) {


   let date1 = this.datePipe.transform(this.data1, 'yyyy-MM-dd');

  }

  queryToService(query: string){
    return this.http.get(`${this.urlMovieDb}${query}${this.apiKey}&language=es`, {headers: this.headers} );
  }

  getNew(){
    let query = "/discover/movie?primary_release_date.gte=2020-05-15&primary_release_date.lte=2020-06-15&api_key="

    return this.queryToService(query)


  }

  getPopular(){
    let query = "/discover/movie?sort_by=popularity.desc&api_key="

    return this.queryToService(query)
  }
  /* "" */
  getComedy(){
    let query = "/discover/movie?sort_by=vote_count.desc&include_adult=true&with_genres=35&api_key="

    return this.queryToService(query)
  }
}
