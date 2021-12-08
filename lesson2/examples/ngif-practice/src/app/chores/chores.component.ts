import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   finishedChores = ['Wash car', 'Cook dinner', 'Wash car', 'Cook dinner', 'Wash car', 'Cook dinner'];

   targetImage = 'https://www.24hrpo.com/wp-content/uploads/2016/11/target-24HRPO.jpg';

   constructor() { }

   ngOnInit() {
   }

}
