import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  emailAddress: string = "";
  gender: string = "";
  imageUrl: string = "";
  name: string = "";
  subscriptionType: number = 2;
  isSignedin: boolean = false;
  hide = true;

  genders: Gender[] = [
    { value: "", viewValue: "Select gender:" },
    { value: "Male", viewValue: "Male" },
    { value: "Female", viewValue: "Female" },
    { value: "others", viewValue: "others" }
  ]

  constructor(private firebaseService: FirebaseService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl' || '/']

    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
    } else {
      this.isSignedin = false
    }

  }

  // Form initialization and validation
  signupForm: FormGroup = this.formBuilder.group({
    name: ['', { validators: [Validators.required], updateOn: "change" }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: "change" }],
    gender: ['', { validators: [Validators.required], updateOn: "change" }],
    password: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: "change" }],
    confirmPassword: ['', { validators: [Validators.required, Validators.minLength(8)], updateOn: "change" }]
  })

  async signup() {
    if (this.signupForm.invalid) {
      return
    }

    let payload = {
      emailAddress: this.signupForm.value.email,
      name: this.signupForm.value.name,
      gender: this.signupForm.value.gender,
      subscriptionType: this.subscriptionType,
      password: this.signupForm.value.password
    }


    await this.firebaseService.createUser(payload.emailAddress, payload.password, payload)

    if (this.firebaseService.isLogggedIn === true) {
      this.isSignedin = true
      this.router.navigate(['/'])
    }


  }


}
