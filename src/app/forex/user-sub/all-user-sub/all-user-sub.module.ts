import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllUsersResolver } from "src_/app/forex/users/all-users/services/users.resolver";
import { AllSubscriptionsResolver } from "../../subscriptions/all-subscriptions/services/subscriptions.resolver";
import { FillterUserSubComponent } from "../fillter-user-sub/fillter-user-sub.component";
import { AllUserSubComponent } from "./all-user-sub.component";
import { AllUserSubResolver } from "./services/user-sub.resolver";


@NgModule({
    declarations: [
        AllUserSubComponent,
        FillterUserSubComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllUserSubResolver,
        AllUsersResolver,
        AllSubscriptionsResolver
    ]
})

export class AllUserSubModule {}