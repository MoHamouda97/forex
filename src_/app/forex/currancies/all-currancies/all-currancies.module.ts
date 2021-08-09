import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllCurranciesComponent } from "./all-currancies.component";
import { AllCurranciesResolver } from "./services/currancies.resolver";


@NgModule({
    declarations: [
        AllCurranciesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllCurranciesResolver
    ]
})

export class AllCurranciesModule {}