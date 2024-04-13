import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styles: ``
})
export class EditTaskFormComponent {
  @Input() set data(data: any) {
    console.log(data);
    if (!data) return;
    this.form.patchValue(data);
  }
  @Input() isPending: boolean | null = null;
  @Input() error: string | null = null;
  @Output() submitForm = new EventEmitter();

  form = this.fb.group({
    id: '',
    title: ['', Validators.required],
    description: '',
    status: ['', Validators.required],
    dueDate: '',
  });

  constructor(private fb: NonNullableFormBuilder) { }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.submitForm.emit(this.form.value);
  }
}
