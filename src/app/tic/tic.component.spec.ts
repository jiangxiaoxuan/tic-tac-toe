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

  it('should interact when clicked', () => {
    component.onClickMe(0);
    expect(component.turns[0]).toBe('X');
  });

  it('should change player at different turns', () => {
    component.onClickMe(0);
    component.onClickMe(1);
    expect(component.turns[1]).toBe('O');
  });

  it('should disable repetitive clicks', () => {
    component.onClickMe(0);
    component.onClickMe(0);
    expect(component.turns[0]).toBe('X');
  });

  it('should allow reset', () => {
    component.onClickMe(0);
    component.onClickMe(1);
    component.reset();
    expect(component.turns[0]).toBe('');
    expect(component.turns[1]).toBe('');
  });

});
