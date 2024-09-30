import {Person} from "./person";

export class Task {
  id: string = "";
  name: string = "";
  expireDate: string = "";
  persons: Person[] = [];
  completed: boolean = false;
  constructor() {
  }
}
