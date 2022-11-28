export class Logic {
    board:Array<String>;
    playerHasWon:boolean;
    currentPlayer:string;

    constructor(){
        this.board = ['','','','','','','','',''];
        this.playerHasWon = true;
        this.currentPlayer = this.getStartingPlayer();

    }

    start():void{
        this.board = ['','','','','','','','',''];
        this.currentPlayer = this.getStartingPlayer();
        this.playerHasWon = false;
        console.log("Pressed Start. Current Player: " + this.currentPlayer);
    }

    getStartingPlayer():string{
        let players = ['X','O'];
        return players[Math.floor(Math.random()*players.length)];
    }

    switchPlayer():void{
        if(this.currentPlayer === 'X'){
            this.currentPlayer = 'O';
          }
          else{
            this.currentPlayer = 'X';
          }
    }

    isBoardFilled():boolean{
        if(this.board.includes('')){
            return false;
        }
        return true;
    }

    checkX():boolean{
        if(this.board[0] === 'X' && this.board[1] === 'X' && this.board[2] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[3] === 'X' && this.board[4] === 'X' && this.board[5] == 'X'){
            this.playerHasWon = true;
        }   
        else if(this.board[6] === 'X' && this.board[7] === 'X' && this.board[8] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[0] === 'X' && this.board[3] === 'X' && this.board[6] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[1] === 'X' && this.board[4] === 'X' && this.board[7] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[2] === 'X' && this.board[5] === 'X' && this.board[8] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[0] === 'X' && this.board[4] === 'X' && this.board[8] == 'X'){
            this.playerHasWon = true;
        }
        else if(this.board[2] === 'X' && this.board[4] === 'X' && this.board[6] == 'X'){
            this.playerHasWon = true;
        }
        return this.playerHasWon;
    }

    checkO():boolean{
        if(this.board[0] === 'O' && this.board[1] === 'O' && this.board[2] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[3] === 'O' && this.board[4] === 'O' && this.board[5] == 'O'){
            this.playerHasWon = true;
        }   
        else if(this.board[6] === 'O' && this.board[7] === 'O' && this.board[8] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[0] === 'O' && this.board[3] === 'O' && this.board[6] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[1] === 'O' && this.board[4] === 'O' && this.board[7] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[2] === 'O' && this.board[5] === 'O' && this.board[8] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[0] === 'O' && this.board[4] === 'O' && this.board[8] == 'O'){
            this.playerHasWon = true;
        }
        else if(this.board[2] === 'O' && this.board[4] === 'O' && this.board[6] == 'O'){
            this.playerHasWon = true;
        }
        return this.playerHasWon;
    }
}
