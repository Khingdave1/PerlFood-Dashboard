import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLogggedIn = false
  imageUrl = "https://res.cloudinary.com/djnqxvljr/image/upload/v1611737247/userIcon_lki4v7.png"
  subscriptionType = 2

  // currentUser: string;
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(public firebaseAuth: AngularFireAuth, private profileService: ProfileService) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('id') || '{}'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currenUserValue() {
    return this.currentUserSubject.value
  }

  // Sign In
  async signinUser(payload: any) {
    await this.firebaseAuth.signInWithEmailAndPassword(payload.emailAddress, payload.password)
      .then(res => {
        this.isLogggedIn = true

        localStorage.setItem('token', JSON.stringify(res.user?.refreshToken))

        localStorage.setItem('id', JSON.stringify(res.user?.uid))

        this.currentUserSubject.next(res.user)
      })

  }

  // Sign Up
  async createUser(email: string, password: string, payload: any) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        let data = {
          emailAddress: payload.emailAddress,
          gender: payload.gender,
          imageUrl: this.imageUrl,
          name: payload.name,
          subscriptionType: this.subscriptionType,
          uid: res.user?.uid
        }

        this.profileService.addUser(data)

        this.isLogggedIn = true

        localStorage.setItem('token', JSON.stringify(res.user?.refreshToken))

        localStorage.setItem('id', JSON.stringify(res.user?.uid))

        this.currentUserSubject.next(res.user)


      })
  }

  // Sign Out
  signout() {
    this.firebaseAuth.signOut()
    // Clear from Local Storage
    localStorage.removeItem('id')
    localStorage.removeItem('token')

    this.currentUserSubject.next(null)

  }

}

