<?php
// Make a MySQL Connection
mysql_connect("localhost", "_USERNAME_", "_PASSWORD_") or die(mysql_error());
mysql_select_db("clodewer_live") or die(mysql_error());

// Retrieve all the data from the "example" table
$uri = $_SERVER['REQUEST_URI'];
if( strpos($uri, 'all') !== false){
	$result = mysql_query("SELECT * FROM gigs ORDER BY gig_date DESC")
	or die(mysql_error());
	$button="";
}
else if( strpos($uri, 'old') !== false){
	$result = mysql_query("SELECT * FROM gigs where gig_date < NOW() ORDER BY gig_date DESC")
	or die(mysql_error());
	$button="<a id=\"pastGigs\" href=\"live.php?\">Show Upcoming Gigs</a>";
}
else if( strpos($uri, 'waffletaco') !== false ){
	$result = mysql_query("SELECT * FROM gigs where groups='Waffle Taco'")
	or die(mysql_error());
	$button="";
}
else if( strpos($uri, 'dj') !== false ){
	$result = mysql_query("SELECT * FROM gigs where groups='DJ'")
	or die(mysql_error());
	$button="";
}
else{
	$result = mysql_query("SELECT * FROM gigs where gig_date > NOW() ORDER BY gig_date")
	or die(mysql_error());  
	$button="<a id=\"pastGigs\" href=\"live.php?old\">Show Previous Gigs</a>";
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Clodewerks-live</title>
<link rel='stylesheet' href='css/style.css' type='text/css' />
<script src="http://code.jquery.com/jquery-1.4.2.min.js"></script> 
<script type="text/javascript" src="js/clode.js"></script> 
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-20914095-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<div id="header">
<a href="http://www.clodewerks.com/index.html"><image src="images/bg.png" height="100px" width="100px"/></a>
<h1>Clodewerks</h1>
	<div id="nav">
		<a onClick="nav('music')">Music</a>
		<a onClick="nav('remix')">Remixes</a>
		<a onClick="nav('web')">Web</a>
		<a onClick="nav('more')">More</a>
	</div>
	<div id="subNav" rel="music">
		<a class="more" href="about.html">Bio</a>
		<a class="more"  href="resume.html">Resume</a>
		<a class="more"  href="/blog">Blog</a>
		<a class="more" href="community.html">Community</a>
		<a class="music" href="tracks.html">Tracks</a>
		<a class="music" href="live.html">Gigs</a>
		<a class="music" href="store.html">Buy</a>
		<a class="music" href="booking.html">Book</a>
		<a class="remix" href="remix.html">Remixes</a>
		<a class="remix" href="livermx.html">Gigs</a>
		<a class="remix" href="bookingrmx.html">Book</a>
		<a class="web" href="decidinator.html">Decidinator</a>
		<a class="web" href="web.html"> Other Projects</a>
		<a class="web" href="hire.html">Hire</a>
	</div>
</div>
<div id="wrapper">

	<div id="content">
	<p>Here are some up and coming events at Clodewerks:</p>
<div id="events">

<?php
// store the record of the "example" table into $row
while($row = mysql_fetch_array($result)){
// Print out the contents of the entry 

echo "<h2>".$row['gig']."</h2><p><strong>When: </strong>".date('F d, Y - g:i A', strtotime($row['gig_date']))."</p>";
echo "<p><strong>At: </strong> <a target=\"_blank\" href=\"http://maps.google.com?q=".$row['location']."\">".$row['location']."</a></p>";
echo "<p><strong>Cost:</strong> $".$row['price']."</p><p>".$row['desc']."</p><hr/>";



};
echo $button;
?>
</div>
<p> For booking inquiries, send an email to <a href="mailto:clode@clodewerks.com">clode@clodewerks.com</a>.</p>
	</div>
</div>
<div id="footer">
	&copy;  Clodewerks 2011 --
		<a href="about.html">About</a> -
		<a href="mailto:clodewerks@gmail.com">Contact</a> -
		<a href="community.html">Community</a>
</div>
</body>
</html>