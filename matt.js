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
    var width = div.width();
	var r1 = $('.r1');
	var r2 = $('.r2');
	var r3 = $('.r3');
	var ul = $('ul');
	var conW = $('ul').width();
	var r4 = $('.r4');
	var line = $('.line');
	var btmline= $('#btmline');
	var topline= $('#topline');
	var linel1 = $('#lineleft1');
	var linel2 = $('#lineleft2');
	var liner1 = $('#lineright1');
	var liner2 = $('#lineright2');
	var docW = $(document).width();
	
	div.css('height', width);
	r1.css('top', -width/2 + 1);
	r2.css('top', conW/4 - width/2 +2);
	r3.css('top', -3*width/2 + conW/2 + 9) ;
	r4.css('top', -3*width/2 +conW/4 + 8);	
	ul.css('height', conW/2);
	c1.css('margin-left', conW/4 - width/2 - 7);
	c2.css('margin-left', -(width - conW/4) + 5);
	c3.css('margin-left', -(width - conW/4) + 5);
	topline.css('left', conW/4 + 0.1*docW + 3);
	line.css('width', conW/2);
	linel1.css('top', conW/4 + 3);
	linel2.css('top', conW/4 + 9);
	linel1.css('left', 0.1*docW - 6);
	linel2.css('left', 0.1*docW - 6);
	liner1.css('top', conW/4 + 3);
	liner1.css('left', conW/2 + 0.1*docW + 11);
	liner2.css('top', conW/4 + 9);
	liner2.css('left', conW/2 + 0.1*docW + 11);
	btmline.css('bottom',-16);
	btmline.css('left', conW/4 + 0.1*docW + 3);
}

});