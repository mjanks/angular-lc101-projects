import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Photos';
  image1 = 'https://i.pinimg.com/736x/c1/d6/a0/c1d6a00c8423294b5ed4ab2027236081.jpg';
  image2 = 'http://www.cpinsiders.net/uploads/8/6/4/3/8643313/20160708-150717_1_orig.jpg';
  image3 = 'http://www.cpinsiders.net/uploads/8/6/4/3/8643313/dsc05028_orig.jpg';

  constructor() { }

  ngOnInit() {
  }

}