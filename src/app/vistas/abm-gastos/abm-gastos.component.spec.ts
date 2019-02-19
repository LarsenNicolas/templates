import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmGastosComponent } from './abm-gastos.component';

describe('AbmGastosComponent', () => {
  let component: AbmGastosComponent;
  let fixture: ComponentFixture<AbmGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
