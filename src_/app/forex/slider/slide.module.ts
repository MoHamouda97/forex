import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SlidesRoutes } from './slide.routes';
import { AllSlidesModule } from './all-slides/all-slides.module';
import { AddSlideModule } from './add-slide/add-slides.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(SlidesRoutes),
        AllSlidesModule,
        AddSlideModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class SlidesModule {}