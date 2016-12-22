import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Cell from 'app/models/cell';


const CellView = Backbone.View.extend({
	initialize: function(options) {
	  // Compile a template to be shared between the individual tasks
	  // this.cellTemplate = options.template;

	  // this.model=options.model;
	

  },
  	

	render: function() {
	    //could use .attributes but that's bad for some reason
	    // var html = this.contactTemplate({contact: this.model.attributes})
	 	// $(this.el).addClass(this.model.class);

	  //   this.delegateEvents();

	  //   console.log("model:",this.model)

	    // var html = this.cellTemplate({model: this.model.toJSON()})

	  	//insert it into the html 
	  	//in the spot where <%-name %> is in the underscore template
	  	// this.$el.html(html);
    return this;
  }
});
  export default CellView;
