import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotificationRoutes } from './notifications.routes';
import { AllNotificationsModule } from './all-notifications/all-notifications.module';
import { NotificationsFormModule } from './notifications-form/notifications-form.module';
import { AllUsersResolver } from '../users/all-users/services/users.resolver';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(NotificationRoutes),
        AllNotificationsModule,
        NotificationsFormModule
    ],
    exports: [],
    providers: [
        AllUsersResolver
    ]
})

export class NotificationsModule {}