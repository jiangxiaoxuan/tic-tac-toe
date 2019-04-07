import { Component, OnInit } from '@angular/core';

const WIN_CONDITIONS: string[] = ['012', '345', '678', '036', '147', '258', '048', '246'];

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

  message: string;
  turns: string[];
  status: string;
  gameEnd: boolean;
  count: number;

  ngOnInit() {
  }

  onClick(buttonIndex: number) {
    if (this.gameEnd) {
      return;
    }
    if (this.turns[buttonIndex] !== '') {
      return;
    }

    this.turns[buttonIndex] = this.status;
    this.count++;
    this.isWin(this.status);
    if (this.gameEnd) {
      return;
    }
    if (this.status === 'X') {
      this.status = 'O';
    } else if (this.status === 'O') {
      this.status = 'X';
    }
    this.message = `It's ${this.status} turn`;
  }

  reset() {
    this.turns = ['', '', '', '', '', '', '', '', ''];
    this.status = 'X';
    this.gameEnd = false;
    this.message = `It's ${this.status} turn`;
    this.count = 0;
  }

  isWin(status) {
    for (let winCondition of WIN_CONDITIONS) {
      if (this.turns[winCondition.charAt(0)] === this.turns[winCondition.charAt(1)] && 
          this.turns[winCondition.charAt(1)] === this.turns[winCondition.charAt(2)] && 
          this.turns[winCondition.charAt(0)] !== '') {
         this.message = `Game End: ${this.status} win`;
         this.gameEnd = true;
      } else if (this.count === 9){
          this.message = "Game End: It's a tie";
          this.gameEnd = true;
      }
    }
  }
}
