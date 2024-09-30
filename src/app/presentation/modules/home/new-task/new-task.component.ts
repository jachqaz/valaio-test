import {Component} from '@angular/core';
import {FirebaseService} from "../../../../data/services/firebase.service";
import {Task} from "../../../../domain/models/task";
import {MatDialogRef} from "@angular/material/dialog";
import {Person} from "../../../../domain/models/person";


@Component({
    selector: 'newTaskComponent',
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css',],
})
export class NewTaskComponent {
  task!: Task;

  constructor(private firebaseService: FirebaseService, private dialogRef: MatDialogRef<NewTaskComponent>) {
    this.firebaseService.task = new Task();
    this.task = this.firebaseService.task
  }

  createTask() {
    console.log(this.firebaseService.task);
    // this.firebaseService.addDoc(PathsFirebase.task).then((task) => {
    //     this.dialogRef.close();
    // },error => {
    //     alert(error);
    // });
  }

  addPerson() {
    if (this.task.persons[this.task.persons.length - 1].name != "") {
      this.task.persons.push(new Person());
    }
    console.log(this.task);
    console.log(this.firebaseService.task);
  }
}
