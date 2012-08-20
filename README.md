# Breakpoints.js

Define breakpoints for your responsive design, and Breakpoints.js will fire custom events when the browser enters and/or exits that breakpoint.

## Instructions
``` js
	// array of widths in pixels where breakpoints
	var my_breakpoints = new Array(320, 500, 200, 756, 1012);
	
	// initialize your breakpoints
	$(window).breakpoints(my_breakpoints);
	
	// change event
	$(window).bind('changeBreakpoint', function(oldBP, currentBP) {
		console.log(oldBP, currentBP);
	});
```	
	