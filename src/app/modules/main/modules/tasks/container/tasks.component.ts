import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { filter } from 'rxjs/operators';

import { TasksService } from '../../../services/tasks.service';
import { TaskItem } from '../models';
import { openDeleteItem } from '../helpers';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks$ = this.taskService.getTasks();

  constructor(
    private taskService: TasksService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  onSelectItem(id: string): void {
    this.router.navigate(['tasks', id]);
  }

  onChangeCompletion({ id, state }: { id: string; state: boolean }): void {
    this.taskService.changeCompletion(id, state);
  }

  onAddTask(task: TaskItem): void {
    this.taskService.addTask(task);
  }

  onDeleteItem(id: string): void {
    openDeleteItem(this.dialog, {
      message: 'Delete item?',
      question: 'Are you sure you want to delete the item?',
      cancel: 'Cancel',
      submit: 'Delete',
    })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(
        () => this.taskService.deleteTask(id)
      );
  }
}
