import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmacComponent } from './navmac.component';

describe('NavmacComponent', () => {
  let component: NavmacComponent;
  let fixture: ComponentFixture<NavmacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
