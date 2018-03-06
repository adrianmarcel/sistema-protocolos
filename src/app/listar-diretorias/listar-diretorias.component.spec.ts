import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiretoriasComponent } from './listar-diretorias.component';

describe('ListarDiretoriasComponent', () => {
  let component: ListarDiretoriasComponent;
  let fixture: ComponentFixture<ListarDiretoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDiretoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiretoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
