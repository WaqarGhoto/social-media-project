import { TestBed } from '@angular/core/testing';

import { APIserviceService } from './apiservice.service';

describe('APIserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIserviceService = TestBed.get(APIserviceService);
    expect(service).toBeTruthy();
  });
});
