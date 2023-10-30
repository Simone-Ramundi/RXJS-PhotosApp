import { Component, OnInit } from '@angular/core';
import { PhotosService } from "../photos.service";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  storedUrl = '';
  constructor(private photoService: PhotosService) {
    this.photoService.getPhoto().subscribe((response)=>{
      // console.log(response);
      // console.log(response.urls.regular);
      this.storedUrl = response.urls.regular;
      // console.log(this.storedUrl);
    });
  }

  ngOnInit(): void {
  }

}
