import { TestBed } from '@angular/core/testing';

import { FokontanyService } from './fokontany.service';

describe('FokontanyService', () => {
  let service: FokontanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FokontanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
