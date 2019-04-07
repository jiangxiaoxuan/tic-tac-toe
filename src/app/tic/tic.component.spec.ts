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
    component.onClick(0);
    expect(component.turns[0]).toBe('X');
  });

  it('should change player at different turns', () => {
    component.onClick(0);
    component.onClick(1);
    expect(component.turns[1]).toBe('O');
  });

  it('should disable repetitive clicks', () => {
    component.onClick(0);
    component.onClick(0);
    expect(component.turns[0]).toBe('X');
  });

  it('should allow reset', () => {
    component.onClick(0);
    component.onClick(1);
    component.reset();
    expect(component.turns[0]).toBe('');
    expect(component.turns[1]).toBe('');
  });

  it('should return isWin message when a win condition appears', () => {
    component.onClick(0);
    component.onClick(1);
    component.onClick(3);
    component.onClick(2);
    component.onClick(6);
    expect(component.gameEnd).toBe(true);
    expect(component.status).toBe('X');
  });

  it('should return isWin message when a win condition appears', () => {
    component.onClick(1);
    component.onClick(0);
    component.onClick(2);
    component.onClick(3);
    component.onClick(4);
    component.onClick(6);
    expect(component.gameEnd).toBe(true);
    expect(component.status).toBe('O');
  });

});
