import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @ViewChild('accountBannerEdit') accountBannerEdit: ElementRef;
  @ViewChild('accountBannerInfoImage') accountBannerInfoImage: ElementRef;

  name: string = "";
  password: string = "";
  showModal: boolean = false;
  userId: any;
  users: any;
  user: any;

  constructor(private profileService: ProfileService, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item
      });
    })

    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.accountBannerEdit.nativeElement.contains(e.target)
      let y = !this.accountBannerInfoImage.nativeElement.contains(e.target)
      if (x && y) {
        this.showModal = false;
      }
    });

  }

  // Toogle Notification
  toggleModal() {
    this.showModal = !this.showModal
  }

  // getUser(uid: any) {
  //   this.profileService.getSingleUser(uid)

  // }

}
