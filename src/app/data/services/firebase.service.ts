import {Injectable} from '@angular/core';
import {addDoc, collection, Firestore, getDocs, query} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) {
  }

  addDoc(path: string) {
    return addDoc(collection(this.firestore, path), {test: 'data'})
  }

  getDoc(path: string) {
    return getDocs(query(collection(this.firestore, path)));
  }
}
