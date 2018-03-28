<?php
	//die("defwse");
	include('query_helper.php');
	//echo "<pre>"; print_r( $_FILES['file']);
	//die;

	$filename ="";
	if($_FILES['file']){
		$filename 		= 	preg_replace("/\s+/","",$_FILES['file']['name']);
		//$filename 	= 	time().'.';
		$path			=	$_SERVER['SCRIPT_FILENAME'];
		$path			=	explode('/',$_SERVER['SCRIPT_FILENAME']);
		array_pop($path);   array_pop($path);
		$final          =   implode('/',$path); 
		$target         =    $final."/appsquadz/uploads/query_documents/".$filename;
		move_uploaded_file($_FILES['file']['tmp_name'],$target); 
	}
	$name		    = (isset($_POST['name']) && !empty($_POST['name']))?$_POST['name']:"";
	$email		    = (isset($_POST['email']) && !empty($_POST['email']))?$_POST['email']:"";
	$mobile		    = (isset($_POST['mobile']) && !empty($_POST['mobile']))?$_POST['mobile']:"";
	$budget		    = (isset($_POST['budget']) && !empty($_POST['budget']))?$_POST['budget']:"";
	$category		= (isset($_POST['category']) && !empty($_POST['category']))?$_POST['category']:"";
	$message		= (isset($_POST['message']) && !empty($_POST['message']))?$_POST['message']:"";
	$preferences	= (isset($_POST['preferences']) && !empty($_POST['preferences']))?$_POST['preferences']:"";
	$country	    = (isset($_POST['country']) && !empty($_POST['country']))?$_POST['country']:"";
	$skype_whatsapp	= (isset($_POST['skype_whatsapp']) && !empty($_POST['skype_whatsapp']))?$_POST['skype_whatsapp']:"";
	$send_nda	= (isset($_POST['send_nda']) && !empty($_POST['send_nda']))?$_POST['send_nda']:"";

	$query = "insert into app_queries SET name='".$name."', email='".$email."', mobile='".$mobile."', category='".$category."', message='".$message."', budget='".$budget."', preferences='".$preferences."',file='".$filename."'
    ,skype_whatsapp	='".$skype_whatsapp."',country='".$country."',send_nda='".$send_nda."' ";
	//echo $query;die;
	$a=	insert_data_by_custom_query($query);
	//print_r($a);die;
	header('location:http://localhost/appsquadz/index.html');
?>