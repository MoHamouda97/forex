import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllSlidesComponent } from "./all-slides.component";
import { AllSlidesResolver } from "./services/slides.resolver";


@NgModule({
    declarations: [
        AllSlidesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllSlidesResolver
    ]
})

export class AllSlidesModule {}