import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FokontanyComponent } from './fokontany.component';

describe('FokontanyComponent', () => {
  let component: FokontanyComponent;
  let fixture: ComponentFixture<FokontanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FokontanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FokontanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
