import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriptionsRoutes } from './subscriptions.routes';
import { AllSubscriptionsModule } from './all-subscriptions/all-subscriptions.module';
import { AddSubscriptionsModule } from './add-subscriptions/add-subscriptions.module';


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(SubscriptionsRoutes),
        AllSubscriptionsModule,
        AddSubscriptionsModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class SubscriptionsModule {}