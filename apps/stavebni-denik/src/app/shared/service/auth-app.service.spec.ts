import { TestBed } from '@angular/core/testing';

import { AuthAppService } from './auth-app.service';

describe('AuthService', () => {
  let service: AuthAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
