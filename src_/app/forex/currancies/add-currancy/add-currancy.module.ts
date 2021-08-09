import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddCurrancyComponent } from "./add-currancy.component";


@NgModule({
    declarations: [
        AddCurrancyComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
    ]
})

export class AddCurrancyModule {}