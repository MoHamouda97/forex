import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddSubscriptionsComponent } from "./add-subscriptions.component";


@NgModule({
    declarations: [
        AddSubscriptionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
    ]
})

export class AddSubscriptionsModule {}