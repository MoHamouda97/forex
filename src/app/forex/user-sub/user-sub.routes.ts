import { Routes } from "@angular/router";
import { AllUsersResolver } from "src_/app/forex/users/all-users/services/users.resolver";
import { AllSubscriptionsResolver } from "../subscriptions/all-subscriptions/services/subscriptions.resolver";
import { AllUserSubComponent } from "./all-user-sub/all-user-sub.component";
import { AllUserSubResolver } from "./all-user-sub/services/user-sub.resolver";
import { UserSubFormComponent } from "./user-sub-form/user-sub-form.component";

export const UserSubRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllUserSubComponent,
                data: {
                    title: 'اشتراكات الاعضاء',
                },                
                resolve: {
                    usersub: AllUserSubResolver,
                    users: AllUsersResolver,
                    subscriptions: AllSubscriptionsResolver,
                }                
            },
            {
                path: 'add',
                component: UserSubFormComponent,
                data: {
                    title: 'اضافة اشتراك',
                }, 
                resolve: {
                    users: AllUsersResolver,
                    subscriptions: AllSubscriptionsResolver,
                }                              
            },
            {
                path: 'edit/:id',
                component: UserSubFormComponent,
                data: {
                    title: 'تعديل اشتراك',
                },  
                resolve: {
                    users: AllUsersResolver,
                    subscriptions: AllSubscriptionsResolver,
                }                               
            }
        ]
    }
]