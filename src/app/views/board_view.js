import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from "app/views/cell_view";

const BoardView = Backbone.View.extend({
  // template: _.template($("#all-of-it").html()),

  initialize: function(options) {
    
    
    this.cells=[];
    this.cellsTemplate = options.template;
    this.model=options.model;
    this.cell= this.$('.board');


    this.model.forEach(function(cell) {
          this.setCell(cell);
      }, this)

      
   this.listenTo(this.model, "update", this.render);
  },

  render: function() {
  	//need to finish this function. 
    //it should loop through squares and render each
    console.log("Hello:", this);
    
    this.cell.empty();
    this.delegateEvents();

    this.cells.forEach(function(cell) {
       // Cause the contact to render
        cell.render();
        console.log("it rendered")
        console.log(card.el.innerHTML)
        // Add that HTML to our board
        this.cell.append(cell.$el);
    }, this);
    console.log("matrix",this.cells)
    return this;
  },
  setCell: function(cell){
      var cellView = new CellView({
        model: cell,
        template: this.cellsTemplate,
      });

      this.cells.push(cell);
  },
  //to to finish writing this method
  createCell: function() {
      // Normally a form submission will refresh the page.
      // Suppress that behavior.
    // console.log("This happened");
    //   // Get the input data from the form and turn it into a contact
    //   var contact = new Contact(this.getInput());
    //   this.model.add(contact);
    //   console.log("rolodex",this.model)

    //   console.log("contact",contact);

    //   // Create a card (view for the card)
    //   this.addContact(contact);

    //   // Clear the input form so the user can add another contact
    //   this.clearInput();
    }
});

export default BoardView;
