import { Routes } from "@angular/router";
import { AddSubscriptionsComponent } from "./add-subscriptions/add-subscriptions.component";
import { AllSubscriptionsComponent } from "./all-subscriptions/all-subscriptions.component";
import { AllSubscriptionsResolver } from "./all-subscriptions/services/subscriptions.resolver";

export const SubscriptionsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllSubscriptionsComponent,
                data: {
                    title: 'الاشتراكات',
                },                
                resolve: {
                    subscriptions: AllSubscriptionsResolver,
                }                
            },
            {
                path: 'add',
                component: AddSubscriptionsComponent,
                data: {
                    title: 'اضافة اشتراك',
                },                               
            },
            {
                path: 'edit/:id',
                component: AddSubscriptionsComponent,
                data: {
                    title: 'تعديل اشتراك',
                },                               
            }
        ]
    }
]