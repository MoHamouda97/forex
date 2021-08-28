import { NotificationsService } from 'src/services/notifications/notifications.service';
import { NewsService } from '../../../../../services/news/news.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";  

@Injectable()

export class AllNotificationsResolver implements Resolve<any> {
    
    constructor(private services: NotificationsService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>{
        return this.services.get();
    }
}