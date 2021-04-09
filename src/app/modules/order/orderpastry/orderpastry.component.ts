import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orderpastry',
  templateUrl: './orderpastry.component.html',
  styleUrls: ['./orderpastry.component.scss']
})
export class OrderpastryComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }

}
