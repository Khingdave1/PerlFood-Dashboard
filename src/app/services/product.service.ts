import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('products')
  collectionName = 'products'

  // Add Product
  addProduct(payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.collectionPath.add(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Get all Products
  getProducts() {
    return this.collectionPath.snapshotChanges()
  }

  // Update Product
  updateProduct(productId: string, payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.db.doc(this.collectionName + '/' + productId).update(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Delete Product
  deleteProduct(productId: string) {
    this.db.doc(this.collectionName + '/' + productId).delete()
  }

}
