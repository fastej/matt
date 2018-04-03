$(document).ready( function() {
	
	"use strict";
	
	$(window).ready(updateHeight);
	$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('li');
	var c1 = $('.c1');
	var c2 = $('.c2');
	var c3 = $('.c3');
	var c4 = $('.c4');
	var c5 = $('.c5');
    var width = div.width();
	var r1 = $('.r1');
	var r2 = $('.r2');
	var r3 = $('.r3');
	var r4 = $('.r4');
	var r5 = $('.r5');
	var ul = $('ul');
	var conW = $('ul').width();
	var line = $('.line');
	var midline = $('#midline');
	var docW = $(document).width();
	var blocker = $('.blocker');
	var wrap = $('.wrap');
	var w1 = $('.w1');
	var w2 = $('.w2');
	var w3 = $('.w3');
	var w4 = $('.w4');
	var o1 = $('.o1');
	var o2 = $('.o2');
	var frosting = $('#frosting');
	var overlay = $('.overlay');
	var b1 = $('#b1');
	var b2 = $('#b2');
	var b3 = $('#b3');
	var b4 = $('#b4');
	
	div.css('height', width);
	r1.css('top', -width/2 - 2);
	r2.css('top', conW/6 - width/2 -2);
	r3.css('top', conW/3 - width/2 -1);
	r4.css('top', conW/2 - width/2 -1);	
	r5.css('top', 2*conW/3 - width/2);
	ul.css('height', 2*conW/3);
	c1.css('margin-left', conW/6 - width/2 -3);
	c2.css('margin-left',conW/3 - width/2 -2);
	c3.css('margin-left', conW/2 - width/2 -1);
	c4.css('margin-left', 2*conW/3 - width/2 -1);
	c5.css('margin-left', 5*conW/6 - width/2);
	midline.css('left',0.1*docW);
	midline.css('top', conW/4 + 1.5);
	line.css('width', conW/2);
	midline.css('width', conW);
	blocker.css('height', 2*width);
	blocker.css('width', 2*width);
	wrap.css('height', conW/3);
	wrap.css('width', conW/3);
	wrap.css('left', -conW/6 + width/2);
	wrap.css('top', -conW/6 + width/2);
	w1.css('top', -conW/4 + width/2);
	w1.css('left', -conW/4 + width/2);
	w3.css('top', -conW/4);
	w4.css('top', -conW/4 + width/2 + conW/Math.sqrt(32));
	w4.css('left', -conW/4 + width/2 - conW/Math.sqrt(32));
	frosting.css('height', 2*conW/3);
	overlay.css('height', conW/3);
	overlay.css('top', -conW/3);
	//o4.css('top', conW/2);
	//o3.css('top', -conW/3);
	//o2.css('top', -conW/3);
	//o1.css('top', -conW/4 - 2);
	//w1.css('top',-conW/4);
	//w1.css('left',conW/8);
	b1.css('top', -width +1);
	b1.css('left', 0.1*docW - width +1);
	b2.css('top', -width + 1);
	b2.css('left', 0.1*docW - width + conW);
	b3.css('left', 0.1*docW - width + conW);
	b3.css('top', 2*conW/3 - width);
	b4.css('left', 0.1*docW - width + 1);
	b4.css('top', 2*conW/3 - width -1);
}

});

