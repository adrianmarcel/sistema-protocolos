import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolosRecebidosComponent } from './protocolos-recebidos.component';

describe('ProtocolosRecebidosComponent', () => {
  let component: ProtocolosRecebidosComponent;
  let fixture: ComponentFixture<ProtocolosRecebidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolosRecebidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolosRecebidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
