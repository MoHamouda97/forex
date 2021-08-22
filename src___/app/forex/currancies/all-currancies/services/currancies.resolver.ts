import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  
import { CurranciesService } from "src/services/currancies/currancies.service";

@Injectable()

export class AllCurranciesResolver implements Resolve<any> {
    
    constructor(private services: CurranciesService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get(1);
    }
}