import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllNotificationsComponent } from "./all-notifications.component";
import { AllNotificationsResolver } from "./services/notifications.resolver";


@NgModule({
    declarations: [
        AllNotificationsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllNotificationsResolver
    ]
})

export class AllNotificationsModule {}