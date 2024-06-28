import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { TasksComponent } from './tasks.component';
import { TasksService } from '../../../services/tasks.service';
import { taskItemMock1 } from '../mocks/task-item.mock';
import { MatDialogMock } from '../../../../../common/share/mocks';


describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let router: Router;
  let tasksService: TasksService;

  const id = '12a';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatExpansionModule, BrowserAnimationsModule],
      declarations: [
        TasksComponent,
      ],
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
          provide: MatDialog, useClass: MatDialogMock
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    tasksService = TestBed.get(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSelectItem', () => {
    it('should call navigate with @tasks and @id', () => {
      const routerNavigateSpy = spyOn(router, 'navigate');

      component.onSelectItem(id);

      expect(routerNavigateSpy).toHaveBeenCalledWith(['tasks', id]);
    });
  });

  describe('#onChangeCompletion', () => {
    it('should call taskService.changeCompletion with @id and @state', () => {
      const state = false;
      const spyChangeCompletion = spyOn(tasksService, 'changeCompletion');

      component.onChangeCompletion({ id, state });

      expect(spyChangeCompletion).toHaveBeenCalledWith(id, state);
    });
  });

  describe('#onAddTask', () => {
    it('should call taskService.addTask with @task', () => {
      const spyAddTask = spyOn(tasksService, 'addTask');

      component.onAddTask(taskItemMock1);

      expect(spyAddTask).toHaveBeenCalledWith(taskItemMock1);
    });
  });

  describe('#onDeleteItem', () => {
    it('should open modal', () => {
      const modalSpy = spyOn(TestBed.get(MatDialog), 'open').and.callThrough();

      component.onDeleteItem(id);

      expect(modalSpy).toHaveBeenCalled();
    });

    it('on success should call taskService.deleteTask with @id', () => {
      spyOn(TestBed.get(MatDialog), 'open').and.returnValue({ afterClosed: () => of(true) });

      const spyDeleteTask = spyOn(tasksService, 'deleteTask');

      component.onDeleteItem(id);

      expect(spyDeleteTask).toHaveBeenCalledWith(id);
    });
  });
});
