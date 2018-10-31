import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';

import { TableListComponent } from './table-list/table-list.component';

@NgModule({
    imports: [SharedModule, ListRoutingModule],
    declarations: [TableListComponent]
})
export class ListModule {}
