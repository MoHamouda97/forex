import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/module/shared.module";
import { FilterUsersComponent } from "../filter-users/filter-users.component";
import { AllUsersComponent } from "./all-users.component";
import { AllUsersResolver } from "./services/users.resolver";


@NgModule({
    declarations: [
        AllUsersComponent,
        FilterUsersComponent
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