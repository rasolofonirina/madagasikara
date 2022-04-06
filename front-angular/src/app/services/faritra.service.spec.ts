import { TestBed } from '@angular/core/testing';

import { FaritraService } from './faritra.service';

describe('FaritraService', () => {
  let service: FaritraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaritraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
