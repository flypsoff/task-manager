import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { TaskItemComponent } from './task-item.component';
import { taskItemMock1 } from '../../mocks/task-item.mock';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  const id = '1a';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.taskItem = taskItemMock1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelectItem', () => {
    it('should emit selectItem with @id', () => {
      spyOn(component.selectItem, 'emit');

      component.onSelectItem(id);

      expect(component.selectItem.emit).toHaveBeenCalledWith(id);
    });
  });

  describe('onChangeCompletion', () => {
    it('should emit changeCompletion with @id and @state', () => {
      const state = false;
      spyOn(component.changeCompletion, 'emit');

      component.onChangeCompletion(id, {checked: state} as MatCheckboxChange);

      expect(component.changeCompletion.emit).toHaveBeenCalledWith({ id, state });
    });
  });

  describe('onDeleteItem', () => {
    it('should emit deleteItem with @id', () => {
      const event: MouseEvent = new MouseEvent('click');
      const stopPropagationSpy = spyOn(event, 'stopPropagation');

      component.onDeleteItem(id, event);

      expect(stopPropagationSpy).toHaveBeenCalledWith();
    });

    it('should emit deleteItem with @id', () => {
      const event: MouseEvent = new MouseEvent('click');

      spyOn(component.deleteItem, 'emit');

      component.onDeleteItem(id, event);

      expect(component.deleteItem.emit).toHaveBeenCalledWith(id);
    });
  });
});
