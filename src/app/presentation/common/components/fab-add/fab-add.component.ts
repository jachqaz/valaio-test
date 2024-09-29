import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'fabAddComponent',
  templateUrl: './fab-add.component.html',
  styleUrls: ['./fab-add.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class FabAddComponent {

}
