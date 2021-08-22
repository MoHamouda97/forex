import { Routes } from "@angular/router";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { AllContactComponent } from "./all-contact/all-contact.component";
import { AllContactResolver } from "./all-contact/services/contact.resolver";

export const ContactsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllContactComponent,
                data: {
                    title: 'وسائل التواصل',
                },                
                resolve: {
                    contacts: AllContactResolver,
                }                
            },
            {
                path: 'add',
                component: AddContactComponent,
                data: {
                    title: 'اضافة وسيلة تواصل',
                },                               
            },
            {
                path: 'edit/:id',
                component: AddContactComponent,
                data: {
                    title: 'تعديل وسيلة تواصل',
                },                               
            }
        ]
    }
]