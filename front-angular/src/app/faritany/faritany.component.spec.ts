import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaritanyComponent } from './faritany.component';

describe('FaritanyComponent', () => {
  let component: FaritanyComponent;
  let fixture: ComponentFixture<FaritanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaritanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaritanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
