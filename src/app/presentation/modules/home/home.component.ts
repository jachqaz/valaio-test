import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTaskComponent} from "./new-task/new-task.component";
import {FirebaseService} from "../../../data/services/firebase.service";

@Component({
  selector: 'homeComponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly dialog = inject(MatDialog);

  constructor(private firebaseService: FirebaseService) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      maxWidth: '100%',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
