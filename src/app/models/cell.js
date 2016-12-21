import Backbone from 'backbone';

const Cell = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
	defaults: {
		position: "1",
		letter: "x"
	},
	initialize: function (options){
		console.log("Cell # "+ this.get("position") + "created")
	}
});

export default Cell;