import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showNotifi: boolean;
  showProfile: boolean;
  // q:any
  profile: any;
  userId: any;
  users: any;
  user: any

  constructor(private firebaseService: FirebaseService, private router: Router, private profileService: ProfileService) {
    this.showNotifi = false;
    this.showProfile = false;
  }

  ngOnInit(): void {
    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item
      });
    })

  }



  // Toogle Notification
  toggleNotifi() {
    if (this.showNotifi == true) {
      this.showNotifi = false;
    } else {
      this.showNotifi = true;
    }
  }
  // Toogle Profile
  toggleProfile() {
    if (this.showProfile == true) {
      this.showProfile = false;
    } else {
      this.showProfile = true;
    }
  }

  // Log the user out
  logOut() {
    this.firebaseService.signout()

    window.location.reload()
  }

  // getUserProfile() {
  //   this.profile = this.profileService.getSingleUser(this.userId).su
  // }

}