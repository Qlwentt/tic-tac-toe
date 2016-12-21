import Backbone from 'backbone';
import Cell from 'app/models/cell';



const Board = Backbone.Collection.extend({
  
	model: Cell
});

export default Board;