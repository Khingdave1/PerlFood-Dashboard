import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-editmerchant',
  templateUrl: './editmerchant.component.html',
  styleUrls: ['./editmerchant.component.scss']
})
export class EditmerchantComponent implements OnInit {

  @Input("vendorData") public currentVendor: any;
  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  selectedFile: File;
  previewImage: any;
  showPreviewImage: boolean = false;
  showPreviewText: boolean = true;
  loading = false;
  successMessage: boolean = false;
  // images = [];

  constructor(private vendorService: VendorService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // Show Vendor Section
  showVendorSect() {
    this.parentData.emit();
  }

  // Vendor Form
  vendorForm: FormGroup = this.formBuilder.group({
    title: ['', { validators: [Validators.required], updateOn: "change" }],
    imageUrl: ['', { validators: [Validators.required], updateOn: "change" }],
    address: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    opensAt: ['', { validators: [Validators.required], updateOn: "change" }],
    closesAt: ['', { validators: [Validators.required], updateOn: "change" }],
    description: ['', { validators: [Validators.required], updateOn: "change" }],
    phoneNumber: ['', { validators: [Validators.required, Validators.minLength(11)], updateOn: "change" }]
  });

  // File Selected
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0]
    // Preview File Selected
    if (this.selectedFile) {
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFile)
      reader.onload = (e: any) => {
        this.previewImage = e.target.result
        if (this.previewImage !== "") {
          this.showPreviewImage = true
          this.showPreviewText = false
        } else {
          this.showPreviewImage = false
          this.showPreviewText = true
        }
      }
    }
  }

  // Edit Vendor
  onEdit(data: any) {
    let payload = {
      title: this.vendorForm.value.title,
      address: this.vendorForm.value.address,
      email: this.vendorForm.value.email,
      description: this.vendorForm.value.description,
      opensAt: this.vendorForm.value.opensAt,
      closesAt: this.vendorForm.value.closesAt,
      phoneNumber: this.vendorForm.value.phoneNumber
    }
    this.vendorService.updateVendor(data.id, payload).then(res => {
      this.loading = false
      this.successMessage = true

      // Return to the Merchants page
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })
  }

}
