import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ordercontinental',
  templateUrl: './ordercontinental.component.html',
  styleUrls: ['./ordercontinental.component.scss']
})
export class OrdercontinentalComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }

}
