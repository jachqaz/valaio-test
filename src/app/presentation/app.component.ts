import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../data/services/firebase.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {
  }

  async ngOnInit() {
    this.firebaseService.addDoc("data1").then(result => {
        console.log(result);
        this.firebaseService.getDoc("data1").then(result => {
            console.log(result.docs[1].data());
          }
          , error => {
            console.log(error);
          });
      }
      , error => {
        console.log(error);
      });
  }
}
