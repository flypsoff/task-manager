import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './container/main.component';
import { MainRoutingModule } from './main-routing.module';
import { TasksService } from './services/tasks.service';
import { ConfirmModalModule } from '../../common/components/confirm-modal/confirm-modal.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ConfirmModalModule,
  ],
  providers: [TasksService]
})
export class MainModule {
}
