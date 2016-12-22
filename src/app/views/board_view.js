import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from "app/views/cell_view";

const BoardView = Backbone.View.extend({
  // template: _.template($("#all-of-it").html()),

  initialize: function(options) {
    
    
    this.cells=[];
    this.boardTemplate = options.template;
    this.model=options.model;
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
    console.log("I made a move on square", id);
    this.model.at(id-1).set({letter: "x"})
    this.render()
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
