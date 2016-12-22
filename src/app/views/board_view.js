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
    console.log("board:", this.model.toJSON());
    var html = this.boardTemplate({board: this.model.toJSON()});
    // var self = this
    this.$el.html(html);

    // for (var i = 0; this.model.length - 1; i++) {
    //  $(self.el).addClass(self.model.at(i).class);
    // };
    

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
