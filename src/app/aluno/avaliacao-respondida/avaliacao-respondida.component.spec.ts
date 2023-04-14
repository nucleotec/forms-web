import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoRespondidaComponent } from './avaliacao-respondida.component';

describe('AvaliacaoRespondidaComponent', () => {
  let component: AvaliacaoRespondidaComponent;
  let fixture: ComponentFixture<AvaliacaoRespondidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoRespondidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoRespondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
