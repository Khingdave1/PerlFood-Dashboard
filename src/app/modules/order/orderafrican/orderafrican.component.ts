import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderafrican',
  templateUrl: './orderafrican.component.html',
  styleUrls: ['./orderafrican.component.scss']
})
export class OrderafricanComponent implements OnInit {
  africanOrder: any;
  p: number = 1;


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

    // Getting all African Orders from Firebase
    this.orderService.getAfricanOrder("African").subscribe((ao: any) => {
      this.africanOrder = []
      ao.forEach((i: any) => {
        let item = i.payload.doc.data() as Order
        item.id = i.payload.doc.id
        this.africanOrder.push(item)
      });
      console.log(this.africanOrder)
    })
  }

}
