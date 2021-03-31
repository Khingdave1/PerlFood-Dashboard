import { Component, OnInit } from '@angular/core';
import { Rider } from 'src/app/interfaces/rider';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private riderService: RiderService) { }
  riders: any;

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
  }

}
