import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { NotificationsFormComponent } from "./notifications-form.component";


@NgModule({
    declarations: [
        NotificationsFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class NotificationsFormModule {}