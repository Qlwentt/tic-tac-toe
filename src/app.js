// import Game from 'app/models/game';
import $ from 'jquery';
// import GameView from "app/views/game_view";
import BoardView from "app/views/board_view";
import _ from 'underscore';
import Board from 'app/models/board'
import Cell from 'app/models/cell'
import GameView from "app/views/game_view";



// const Other =  require('./game.js').default;
// const game = new Other();

const gameView = new GameView({
  el: $("#test")
});

$(document).ready(function() {
	

	//set classes for cell models
	var cells =[]
	for(var i = 0; i < 9; i++){
			var cell_class= [];
			if (i < 3){
				cell_class.push("top");
			}
			
			if (i===0 || i%3 === 0){
				cell_class.push("left-side");
			}

			if (i===2 || i===5 || i===8){
				cell_class.push("right-side");
			}

			if (i===1 || i===4 || i===7){
				cell_class.push("middle");
			}

			if (i > 5){
				cell_class.push("bottom");
			}

	  		var cell = new Cell({
	  			position: (i+1).toString(),
	  			letter: "_",
	  			class: cell_class.join(" ")
	  		})

	  		console.log(cell.get("position"), cell.get("class"))
	  		cells.push(cell)
	  	};

	const board = new Board(cells);
	console.log(board)

	// var test = $("table");
	// console.log(test)
	// console.log($("#tmpl-board-cells").html())
	// console.log("body:",$("#test").html())
	// console.log("this is template:",test.html())


	const boardView = new BoardView({
		template: _.template( $("#tmpl-board-cells").html()),
		model: board,
		el: $(".board")
	});
	boardView.render();
});