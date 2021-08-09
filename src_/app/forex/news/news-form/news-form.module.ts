import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { NewsFormComponent } from "./news-form.component";


@NgModule({
    declarations: [
        NewsFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class NewsFormModule {}