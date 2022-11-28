import { Component } from '@angular/core';
import { Logic } from '../logic';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css'],
  providers: [Logic]
})

export class TictactoeComponent {

  constructor(public logic:Logic) { }

  start(){
    this.logic.start();
    const current = document.querySelector('.currentPlayer')
    const status = document.querySelector('.status');
    if(current != null && status != null){
      current.innerHTML = "Current Player: " + this.logic.currentPlayer;
      status.innerHTML = "";
    }
  }

  updateBoard(event:any){
    this.logic.board[parseInt(event.currentTarget.id)] = this.logic.currentPlayer;
  }

  checkWin():boolean{
    const status = document.querySelector('.status');
    const current = document.querySelector('.currentPlayer')
    if(status!=null && current != null){
      if(this.logic.checkX() ){
        status.innerHTML = "X wins!";
        current.innerHTML = "";
        this.logic.playerHasWon = true;
        return this.logic.playerHasWon;
      }
      else if(this.logic.checkO()){
        status.innerHTML = "O wins!";
        current.innerHTML = "";
        this.logic.playerHasWon = true;
        return this.logic.playerHasWon;
      }
      else if(this.logic.isBoardFilled()){
        status.innerHTML = "Tie!";
        current.innerHTML = "";
        this.logic.playerHasWon = true;
        return this.logic.playerHasWon;
      }
    }
    this.logic.playerHasWon = false;
    return this.logic.playerHasWon;
  }

  async handleClick(box:any):Promise<void>{
    const current = document.querySelector('.currentPlayer')
    if(!this.checkWin() && box.currentTarget.innerHTML==='' && !this.logic.isBoardFilled()){
      const status = document.querySelector('.status');
      if(status != null){
        status.innerHTML = "";
      }
      box.currentTarget.innerHTML = this.logic.currentPlayer;
      this.updateBoard(box);
      this.logic.switchPlayer();
        if(current != null){
          current.innerHTML = "Current Player: " + this.logic.currentPlayer;
        }
      this.checkWin();
    }
    else{
      const status = document.querySelector('.status');
      if(status != null){
          status.innerHTML = "Space is already taken!";
      }

    }
  }
}