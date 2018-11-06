import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { WizardMaximizedDirective } from './directives/wizard-maximized/wizard-maximized';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

const COMMON = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClarityModule
];

const DIRECTIVES = [
    WizardMaximizedDirective
];

@NgModule({
    declarations: [...DIRECTIVES, BreadcrumbComponent],
    imports: [ ...COMMON ],
    exports: [ ...COMMON, ...DIRECTIVES ],
    providers: [],
})
export class SharedModule {}
