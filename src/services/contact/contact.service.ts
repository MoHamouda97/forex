import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${environment.url}contacts.json`)
      .pipe(
        shareReplay()
      )
  } 

  add(name: string, value: string, logo: File) {
    const formData: FormData = new FormData();
    formData.append("name", name);
    formData.append("value", value);
    if (logo )formData.append("logo", logo, logo.name);

    return this.http.post(`${environment.url}contacts/add.json`, formData).toPromise();
  }

  update(name: string, value: string, logo: File, id: any) {
    const formData: FormData = new FormData();
    formData.append("name", name);
    formData.append("value", value);
    if (logo )formData.append("logo", logo, logo.name);

    return this.http.post(`${environment.url}contacts/edit/${id}.json`, formData).toPromise();
  }
  
  delete(id) {
    return this.http.post(`${environment.url}contacts/delete/${id}.json`, id).toPromise();
  }
}
