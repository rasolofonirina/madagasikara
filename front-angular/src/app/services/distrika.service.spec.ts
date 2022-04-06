import { TestBed } from '@angular/core/testing';

import { DistrikaService } from './distrika.service';

describe('DistrikaService', () => {
  let service: DistrikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
