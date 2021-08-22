import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { FilterTradesComponent } from "../filter-trades/filter-trades.component";
import { AllTradesComponent } from "./all-trades.component";
import { AllTradesResolver } from "./services/trades.resolver";

@NgModule({
    declarations: [
        AllTradesComponent,
        FilterTradesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllTradesResolver
    ]
})

export class AllTradesModule {}