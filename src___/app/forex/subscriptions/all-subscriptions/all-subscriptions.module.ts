import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllSubscriptionsComponent } from "./all-subscriptions.component";
import { AllSubscriptionsResolver } from "./services/subscriptions.resolver";


@NgModule({
    declarations: [
        AllSubscriptionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllSubscriptionsResolver
    ]
})

export class AllSubscriptionsModule {}