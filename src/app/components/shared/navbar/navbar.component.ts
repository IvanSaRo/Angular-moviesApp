import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  searchPerson(text: any){
    if (text.length === 0) return
console.log("pasa");
     this.router.navigate(["/search", text])
  }

  ngOnInit(): void {

  }

}
