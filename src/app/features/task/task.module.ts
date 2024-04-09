import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddTaskPageComponent, EditTaskPageComponent, ListTaskPageComponent } from "./pages";
import { AddTaskControllerComponent, EditTaskControllerComponent, ListTaskControllerComponent } from "./controllers";

@NgModule({
  declarations: [
    AddTaskPageComponent,
    EditTaskPageComponent,
    ListTaskPageComponent,
    AddTaskControllerComponent,
    EditTaskControllerComponent,
    ListTaskControllerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'task/list', component: ListTaskPageComponent },
      { path: 'task/add', component: AddTaskPageComponent },
      { path: 'task/edit', component: EditTaskPageComponent },
    ]),
  ],
})
export class TaskModule { }
