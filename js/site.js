$(document).ready(function(){ 
	$("#bioContainer").hide();

	$(".tertiary").hide();

	$(".toggle").click(function(){
		if($("#"+$(this).attr("rel")).attr("class").search("tertiary") >= 0){
			$(".tertiary:not(#"+$(this).attr("rel")+")").slideUp(400);
			$("#"+$(this).attr("rel")).delay(400).slideToggle(400);
		}
		else $("#"+$(this).attr("rel")).slideToggle(400);		
	});
	 $('a[rel*=external]').click(function(){
    	window.open($(this).attr('href'));
   		return false; 
  	});
	$('a[rel*=notready]').click(function(){
    	alert("Sorry, the link isn't quite ready yet.");
   		return false; 
  	});
	$(".scroll").click(function(){
		 $('html, body').animate({
            scrollTop: $("#"+$(this).attr("rel")).offset().top - 50
          }, 600);
	});
});