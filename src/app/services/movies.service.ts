import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
urlMovieDb: string = "https://api.themoviedb.org/3";
apiKey: string = "fed0c84a124ab65be547c1d9786cf616";
headers = new HttpHeaders({
  'content-Type' : 'application/json'
});

/* `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`, {headers: this.headers} */
constructor(private http: HttpClient) {



  }

  getNew(){


    return this.http.get("https://api.themoviedb.org/3/movie/550?api_key=fed0c84a124ab65be547c1d9786cf616");


  }
}
