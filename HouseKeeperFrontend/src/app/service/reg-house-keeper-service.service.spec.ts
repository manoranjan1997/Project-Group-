import { TestBed } from '@angular/core/testing';

import { RegHouseKeeperServiceService } from './reg-house-keeper-service.service';

describe('RegHouseKeeperServiceService', () => {
  let service: RegHouseKeeperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegHouseKeeperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
