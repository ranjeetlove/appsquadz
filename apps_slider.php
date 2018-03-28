<?php 
include('query_helper.php');
$condition='';
if(isset($_POST['id'])){
	$row_name=$_POST['id'];
$condition=" $row_name <> '' AND";	
}
$query="select * from app_reviews where status=1 OR status=3";
$result=fetch_data_by_custom_query($query);
//print_r($result);
$query_app_list="SELECT * FROM app_list where $condition id>0 and status=1 order by create_date DESC  limit 10";				  			  
$results_app_list=fetch_data_by_custom_query($query_app_list);
?>
<section class="home-portfolio-block">
         <div class="main-content-block fadeInUp animated3">
            <h2>Let our work speak for itself</h2>
            <!-- <div class="title-bar"></div> -->
         </div>
         <div id="w">
            <br>
            <div class="container">
			<div id="port_modal"> </div><!--22jan-->
               <!-- <div class="main-content-block fadeInUp animated3">
                  <h1>Our clients</h1>
                  </div> -->                
               <div class="crsl-items fadeInUp animated3" data-navigation="navbtns">			   
                  <div class="crsl-wrap">
	                <?php foreach($results_app_list as $result_app_list){	?>
                       <div class="crsl-item">
                         <div class="mobile-porfolio-grid transition round10" data-id="<?php echo $result_app_list['id'];?>">														<!--portfolio-->
                           <div class="mobile-client-logo">
                            <img src="uploads/app_logos/<?php echo $result_app_list['logo'];?>" style="" class="" onerror="" alt="LUV ViD">
                           </div>
                           <div class="mobile-client-name"><?php echo $result_app_list['app_name'];?></div>
                           <div class="mobile-clientProject">
                    <?php
                        $query_categories1='select app_app_category.category from app_app_category join
 `app_apps_categories` on `app_apps_categories`.`fk_category_id`=app_app_category.id WHERE app_apps_categories.fk_app_id="'.$result_app_list['id'].'"';
            $query_categories=fetch_data_by_custom_query($query_categories1);
            $t=count($query_categories);
              foreach($query_categories as $a){ $t--; ?>
                   <?php echo ($t==1?','.$a['category']:$a['category']);?>
                      <?php } 
                    ?>
               </div>  
                <div class="text-center devices mobile">
                <div>
                  <img src="uploads/app_thumb_image/<?php echo $result_app_list['app_thumb_image'];?>" style="" class="" onerror="" alt="Taste Of Bihar"> 
                   </div>
               </div>
              <div class="mobilegrid-hover">
               <div class="mobileproject-descrption">
                 <div class="mobilep-des-info">
                   <p><?php echo $result_app_list['description'];?>.</p>
                 </div>
               <div class="mobile-casestudy" style="display: none"></div>
               <div class="project-feature-btn">
                 <ul><center>
                  <?php if(!empty($result_app_list['website_url'])){?>
                    <li class="transition"><span><a target="_blank" href="<?php echo $result_app_list['website_url']; ?>">Website</a></span></li>   
                 <?php }?>
                 <?php if(!empty($result_app_list['ios_app'])){?>
                    <li class="transition"><span><a target="_blank" href="<?php echo $result_app_list['ios_app']; ?>">IPHONE</a></span></li> 
                 <?php }?>   
                 <?php if(!empty($result_app_list['android_app'])){?>     
                    <li class="transition"><span><a target="_blank" href="<?php echo $result_app_list['android_app']; ?>">Android</a></span></li>
                 <?php }?>
           </center>   
          </ul>
         </div>
      </div>
   </div>
  </div>
</div>
	<?php }?>
                     <!-- post #5 -->
                  </div>
                  <!-- @end .crsl-wrap -->
               </div>
               <!-- @end .crsl-items -->
            </div>
         </div>
         <!-- @end #w -->
         <br>
         <nav class="slidernav">
            <div id="navbtns" class="clearfix">
               <a href="#" class="previous"><i style="margin-top: 7px;" class="fa fa-chevron-left" aria-hidden="true"></i></a>
               <a href="#" class="next"><i style="margin-top: 7px;" class="fa fa-chevron-right" aria-hidden="true"></i></a>
            </div>
         </nav>
         <div class="btnRow">
            <a href="portfolios.php" class="comman-btn transition">VIEW More PROJECTS</a> 
         </div>
      </section>
	
      <!--slider--> 
 <script type="text/javascript">
   $(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
  });
  </script>
      <script type="text/javascript">
         $(function(){
           $('.crsl-items').carousel({
             visible: 3,
             itemMinWidth: 180,
             itemEqualHeight: 370,
             itemMargin: 9,
           });
           
           $("a[href=#]").on('click', function(e) {
             e.preventDefault();
           });
         });
      </script>
<!--my code 22 jan--> 
 <script type="text/javascript">
           $(".round10").click(function(){
             //alert('working');exit();
            var id= $(this).attr('data-id');
            //alert(id);
               jQuery.ajax({
                  url: "http://www.new.appsquadz.com/porfolio_modal_box.php",
                  method: 'POST',
                  //dataType: 'json',
                  data: {
                      id: id
                  },
                  success: function (data) {
                      if (data) {
                        //alert(data);exit;
                          $('#port_modal').html(data);
                          $('#grid_Model').modal('toggle');

                      } 
                  }
               });
           });
      </script>
<!--my code 22 jan--> 