import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebar: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 745) {
      this.sidebar = false;
    }
    // else {
    //   this.sidebar = true;
    //   console.log("Bye!")
    // }
  }

  // Show Sidebar
  showSidebar() {
    this.sidebar = true;
  }

  // Hide Sidebar
  hideSidebar() {
    this.sidebar = false
  }
}
