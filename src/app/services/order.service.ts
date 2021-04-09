import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('orders')
  collectionName = 'orders'

  // Get all Orders
  getOrders() {
    return this.collectionPath.snapshotChanges()
  }

  // Delete Order
  deleteOrder(orderId: string) {
    this.db.doc(this.collectionName + '/' + orderId).delete()
  }
}
