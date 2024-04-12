import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-task-table',
  templateUrl: './list-task-table.component.html',
  styles: ``
})
export class ListTaskTableComponent {
  @Input() data: any;

  columns = ['title', 'description', 'status', 'dueDate', 'options'];
}
