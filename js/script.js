$(document).ready(function(){
    $("#news-slider11").owlCarousel({
        items : 4,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:true,
        autoPlay:true
    });
    $('.nav-item').on('click',function(){
    	$('.nav-link').filter('.active').removeClass('active');
    	$(this).addClass('active');
    })
});

AOS.init();