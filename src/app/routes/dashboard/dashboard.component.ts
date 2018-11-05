import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
    selector: 'av-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

    constructor( private service: DashboardService) { }

    ngOnInit() {
        this.service.getItem().subscribe(res => {
            console.log(res);
        });
    }

}
