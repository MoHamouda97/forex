import { UsersService } from './../../../../../services/users/users.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllUsersResolver implements Resolve<any> {
    
    constructor(private services: UsersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get();
    }
}