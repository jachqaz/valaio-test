import {Component, Input} from '@angular/core';
import {FirebaseService} from "../../../../../data/services/firebase.service";
import {Person} from "../../../../../domain/models/person";

@Component({
    selector: 'createPersonComponent',
    templateUrl: './create-person.component.html',
    styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent {
  @Input() person: Person = new Person();

  constructor(private firebaseService: FirebaseService) {
    console.log(this.person);
  }

  addSkill() {
    this.person.skills.push("");
    // if (this.person.skills[this.person.skills.length - 1] != "") {
    //
    // }
  }
}
