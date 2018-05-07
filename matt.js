$(document).ready( function() {
	
	"use strict";
	
	if (matchMedia) {
  var mq = window.matchMedia("(min-width: 900px)"); 
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
	if (mq.matches) {
		$('#container').css('top', 5 + 'em');
		$('#small').css('display', ''); 
		$('li').on('click', function(){
				$('#small').css('display', '');
		});		
	} else if ($('ul').css('background-image') !== 'url("http://www.mattharrisondirector.co.uk/mattBLUR.jpg")' || 'url(http://www.mattharrisondirector.co.uk/mattBLUR.jpg)') {
			var id = $('ul').css('background-image');
			id = id.replace('url("http://www.mattharrisondirector.co.uk/','').replace('.jpg")','');
			id = id.replace('url(http://www.mattharrisondirector.co.uk/','').replace('.jpg)','');
			$('#small > p[data-id='+ id +']').css('display', 'block');
			$('#small').css('display', 'block');
			$('#container').css('top', 2 + 'em');
			$('li').on('click', function(){
				var id = $(this).attr('data-id');
				$('#small > p').css('display', 'none');
				$('#small > p[data-id='+ id +']').css('display', 'block');
			});
	} else {
		$('#small').css('display', 'none');
			$('li').on('click', function(){
				var id = $(this).attr('data-id');
				$('#small > p').css('display', 'none');
				$('#small > p[data-id='+ id +']').css('display', 'block');
				$('#small').css('display', 'block');
				$('#container').css('top', 2 + 'em');
			});
	}
}
	
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
	var docW = $(document).width();
	var blocker = $('.blocker');
	var wrap = $('.wrap');
	var frosting = $('#frosting');
	var overlay = $('.overlay');
	var large = $('#large');
	var b1 = $('#b1');
	var b2 = $('#b2');
	var b3 = $('#b3');
	var b4 = $('#b4');
	
	div.css('height', width);
	r1.css('top', -width/2 - 1);
	r2.css('top', conW/6 - width/2 -2);
	r3.css('top', conW/3 - width/2 -1);
	r4.css('top', conW/2 - width/2 -1);	
	r5.css('top', 2*conW/3 - width/2 - 2);
	ul.css('height', 2*conW/3);
	c1.css('margin-left', conW/6 - width/2 -3);
	c2.css('margin-left',conW/3 - width/2 -2);
	c3.css('margin-left', conW/2 - width/2 -2);
	c4.css('margin-left', 2*conW/3 - width/2 -1);
	c5.css('margin-left', 5*conW/6 - width/2);
	blocker.css('height', 2*width);
	blocker.css('width', 2*width + 2);
	large.css('height', 2*conW/3);
	wrap.css('height', conW/3);
	wrap.css('width', conW/3);
	wrap.css('left', -conW/6 + width/2);
	wrap.css('top', -conW/6 + width/2);
	frosting.css('height', 2*conW/3);
	overlay.css('height', conW/3);
	overlay.css('top', -conW/3);
	b1.css('top', -width +3);
	b1.css('left', 0.1*docW - width);
	b2.css('top', -width + 1);
	b2.css('left', 0.1*docW - width + conW -1);
	b3.css('left', 0.1*docW - width + conW -2);
	b3.css('top', 2*conW/3 - width - 1);
	b4.css('left', 0.1*docW - width);
	b4.css('top', 2*conW/3 - width);
}

$('li').on('click', function(){
	
	if ($(this).hasClass('r1') || $(this).hasClass('r5')) {
	} else {
	
	var id = $(this).attr('data-id');
	
	$('.overlay',this).toggleClass('clicked');
	$(this).mouseleave(function(){
		$('.overlay',this).removeClass('clicked');
	});
	$('ul').css({'background-image':'url('+ id +'.jpg)'});
	$('#frosting').css('opacity',0);
	$('.cover').css('opacity', 1);
	$('.c2.r2 > .wrap > .cover').delay(100).animate({opacity:0},400);
	$('.c4.r2 > .wrap > .cover').delay(200).animate({opacity:0},430);
	$('.c5.r3 > .wrap > .cover').delay(300).animate({opacity:0},460);
	$('.c4.r4 > .wrap > .cover').delay(400).animate({opacity:0},500);
	$('.c3.r3 > .wrap > .cover').delay(500).animate({opacity:0},550);
	$('.c2.r4 > .wrap > .cover').delay(600).animate({opacity:0},620);
	$('.c1.r3 > .wrap > .cover').delay(700).animate({opacity:0},700);
	}
});

	$('li').on('click', function() {
		
	if ($(this).hasClass('r1') || $(this).hasClass('r5')) {
	} else {
		
		var id = $(this).attr('data-id');
		
		$('.content > p').css('opacity', 0);
		$('.content > p[data-id='+ id +']').animate({opacity:1},1000);
		$('.content > p[data-id='+ id +']').css('z-index',6);
		$('.r1 > .wrap > p').hide();
		$('.r1 > .wrap > p[data-id='+ id +']').show();
	}
	});
});

