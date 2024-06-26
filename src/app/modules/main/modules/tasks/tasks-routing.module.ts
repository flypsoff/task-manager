import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './container/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: ':taskId',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
