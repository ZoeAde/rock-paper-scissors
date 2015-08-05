var Player = function(playerName) {
  this.playerName = playerName;
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Game.prototype.winner = function() {
  if (this.player1.pick === this.player2.pick) {
    return null;
  }
  else if (this.player1.pick === 'rock' && this.player2.pick === 'scissors') {
    return this.player1;
  }
};

