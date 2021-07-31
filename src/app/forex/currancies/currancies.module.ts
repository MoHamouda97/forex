import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllCurranciesModule } from './all-currancies/all-currancies.module';
import { CurranciesRoutes } from './currancies.routes';
import { AddCurrancyModule } from './add-currancy/add-currancy.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(CurranciesRoutes),
        AllCurranciesModule,
        AddCurrancyModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class CurranciesModule {}