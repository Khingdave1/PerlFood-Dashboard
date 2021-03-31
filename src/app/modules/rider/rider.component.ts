import { Component, OnInit } from '@angular/core';
import { Rider } from 'src/app/interfaces/rider';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.scss']
})
export class RiderComponent implements OnInit {

  riders: any;
  riderSect: boolean = true;
  addRiderSect: boolean = false;
  editRiderSect: boolean = false;
  viewRiderSect: boolean = false;
  currentRider: any;

  constructor(private riderService: RiderService) { }

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

  // Show Rider Section
  showRiderSect() {
    this.riderSect = true
    this.addRiderSect = false
    this.editRiderSect = false
    this.viewRiderSect = false
  }

  // Show Add Rider Section
  showAddRiderSect() {
    this.addRiderSect = true
    this.riderSect = false
    this.editRiderSect = false
    this.viewRiderSect = false
  }

  // Show Edit Rider Section
  showEditRiderSect(rider: any) {
    this.editRiderSect = true
    this.riderSect = false
    this.addRiderSect = false
    this.viewRiderSect = false

    // Set the currentRider to the Rider clicked on
    this.currentRider = rider
  }

  // Show Add Rider Section
  showViewRiderSect(rider: any) {
    this.viewRiderSect = true
    this.riderSect = false
    this.addRiderSect = false
    this.editRiderSect = false

    this.currentRider = rider
  }

  // View Rider
  onView(rId: any) {
    this.riderService.getSingleRider(rId)
  }

  // Delete Rider
  onRemove(rId: any) {
    this.riderService.deleteRider(rId.id)
  }

}
