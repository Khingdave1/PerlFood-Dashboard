import { Component, OnInit } from '@angular/core';
import { Rider } from 'src/app/interfaces/rider';
import { RiderService } from 'src/app/services/rider.service';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private riderService: RiderService) { }
  riders: any;
  canvas: any;
  ctx: any;

  ngOnInit(): void {

    // Getting all Riders from Firebase
    this.riderService.getRiders().subscribe((v: any) => {
      this.riders = []
      v.forEach((i: any) => {
        let item = i.payload.doc.data() as Rider
        item.id = i.payload.doc.id
        this.riders.push(item)
      });
    })

    // Earning Statistics
    this.createEarningChart('earningChart');

    // Product Chart
    this.createProductChart('productChart');

    // Rider Chart
    this.createRiderChart('riderChart');

  }

  // Create Earning Statistics
  createEarningChart(chartId: string) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [{
          data: [2, 3, 5, 7, 8, 9],
          fill: false,
          tension: 0.1,
          borderColor: "#008080",
          backgroundColor: "transparent",
          borderWidth: 3,
          pointBackgroundColor: "#ffffff"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

  }

  // Create Product Chart
  createProductChart(chartId: string) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ["Hired", "Pending", "Available"],
        datasets: [{
          data: [30, 10, 20],
          backgroundColor: ["#56CCF2", "#EB5757", "#F2C94C"],
          borderWidth: 1,
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          legend: {
            align: 'start',
            labels: {
              color: 'rgba(23, 15, 70, 0.65)',
              boxWidth: 4,
              font: {
                size: 11
              }
            }
          }
        }
      }
    });

  }

  // Create Rider Chart
  createRiderChart(chartId: string) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ["Dispatched", "Unverified", "Available"],
        datasets: [{
          data: [25, 10, 25],
          backgroundColor: ["#56CCF2", "#EB5757", "#F2C94C"],
          borderWidth: 1,
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          legend: {
            align: 'start',
            labels: {
              color: 'rgba(23, 15, 70, 0.65)',
              boxWidth: 4,
              font: {
                size: 11
              }
            }
          }
        }
      }
    });

  }

}
