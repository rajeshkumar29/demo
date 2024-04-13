import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from '../../../../models';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styles: ':host {@apply block w-[50vw]}',
})
export class ViewTaskComponent {
  @Input() data?: TaskModel | null = null;
  @Output() back = new EventEmitter();
}
