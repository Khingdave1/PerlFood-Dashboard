import { Component, EventEmitter, ElementRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output("openSidebar") openSidebar: EventEmitter<any> = new EventEmitter();
  // Get DOM element (#(the name))
  @ViewChild('notifiDropdown') notifiDropdown: ElementRef;
  @ViewChild('notifiDropdownContent') notifiDropdownContent: ElementRef;
  @ViewChild('profileDropdown') profileDropdown: ElementRef;
  @ViewChild('profileDropdownContent') profileDropdownContent: ElementRef;

  showNotifi: boolean;
  showProfile: boolean;
  profile: any;
  userId: any;
  users: any;
  user: any


  // @HostListener('document:click', ['$event'])
  // clickoutProfile(event: any) {
  //   if (!this.eRef.nativeElement.contains(event.target)) {
  //     this.showProfile = false;
  //   }
  // }

  constructor(private firebaseService: FirebaseService, private profileService: ProfileService, private renderer: Renderer2) {
    this.showNotifi = false;
    this.showProfile = false;

    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.profileDropdown.nativeElement.contains(e.target)
      let y = !this.profileDropdownContent.nativeElement.contains(e.target)
      if (x && y) {
        this.showProfile = false;
      }
    });
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.notifiDropdown.nativeElement.contains(e.target)
      let y = !this.notifiDropdownContent.nativeElement.contains(e.target)
      if (x && y) {
        this.showNotifi = false;
      }
    });
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

    // if (window.innerWidth < 658) {

    //   console.log("Welcome")
    // }

  }

  // Show Sidebar
  showSidebar() {
    this.openSidebar.emit();
  }

  // Toogle Notification
  toggleNotifi() {
    this.showNotifi = !this.showNotifi
  }

  // Toogle Profile
  toggleProfile() {
    this.showProfile = !this.showProfile
  }

  // Log the user out
  logOut() {
    this.firebaseService.signout()

    window.location.reload()
  }

}
