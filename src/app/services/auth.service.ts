import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAutheticated(): boolean {
    const token = localStorage.getItem('token')
    if (token !== null) {
      return true
    } else {
      return false
    }
  }
  constructor() { }
}
