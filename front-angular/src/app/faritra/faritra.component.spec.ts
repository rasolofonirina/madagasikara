import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaritraComponent } from './faritra.component';

describe('FaritraComponent', () => {
  let component: FaritraComponent;
  let fixture: ComponentFixture<FaritraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaritraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaritraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
