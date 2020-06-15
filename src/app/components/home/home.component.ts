import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  object: any = {};
  constructor(private moviesService: MoviesService) {
    this.moviesService.getNew().subscribe((data) => {

      console.log(data);
      console.log("que pollas")
    },((err) => { console.log("error")}) )
  }

  ngOnInit(): void {

  }



}
