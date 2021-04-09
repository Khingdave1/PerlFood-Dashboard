import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input("parentData") public sidebar: any;
  @Output("closeSidebar") closeSidebar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Hide sidebar
  hideSidebar() {
    this.closeSidebar.emit();
  }

}
