import { NgModule } from "@angular/core";

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
    declarations: [],
    exports: [
        NzFormModule,
        NzInputModule,
        NzIconModule,
        NzTableModule,
        NzModalModule,
        NzSelectModule,
        NzDatePickerModule,
        NzButtonModule,
        NzPopconfirmModule
    ],
    providers: [],
})

export class AntModule {}