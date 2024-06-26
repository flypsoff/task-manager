import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TasksService } from '../../../../../services/tasks.service';
import { TaskItem } from '../../../models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task$: Observable<TaskItem>;

  constructor(private taskService: TasksService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.task$ = this.taskService.getTaskById(p['taskId']);
    });
  }

  onClick(): void {
    this.router.navigate(['tasks']);
  }

  onEditTask(task: TaskItem): void {
    this.taskService.editTask(task);
  }
}
