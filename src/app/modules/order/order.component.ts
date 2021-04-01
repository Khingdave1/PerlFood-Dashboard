import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderSect: boolean = true;
  orderAfricanSect: boolean = false;
  orderContinentalSect: boolean = false;
  orderDrinkSect: boolean = false;
  orderPasterySect: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Show Order
  showOrder() {
    this.orderSect = true
    this.orderAfricanSect = false
    this.orderContinentalSect = false
    this.orderDrinkSect = false
    this.orderPasterySect = false
  }

  // Show Order (Africans)
  showOrderAfrican() {
    this.orderAfricanSect = true
    this.orderSect = false
    this.orderContinentalSect = false
    this.orderDrinkSect = false
    this.orderPasterySect = false
  }

  // Show Order (Continentals)
  showOrderContinental() {
    this.orderContinentalSect = true
    this.orderSect = false
    this.orderAfricanSect = false
    this.orderDrinkSect = false
    this.orderPasterySect = false
  }

  // Show Order (Drinks)
  showOrderDrink() {
    this.orderDrinkSect = true
    this.orderSect = false
    this.orderContinentalSect = false
    this.orderAfricanSect = false
    this.orderPasterySect = false
  }

  // Show Order (Pasteries)
  showOrderPasteries() {
    this.orderPasterySect = true
    this.orderDrinkSect = false
    this.orderSect = false
    this.orderContinentalSect = false
    this.orderAfricanSect = false
  }

}
