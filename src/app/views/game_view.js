import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const GameView = Backbone.View.extend({
  // template: _.template($("#all-of-it").html()),

  initialize: function(options) {
    
    // console.log("Hello:", $(".all-of-it").html(this.template));
    this.render();
    this.boardView = options.myBoardView

  },

  render: function() {
  	// console.log("Hello:", this.$el.html)
  	console.log("Hello:", this);
    // this.$el.html(this.template);
    this.delegateEvents();

    return this;
  },
  events:{
      "click .new-game-button": "clear"
  }
});

export default GameView;
