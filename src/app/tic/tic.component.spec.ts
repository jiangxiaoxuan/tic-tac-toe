import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicComponent } from './tic.component';

describe('TicComponent', () => {
  let component: TicComponent;
  let fixture: ComponentFixture<TicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
