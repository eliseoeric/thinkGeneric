$(document).ready(function(){
var caseButton = $('.menu-control').offset().top;

var stickyNav = function(){
	var scrollTop = $(window).scrollTop();

	if(scrollTop > caseButton){
			$('.grid-button').removeClass('unstick').addClass('sticky');
			$('nav#primary').removeClass('unstick').addClass('sticky');
		}else{
			$('.grid-button').removeClass('sticky').addClass('unstick');
			$('nav#primary').removeClass('sticky').addClass('unstick');
		}
};



var toggleFooter = function(){
	console.log("function starts");
	var rootFooter = $('#root-footer');
	var footer = $('#footer');
	var root = $('#root');
	var docHeight = $(window).height();
	if(footer.height() <= 52){
		console.log("true");
		footer.css('height', '288px');
		root.css('margin-bottom', '-288px');
		rootFooter.css('height', '288px');
		$('#js-footer').addClass('show-footer');
	}else if(footer.height() == 288){
		footer.css('height', '52px');
		root.css('margin-bottom', '-52px');
		rootFooter.css('height', '52px');
		$('#js-footer').removeClass('show-footer');

	}
};

$('#menu-gears').click(function(event){
	event.preventDefault();
	$('#primary').toggleClass('closed');
});


Grid.init();
console.log("yes");


stickyNav();

$(window).scroll(function(){
		stickyNav();
	});	



});


   
