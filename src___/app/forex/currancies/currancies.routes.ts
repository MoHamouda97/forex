import { Routes } from "@angular/router";
import { AddCurrancyComponent } from "./add-currancy/add-currancy.component";
import { AllCurranciesComponent } from "./all-currancies/all-currancies.component";
import { AllCurranciesResolver } from "./all-currancies/services/currancies.resolver";

export const CurranciesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllCurranciesComponent,
                data: {
                    title: 'العملات',
                },                
                resolve: {
                    currancies: AllCurranciesResolver,
                }                
            },
            {
                path: 'add',
                component: AddCurrancyComponent,
                data: {
                    title: 'اضافة عملة',
                },                               
            },
            {
                path: 'edit/:id',
                component: AddCurrancyComponent,
                data: {
                    title: 'تعديل العملة',
                },                               
            }            
        ]
    }
]