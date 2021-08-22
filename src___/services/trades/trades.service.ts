import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TradesService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`${environment.url}trades.json`)
      .pipe(
        shareReplay()
      )
  } 

  add(currencyId: string, enter: string, exit: string,notes:string,vip:string) {
    const formData: FormData = new FormData();
    formData.append("currency_id", currencyId);
    formData.append("enter", enter);
    formData.append("exitt", exit);
    formData.append("notes", notes);
    formData.append("vips", vip);

    return this.http.post(`${environment.url}trades/add.json`, formData).toPromise();
  }

  update(currencyId: string, enter: string, exit: string,notes:string,vip:string, id: any) {
    const formData: FormData = new FormData();
    formData.append("currency_id", currencyId);
    formData.append("enter", enter);
    formData.append("exitt", exit);
    formData.append("notes", notes);
    formData.append("vips", vip);

    return this.http.post(`${environment.url}trades/edit/${id}.json`, formData).toPromise();
  }
  
  delete(id) {
    return this.http.post(`${environment.url}trades/delete/${id}.json`, id).toPromise();
  }

   
  getCurrencies() {
    return this.http.get<any>(`${environment.url}currencies.json`);
  }
}
