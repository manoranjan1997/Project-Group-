import { TestBed } from '@angular/core/testing';

import { RegStuServiceService } from './reg-stu-service.service';

describe('RegStuServiceService', () => {
  let service: RegStuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegStuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
