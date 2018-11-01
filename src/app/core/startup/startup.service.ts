import { Injectable, Inject } from '@angular/core';

@Injectable()
export class StartupService {
    constructor() { }

    load(): Promise<any> {
        return new Promise(resolve => resolve({}));
    }
}
