import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { UserFormComponent } from "./user-form.component";


@NgModule({
    declarations: [
        UserFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class UserFormModule {}