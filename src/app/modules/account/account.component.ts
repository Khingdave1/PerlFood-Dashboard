import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  name: string = "";
  password: string = "";
  showModal: boolean = false;
  userId: any;
  users: any;
  user: any

  constructor(private profileService: ProfileService) { }

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
  toggleModal() {
    if (this.showModal == true) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }
  }

  // getUser(uid: any) {
  //   this.profileService.getSingleUser(uid)

  // }

}
