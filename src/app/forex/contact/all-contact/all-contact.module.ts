import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllContactComponent } from "./all-contact.component";
import { AllContactResolver } from "./services/contact.resolver";


@NgModule({
    declarations: [
        AllContactComponent,        
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllContactResolver
    ]
})

export class AllContactModule {}