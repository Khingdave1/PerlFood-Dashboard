import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesCollection = AngularFirestoreCollection;
  profiles: any;
  vendors: any;
  profile: any;

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('profile')
  collectionName = 'profile'

  // CREATE
  addUser(payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.collectionPath.add(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // GET
  // Get all Profiles
  geAllUsers() {
    return this.collectionPath.snapshotChanges()
  }

  // Get single profile
  getSingleUser(userId: string) {
    this.profile = this.db.collection(this.collectionName, ref => ref.where('uid', '==', userId).limit(1))
      .snapshotChanges()
    return this.profile
  }

  // Get all Vendors
  getUserAccountType(subType: number) {
    this.vendors = this.db.collection<Profile>(this.collectionName, ref => ref.where('subscriptionType', '==', subType)).snapshotChanges()

    return this.vendors
  }

  // Get all Riders

  // Get all Agents

  // Get all Clients


  // UPDATE
  updateUser(userId: string, payload: any) {
    this.db.doc(this.collectionName + '/' + userId).update(payload)
  }

  // DELETE
  deleteUser(userId: string) {
    this.db.doc(this.collectionName + '/' + userId).delete()
  }

}
