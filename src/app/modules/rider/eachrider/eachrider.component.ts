import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eachrider',
  templateUrl: './eachrider.component.html',
  styleUrls: ['./eachrider.component.scss']
})
export class EachriderComponent implements OnInit {

  @Input("riderData") public currentRider: any;
  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();
  public fullName: string;

  constructor() { }

  ngOnInit(): void {
    // Get Rider Full Name
    this.fullName = this.currentRider.firstName + " " + this.currentRider.lastName
  }

  // Show Rider Section
  showRiderSect() {
    this.parentData.emit();
  }


}
