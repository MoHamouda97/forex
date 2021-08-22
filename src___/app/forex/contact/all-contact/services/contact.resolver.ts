import { ContactService } from './../../../../../services/contact/contact.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllContactResolver implements Resolve<any> {
    
    constructor(private services: ContactService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get();
    }
}