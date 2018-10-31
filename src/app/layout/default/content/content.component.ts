import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-content',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
