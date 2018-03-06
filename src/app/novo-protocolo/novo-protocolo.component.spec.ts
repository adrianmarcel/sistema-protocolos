import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProtocoloComponent } from './novo-protocolo.component';

describe('NovoProtocoloComponent', () => {
  let component: NovoProtocoloComponent;
  let fixture: ComponentFixture<NovoProtocoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoProtocoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
