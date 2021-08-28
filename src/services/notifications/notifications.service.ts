import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  get(page = 1): Observable<any> {
    return this.http.get(`${environment.url}notifications.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  } 

  add(user_id: any, text: string, photo: File) {
    const formData: FormData = new FormData();
    formData.append("user_id", user_id);
    formData.append("text", text);
    if (photo )formData.append("photo", photo, photo.name);

    return this.http.post(`${environment.url}notifications/add.json`, formData).toPromise();
  }

  update(user_id: any, text: string, photo: File, id: any) {
    const formData: FormData = new FormData();
    formData.append("user_id", user_id);
    formData.append("text", text);
    if (photo ) formData.append("photo", photo, photo.name);

    return this.http.post(`${environment.url}notifications/edit/${id}.json`, formData).toPromise();
  }
  
  delete(id) {
    return this.http.post(`${environment.url}notifications/delete/${id}.json`, id).toPromise();
  }
}
