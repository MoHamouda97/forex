import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { FilterNewsComponent } from "../filter-news/filter-news.component";
import { AllNewsComponent } from "./all-news.component";
import { AllNewsResolver } from "./services/news.resolver";


@NgModule({
    declarations: [
        AllNewsComponent,
        FilterNewsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllNewsResolver
    ]
})

export class AllNewsModule {}