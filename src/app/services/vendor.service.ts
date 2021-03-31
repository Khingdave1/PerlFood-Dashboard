// NOTE: VEndor = Merchant
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('vendors')
  collectionName = 'vendors'

  // Get all Vendors
  getVendors() {
    return this.collectionPath.snapshotChanges()
  }

  // Add Vendor
  addVendor(payload: any) {
    return new Promise<any> ((resolve, reject) => {
      this.collectionPath.add(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Update Vendor
  updateVendor(vendorId: string, payload: any) {
    return new Promise<any> ((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + vendorId).update(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Delete Vendor
  deleteVendor(vendorId: string) {
    this.db.doc(this.collectionName + '/' + vendorId).delete()
  }
}
