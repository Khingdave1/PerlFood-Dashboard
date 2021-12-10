import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(private db: AngularFirestore) { }
  collectionPath = this.db.collection('riders')
  collectionName = 'riders'
  dispatchedRider: any;
  unverifiedRider: any;

  // Get all Riders
  getRiders() {
    return this.collectionPath.snapshotChanges()
  }

  // Add Rider
  addRider(payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.collectionPath.add(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Get Dispatched Rider
  getDispatchedRider(riderId: string) {
    this.dispatchedRider = this.db.collection(this.collectionName, ref => ref.where('status', '==', riderId)).snapshotChanges()
    return this.dispatchedRider
  }

  // Get Unverified Rider
  getUnverifiedRider(riderId: string) {
    this.unverifiedRider = this.db.collection(this.collectionName, ref => ref.where('status', '==', riderId)).snapshotChanges()
    return this.unverifiedRider
  }

  // Update Rider
  updateRider(riderId: string, payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + riderId).update(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Delete RIder
  deleteRider(riderId: string) {
    return new Promise<any>((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + riderId).delete().then(res => resolve(res), err => reject(err))
    })
  }
}
