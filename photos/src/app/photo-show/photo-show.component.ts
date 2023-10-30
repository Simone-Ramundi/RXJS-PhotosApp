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
    this.fetchPhoto()
  }
   onGenerate (){
     this.fetchPhoto()
   }

   /* HELPER METHOD */
   fetchPhoto(){
   this.photoService.getPhoto().subscribe((response)=>{
   this.storedUrl = response.urls.regular;
     });
   }

  ngOnInit(): void {
  }

}
