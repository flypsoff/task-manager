import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TaskItem } from '../../models';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent implements OnInit {
  @Input() task: TaskItem;
  @Input() btnText: string;

  @Output() modifyTask = new EventEmitter<TaskItem>();

  taskForm: FormGroup;

  get isButtonDisabled(): boolean {
    return this.taskForm.controls.name.invalid
      || (this.task && this.taskForm.controls.name.value === this.task.name
        && this.taskForm.controls.description.value === this.task.description);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onClick(): void {
    this.taskForm.markAllAsTouched();

    if (this.taskForm.valid) {
      const task = {
        ...this.taskForm.value,
        ...(!this.task && {
          isCompleted: false
        }),
      };

      this.modifyTask.emit(task);
      !this.task && this.taskForm.reset();
    }
  }

  private initForm(): void {
    this.taskForm = new FormGroup({
      name: new FormControl(this.task && this.task.name || '', Validators.required),
      description: new FormControl(this.task && this.task.description || ''),
      ...(this.task && {
        id: new FormControl(this.task.id)
      })
    });
  }
}
