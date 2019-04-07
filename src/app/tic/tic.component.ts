import { Component, OnInit } from '@angular/core';

/**
 * TicComponent is a component for tic-tac-toe game.
 */
@Component({
  selector: 'app-tic',
  templateUrl: './tic.component.html',
  styleUrls: ['./tic.component.css']
})
export class TicComponent implements OnInit {

  constructor() {
    this.reset();
  }

  turns: string[];
  status = 'O';

  ngOnInit() {
  }

  onClick(buttonIndex: number) {
    if (this.turns[buttonIndex] !== '') {
      return;
    }
    if (this.status === 'X') {
      this.status = 'O';
      this.turns[buttonIndex] = this.status;
    } else if (this.status === 'O') {
      this.status = 'X';
      this.turns[buttonIndex] = this.status;
    }
  }

  reset() {
    this.turns = ['', '', '', '', '', '', '', '', ''];
  }
}
