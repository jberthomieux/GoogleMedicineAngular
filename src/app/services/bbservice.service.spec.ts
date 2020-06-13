import { TestBed } from '@angular/core/testing';

import { BbserviceService } from './bbservice.service';

describe('BbserviceService', () => {
  let service: BbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
