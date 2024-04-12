import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AddTaskPageComponent, EditTaskPageComponent, ListTaskPageComponent, ViewTaskPageComponent } from "./pages";
import { AddTaskControllerComponent, EditTaskControllerComponent, ListTaskControllerComponent, ViewTaskControllerComponent } from "./controllers";
import { AddTaskFormComponent, ListTaskTableComponent, EditTaskFormComponent } from "./components";
import { ViewTaskComponent } from './components/view-task/view-task.component';

@NgModule({
  declarations: [
    AddTaskPageComponent,
    EditTaskPageComponent,
    ListTaskPageComponent,
    AddTaskControllerComponent,
    EditTaskControllerComponent,
    ListTaskControllerComponent,
    AddTaskFormComponent,
    ListTaskTableComponent,
    EditTaskFormComponent,
    ViewTaskPageComponent,
    ViewTaskControllerComponent,
    ViewTaskComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    RouterModule.forChild([
      {
        path: 'task/list',
        component: ListTaskPageComponent,
        children: [{ path: 'view/:id', component: ViewTaskPageComponent, outlet: 'aside' }],
      },
      { path: 'task/add', component: AddTaskPageComponent },
      { path: 'task/edit/:id', component: EditTaskPageComponent },
    ]),
  ],
})
export class TaskModule { }
