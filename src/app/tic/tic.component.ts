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

  // TODO: make it a constant
  winConditions: string[] = ["012", "345", "678","036","147","258","048","246"];
  gameEnd: boolean = false;

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
    this.isWin(this.winConditions, this.status);
  }

  reset() {
    this.turns = ['', '', '', '', '', '', '', '', ''];
  }

  isWin(winConditions, status) {
    for (var winCondition of winConditions) {
      if ((this.turns[winCondition.charAt(0)] === this.turns[winCondition.charAt(1)]) && (this.turns[winCondition.charAt(1)] === this.turns[winCondition.charAt(2)]) && this.turns[winCondition.charAt(0)] !== "") {
         console.log( status + " wins");
         this.gameEnd = true;
      }
    }
  }
}
