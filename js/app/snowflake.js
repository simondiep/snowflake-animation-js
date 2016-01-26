define(function () {
    "use strict";

	class Snowflake {
		constructor(canvas) {
			this.canvas = canvas;
			this.opacity = 0.1 + Math.random();
			this.fontSize = 12 + Math.random() * 50 + "px";
			this.counter = 0;
			this.xPosition = 50 + Math.random()*(this.canvas.width - 100) ;
			this.yPosition = -50;
			this.speed = 5+Math.random()*40;
			this.direction = Math.random() < 0.5 ? 1 : -1;
		}

		redraw() {
	 
		    // using some trigonometry to determine our x and y position
		    this.counter += this.speed / 5000;
		    this.xPosition += this.direction * this.speed * Math.cos(this.counter) / 40;
		    this.yPosition += Math.sin(this.counter) / 40 + this.speed / 30;
		 
		 	// setting our snowflake's position
			let canvasContext = this.canvas.getContext("2d");
			canvasContext.font = `${this.fontSize} Cambria`;
			canvasContext.fillStyle = "white";
			canvasContext.globalAlpha = this.opacity;
			canvasContext.fillText("*",this.xPosition,this.yPosition);
		     
		    // if snowflake goes below the browser window, move it back to the top
		    if (this.yPosition > (this.canvas.height + 50)) {
		        this.yPosition = -50;
		    }
		}
	}

	return Snowflake;

});		