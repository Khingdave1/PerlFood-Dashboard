import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
// Import Charts
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'node_modules/chart.js';

// Register the Chart Elements
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

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
  canvas: any;
  ctx: any;
  p: number = 1;
  successfulOrders: any;

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

    this.orderService.getASuccessfulOrder("successful").subscribe((so: any) => {
      this.successfulOrders = []
      so.forEach((i: any) => {
        let item = i.payload.doc.data() as Order
        item.id = i.payload.doc.id
        this.successfulOrders.push(item)
      });
    })

    this.createOrderChart('orderChart');


  }

  // Scroll Behaviour
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  // Create order Statistics
  createOrderChart(chartId: string) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
          {
            label: "African dish",
            backgroundColor: "#FFBE00",
            borderColor: "transparent",
            borderWidth: 1,
            data: [3, 5, 6, 7, 3, 5]
          },
          {
            label: "Continental dish",
            backgroundColor: "#170F46",
            borderColor: "transparent",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7]
          },
          {
            label: "Drinks",
            backgroundColor: "#EB5757",
            borderColor: "transparent",
            borderWidth: 1,
            data: [10, 7, 4, 6, 9, 7]
          },
          {
            label: "Pasteries",
            backgroundColor: "#06BAEA",
            borderColor: "transparent",
            borderWidth: 1,
            data: [6, 9, 7, 3, 10, 7]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            align: 'start',
            labels: {
              color: 'rgba(23, 15, 70, 0.65)',
              boxWidth: 4,
              font: {
                size: 14
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5
            }
          }
        }
      }
    });

  }

}
