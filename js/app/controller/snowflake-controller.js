define([
    "view/canvas-view-factory",
    "view/canvas-view",
    "model/snowflake"
],

function (CanvasViewFactory, CanvasView, Snowflake) {
    "use strict";

    const NUMBER_OF_SNOWFLAKES = 50;
    const CANVAS_WIDTH = 500;
    const CANVAS_HEIGHT = 400;
    
    class SnowflakeController {

        constructor() {
            this.view = new CanvasViewFactory().createCanvasView(CANVAS_WIDTH, CANVAS_HEIGHT);
            
            // Create snowflakes
            this.snowflakes = [];
            for( let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
                let newSnowflake = new Snowflake(this.view.width, this.view.height);
                this.snowflakes.push(newSnowflake);
            }
        }

        // Starts an infinite draw loop
        render() {
            this.view.clear();
            for(let snowflake of this.snowflakes) {
                snowflake.updatePosition();
                this.view.drawText("*", snowflake.fontSize, "white", snowflake.opacity, snowflake.xPosition, snowflake.yPosition);
            }

            requestAnimationFrame(this.render.bind(this));
        }
    }

    return SnowflakeController;

});