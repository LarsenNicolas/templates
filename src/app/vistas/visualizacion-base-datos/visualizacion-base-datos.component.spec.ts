import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionBaseDatosComponent } from './visualizacion-base-datos.component';

describe('VisualizacionBaseDatosComponent', () => {
  let component: VisualizacionBaseDatosComponent;
  let fixture: ComponentFixture<VisualizacionBaseDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionBaseDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionBaseDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
