import Game from 'app/models/game';
import $ from 'jquery';
import GameView from "app/views/game_view"




const Other =  require('./game.js').default;
const game = new Other();

const gameView = new GameView({
  el: $("body")
});

const boardView = new BoardView{
	template: _.template($("#tmpl-board-cells").html()),
	model: board,
	el: $("body")
}