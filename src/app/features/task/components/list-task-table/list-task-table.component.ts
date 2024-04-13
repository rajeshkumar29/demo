import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-task-table',
  templateUrl: './list-task-table.component.html',
  styles: ``
})
export class ListTaskTableComponent {
  @Input() data: any;
  @Input() isDataPending: boolean | null = false;
  @Input() dataError: string | null = '';
  @Input() isDeletePending: boolean | null = false;
  @Input() deleteError: string | null = '';
  @Output() delete = new EventEmitter();

  columns = ['title', 'description', 'status', 'dueDate', 'options'];
}
