import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src_/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(private http: HttpClient) { }

  get(page): Observable<any> {
    return this.http.get(`${environment.url}subscriptions.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  }

  add(obj) {
    return this.http.post(`${environment.url}subscriptions/add.json`, obj).toPromise();
  }

  update(obj, id) {
    return this.http.post(`${environment.url}subscriptions/edit/${id}.json`, obj).toPromise();
  }

  delete(id) {
    return this.http.post(`${environment.url}subscriptions/delete/${id}.json`, id).toPromise();
  }   
    
}
