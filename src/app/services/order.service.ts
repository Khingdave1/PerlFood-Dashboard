import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('orders')
  collectionName = 'orders'
  africanOrder: any;
  successfulOrder: any;

  // Get all Orders
  getOrders() {
    return this.collectionPath.snapshotChanges()
  }

  // Get African Orders
  getAfricanOrder(orderId: string) {
    this.africanOrder = this.db.collection(this.collectionName, ref => ref.where('category', '==', orderId)).snapshotChanges()
    return this.africanOrder
  }

  // Get All Successful Orders
  getASuccessfulOrder(orderId: string) {
    this.successfulOrder = this.db.collection(this.collectionName, ref => ref.where('orderStatus', '==', orderId)).snapshotChanges()
    return this.successfulOrder
  }

  // Delete Order
  deleteOrder(orderId: string) {
    this.db.doc(this.collectionName + '/' + orderId).delete()
  }
}
