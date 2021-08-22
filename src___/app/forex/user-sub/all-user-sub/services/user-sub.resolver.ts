import { UserSubService } from './../../../../../services/user-sub/user-sub.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllUserSubResolver implements Resolve<any> {
    
    constructor(private services: UserSubService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get(1);
    }
}