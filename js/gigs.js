//Live Performances. Please revisit search and sorting functionality when more than ten events!

var clodeEvents= [
	{
		name:"Lost Trail",
		day:1,
		month: 9,
		year: 2011,
		time:"8:00 PM",
		place:"Waypost",
		cost:"Free",
		desc:"Clodewerks' First live performance opening for Lost Trail!"
	},
	{
		name:"Waffle Taco Debut",
		day:17,
		month: 9,
		year: 2011,
		time:"8:00 PM",
		place:"NEPO 42",
		cost:"Free",
		desc:"Waffle Taco's First live performance!"
	},
	{
		name:"Nuclear Family Variety Show",
		day: 8,
		month: 10,
		year: 2011,
		time: "8:30 PM",
		place:"4936 SE Boise, PDX",
		cost: "Free",
		desc:"Waffle Taco takes the stage along with a whole host of other acts. More info can be found on the <a href=\"https://www.facebook.com/event.php?eid=177255785681866\"> Facebook Event</a>!"
	},
	{
		name:"Waffle Taco at the NEPO 42",
		day:07,
		month: 11,
		year: 2011,
		time:"TBA",
		place:"NEPO 42",
		cost:"Free",
		desc:"Waffle Taco returns to the NEPO 42 for another great performance."
	},
	{
		name:"Annex Beat Drop",
		day:3,
		month: 12,
		year: 2011,
		time:"8PM",
		place:"The Annex, Oregon City",
		cost:"$8",
		desc:"Clodewerks DJ set opening for DJ Shaggy.",
		rmx:"1"
	},
	{
		name:"AlbinoGorilla, Clodewerks, and Friends",
		day:28,
		month: 12,
		year: 2011,
		time:"8PM",
		place:"Ash Street Saloon",
		cost:"$5",
		desc:"Clodewerks Finishes out the year with a set of original music."
	},
	{
		name:"Waffle Taco at the NEPO 42",
		day:09,
		month: 01,
		year: 2012,
		time:"8PM",
		place:"NEPO 42",
		cost:"Free",
		desc:"Waffle Taco returns to the NEPO 42 for another great performance."
	},
		{
		name:"Starlight Symphony",
		day:01,
		month: 04,
		year: 2012,
		time:"8PM",
		place:"9230 SW Siletz Drive, Tualatin, OR 97062",
		cost:"$12",
		desc:"The Starlight Symphony performs the music of Stage, Screen, and Railroad Yard. Kyle sits in the back counting and occasionally playing very loud."
	},
	{
		name:"Waffle Taco at the Sundown",
		day:15,
		month: 05,
		year: 2012,
		time:"TBA",
		place:"Sundown Pub, 5903 North Lombard Street, Portland, OR 97203",
		cost:"Free",
		desc:"Waffle Taco returns to the Sundown Pub for a great show with visuals by Sugar Cube Light Show."
	},
		{
		name:"Starlight Symphony",
		day:03,
		month: 06,
		year: 2012,
		time:"7PM",
		place:"9230 SW Siletz Drive, Tualatin, OR 97062",
		cost:"$12",
		desc:"The Starlight Symphony performs the music of Rachmaninoff, Debussy, and Wagner. Kyle sits in the back counting and occasionally playing very loud."
	},
	{
		name:"A Feast For the Senses",
		day:03,
		month: 08,
		year: 2012,
		time:"6PM",
		place:"Milepost 5 850 NE 81st Ave, Portland, OR",
		cost:"Free",
		desc:"First Friday at the Milepost 5 including a trip-hop DJ set from yours truly",
		rmx:"1",
	},
	/*{
		name:"",
		date:"",
		time:"",
		place:"",
		cost:"",
	},*/
]

function Gig(i){
	var section = "";
	section += "<h2>" + clodeEvents[i].name + "</h2>";
	section += "<p> <strong>When:</strong> " + clodeEvents[i].month + "/" + clodeEvents[i].day + "/" + clodeEvents[i].year;
	section += " at " + clodeEvents[i].time + "</p>";
	section += "<p> <strong>At:</strong> <a target=\"_blank\" href=\"http://maps.google.com?q=" + clodeEvents[i].place + "\">" + clodeEvents[i].place + "</a></p>";
	section += "<p> <strong>Cost: </strong>" + clodeEvents[i].cost + "</p>" ;
	section += "<p> " + clodeEvents[i].desc + "</p><hr/>" ;
	return section;
}

function fullList(){
	if(document.getElementById("pastGigs").innerHTML == "Show Past Gigs"){
		var list = "";
		for (var i = clodeEvents.length-1; i >= 0; i--){
			list += Gig(i);
		}
		$("#events").html(list);
		$("#pastGigs").html("Only Show Upcoming Gigs");
	}
	else currentList();
}

function currentList(){
	var today = new Date();
	var gigDay = new Date();
	var list = "";

	for (var i=0; i < clodeEvents.length; i++){
		gigDay.setFullYear(clodeEvents[i].year, clodeEvents[i].month-1, clodeEvents[i].day);
		if (gigDay >= today){
		 list += Gig(i);
		}
		else {
		}
	}
	if (list == "") list = "<h2>Nothing for Now, Stay Tuned.</h2>";
	$("#events").html(list);
	$("#pastGigs").html("Show Past Gigs");	
}

function remixList(){
	var today = new Date();
	var gigDay = new Date();
	var list = "";

	for (var i=0; i < clodeEvents.length; i++){
		gigDay.setFullYear(clodeEvents[i].year, clodeEvents[i].month-1, clodeEvents[i].day);
		if (gigDay >= today && clodeEvents[i].rmx){
		 list += Gig(i);
		}
		else {
		}
	}
	if (list == "") list = "<h2>No DJ Appearances for Now, Stay Tuned.</h2>";
	$("#eventsRmx").html(list);
	$("#pastGigs").html("Show Past Gigs");		
}

function fullRmxList(){
	if(document.getElementById("pastGigs").innerHTML == "Show Past Gigs"){
		var list = "";
		for (var i = clodeEvents.length-1; i >= 0; i--){
			if(clodeEvents[i].rmx)list += Gig(i);
		}
		$("#eventsRmx").html(list);
		$("#pastGigs").html("Only Show Upcoming Gigs");
	}
	else currentList();
}

$(window).load(function(){
	if(document.getElementById("events")){
		currentList();
		$("#pastGigs").click(function(){
			fullList();
		});
	}
	else{
		remixList();
		$("#pastGigs").click(function(){
			fullRmxList();
		});
	}
});
	
	