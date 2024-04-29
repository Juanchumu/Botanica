import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoParcialComponent } from './segundo-parcial.component';

describe('SegundoParcialComponent', () => {
  let component: SegundoParcialComponent;
  let fixture: ComponentFixture<SegundoParcialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundoParcialComponent]
    });
    fixture = TestBed.createComponent(SegundoParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
