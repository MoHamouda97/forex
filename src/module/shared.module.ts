import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AntModule } from "./ant.module";
import { MatModule } from "./mat.module";
import { PipesModule } from "./pipes.module";
import { QuillModule } from 'ngx-quill';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,  
        AntModule,
        PipesModule,
        QuillModule.forRoot()        
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        AntModule,
        MatModule, 
        PipesModule,  
        QuillModule          
    ],
    providers: [
        
    ]
})

export class SharedModule {}