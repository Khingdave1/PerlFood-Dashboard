import { Component, OnInit } from '@angular/core';
// import { Profile } from 'src/app/interfaces/profile';
// import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  // userId: any;
  // users: any;
  // user: any

  constructor() { }

  ngOnInit(): void {
    // Get single User Informations
    // this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    // this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
    //   res.forEach((r: any) => {
    //     let item = r.payload.doc.data() as Profile
    //     this.user = item
    //   });
    // })
  }

}
