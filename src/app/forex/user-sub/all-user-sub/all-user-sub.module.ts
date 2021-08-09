import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllUserSubComponent } from "./all-user-sub.component";
import { AllUserSubResolver } from "./services/user-sub.resolver";


@NgModule({
    declarations: [
        AllUserSubComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllUserSubResolver
    ]
})

export class AllUserSubModule {}