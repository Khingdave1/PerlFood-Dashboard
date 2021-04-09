import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.scss']
})
export class VieworderComponent implements OnInit {

  @Input("orderData") public currentOrder: any;
  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentOrder)
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }
}
