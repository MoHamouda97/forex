import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AddSlideComponent } from "./add-slide.component";

@NgModule({
    declarations: [
        AddSlideComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        
    ]
})

export class AddSlideModule {}