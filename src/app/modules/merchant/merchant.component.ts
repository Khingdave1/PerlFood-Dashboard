import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendors } from 'src/app/interfaces/vendor';
import { ExportService } from 'src/app/services/export.service';

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
  title: any;
  p: number = 1;

  constructor(private vendorService: VendorService, private exportService: ExportService) { }

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

  // Search Vendors
  search() {
    if (this.title != "") {
      this.vendors = this.vendors.filter((res: any) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    } else if (this.title == "") {
      this.ngOnInit()
    }
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

  // Export as Excel
  exportexcel() {
    this.exportService.exportExcel(this.vendors, 'vendorsData');
  }
}


