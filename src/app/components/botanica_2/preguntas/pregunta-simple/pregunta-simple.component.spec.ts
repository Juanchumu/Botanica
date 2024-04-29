import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaSimpleComponent } from './pregunta-simple.component';

describe('PreguntaSimpleComponent', () => {
  let component: PreguntaSimpleComponent;
  let fixture: ComponentFixture<PreguntaSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntaSimpleComponent]
    });
    fixture = TestBed.createComponent(PreguntaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
