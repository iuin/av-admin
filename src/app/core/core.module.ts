import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { httpInterceptorProviders } from './net/interceptor';
import { AvHttpClient } from './net/http';

const COMMON = [
    httpInterceptorProviders,
    AvHttpClient
];

@NgModule({
    imports: [ SharedModule ],
    providers: [...COMMON],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}
