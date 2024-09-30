import {Component, Input} from '@angular/core';
import {FirebaseService} from "../../../../../../data/services/firebase.service";

@Component({
  selector: 'createSkillsComponent',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css'],
})
export class CreateSkillComponent {
  @Input() skill!: string;

  constructor(private firebaseService: FirebaseService) {

  }
}
