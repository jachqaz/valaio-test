import {Injectable} from '@angular/core';
import {addDoc, collection, Firestore, getDocs, query} from "@angular/fire/firestore";
import {Task} from "../../domain/models/task";

export class PathsFirebase {
  static readonly tasks = 'tasks';
  static readonly persons = 'persons';
  static readonly skills = 'skills';
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  task: Task = new Task();

  constructor(private firestore: Firestore) {
  }

  addDoc(path: string) {
    return addDoc(collection(this.firestore, path), {test: 'data'})
  }

  getDocs(path: string) {
    return getDocs(query(collection(this.firestore, path)));
  }

}
