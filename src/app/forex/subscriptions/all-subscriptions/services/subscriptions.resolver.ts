import { SubscriptionsService } from './../../../../../services/subscriptions/subscriptions.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllSubscriptionsResolver implements Resolve<any> {
    
    constructor(private services: SubscriptionsService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get(1);
    }
}