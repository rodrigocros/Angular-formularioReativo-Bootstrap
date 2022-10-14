import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMateriaisComponent } from './registro-materiais.component';

describe('RegistroMateriaisComponent', () => {
  let component: RegistroMateriaisComponent;
  let fixture: ComponentFixture<RegistroMateriaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMateriaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
