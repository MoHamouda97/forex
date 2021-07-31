import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { AllUsersComponent } from "./all-users.component";
import { AllUsersResolver } from "./services/users.resolver";


@NgModule({
    declarations: [
        AllUsersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
        AllUsersResolver
    ]
})

export class AllUsersModule {}