import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: any;
  orderSect: boolean = true;
  orderAfricanSect: boolean = false;
  orderContinentalSect: boolean = false;
  orderDrinkSect: boolean = false;
  orderPastrySect: boolean = false;
  viewOrderSect: boolean = false;
  currentOrder: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    // Getting all Products from Firebase
    this.orderService.getOrders().subscribe((o: any) => {
      this.orders = []
      o.forEach((i: any) => {
        let item = i.payload.doc.data() as Order
        item.id = i.payload.doc.id
        this.orders.push(item)
      })
    })
  }

  // Scroll Behaviour
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // Show Order
  showOrder() {
    this.orderSect = true
    this.orderAfricanSect = false
    this.orderContinentalSect = false
    this.orderDrinkSect = false
    this.orderPastrySect = false
    this.viewOrderSect = false
  }

  // Show Order (Africans)
  showOrderAfrican() {
    this.orderAfricanSect = true
    this.orderSect = false
  }

  // Show Order (Continentals)
  showOrderContinental() {
    this.orderContinentalSect = true
    this.orderSect = false
  }

  // Show Order (Drinks)
  showOrderDrink() {
    this.orderDrinkSect = true
    this.orderSect = false
  }

  // Show Order (Pasteries)
  showOrderPastries() {
    this.orderPastrySect = true
    this.orderSect = false
  }

  // Show View Order
  showViewOrder(order: any) {
    this.viewOrderSect = true
    this.orderSect = false

    this.currentOrder = order
  }

}
