import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  horizontalPosition:number = 0;
  verticalPosition: number = 0;
  inFlight: boolean = false;

  handleTakeOff(rocketImage) {
   let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
   if (result) {
      this.color = 'blue';
      // this.height += 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.moveRocket(rocketImage, 'up');
      this.inFlight = true;
   }
  }

  handleLand(rocketImage) {
   let result = window.confirm('Are you sure you want to land the shuttle?');
   if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle is landing. Landing gear engaged.';
      rocketImage.style.left = 0;
      rocketImage.style.bottom = 0;
      this.horizontalPosition = 0;
      this.verticalPosition = 0;
      this.inFlight = false;
   }
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketImage.style.left = 0;
      rocketImage.style.bottom = 0;
      this.horizontalPosition = 0;
      this.verticalPosition = 0;
      this.inFlight = false;
    }
  }

  moveRocket(rocketImage, direction) {
    switch (direction) {
      case 'right':
        this.horizontalPosition += 10;
        rocketImage.style.left = this.horizontalPosition + 'px';
        this.width += 10000;
        // console.log(this.horizontalPosition);
        if (this.horizontalPosition === 210 || this.verticalPosition === 330 || this.verticalPosition === 0) {
          this.color = 'orange';
        } else {
          this.color = 'green';
        }
        break;
      case 'left':
        this.horizontalPosition -= 10;
        rocketImage.style.left = this.horizontalPosition + 'px';
        this.width -= 10000;
        // console.log(this.horizontalPosition);
        if (this.horizontalPosition === -190 || this.verticalPosition === 330 || this.verticalPosition === 0) {
          this.color = 'orange';
        } else {
          this.color = 'green';
        }
        break;
      case 'up':
        this.verticalPosition += 10;
        rocketImage.style.bottom = this.verticalPosition + 'px';
        this.height += 10000;
        // console.log(this.verticalPosition);
        if (this.verticalPosition === 330 || this.horizontalPosition === -190 || this.horizontalPosition === 210) {
          this.color = 'orange';
        } else {
          this.color = 'green';
        }
        break;
      case 'down':
        this.verticalPosition -= 10;
        rocketImage.style.bottom = this.verticalPosition + 'px';
        this.height -= 10000;
        // console.log(this.verticalPosition);
        if (this.verticalPosition === 0 || this.horizontalPosition === -190 || this.horizontalPosition === 210) {
          this.color = 'orange';
        } else {
          this.color = 'green';
        }
        break;
    }
  }

}



