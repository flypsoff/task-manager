import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TaskComponent } from './container/task.component';
import { TaskRoutingModule } from './task-routing.module';
import { TasksModule } from '../../tasks.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatButtonModule,
    TasksModule
  ]
})
export class TaskModule {
}
