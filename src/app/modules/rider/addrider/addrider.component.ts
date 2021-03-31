import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiderService } from 'src/app/services/rider.service';
import { environment } from 'src/environments/environment';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addrider',
  templateUrl: './addrider.component.html',
  styleUrls: ['./addrider.component.scss']
})
export class AddriderComponent implements OnInit {

  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  // currentRider: any;
  selectedFile: File;
  previewImage: any;
  showPreviewImage: boolean = false;
  showPreviewText: boolean = true;
  loading: boolean;
  status = "";
  subscriptionType = 3;
  successMessage: boolean = false;


  genders: Gender[] = [
    { value: "", viewValue: "Select gender:" },
    { value: "Male", viewValue: "Male" },
    { value: "Female", viewValue: "Female" },
    { value: "others", viewValue: "others" }
  ]

  constructor(private riderService: RiderService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void { }

  // Show Rider Section
  showRiderSect() {
    this.parentData.emit();
  }

  // Rider Form
  riderForm: FormGroup = this.formBuilder.group({
    firstName: ['', { validators: [Validators.required], updateOn: "change" }],
    lastName: ['', { validators: [Validators.required], updateOn: "change" }],
    imageUrl: ['', { validators: [Validators.required], updateOn: "change" }],
    address: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    gender: ['', { validators: [Validators.required], updateOn: "change" }],
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
        firstName: this.riderForm.value.firstName,
        lastName: this.riderForm.value.lastName,
        address: this.riderForm.value.address,
        email: this.riderForm.value.email,
        gender: this.riderForm.value.gender,
        phoneNumber: this.riderForm.value.phoneNumber,
        status: this.status,
        subscriptionType: this.subscriptionType
      }
      // post
      this.riderService.addRider(data).then(res => {
        this.loading = false
        this.successMessage = true
        console.log(res)
        // Return to the Riders page
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
    })
  }

}
