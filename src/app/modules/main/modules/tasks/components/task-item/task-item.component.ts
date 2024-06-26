import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { TaskItem } from '../../models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {
  @Input() taskItem: TaskItem;

  @Output() selectItem = new EventEmitter<string>();
  @Output() deleteItem = new EventEmitter<string>();
  @Output() changeCompletion = new EventEmitter<{
    id: string;
    state: boolean;
  }>();

  onSelectItem(id: string): void {
    this.selectItem.emit(id);
  }

  onChangeCompletion(id: string, event: MatCheckboxChange): void {
    this.changeCompletion.emit({
      id,
      state: event.checked
    });
  }

  onDeleteItem(id: string, event: MouseEvent): void {
    event.stopPropagation();
    
    this.deleteItem.emit(id);
  }
}
