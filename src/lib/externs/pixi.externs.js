/**
 * @namespace
 */
var PIXI = {};

/**
 * @namespace
 */
PIXI.Sprite = {};

/**
 * @Constructor
 */
PIXI.DisplayObjectContainer = function(){};

/**
 * @typedef {Object} sprite
 * TODO
 */

/**
 * @name sprite
 * @constructor
 */
PIXI.Sprite.fromImage = function(){};

/**
 * @constructor
 */
PIXI.Text = function(){};

/**
 * @name Stage
 * @constructor
 */
PIXI.Stage = function(){};

PIXI.Stage.prototype.addChild = function(item){};
PIXI.Stage.prototype.removeChild = function(item){};

/**
 * @name RenderFunction
 * @function
 */

/**
 * @typedef {Object} renderer
 * @property {Object} view
 * @property {RenderFunction} render
 */

/**
 * @param {Stage} stage
 * @return renderer
 */
PIXI.autoDetectRenderer = function(stage){};
