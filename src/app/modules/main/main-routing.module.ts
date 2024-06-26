import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './container/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
