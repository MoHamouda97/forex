import { Routes } from "@angular/router";
import { AllNewsComponent } from "./all-news/all-news.component";
import { AllNewsResolver } from "./all-news/services/news.resolver";
import { NewsFormComponent } from "./news-form/news-form.component";

export const NewsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllNewsComponent,
                data: {
                    title: 'الاخبار',
                },                
                resolve: {
                    news: AllNewsResolver,
                }                
            },
            {
                path: 'add',
                component: NewsFormComponent,
                data: {
                    title: 'اضافة خبر',
                },                               
            },
            {
                path: 'edit/:id',
                component: NewsFormComponent,
                data: {
                    title: 'تعديل الخبر',
                },                               
            }            
        ]
    }
]