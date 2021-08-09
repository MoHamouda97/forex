import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllUsersModule } from './all-users/all-users.module';
import { UsersRoutes } from './users.routes';
import { UserFormModule } from './user-form/user-form.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(UsersRoutes),
        AllUsersModule,
        UserFormModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class UsersModule {}