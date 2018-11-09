import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'av-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit, AfterViewInit {

    users = [];
    selected = [];
    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.users.push({ id: i, name: 'name-' + i, address: 'address-' + i });
        }
    }

    ngAfterViewInit() {
        // document.getElementsByClassName('pagination-previous').item(0).children.item(0).setAttribute('style', `display:none`)
        // document.getElementsByClassName('pagination-next').item(0).children.item(0).setAttribute('style', `display:none`)
    }

    tableMaxHeight() {
        return window.innerHeight - 135;
    }
}
