import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2homeComponent } from './b2home.component';

describe('B2homeComponent', () => {
  let component: B2homeComponent;
  let fixture: ComponentFixture<B2homeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2homeComponent]
    });
    fixture = TestBed.createComponent(B2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
