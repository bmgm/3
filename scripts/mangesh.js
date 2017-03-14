$(document).ready(function($){

	$(window).scroll(function(){
		$scrol = $(document).scrollTop();
		console.log($scrol);
		if ($scrol > 0.1)
		{
			$('.navbar').addClass('shrink');
			$('.navbar').addClass('navbar-fixed-top');
		}
		else
		{
			$('.navbar').removeClass('shrink');
		}
	});

	/********************************************\
				One Nice Scrolling NaveBar
	\********************************************/

  $('.nav li a').on('click',function() {
   	 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    	&& location.hostname == this.hostname) {
     		 var $target = $(this.hash);
     		 $target = $target.length && $target
     	 || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
       		 var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset}, 800);
       return false;
      }
    }
  });
});

// map zoom disabled untill clicked
$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});


// nav bar collapse on click
$('.nav li a').on('click', function(){
	$('.navbar-toggle').click() //bootstrap 3.x by Richard
});

// for active navbar-item status
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
