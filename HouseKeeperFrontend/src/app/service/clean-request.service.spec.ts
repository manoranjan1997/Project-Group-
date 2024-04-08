import { TestBed } from '@angular/core/testing';

import { CleanRequestService } from './clean-request.service';

describe('CleanRequestService', () => {
  let service: CleanRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
