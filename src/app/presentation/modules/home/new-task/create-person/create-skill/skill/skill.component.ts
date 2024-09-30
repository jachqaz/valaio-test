import {Component} from '@angular/core';
import {FirebaseService} from "../../../../../../../data/services/firebase.service";

@Component({
  selector: 'skillComponent',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  constructor(private firebaseService: FirebaseService) {

  }
}
