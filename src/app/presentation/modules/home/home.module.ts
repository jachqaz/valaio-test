import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {MatButtonModule} from "@angular/material/button";
import {CreateSkillComponent} from './new-task/create-person/create-skill/create-skill.component';
import {FabAddComponent} from "../../common/components/fab-add/fab-add.component";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CreatePersonComponent} from "./new-task/create-person/create-person.component";
import {MatNativeDateModule} from "@angular/material/core";
import {SkillComponent} from './new-task/create-person/create-skill/skill/skill.component';


@NgModule({
    declarations: [HomeComponent, NewTaskComponent, CreatePersonComponent, CreateSkillComponent, SkillComponent],
    imports: [
        HomeRoutingModule,
        MatButtonModule,
        FabAddComponent,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class HomeModule {
}
