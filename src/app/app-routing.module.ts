import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'currancies',
        loadChildren: () => import('./forex/currancies/currancies.module').then(m => m.CurranciesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./forex/contact/contact.module').then(m => m.ContactsModule)
      },
      {
        path: 'slider',
        loadChildren: () => import('./forex/slider/slide.module').then(m => m.SlidesModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./forex/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./forex/news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'trad',
        loadChildren: () => import('./forex/trades/trades.module').then(m => m.TradesModule)
      },
      {
        path: 'sub',
        loadChildren: () => import('./forex/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
      },
      {
        path: 'usersub',
        loadChildren: () => import('./forex/user-sub/user-sub.module').then(m => m.UserSubModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./forex/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule) },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {
        path: 'apps/email',
        loadChildren: () => import('./apps/email/mail.module').then(m => m.MailModule)
      },
      { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
      {
        path: 'sample-pages',
        loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/404'
  }
];
