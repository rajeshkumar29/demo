import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-task',
  templateUrl: './confirm-delete-task.component.html',
})
export class ConfirmDeleteTaskComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
  ) { }

  delete() {
    this.dialogRef.close({id: this.data.id});
  }
}
