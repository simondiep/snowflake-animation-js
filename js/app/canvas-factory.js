define(function () {
    "use strict";

	class CanvasFactory {
		
		createCanvas(width, height) {
		    let canvas = document.createElement("canvas");
		    canvas.width = width;
		    canvas.height = height;
		    canvas.style.width = width + "px";
		    canvas.style.height = height + "px";
		    return canvas;
		}
	}

	return CanvasFactory;

});		