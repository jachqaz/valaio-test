import {Component, OnInit} from '@angular/core';
import {Task} from "../../../../../domain/models/task";
import {Person} from "../../../../../domain/models/person";

@Component({
  selector: 'taskComponent',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  protected readonly String = String;

  ngOnInit(): void {
    let task = new Task();
    task.id = "1";
    task.name = "Tarea A";
    task.expireDate = "2024-10-01";
    let person = new Person();
    person.name = "Juan Perez";
    person.age = "25";
    person.skill.push("JavaScript", "Angular");
    task.persons.push(person);
    person = new Person();
    person.name = "Maria Lopez";
    person.age = "30";
    person.skill.push("Typescript", "CSS");
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
    person.skill.push("Html", "SCSS");
    task.persons.push(person);
    this.tasks.push(task);
    console.log(this.tasks);
  }

  taskCompleted(completed: boolean) {
    return completed ? 'X' : '';
  }
}
