import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericService } from '../generic/generic.service';
import * as lang from './../../settings/lang';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  lang: any = lang.ar;

  constructor(private http: HttpClient, private generic: GenericService) { }

  get(): Observable<any> {
    return this.http.get(`${environment.url}users.json`)
      .pipe(
        shareReplay()
      )
  }

  add(obj) {
    return this.http.post(`${environment.url}api/users/add.json`, obj).toPromise();
  }

  update(obj, id) {
    return this.http.post(`${environment.url}api/users/edit/${id}.json`, obj).toPromise();
  }

  delete(id) {
    return this.http.post(`${environment.url}api/users/delete/${id}.json`, id).toPromise();
  }  
  
  login(obj) {
    return this.http.post(`${environment.url}/api/users/token.json`, obj)
      .pipe(
        tap(
          res => this.generic.showNotification('success', this.lang.loginTitleTxt ,this.lang.loginSuccessTxt),
          err => this.generic.showNotification('error', this.lang.loginTitleTxt , `${this.lang.loginFailTxt} \n ${err.message}`)
        )
      )
  }  
}
