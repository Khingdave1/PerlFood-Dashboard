import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orderdrink',
  templateUrl: './orderdrink.component.html',
  styleUrls: ['./orderdrink.component.scss']
})
export class OrderdrinkComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }

}
