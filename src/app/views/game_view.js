import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  // template: _.template($("#all-of-it").html()),

  initialize: function() {
    
    // console.log("Hello:", $(".all-of-it").html(this.template));
    this.render();

  },

  render: function() {
  	// console.log("Hello:", this.$el.html)
  	console.log("Hello:", this);
    // this.$el.html(this.template);
    
    return this;
  }
});

export default GameView;
