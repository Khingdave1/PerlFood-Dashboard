import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orderafrican',
  templateUrl: './orderafrican.component.html',
  styleUrls: ['./orderafrican.component.scss']
})
export class OrderafricanComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  // Show Rider Section
  showOrder() {
    this.parentData.emit();
  }

}
