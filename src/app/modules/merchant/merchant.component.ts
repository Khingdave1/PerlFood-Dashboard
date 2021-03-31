import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendors } from 'src/app/interfaces/vendor';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  vendors: any;
  vendorSect: boolean = true;
  addVendorSect: boolean = false;
  editVendorSect: boolean = false;
  currentVendor: any;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    // Getting all Vendors from Firebase
    this.vendorService.getVendors().subscribe((v: any) => {
      this.vendors = []
      v.forEach((i: any) => {
        let item = i.payload.doc.data() as Vendors
        item.id = i.payload.doc.id
        this.vendors.push(item)
      });
    })
  }

  // Show Vendor Section
  showVendorSect() {
    this.addVendorSect = false
    this.vendorSect = true
    this.editVendorSect = false
  }

  // Show Add Vendor Section
  showAddVendorSect() {
    this.addVendorSect = true
    this.vendorSect = false
    this.editVendorSect = false
  }

  // Show Edit Vendor Section
  showEditVendorSect(vendor: any) {
    this.editVendorSect = true
    this.addVendorSect = false
    this.vendorSect = false

    this.currentVendor = vendor
  }

  // Delete Product from firebase
  onRemove(pId: any) {
    this.vendorService.deleteVendor(pId.id)
  }

}


