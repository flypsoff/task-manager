import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form.component';
import { taskItemMock1 } from '../../mocks/task-item.mock';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      imports: [ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should initialize form with 2 fields, if there is no task', () => {
      component.ngOnInit();

      expect(Object.keys(component.taskForm.controls).length).toEqual(2);
    });

    it('should initialize form with 3 fields, if there is task', () => {
      component.task = taskItemMock1;

      component.ngOnInit();

      expect(Object.keys(component.taskForm.controls).length).toEqual(3);
    });
  });

  describe('#onClick', () => {
    it('should mark all controls as touched', () => {
      component.onClick();

      expect(component.taskForm.controls.name.touched).toBeTruthy();
      expect(component.taskForm.controls.description.touched).toBeTruthy();
    });

    it('if form is valid should emit modifyTask', () => {
      const name = 'Jake';
      const description = 'desc';
      component.taskForm.controls.name.setValue(name);
      component.taskForm.controls.description.setValue(description);
      spyOn(component.modifyTask, 'emit');

      component.onClick();

      expect(component.modifyTask.emit).toHaveBeenCalledWith({
        name,
        description,
        isCompleted: false
      });
    });

    it('if form is bot valid should bot emit modifyTask', () => {
      spyOn(component.modifyTask, 'emit');

      component.onClick();

      expect(component.modifyTask.emit).not.toHaveBeenCalled();
    });
  });
});
