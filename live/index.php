<?php
date_default_timezone_set('America/Los_Angeles');
// Make a MySQL Connection
mysql_connect("localhost", "_USERNAME_","_PASSWORD_") or die(mysql_error());
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
	$button="<a id=\"pastGigs\" href=\"index.php?\">Show Upcoming Gigs</a>";
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
	$button="<a id=\"pastGigs\" href=\"index.php?old\">Show Previous Gigs</a>";
}
?>

<?php
include '../header.php';
include '../nav.php'; 
?>
<div id="wrapper">

	<div id="content">
	<p>Here are some up and coming events at Clodewerks:</p>
<div id="events">

<?php
if(mysql_num_rows($result)==0){
  echo "<h2>Nothing for now. Stay Tuned!</h2>";
}
// store the record of the "example" table into $row
while($row = mysql_fetch_array($result)){
// Print out the contents of the entry 
echo "<h2>".$row['gig']."</h2><p><strong>When: </strong>".date('F d, Y - g:i A', strtotime($row['gig_date']))."</p>";
echo "<p><strong>At: </strong> <a target=\"_blank\" href=\"http://maps.google.com?q=".$row['location']."\">".$row['location']."</a></p>";
echo "<p><strong>Cost:</strong> $".$row['price']."</p><p>".$row['description']."</p><hr/>";



};
echo $button;
?>
</div>
<p> For booking inquiries, send an email to <a href="mailto:clode@clodewerks.com">clode@clodewerks.com</a>.</p>
	</div>
</div>


<?php
include '../footer.php';
?>