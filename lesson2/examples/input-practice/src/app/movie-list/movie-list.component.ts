import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
     if (newTitle === '') {
      window.alert('Must enter a movie title!');
      return;
     }

     if (!this.movies.includes(newTitle)) {
       this.movies.push(newTitle);
     } else {
       window.alert('Movie title is already in list!');
     }
   }
}