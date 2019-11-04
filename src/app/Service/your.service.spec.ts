import { TestBed } from '@angular/core/testing';

import { YourServiceService } from './your.service';

describe('YourServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourServiceService = TestBed.get(YourServiceService);
    expect(service).toBeTruthy();
  });
});
