import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TasksComponent } from './container/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { ButtonModule } from '../../../../common/components/button/button.module';

@NgModule({
  declarations: [TasksComponent, TaskListComponent, TaskItemComponent, TaskFormComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    ButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    TaskFormComponent
  ]
})
export class TasksModule {
}
