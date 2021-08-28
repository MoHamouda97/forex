import { Routes } from "@angular/router";
import { AllUsersResolver } from "../users/all-users/services/users.resolver";
import { AllNotificationsComponent } from "./all-notifications/all-notifications.component";
import { AllNotificationsResolver } from "./all-notifications/services/notifications.resolver";
import { NotificationsFormComponent } from "./notifications-form/notifications-form.component";

export const NotificationRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllNotificationsComponent,
                data: {
                    title: 'الاشعارات',
                },                
                resolve: {
                    notifications: AllNotificationsResolver,
                    users: AllUsersResolver,
                }                
            },
            {
                path: 'add',
                component: NotificationsFormComponent,
                data: {
                    title: 'اضافة اشعار',
                }, 
                resolve: {
                    users: AllUsersResolver,
                } 
                                              
            },
            {
                path: 'edit/:id',
                component: NotificationsFormComponent,
                data: {
                    title: 'تعديل اشعار',
                },
                resolve: {
                    users: AllUsersResolver,
                }                  
                                              
            }            
        ]
    }
]