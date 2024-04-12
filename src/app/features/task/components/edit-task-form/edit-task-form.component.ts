import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styles: ``
})
export class EditTaskFormComponent {
  form = this.fb.group({
    title: ['', Validators.required],
    description: '',
    status: ['', Validators.required],
    dueDate: '',
  });

  constructor(private fb: NonNullableFormBuilder) { }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
  }
}
