define([
	"snowflake-controller"
],

function (SnowflakeController) {
    "use strict";

	new SnowflakeController(50, 500, 400).redraw();
});