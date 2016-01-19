<?php
include '../header.php';
include '../nav.php'; 
?>
<div id="wrapper">
	<div id="content">
<?php
if (strcmp($_POST[password], 'gigs') == 0){
	// Make a MySQL Connection
	$con = mysqli_connect("localhost", "_USERNAME_", "_PASSWORD_", "clodewer_live");
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
	  
	$date = str_replace("T"," ",$_POST[date]).":00";
	$sql="INSERT INTO gigs (gig, gig_date, location, price, description, groups)
	VALUES
	('$_POST[gig]', '$date' , '$_POST[location]','$_POST[price]','$_POST[description]','$_POST[groups]')";
	
	if (!mysqli_query($con,$sql))
	  {
	  die('Error: ' . mysqli_error($con));
	  }
	echo "1 record added";
	
	mysqli_close($con);
}
else{
echo "Wrong Password";
}
?>
	</div>
</div>
<?php
include '../footer.php';
?>