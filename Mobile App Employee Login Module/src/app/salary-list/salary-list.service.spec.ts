import { TestBed } from '@angular/core/testing';

import { SalaryListService } from './salary-list.service';

describe('SalaryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryListService = TestBed.get(SalaryListService);
    expect(service).toBeTruthy();
  });
});
