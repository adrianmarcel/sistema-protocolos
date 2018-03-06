import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDiretoriaComponent } from './cadastro-diretoria.component';

describe('CadastroDiretoriaComponent', () => {
  let component: CadastroDiretoriaComponent;
  let fixture: ComponentFixture<CadastroDiretoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDiretoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDiretoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
