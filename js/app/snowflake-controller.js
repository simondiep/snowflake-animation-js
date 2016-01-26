define([
	"canvas-factory",
	"snowflake",
	"snowflake-container"
],

function (CanvasFactory, Snowflake, SnowflakeContainer) {
    "use strict";

	class SnowflakeController {

		constructor(numberOfSnowflakes, width, height) {
			if(!numberOfSnowflakes) {
				throw new TypeError("Number of snowflakes required");
			}

			// Create the canvas
			let canvas = new CanvasFactory().createCanvas(width, height);
			document.getElementById("snowflakeContainer").appendChild(canvas);
			
			// Create snowflakes
			this.snowflakeContainer = new SnowflakeContainer(canvas);
			this.snowflakes = [];
			this._createSnowflakes(numberOfSnowflakes, canvas);
		}

		// Starts an infinite draw loop
		redraw() {
			this.snowflakeContainer.redraw();
			for(let snowflake of this.snowflakes) {
				snowflake.redraw();
			}
			// Infinite loop
			requestAnimationFrame(this.redraw.bind(this));
		}

		_createSnowflakes(numberOfSnowflakes, canvas) {
			for( let i = 0; i < numberOfSnowflakes; i++) {
				let newSnowflake = new Snowflake(canvas);
				this.snowflakes.push(newSnowflake);
			}
		}
	}

	return SnowflakeController;

});