import {Component, OnInit} from '@angular/core';
import {Task} from "../../../../../domain/models/task";
import {Person} from "../../../../../domain/models/person";
import {FirebaseService} from "../../../../../data/services/firebase.service";

@Component({
  selector: 'taskComponent',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    let task = new Task();
    task.id = "1";
    task.name = "Tarea A";
    task.expireDate = "2024-10-01";
    let person = new Person();
    person.name = "Juan Perez";
    person.age = "25";
    person.skills.push("JavaScript", "Angular");
    task.persons.push(person);
    person = new Person();
    person.name = "Maria Lopez";
    person.age = "30";
    person.skills.push("Typescript", "CSS");
    task.persons.push(person);
    this.tasks.push(task);
    task = new Task();
    task.completed = true;
    task.id = "2";
    task.name = "Tarea B";
    task.expireDate = "2024-09-25";
    person = new Person();
    person.name = "Carlos Gomez";
    person.age = "40";
    person.skills.push("Html", "SCSS");
    task.persons.push(person);
    this.tasks.push(task);
    console.log(this.tasks);
    // this.firebaseService.getDocs(PathsFirebase.tasks).then(result => {
    //   result.docs.map(task => {
    //     let taskTemporal: Task = <Task>task.data();
    //     console.log(taskTemporal);
    //     this.firebaseService.getDocs(`${PathsFirebase.tasks}/${task.id}/${PathsFirebase.persons}`).then(result => {
    //       result.docs.map(person => {
    //         let personTemporal: Person = <Person>person.data();
    //         console.log(personTemporal)
    //         // this.tasks.push(<Task>task.data());
    //         this.firebaseService.getDocs(`${PathsFirebase.tasks}/${person.id}/${PathsFirebase.skills}`).then(result => {
    //           result.docs.map(skill => {
    //             let skillTemporal = person.data();
    //             console.log(skillTemporal);
    //             // personTemporal.skills.push(skillTemporal.toString());
    //           })
    //         }, error => {
    //           alert(error);
    //         });
    //         // taskTemporal.persons.push(personTemporal);
    //       })
    //     }, error => {
    //       alert(error);
    //     });
    //     // this.tasks.push(taskTemporal);
    //   });
    // }, error => {
    //   alert(error);
    // });
  }
}
