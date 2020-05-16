$(window).on('resize', function() {
    if($(window).height() > 800) {
        $('#body').addClass('limit1200');       
    }else{       
        $('#body').removeClass('limit1200');
    }  
});

$(document).ready(function() {  
   if($('body .container .nav').find('.thumb-normal').length > 12) {
       $('.thumb-normal').addClass('thumb-expanded').removeClass('thumb-normal');       
    }else{
        $('.thumb-expanded').addClass('thumb-normal').removeClass('thumb-expanded');
    }
});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel':true,
	  'alwaysShowNavOnTouchDevices':true
});