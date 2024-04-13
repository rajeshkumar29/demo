import { NgModule, importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { taskFeatureKey, reducer, TaskEffects } from "./store";
import { AddTaskFormComponent, ListTaskTableComponent, EditTaskFormComponent, ViewTaskComponent, ConfirmDeleteTaskComponent } from "./components";
import { AddTaskPageComponent, EditTaskPageComponent, ListTaskPageComponent, ViewTaskPageComponent } from "./pages";
import { AddTaskControllerComponent, EditTaskControllerComponent, ListTaskControllerComponent, ViewTaskControllerComponent } from "./controllers";

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
    ConfirmDeleteTaskComponent,
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
    MatProgressBarModule,
    MatDialogModule,
    StoreModule.forFeature(taskFeatureKey, reducer),
    EffectsModule.forFeature([TaskEffects]),
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
