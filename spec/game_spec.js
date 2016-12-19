import Game from "game"
import Player from "player"
import Board from "board"

describe('Game', function() {

	describe('new Game', function() {
	    it('should create a new game with two players and a board', function() {
	        var testGame = new Game;
	        expect(testGame.player1 instanceof Player).toEqual(true);
	        expect(testGame.player2 instanceof Player).toEqual(true);
	        expect(testGame.board instanceof Board).toEqual(true);
	    });
	});

	describe('start', function() {
	    it('can specify player names when starting a game', function() {
	       var testGame = new Game;
	       expect(testGame.player1.name).toEqual("");
	       expect(testGame.player2.name).toEqual("");
	       testGame.start("Quai","Melissa");
	       expect(testGame.player1.name).toEqual("Quai");
	       expect(testGame.player2.name).toEqual("Melissa");
	    });
	});

	describe('start', function() {
	    it('players names must be present', function() {
	       var testGame = new Game;
	       expect(function(){testGame.start();}).toThrow("missingArgumentsError");
	       
	    });
	});

	describe('start', function() {
	    it('players names must be strings', function() {
	       var testGame = new Game;
	       expect(function(){testGame.start(3,3);}).toThrow(TypeError());
	       
	    });
	});

});

