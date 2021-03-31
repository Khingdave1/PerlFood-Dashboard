import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('categories')
  collectionName = 'categories'

  // Get all Categories
  getCategories() {
    return this.collectionPath.snapshotChanges()
  }
}


