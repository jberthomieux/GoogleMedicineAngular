import { TestBed } from '@angular/core/testing';

import { MsserviceService } from './msservice.service';

describe('MsserviceService', () => {
  let service: MsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
