import { TestBed } from '@angular/core/testing';

import { FacebookuserService } from './facebookuser.service';

describe('FacebookuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookuserService = TestBed.get(FacebookuserService);
    expect(service).toBeTruthy();
  });
});
