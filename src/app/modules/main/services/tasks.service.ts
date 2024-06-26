import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { TaskItem } from '../modules/tasks/models';

/* Service with dumb logic, because in real application it will be call some API */

@Injectable()
export class TasksService {

  private tasks: BehaviorSubject<TaskItem[]> = new BehaviorSubject([
    {
      id: '12',
      name: 'Task 1',
      description: 'Some random text 1',
      isCompleted: false
    }, {
      id: '23',
      name: 'Task 2',
      description: 'Some random text 2',
      isCompleted: true
    },
  ]);

  private selectedTask: BehaviorSubject<TaskItem> = new BehaviorSubject(null);

  getTasks(): Observable<TaskItem[]> {
    return this.tasks;
  }

  getTaskById(id: string): Observable<TaskItem> {
    const task = this.tasks.value.find(task => task.id === id);
    this.selectedTask.next(task);


    return this.selectedTask;
  }

  addTask(task: TaskItem): void {
    this.tasks.next([
      {
        ...task,
        id: `${Date.now()}`
      },
      ...this.tasks.value
    ]);
  }

  changeCompletion(taskId: string, state: boolean): void {
    this.tasks.next(this.tasks.value.map(task => {
      if (task.id === taskId) {
        task.isCompleted = state;
      }

      return task;
    }));
  }

  editTask(editedTask: TaskItem): void {
    this.selectedTask.next({
      ...this.selectedTask.value,
      ...editedTask
    });

    this.tasks.next(this.tasks.value.map(task => {
      if (task.id === editedTask.id) {
        return {
          ...task,
          ...editedTask
        };
      }

      return task;
    }));
  }

  deleteTask(id: string): void {
    const tasks = this.tasks.value.filter(task => task.id !== id);

    if (this.selectedTask.value && this.selectedTask.value.id === id) {
      this.selectedTask.next(null);
    }

    this.tasks.next(tasks);
  }
}
