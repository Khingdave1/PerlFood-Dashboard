import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(private db: AngularFirestore) { }
  rider: any;
  collectionPath = this.db.collection('riders')
  collectionName = 'riders'

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

  // Get single Rider
  getSingleRider(riderId: string) {
    // this.rider = this.db.collection(this.collectionName, ref =>ref.where('id', '==', riderId).limit(1))
    //   .snapshotChanges()
    //   return this.rider
    console.log(riderId)
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
