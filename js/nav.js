$(document).ready(function () {
	 $("#bionav").mouseenter(function () {
	 	$("#biolist").stop(true, true).show("slow");
	 	 });
	 	 
	 	 $("#bionav").mouseleave(function () {
	 	$("#biolist").hide("slow");
	 	 });
	 	 
	 	 $("#medianav").mouseenter(function () {
	 	$("#medialist").stop(true, true).show("slow");
	 	 });
	 	 
	 	 $("#medianav").mouseleave(function () {
	 	$("#medialist").hide("slow");
	 	 });

	 });