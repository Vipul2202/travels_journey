import { TestBed } from '@angular/core/testing';

import { FareServiceService } from './fare-service.service';

describe('FareServiceService', () => {
  let service: FareServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FareServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
