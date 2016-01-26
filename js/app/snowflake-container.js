define(function () {
    "use strict";

	class SnowflakeContainer {

		constructor(canvas) {
			this.canvas = canvas;
		}

		redraw() {
			let canvasContext = this.canvas.getContext("2d");
			canvasContext.fillStyle = "black";
			canvasContext.globalAlpha = 1;
	    	canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
		}
	}

	return SnowflakeContainer;

});