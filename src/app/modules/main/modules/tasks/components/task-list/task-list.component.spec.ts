import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  const id = '1a';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChangeCompletion', () => {
    it('should emit changeCompletion with @item', () => {
      const item = {id, state: false};
      spyOn(component.changeCompletion, 'emit');

      component.onChangeCompletion(item);

      expect(component.changeCompletion.emit).toHaveBeenCalledWith(item);
    });
  });

  describe('onSelectItem', () => {
    it('should emit selectItem with @id', () => {
      spyOn(component.selectItem, 'emit');

      component.onSelectItem(id);

      expect(component.selectItem.emit).toHaveBeenCalledWith(id);
    });
  });

  describe('onDeleteItem', () => {
    it('should emit deleteItem with @id', () => {
      spyOn(component.deleteItem, 'emit');

      component.onDeleteItem(id);

      expect(component.deleteItem.emit).toHaveBeenCalledWith(id);
    });
  });
});
