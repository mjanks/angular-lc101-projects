import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = [
    'https://www.google.com/', 
    'https://netid.emich.edu/cas/login?service=https%3A%2F%2Fcanvas.emich.edu%2Flogin%2Fcas', 
    'https://www.mongodb.com/'
  ]

  constructor() { }

  ngOnInit() {
  }

}
