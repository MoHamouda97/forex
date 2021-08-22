import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tradRoutes } from './trades-routing.module';
import { RouterModule } from '@angular/router';
import { AddTradesModule } from './add-trades/add-trades.module';
import { AllTradesModule } from './all-trades/all-trades.module';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(tradRoutes),
    CommonModule,
    AllTradesModule,
    AddTradesModule
  ]
})
export class TradesModule { }
