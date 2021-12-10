import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendors } from 'src/app/interfaces/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addmerchant',
  templateUrl: './addmerchant.component.html',
  styleUrls: ['./addmerchant.component.scss']
})
export class AddmerchantComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  selectedFile: File;
  previewImage: any;
  showPreviewImage: boolean = false;
  showPreviewText: boolean = true;
  loading: boolean = false;
  successMessage: boolean = false;
  status = "";
  storeLocations = [];
  subscriptionType = 4;
  isPopular = false;
  isVerified = false;
  images = [];
  name: any;

  constructor(private vendorService: VendorService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // Show Vendor Section
  showVendorSect() {
    this.parentData.emit();
  }


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

  // Upload Image to Cloudinary Then Submit form to Firebase
  onUpload() {
    this.loading = true
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    formData.append('upload_preset', 'perlfood_images');
    formData.append('upload_name', environment.cloudinaryName);

    this.http.post('http://api.cloudinary.com/v1_1/djnqxvljr/image/upload', formData).subscribe((d: any) => {
      let imageUrl = d.url;
      let data = {
        imageUrl: imageUrl,
        images: this.images,
        title: this.vendorForm.value.title,
        address: this.vendorForm.value.address,
        email: this.vendorForm.value.email,
        description: this.vendorForm.value.description,
        opensAt: this.vendorForm.value.opensAt,
        closesAt: this.vendorForm.value.closesAt,
        phoneNumber: this.vendorForm.value.phoneNumber,
        status: this.status,
        storeLocations: this.storeLocations,
        isPopular: this.isPopular,
        isVerified: this.isVerified,
        subscriptionType: this.subscriptionType
      }
      // post
      this.vendorService.addVendor(data).then(res => {
        this.loading = false
        this.successMessage = true
        // Reset Form
        this.vendorForm.reset()
        // console.log(this.vendorForm.valid)
        // Return to the Products page
        // window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    })
  }

}
