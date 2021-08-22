import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  get(page = 1): Observable<any> {
    return this.http.get(`${environment.url}news.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  } 

  add(title: string, description: string, photo: File) {
    const formData: FormData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (photo )formData.append("photo", photo, photo.name);

    return this.http.post(`${environment.url}news/add.json`, formData).toPromise();
  }

  update(title: string, description: string, photo: File, id: any) {
    const formData: FormData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (photo ) formData.append("photo", photo, photo.name);

    return this.http.post(`${environment.url}news/edit/${id}.json`, formData).toPromise();
  }
  
  delete(id) {
    return this.http.post(`${environment.url}news/delete/${id}.json`, id).toPromise();
  }

  filter(filter) {
    return this.http.post(`${environment.url}news/index.json`, filter).toPromise()
  }    
    
}
