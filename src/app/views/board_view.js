import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from "app/views/cell_view";

const BoardView = Backbone.View.extend({
  // template: _.template($("#all-of-it").html()),

  initialize: function(options) {
    
    
    this.moves=[];
    this.boardTemplate = options.template;
    this.model=options.model;
    this.boardArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    this.positions= {
    "1": [0,0],
    "2": [0,1],
    "3": [0,2],
    "4": [1,0],
    "5": [1,1],
    "6": [1,2],
    "7": [2,0],
    "8": [2,1],
    "9": [2,2]
    }

   
    // this.cell= this.$('.board');

    

    // this.model.forEach(function(cell) {
    //       this.setCell(cell);
    //   }, this)

      
   this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    
    
    // this.cell.empty();
    this.delegateEvents();
    // console.log("board:", this.model.toJSON());
    console.log(this.model.at(0).get("class"))
    var html = this.boardTemplate({board: this.model.toJSON()});
    // var self = this
    this.$el.html(html);
  
    //set the css classes so it can look like a tic tac toe board
    for (var i = 0; i< this.model.length; i++) {
      var itsClass = (i+1).toString()
      console.log("class:", this.model.at(i).get("class"));

      //set a data id attribute to keep track of click events
      $("."+itsClass).attr("data-id", (i+1).toString());
      $("."+itsClass).attr("class", this.model.at(i).get("class") + " " + itsClass);

    };
    // this.model.get("class"

    //   this.delegateEvents();

    //   console.log("model:",this.model)

      // var html = this.cellTemplate({model: this.model.toJSON()})

    // this.cells.forEach(function(cell) {
    //    // Cause the contact to render
    //     cell.render();
    //     console.log("it rendered")
    //     // console.log(card.el.innerHTML)
    //     // Add that HTML to our board
    //     this.cell.append(cell.$el);
    // }, this);
    // console.log("matrix",this.cells)
    return this;
  },

  events:{
      "click td": "makeMove"
  },

  makeMove: function(event){
    var id = $(event.currentTarget).data("id");
    var oppositeLetter={
      "x": "o",
      "o": "x"
    }
    console.log("I made a move on square", id);
    var thisCell = this.model.at(id-1);
    // console.log(thisCell)
    var thisLetter = thisCell.get("letter");
    var last = this.moves[this.moves.length-1];
    var movesLength = this.moves.length;
    // console.log(this.moves.length)

    if (thisLetter === "_" && this.moves.length === 0){
      // console.log("letter:",thisLetter)
      thisCell.set({letter: "x"});
      this.play(id,"x");
      this.moves.push("x");

    }else if(thisLetter === "_" && !(this.moves.length === 0)){
      thisCell.set({letter: oppositeLetter[last]});
      this.play(id,oppositeLetter[last]);
      this.moves.push(oppositeLetter[last]);
    }
    this.render();
    this.delegateEvents();

    var check=this.checkWin();
    if (check ===true){
      $("#winner").html("There was a tie.")
    }else if (typeof(check)=== "string"){
      $("#winner").html(check + " wins!")
    }  
  }, 
  checkWin: function(){
    for (let i = 0; i < this.boardArray.length; i++) {
      if (this.checker(this.boardArray[i][0], this.boardArray[i][1], this.boardArray[i][2])) {
        return this.boardArray[i][0];
      }
    }
    // Vertical column:
    for (let i = 0; i < this.boardArray.length; i++) {
      if (this.checker(this.boardArray[0][i], this.boardArray[1][i], this.boardArray[2][i])) {
        return this.boardArray[0][i];
      }
    }
    // Diagonal:
    if (this.checker(this.boardArray[0][0], this.boardArray[1][1], this.boardArray[2][2])) {
      return this.boardArray[0][0];
    } else if (this.checker(this.boardArray[0][2], this.boardArray[1][1], this.boardArray[2][0])) {
      return this.boardArray[0][2];
    }
    // Final case - checks for tie
    if (this.moves.length === 9) {
      // this.clear();
      console.log(this.moves[8]);
      return true;
    } else {
    // increment counter
      return false;
    }
  },

  play: function(spot, letter){
    var x_coord=this.positions[spot][0];
    var y_coord=this.positions[spot][1];

    this.boardArray[x_coord][y_coord]=letter;
  },

  checker:function(element1, element2, element3) {
    // Ensures that default values in board do not cause a false win
    if (element1.match(/[a-z]/i) && element1.match(/[a-z]/i) && element1.match(/[a-z]/i)) {
      return (element1 === element2 && element2 === element3);
    } else {
        return false;
    }
  },
  clear: function(){
    this.delegateEvents();
    console.log("I pushed it");
    this.boardArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    this.moves = [];
    
    for (var i = 0; i< this.model.length; i++) {
      this.model.at(i).set({letter: "_"});
    };

    this.render();
  }
  // setCell: function(cell){
  //     var cellView = new CellView({
  //       model: cell,
  //       template: this.cellsTemplate,
  //     });
  //     console.log(cellView)
  //     this.cells.push(cellView);
  // },
  //to to finish writing this method
});

export default BoardView;
