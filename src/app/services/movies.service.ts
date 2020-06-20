import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { map } from "rxjs/operators";


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



constructor(private http: HttpClient, private datePipe: DatePipe) {



  }

  sendQuery(query: string){
    return this.http.get(`${this.urlMovieDb}${query}${this.apiKey}&language=es`, {headers: this.headers} );
  }

  getNew(){


    this.data2.setDate(this.data2.getDate() - 7)
    let date1 = this.datePipe.transform(this.data1, 'yyyy-MM-dd');
    let date2 = this.datePipe.transform(this.data2, 'yyyy-MM-dd');


    let query = `/discover/movie?primary_release_date.gte=${date2}&primary_release_date.lte=${date1}&api_key=`

    return this.sendQuery(query).pipe(
      map((data) => data["results"])
      );

  }

  getPopular(){
    let query = "/discover/movie?sort_by=popularity.desc&api_key="

    return this.sendQuery(query).pipe(
      map((data) => data["results"])
      );
  }
  /* "" */
  getComedy(){
    let query = "/discover/movie?sort_by=vote_count.desc&include_adult=true&with_genres=35&api_key="

    return this.sendQuery(query).pipe(
      map((data) => data["results"])
      );
  }

  search(input: string, typeSearch: string){

    let query = `/search/${typeSearch}?query=${input}&include_adult=false&api_key=`;

    return this.sendQuery(query).pipe(
      map((data) => data["results"])
    );
  }

  getMovie(id: any){
    let query = `/movie/${id}?api_key=`

    return this.sendQuery(query)


  }
}
