<?php
include '../header.php';
include '../nav.php'; 
?>
<!-- +(ywwXM9dl.D -->
<div id="wrapper">
	<div id="content">
		<h1>About</h1>
		<div id="aboutNav">
		<a href="index.php?bio">Bio</a>~
		<a href="index.php?resume">Resume</a>
		</div>
		<?php
		$uri = $_SERVER['REQUEST_URI'];
			if( strpos($uri, 'resume') !== false){
				 include 'resume.php';
			}
			else if(strpos($uri, 'friends') !== false){
				include 'friends.php';
			}
			else{
				include 'bio.php';
			}
		?>
	</div>
</div>
<?php
include '../footer.php';
?>