import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('payments')
  collectionName = 'payments'

  // Get all Products
  getPayments() {
    return this.collectionPath.snapshotChanges()
  }
}
