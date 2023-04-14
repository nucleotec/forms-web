import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutaComponent } from './conduta.component';

describe('CondutaComponent', () => {
  let component: CondutaComponent;
  let fixture: ComponentFixture<CondutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
