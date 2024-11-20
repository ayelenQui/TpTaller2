import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearListaComponent } from './crearLista.component';

describe('CrearTareaComponent', () => {
  let component: CrearListaComponent;
  let fixture: ComponentFixture<CrearListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
