import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${environment.url}sliders.json`)
      .pipe(
        shareReplay()
      )
  }

  add(photo: File) {
    const formData: FormData = new FormData();
    formData.append("photo", photo, photo.name);
    return this.http.post(`${environment.url}sliders/add.json`, formData).toPromise();
  }

  delete(id) {
    return this.http.post(`${environment.url}sliders/delete/${id}.json`, id).toPromise();
  } 
    
}
