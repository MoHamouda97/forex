import { Routes } from '@angular/router';
import { AddTradesComponent } from './add-trades/add-trades.component';
import { AllTradesComponent } from './all-trades/all-trades.component';
import { AllTradesResolver } from './all-trades/services/trades.resolver';


export const tradRoutes: Routes = [{
  path: '',
  children: [
      {
          path: 'all',
          component: AllTradesComponent,
          data: {
              title: 'صفقات',
          },
          resolve: {
            trades: AllTradesResolver
          }             
      },
      {
          path: 'add',
          component: AddTradesComponent,
          data: {
              title: 'اضافة صفقات',
          },                               
      },
      {
          path: 'edit/:id',
          component: AddTradesComponent,
          data: {
              title: 'تعديل صفقات',
          },                               
      },
  ]
}];