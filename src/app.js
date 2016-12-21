import Game from 'app/models/game';
import $ from 'jquery';
// import GameView from "app/views/game_view";
import BoardView from "app/views/board_view";
import _ from 'underscore';
import Board from 'app/models/board'
import Cell from 'app/models/cell'



const Other =  require('./game.js').default;
const game = new Other();

// const gameView = new GameView({
//   el: $("#test")
// });
$(document).ready(function() {
	var cells =[]
	for(var i = 0; i < 9; i++){

	  		var cell = new Cell({
	  			position: (i+1).toString(),
	  			letter: "x"
	  		})
	  		cells.push(cell)
	  	};

	var board = new Board(cells);


	var test = $("#tmpl-board-cells");
	console.log(test)
	console.log($("#tmpl-board-cells").html())
	console.log("body:",$("#test").html())
	console.log("this is template:",test.html())


	const boardView = new BoardView({
		template: _.template( $("#tmpl-board-cells").html()),
		model: board,
		el: $("body")
	});

});