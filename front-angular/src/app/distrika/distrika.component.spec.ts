import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrikaComponent } from './distrika.component';

describe('DistrikaComponent', () => {
  let component: DistrikaComponent;
  let fixture: ComponentFixture<DistrikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
