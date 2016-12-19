import Game from 'app/models/game';

var game = new Game();

var appView = new ApplicationView({
  el: $('body'),
  model: game
});