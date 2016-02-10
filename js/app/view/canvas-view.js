define(function () {
    "use strict";
    
    class CanvasView {
        
        constructor(canvas) {
            this.height = canvas.height;
            this.width = canvas.width;
            this.context = canvas.getContext("2d");
        }
        
        clear() {
            this.context.fillStyle = "black";
            this.context.globalAlpha = 1;
            this.context.fillRect(0, 0, this.width, this.height);
        }
        
        drawText(text, fontSize, color, opacity, x, y) {
            this.context.font = fontSize + " Cambria";
            this.context.fillStyle = color;
            this.context.globalAlpha = opacity;
            this.context.fillText(text,x,y);
        }
    }

    return CanvasView;

});     