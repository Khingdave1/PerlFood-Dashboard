import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RiderService } from 'src/app/services/rider.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editrider',
  templateUrl: './editrider.component.html',
  styleUrls: ['./editrider.component.scss']
})
export class EditriderComponent implements OnInit {

  @Input("riderData") public currentRider: any;
  @Output("parentData") parentData: EventEmitter<any> = new EventEmitter();

  selectedFile: File;
  previewImage: any;
  showPreviewImage: boolean = false;
  showPreviewText: boolean = true;
  loading: boolean;
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

  // Edit Vendor
  onEdit(data: any) {
    let payload = {
      firstName: this.riderForm.value.firstName,
      lastName: this.riderForm.value.lastName,
      address: this.riderForm.value.address,
      email: this.riderForm.value.email,
      gender: this.riderForm.value.gender,
      phoneNumber: this.riderForm.value.phoneNumber,
    }
    this.riderService.updateRider(data.id, payload).then(res => {
      this.loading = false
      this.successMessage = true

      // Return to the Products page
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })
  }

}
