import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsRoutes } from './news.routes';
import { AllNewsModule } from './all-news/all-news.module';
import { NewsFormModule } from './news-form/news-form.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(NewsRoutes),
        AllNewsModule,
        NewsFormModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class NewsModule {}