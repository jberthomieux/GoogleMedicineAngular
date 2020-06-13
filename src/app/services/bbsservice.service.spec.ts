import { TestBed } from '@angular/core/testing';

import { BbsserviceService } from './bbsservice.service';

describe('BbsserviceService', () => {
  let service: BbsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
