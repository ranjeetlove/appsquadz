<?php
error_reporting(1);
include("config.php");
$base_path = getcwd(); 
$base_url = "http://localhost/appsquadz/";
$path=$_SERVER['SCRIPT_FILENAME'];
// $path=explode('/',$_SERVER['SCRIPT_FILENAME']);
// array_pop($path); 
// $final =implode('/',$path); 
// echo '<pre>'; print_r($_SERVER);
$final=$base_url;;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "appsquadz_main_db";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
$page=$_GET['page'];
$lim= ($page-1)*2;
$sql="select * from app_reviews where id=".$_POST['id']."";
$query = "SELECT * from app_reviews order by id desc limit $lim,4";
$result = $conn->query($query);
$num_of_rows=mysqli_num_rows($result);
$total_pages=$num_of_rows/2;
while ($project = $result->fetch_array(MYSQLI_ASSOC)) {
    $testimonals[] = $project;
}
foreach($testimonals as $testimonal) {
                                if($testimonal['type_of_review'] == '1'){
                                    if($testimonal['validated_by'] == '0'){

                        ?>
                        <div class="col-md-6 col-sm-6 count-list">
                            <div class="nd-testimonial-block transition text-center">
                                <div class="tm-project-logo"><img src="<?php echo $final.'uploads/app_logos/'.$testimonal['app_logo'];?>" style="" class="" onerror="imgError(this);" alt="SnaPak" style="width: 100px; height: 100px;"></div>
                                <div class="tm-project-name fbold"><?php echo $testimonal['client_name']; ?></div>
                                <div class="tm-client-post fsemibold"><?php echo $testimonal['client_company_name']; ?>, <?php echo $testimonal['designation']; ?></div>
                                <div class="tm-star">
                                    <ul>
									
									<?php 
										for($i=0; $i<=$testimonal['rating'];$i++)
										{
										echo('<li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>');
										}
										?>
                                    </ul>
                                </div>
                                <div class="tm-project-discription">
                                    <p class="flight"><span>"</span><?php echo $testimonal['description']; ?><span>"</span></p>
                                </div>
                                <div class="tm-button">
                                    <a href="javascript:void(0)" class="fbold transition cs_req_btn">Get a quote
                                        <i class="zmdi zmdi-chevron-right zmdi-hc-fw transition"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?php } 
                        else{
							$validater_query 	= "select image from app_validaters where id=".$testimonal['validated_by'];
							$validater_img_fire 			= $conn->query($validater_query)->fetch_array(MYSQLI_ASSOC);
							$validate_image = $base_url."uploads/validators_images/".$validater_img_fire['image'];
                        
						?>
                        <div class="col-md-6 col-sm-6 count-list">
                            <div class="nd-testimonial-block transition text-center">
                                <div class="tm-project-logo">
                                    
                                    <img src="<?php echo $final.'uploads/app_logos/'.$testimonal['app_logo'];?>"  class="" onerror="imgError(this);" alt="Readers Rescue" style="width: 100px; height: 100px;">
                                </div>
                                <div class="tm-project-name fbold"><?php echo $testimonal['client_name']; ?></div>
                                <div class="tm-client-post fsemibold"><?php echo $testimonal['client_company_name']; ?>, <?php echo $testimonal['designation']; ?></div>
                                <div class="tm-star">
                                    <ul>
                                        <?php 
										for($i=0; $i<$testimonal['rating'];$i++)
										{
										echo('<li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>');
										}
										?>
                                    </ul>
                                </div>
                                <div class="tm-project-discription">
                                    <p class="flight"><span>"</span><?php echo $testimonal['review_description']; ?>
                                        <span>"</span>
                                    </p>
                                </div>
                                <div class="tm-validby fsemibold">Validated By :
								<img src="<?php echo $validate_image; ?>" alt="validater logo" width="140px" height="26px"></div>
                                <div class="tm-button">
                                <a href="survay.php?val_id=<?php echo $testimonal['validated_by'];?>&id=<?php echo $testimonal['id'];?>" class="fbold transition">View Survey <i class="zmdi zmdi-chevron-right zmdi-hc-fw transition"></i></a>
                                </div>
                            </div>
                        </div>
                        <?php
                        }
                        } 
                        if($testimonal['type_of_review'] == '2'){
                        ?>
                         <div class="col-md-6 col-sm-6 count-list">
                            <div class="nd-testimonial-block video transition text-center">
                                <div class="tm-video-block" style="background:#000 url(<?php echo $testimonal['video_thumbnail_link']; ?>)">
                                </div>
                                <div class="tm-video-play" id="vidwrap-16" onclick="play(this);" data-att="<?php echo $testimonal['video_link']; ?>?autoplay=1&amp;controls=1&amp;showinfo=0&amp;modestbranding=0&amp;enablejsapi=1&amp;rel=0">
                                    <i class="zmdi zmdi-play-circle-outline zmdi-hc-fw transition"></i>
                                </div>
                                <div class="tm-video-detail">
                                    <div class="tm-project-name fbold"><?php echo $testimonal['client_name']; ?></div>
                                    <div class="tm-client-post fsemibold"><?php echo $testimonal['client_company_name']; ?>, <?php echo $testimonal['designation']; ?></div>
                                    <div class="tm-star">
                                        <ul>
                                            <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li><li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li><li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li><li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li><li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php  } } ?>