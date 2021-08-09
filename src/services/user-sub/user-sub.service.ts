import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSubService {

  constructor(private http: HttpClient) { }

  get(page): Observable<any> {
    return this.http.get(`${environment.url}UserSubscriptions.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  }

  add(obj) {
    return this.http.post(`${environment.url}UserSubscriptions/add.json`, obj).toPromise();
  }

  update(obj, id) {
    return this.http.post(`${environment.url}UserSubscriptions/edit/${id}.json`, obj).toPromise();
  }

  delete(id) {
    return this.http.post(`${environment.url}UserSubscriptions/delete/${id}.json`, id).toPromise();
  } 
}
