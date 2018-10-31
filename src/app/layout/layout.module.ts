import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { ContentComponent } from './default/content/content.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';

const COMPONENTS = [
    LayoutDefaultComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent
];
@NgModule({
    declarations: [ ...COMPONENTS ],
    imports: [ SharedModule ],
    exports: [ ...COMPONENTS ]
})
export class LayoutModule {}
