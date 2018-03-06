import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolosEnviadosComponent } from './protocolos-enviados.component';

describe('ProtocolosEnviadosComponent', () => {
  let component: ProtocolosEnviadosComponent;
  let fixture: ComponentFixture<ProtocolosEnviadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolosEnviadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolosEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
