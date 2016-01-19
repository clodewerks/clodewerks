$(document).ready(function ()
	if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
		$(".headdescription").css("display","inline");
		
	} 
	else {
		alert("ha");
	}
);