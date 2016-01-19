var nav1 = "<a onClick=\"nav('music')\">Music</a>";
	nav1 += "<a onClick=\"nav('remix')\">Remixes</a>";
	nav1 += "<a onClick=\"nav('web')\">Web</a>";
	nav1 +="<a onClick=\"nav('more')\">More</a>";

var subNav = "<a class='more' href='http://www.clodewerks.com/about.html'>Bio</a>";
	subNav += "<a class='more'  href='http://www.clodewerks.com/resume.html'>Resume</a>";
	subNav += "<a class='more'  href='http://www.clodewerks.com/blog'>Blog</a>";
	subNav += "<a class='more' href='http://www.clodewerks.com/community.html'>Community</a>";
	subNav += "<a class='music' href='http://www.clodewerks.com/tracks.html'>Tracks</a>";
	subNav += "<a class='music' href='http://www.clodewerks.com/live.php'>Gigs</a>";
	subNav += "<a class='music' href='http://clodewerks.bandcamp.com/' target='blank'>Buy</a>";
	subNav += "<a class='music' href='http://www.clodewerks.com/booking.html'>Book</a>";
	subNav += "<a class='music' href='http://www.clodewerks.com/waffletaco'>Waffle Taco</a>";
	subNav += "<a class='remix' href='http://www.clodewerks.com/remix.html'>Remixes</a>";
	subNav += "<a class='remix' href='http://www.clodewerks.com/live.php?dj'>Gigs</a>";
	subNav += "<a class='remix' href='http://www.clodewerks.com/bookingrmx.html'>Book</a>";
	subNav += "<a class='web' href='http://www.clodewerks.com/decidinator/decide.html'>Decidinator</a>";
	subNav += "<a class='web' href='http://www.clodewerks.com/web.html'> Other Projects</a>";
	subNav += "<a class='web' href='http://www.clodewerks.com/hire.html'>Hire</a>";
	
var footer = "<div class=\"footDash\">&copy; Clodewerks 2015 -</div>";
	footer += "<a id=\"footMail\" href=\"mailto:clodewerks@gmail.com\"></a><div class=\"footDash\">-</div> ";
	footer +="<a id=\"facebook\" href=\"https://www.facebook.com/pages/Clodewerks/175609938953\">&nbsp;</a><div class=\"footDash\">-</div> ";
	footer +="<a id=\"twitter\" href=\"https://twitter.com/#!/clodewerks\">&nbsp;</a><div class=\"footDash\">-</div> ";
	footer +="<a id=\"soundCloud\" href=\"http://soundcloud.com/clodewerks\">&nbsp;</a>";
	
var bgcolor = 16777215;

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function community(){
$(".comm").mouseover(function(){
	$(this).css("background-color",get_random_color());
});
$(".comm").mouseout(function(){
	$(this).css("background-color","#cccccc");
});
}

function bg(){
x =  x - Math.round(Math.random() * 2);
$('body').css('background', "#" + x.toString(16));
var tid = setTimeout(bg, 1000);
}

var resume = function(){
 $(".plus").click(function () {
	 	
	 	if (this.innerHTML=='+')
	 	{
	 	this.innerHTML= '-';
	 	 $(this).next().show("slow");
	 	 }
	 	 else{
	 	 this.innerHTML= '+';
	 	 $(this).next().hide("slow");
	 	 }
	 });
 $("td").mouseover(function(){
 	if($(this).hasClass("resHead"));
 	else{
 		 $("td").css("border-bottom","0px dotted black");
 		 $(this).siblings("td").css("border-bottom","1px dotted black");
 		 $(this).css("border-bottom","1px dotted black");
 	}
 	});
 $("td").mouseout(function(){
 	if($(this).hasClass("resHead"));
 	else{
 		 $("td").css("border-bottom","0px solid black");
 		 $(this).css("border-bottom","0px solid black");
 	}
 	});
}

$(document).ready(function() {
	if($(".community").length > 0) community();
	if($("#resume").length > 0) resume();	
	bg();
});