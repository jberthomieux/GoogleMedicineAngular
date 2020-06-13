import { TestBed } from '@angular/core/testing';

import { MserviceService } from './mservice.service';

describe('MserviceService', () => {
  let service: MserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
