import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurranciesService {

  constructor(private http: HttpClient) { }

  get(page): Observable<any> {
    return this.http.get(`${environment.url}currencies.json?page=${page}`)
      .pipe(
        shareReplay()
      )
  }

  add(obj) {
    return this.http.post(`${environment.url}currencies/add.json`, obj).toPromise();
  }

  update(obj, id) {
    return this.http.post(`${environment.url}currencies/edit/${id}.json`, obj).toPromise();
  }

  delete(id) {
    return this.http.post(`${environment.url}currencies/delete/${id}.json`, id).toPromise();
  }  
}
