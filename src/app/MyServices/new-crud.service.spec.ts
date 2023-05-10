import { TestBed } from '@angular/core/testing';

import { NewCrudService } from './new-crud.service';

describe('NewCrudService', () => {
  let service: NewCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
