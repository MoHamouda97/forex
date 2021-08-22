import { SliderService } from './../../../../../services/slider/slider.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllSlidesResolver implements Resolve<any> {
    
    constructor(private services: SliderService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get();
    }
}