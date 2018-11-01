import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InMemoryDataService } from './mock/in-memory-data.service';

@NgModule({
    imports: [SharedModule],
    providers: [InMemoryDataService],
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
