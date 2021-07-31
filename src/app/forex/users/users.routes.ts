import { Routes } from "@angular/router";
import { AllUsersComponent } from "./all-users/all-users.component";
import { AllUsersResolver } from "./all-users/services/users.resolver";
import { UserFormComponent } from "./user-form/user-form.component";

export const UsersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllUsersComponent,
                data: {
                    title: 'الاعضاء',
                },                
                resolve: {
                    users: AllUsersResolver,
                }                
            },
            {
                path: 'add',
                component: UserFormComponent,
                data: {
                    title: 'اضافة عضو جديد',
                },                               
            },
            {
                path: 'edit/:id',
                component: UserFormComponent,
                data: {
                    title: 'تعديل بيانات العضو',
                },                               
            }
        ]
    }
]