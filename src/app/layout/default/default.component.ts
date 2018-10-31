import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    RouteConfigLoadStart,
    NavigationError,
    NavigationCancel,
} from '@angular/router';

@Component({
    selector: 'layout-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

    isFetching = false;

    constructor(router: Router) {
        router.events.subscribe(evt => {
            if (!this.isFetching && (evt instanceof RouteConfigLoadStart || evt instanceof NavigationStart)) {
              this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
              this.isFetching = false;
              return;
            }
            if (!(evt instanceof NavigationEnd)) {
              return;
            }
            setTimeout(() => {
                this.isFetching = false;
            }, 1000);
          });
     }

    ngOnInit(): void { }
}
