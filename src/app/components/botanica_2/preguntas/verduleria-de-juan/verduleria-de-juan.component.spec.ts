import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerduleriaDeJuanComponent } from './verduleria-de-juan.component';

describe('VerduleriaDeJuanComponent', () => {
  let component: VerduleriaDeJuanComponent;
  let fixture: ComponentFixture<VerduleriaDeJuanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerduleriaDeJuanComponent]
    });
    fixture = TestBed.createComponent(VerduleriaDeJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
