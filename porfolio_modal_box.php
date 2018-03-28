<?php 
include('config.php');
$portfolio_id = $_POST['id']; 
include('query_helper.php');
$query = "SELECT app_list.* FROM app_list where app_list.id = '".$portfolio_id. "'";
$app        = fetch_data_by_custom_query($query)[0];
$query1    = "SELECT app_app_category.category FROM app_apps_categories join app_app_category on app_app_category.id=app_apps_categories.fk_category_id where fk_app_id = '".$app['id']. "'";
$app['cats']     = fetch_data_by_custom_query($query1);
$app['query']     = $query1;
$query2    = "SELECT app_frontend.name FROM app_apps_frontends join app_frontend on app_frontend.id=app_apps_frontends.fk_frontend_id where fk_app_id = '".$app['id']. "'";
$app['frontends']     = fetch_data_by_custom_query($query2);
$query3    = "SELECT app_backend.name FROM app_apps_backends join app_backend on app_backend.id=app_apps_backends.fk_backend_id where fk_app_id = '".$app['id']. "'";
$app['backends']     = fetch_data_by_custom_query($query3);
$reviews = "SELECT app_reviews.review_description FROM app_reviews join app_list on app_list.id=app_reviews.app_id where app_list.id = '".$app['id']."'";
$test['e']     = fetch_data_by_custom_query($reviews);
//join app_apps_categories on app_apps_categories.fk_app_id=app_list.id
//join app_app_category on app_app_category.id=app_apps_categories.fk_category_id
//print_r($app);die;
?>

<div class="full-portfolio-block">
      <div id="grid_Model" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
           <section class="page1 slide work selected" id="slide-work-1" data-id="1" style="top: 0px;opacity: ;">
             <div id="portfolio_background" class="slide1 slide_back" style="background-image: url(<?php echo $base_url.'/uploads/portfolio_banner/'.$app['app_image'];?>);">
              <div class="container">
               <div class="row">
                <div class="col-md-5">
                 <div class="slide_detail">
                   <div class="slide_logo"><img class ="image-modal" src='<?php echo $base_url.'/uploads/app_logos/'.$app['logo'];?>' width="80px" height="80px;"> <span class="study_title_name " id="portfolio_app"><?php echo $app['app_name'];?> </span>
                   </div> 
                   <div class="study_title"><span id="portfolio_indus">
                   <?php ob_start(); foreach($app['cats'] as $cat)
                   {
                    echo $cat['category'].',';
					}
				     $output = ob_get_clean();
				     echo rtrim($output, ',');
                   ?>
                 </span>
                   </div>
                   <div class="slidTitile" id="portfolio_short_desc">
                    <p><strong><?php echo $app['description']; ?></strong>.</p>
                   </div>
                  <div class="category-tag" id="port_tags">
				  
                    <?php foreach($app['frontends'] as $frontend)
                      { ?>
                  
                      <p><?php echo $frontend['name'];?></p>
                      <?php }?>

                      <?php foreach($app['backends'] as $backend)
                      { ?>
                    <p><?php echo $backend['name'];?></p>
                    <?php }?>
                  </div>
                  <a href="#" class="view_casestudy" target="_blank" style="display:none !important" id="port_casestudy" tabindex="-1">View Casestudy
                     <i class="fa fa-angle-right" aria-hidden="true"></i>
                     <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
        <div class="case_app_icon1">
      <ul id="port_url">

        <?php if(!empty($app['website_url'])){?>
        <li class="border_colr"><span class="cib-tooltip">Website</span>
          <a rel="nofollow" target="_blank" href="<?php echo $app['website_url']; ?>" target="" title=""><span class="i-icon"><i class="fa fa-globe " aria-hidden="true"></i></span>
          </a>
        </li>
      <?php  }?>
       <?php if(!empty($app['ios_app'])){?>
        <li class="border_colr"><span class="cib-tooltip">iOS</span>
          <a rel="nofollow" target="_blank" href="<?php echo $app['ios_app']; ?>" target="" title=""><span class="i-icon"><i class="fa fa-apple" aria-hidden="true"></i></span>
          </a>
        </li>
        <?php  }?>
        <?php if(!empty($app['android_app'])){?>
        <li class="border_colr"><span class="cib-tooltip">Android</span>
          <a rel="nofollow" target="_blank" href="<?php echo $app['android_app']; ?>" target="https://play.google.com/store/apps/details?id=com.mydietistandroid" title=""><span class="i-icon"><i class="fa fa-android" aria-hidden="true"></i></span>
          </a>
        </li>
        <?php  }?>
        <!-- <li class="border_colr"><span class="cib-tooltip"><?php echo $app['android_app']; ?></span>
          <a rel="nofollow" href="<?php echo $app['android_app']; ?>" target="https://play.google.com/store/apps/details? id=com.mydietistandroid" title=""><span class="i-icon"><i class="fa fa-eye" aria-hidden="true"></i></span>
          </a>
        </li>
         <?php // }?> -->
        <?php if(!empty($app['app_video'])){?>
        <li class="pdrL border_colr"><span class="cib-tooltip">Video</span><a target="_blank" href="<?php echo $app['app_video']; ?>" style="text-decoration:none" class="video-btn-play " id="" onclick="">
                        <i class="fa fa-play-circle"></i>
                      </a>
        </li>
		
		
		<div class="review-modal slidTitile">
		
			<?php
		$a= $app['id'];
		$query="select id from app_reviews where app_id=$a";
		//$c=mysqli_query($query);
		$ravi= fetch_data_by_custom_query($query);		
        if($ravi){?>		
		<p><strong>	<?php 	
		foreach($test['e'] as $f)
		{
			echo $f['review_description'];
		}?>		
		<a target="_blank" href="survay.php?val_id=&id=<?php echo $ravi[0]['id'];?>" class="read-more-review">Read More</a></strong></p>
		</div>		
		<?php } }?>
     </ul>
  </div>
</div>
           </div>
           </div>
         </div>
       </div>
</section>
     <div class="circCont close-button">
       <button type="button" class="circle" data-animation="showShadow" data-remove="3000" data-dismiss="modal"></button>
     </div>
   </div>
 </div>
</div>
</div>


