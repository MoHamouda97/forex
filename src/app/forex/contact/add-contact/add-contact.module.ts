import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddContactComponent } from "./add-contact.component";


@NgModule({
    declarations: [
        AddContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class AddContactModule {}