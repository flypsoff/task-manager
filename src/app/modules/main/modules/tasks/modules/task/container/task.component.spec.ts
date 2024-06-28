import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { of } from 'rxjs';

import { TaskComponent } from './task.component';
import { TasksService } from '../../../../../services/tasks.service';
import { taskItemMock1 } from '../../../mocks/task-item.mock';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let tasksService: TasksService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        TasksService,
        {
          provide: Router,
          useValue: {
            navigate: () => {
            }
          }
        },
        {
          provide: ActivatedRoute, useValue: {
            params: of({ taskId: '12a' })
          }
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.get(TasksService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onClick', () => {
    it('should call navigate with @tasks', () => {
      const routerNavigateSpy = spyOn(router, 'navigate');

      component.onClick();

      expect(routerNavigateSpy).toHaveBeenCalledWith(['tasks']);
    });
  });

  describe('#onEditTask', () => {
    it('should call taskService.editTask with @task', () => {
      const editTaskSpy = spyOn(tasksService, 'editTask');

      component.onEditTask(taskItemMock1);

      expect(editTaskSpy).toHaveBeenCalledWith(taskItemMock1);
    });
  });
});
