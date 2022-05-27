<?php

session_start();
$n = $_COOKIE["gfg"];
// $status = $_SESSION['status'];
// $url = $_SESSION['url'];
// $name = $_SESSION['name'];
// $qte = $_SESSION['qte'];
// $category = $_SESSION['category'];
// $url = "gsfgs";
// $qte = 1;

// $category = "gsfgs";
// $status = "add";

// $hammadi = $_POST['qte'];
// echo "hammadi"
$conn  = mysqli_connect('localhost', 'root', '', 'ras inventory');
if(!$conn)
	echo "conncetion error" . mysqli_connect_error();
else
{
	if($status == "remove")
	{
		$query = "DELETE FROM product where name = '$name' ";
		$result = mysqli_query($conn, $query);
		/*if($result)
			header("Location: http://localhost/Projet%20restaurant/host.php/");
			exit(); */
	}
	else if($status == "add")
	{
		$query = "INSERT INTO product ('name', 'url', 'qte', 'category')
				  VALUES ('$name','$url','$qte', '$category');";
		$result = mysqli_query($conn, $query);
		/*if($result)
			header("Location: http://localhost/Projet%20restaurant/host.php/");
			exit(); */
	}
}



?>
