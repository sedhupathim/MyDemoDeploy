import { TestBed } from '@angular/core/testing';

import { ActiveInactiveUserService } from './active-inactive-user.service';

describe('ActiveInactiveUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveInactiveUserService = TestBed.get(ActiveInactiveUserService);
    expect(service).toBeTruthy();
  });
});
