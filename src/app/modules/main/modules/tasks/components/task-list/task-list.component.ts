import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskItem } from '../../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskItems: TaskItem[];

  @Output() changeCompletion = new EventEmitter<{
    id: string;
    state: boolean;
  }>();
  @Output() selectItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();

  onChangeCompletion(item: { id: string; state: boolean }): void {
    this.changeCompletion.emit(item);
  }

  onSelectItem(id: string): void {
    this.selectItem.emit(id);
  }

  onDeleteItem(id: string): void {
    this.deleteItem.emit(id);
  }
}
