import { TestBed } from '@angular/core/testing';

import { KaominaService } from './kaomina.service';

describe('KaominaService', () => {
  let service: KaominaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaominaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
