var Player = function(playerName) {
  this.playerName = playerName;
  this.pick = null;
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Game.prototype.winner = function() {

  if (this.player1.picks === 'rock') {
    switch (this.player2.picks) {
      case 'scissors':
        return this.player1;
      case 'paper':
        return this.player2;
      case 'rock':
        return null;
    }
  }

  if (this.player1.picks === 'paper') {
    switch (this.player2.picks) {
      case 'scissors':
        return this.player2;
      case 'rock':
        return this.player1;
      case 'paper':
        return null;
    }
  }

  if (this.player1.picks === 'scissors') {
    switch (this.player2.picks) {
      case 'paper':
        return this.player1;
      case 'rock':
        return this.player2;
      case 'scissors':
        return null;
    }
  }
};

module.exports = Player;
module.exports = Game;


