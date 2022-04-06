import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaominaComponent } from './kaomina.component';

describe('KaominaComponent', () => {
  let component: KaominaComponent;
  let fixture: ComponentFixture<KaominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
