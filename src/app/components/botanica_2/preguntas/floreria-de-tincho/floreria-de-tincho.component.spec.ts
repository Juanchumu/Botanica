import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloreriaDeTinchoComponent } from './floreria-de-tincho.component';

describe('FloreriaDeTinchoComponent', () => {
  let component: FloreriaDeTinchoComponent;
  let fixture: ComponentFixture<FloreriaDeTinchoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloreriaDeTinchoComponent]
    });
    fixture = TestBed.createComponent(FloreriaDeTinchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
