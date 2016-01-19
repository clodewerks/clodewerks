<?php
include '../header.php';
include '../nav.php'; 
?>
<div id="wrapper">
	<div id="content">
		<form action="gig.php" method="POST"><br/>
		<span>Password:</span><input name="password" type="text"/><br/>
		<span>Gig Name:</span><input name="gig" type="text"/><br/>
		<span>Date:</span><input name="date" type="datetime-local"/><br/>
		<span>Location:</span><input name="location" type="text"/><br/>
		<span>Price:</span><input name="price" type="text"/><br/>
		<span>Description:</span><textarea name="description"></textarea><br/>
		<span>Group:</span><input name="groups" type="text"/><br/>
		<input type="submit" value="Add Gig"/>
		</form>
	</div>
</div>
<?php
include '../footer.php';
?>