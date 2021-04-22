import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-eachrider',
  templateUrl: './eachrider.component.html',
  styleUrls: ['./eachrider.component.scss']
})
export class EachriderComponent implements OnInit {

  @Input("riderData") public currentRider: any;
  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();
  @Output("editData") editData: EventEmitter<any> = new EventEmitter();

  public fullName: string;
  loading = "Disable";
  hideEdit: boolean = true;
  disabledButton: boolean = false;

  constructor(private riderService: RiderService) { }

  ngOnInit(): void {
    // Get Rider Full Name
    this.fullName = this.currentRider.firstName + " " + this.currentRider.lastName
  }

  // Show Rider Section
  showRiderSect() {
    this.parentData.emit();
  }

  // Show Edit Section
  showEditRiderSect() {
    this.editData.emit()
  }

  // Delete Rider
  onRemove(rId: any) {
    this.riderService.deleteRider(rId.id).then(res => {
      // Change the text
      this.loading = "Disabled!"
      // Disable the Button
      this.disabledButton = true;
      // Hide the edit button
      this.hideEdit = false
    })
    // Roload window
    // window.location.reload()
  }

}
