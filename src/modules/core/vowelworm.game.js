/**
 * @param {Object=} options Configuration options
 * @param {VowelWorm.instance|Array.<VowelWorm.instance>} options.worms Any
 * VowelWorm instances to begin with
 * @param {number=} [options.width=700] The width of the game board
 * @param {number=} [options.height=500] The height of the game board
 * @param {number=} [options.background=0xFFFFFF] The background color of the game
 * @param {HTMLElement=} [options.element=document.body] What to append the graph to
 * @constructor
 */
window.VowelWorm.Game = function( options ) {
  "use strict";

  var game = this;

  /**
   * Inserts a worm into the ever-increasing frenzy of VowelWorm.
   * @param {VowelWorm.instance} worm
   */
  game.addWorm = function(worm) {
  };
};
