import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let taskService: TasksService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [TasksService]
  }));

  beforeEach(() => {
    taskService = TestBed.get(TasksService);
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });
});
