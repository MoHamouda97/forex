import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddTradesComponent } from "./add-trades.component";

@NgModule({
    declarations: [
        AddTradesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class AddTradesModule {}