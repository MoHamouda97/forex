import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsRoutes } from './contact.routes';
import { AllContactModule } from './all-contact/all-contact.module';
import { AddContactModule } from './add-contact/add-contact.module';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(ContactsRoutes),
        AllContactModule,
        AddContactModule
    ],
    exports: [],
    providers: [
        
    ]
})

export class ContactsModule {}