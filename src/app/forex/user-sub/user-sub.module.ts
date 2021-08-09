import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserSubRoutes } from './user-sub.routes';
import { AllUserSubModule } from './all-user-sub/all-user-sub.module';
import { UserSubFormsModule } from './user-sub-form/user-sub-form.module';


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(UserSubRoutes),
        AllUserSubModule,
        UserSubFormsModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class UserSubModule {}