import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './container/task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
