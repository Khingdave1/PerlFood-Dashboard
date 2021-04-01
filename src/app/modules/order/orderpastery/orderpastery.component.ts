import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orderpastery',
  templateUrl: './orderpastery.component.html',
  styleUrls: ['./orderpastery.component.scss']
})
export class OrderpasteryComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }

}
