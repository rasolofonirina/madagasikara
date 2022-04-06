import { TestBed } from '@angular/core/testing';

import { FaritanyService } from './faritany.service';

describe('FaritanyService', () => {
  let service: FaritanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaritanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
