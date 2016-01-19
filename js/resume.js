$(document).ready(function () {
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
	 });
	

/*
How I did it w/out JQuery...
function plus(a)
{
	
	
	if(document.getElementById(a).innerHTML=='+')
	{
	document.getElementById(a).innerHTML= '-';
	document.getElementById(a + 'list').style.display = 'inherit';
	}
	else
	{
	document.getElementById(a).innerHTML= '+';
	document.getElementById(a + 'list').style.display = 'none';
	} }*/
