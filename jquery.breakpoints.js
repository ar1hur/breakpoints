/*
	Breakpoints.js
	version 1.0

	Creates handy events for your responsive design breakpoints

	Version 1.0 written and copyright by XOXCO, Inc
	http://xoxco.com/

	Version 2.0 and 3.0 rewrite and copyright by Eike Send
	http://eike.se/nd

	Version 2.1.0 rewrite by Arthur Zielinski
	https://github.com/ar1hur/breakpoints

	Licensed under the MIT license:
	http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
	$.fn.breakpoints = function(breakpoints) {
    
		// do nothing 
		if( !$.isArray(breakpoints) ) {			
			return false;
		}
	
		// sort it ascending
		breakpoints = breakpoints.sort(function(a,b) {
			return (a-b)
		}); 
		var oldBP, currentBP;
	
		function getCurrentBreakPoint() {
			var w = $(window).width();

			for (var bp in breakpoints) {
				bp = parseInt(bp);
		
				if (w >= breakpoints[bp] && ( breakpoints.length == bp + 1 || w < breakpoints[bp+1] )) {
					return breakpoints[bp];
				}
			}
			return parseInt( breakpoints[0] );
		}
    
		setInterval(function() {
			currentBP = getCurrentBreakPoint();
			if (oldBP != currentBP) {
				$(window).trigger('changeBreakpoint', (oldBP, currentBP));
				oldBP = currentBP;
			}
		}, 200);
	};
})(jQuery);