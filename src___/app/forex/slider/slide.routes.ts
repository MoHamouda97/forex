import { Routes } from "@angular/router";
import { AddSlideComponent } from "./add-slide/add-slide.component";
import { AllSlidesComponent } from "./all-slides/all-slides.component";
import { AllSlidesResolver } from "./all-slides/services/slides.resolver";

export const SlidesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllSlidesComponent,
                data: {
                    title: 'سلايدر',
                },                
                resolve: {
                    slides: AllSlidesResolver,
                }                
            },
            {
                path: 'add',
                component: AddSlideComponent,
                data: {
                    title: 'اضافة سلايد',
                },                               
            },
        ]
    }
]