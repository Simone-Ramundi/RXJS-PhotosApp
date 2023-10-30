import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
    headers: {
      Authorization: 'Client-ID YpAwhep7EM__aJ36aJ-glLDqWj4oeVClru8v_cVeFlo'
    }
    });
  }
}
