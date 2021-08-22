import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllUsersResolver } from "src_/app/forex/users/all-users/services/users.resolver";
import { AllSubscriptionsResolver } from "../../subscriptions/all-subscriptions/services/subscriptions.resolver";
import { UserSubFormComponent } from "./user-sub-form.component";


@NgModule({
    declarations: [
        UserSubFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllUsersResolver,
        AllSubscriptionsResolver
    ]
})

export class UserSubFormsModule {}