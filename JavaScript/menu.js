
$(document).ready(function(){
	$(".menu").click(function(){
		$(".sideNav").fadeToggle(1000);
	});

    $(".sideNav li").click(function(){
    	$(".sideNav").hide();
    });

    $(window).scroll(function(){
    	$(".sideNav").hide();
    });

});