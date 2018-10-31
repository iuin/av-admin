import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

const COMMON = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ClarityModule
];

@NgModule({
    declarations: [],
    imports: [ ...COMMON ],
    exports: [ ...COMMON ],
    providers: [],
})
export class SharedModule {}
