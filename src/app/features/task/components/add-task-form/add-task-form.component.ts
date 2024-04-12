import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
})
export class AddTaskFormComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    description: '',
    status: ['', Validators.required],
    dueDate: [''],
  });

  constructor(private fb: NonNullableFormBuilder) { }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
