import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  
import { TradesService } from 'src/services/trades/trades.service';

@Injectable()

export class AllTradesResolver implements Resolve<any> {
    
    constructor(private services: TradesService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get();
    }
}