<?php
   error_reporting(1);
   $base_path = getcwd();
   include('config.php');
   //$base_url = $_SERVER['HTTP_HOST'].'/'.end(explode('/',getcwd()));
   //die;
   include('query_helper.php');
   $page=$_GET['page'];
    $where="where status =1 ";
   //$where="where status =1 ";
    $ind_count=$_GET['ind_count'];
/* if($ind_count>1){
  $order="ORDER BY `category_rank` ASC, `global_rank` ASC";
  
 }else if($ind_count==1){
  $order= "ORDER BY `category_rank` ASC";
 }
 else{*/
  $order="ORDER BY `create_date` DESC";
 /*}*/
 $lim= ($page*6)-6;
 if($_GET['filters']){ 
    $filters = unserialize(urldecode($_GET['filters']));
    if($filters['industry'] && !empty($filters['industry'])){
    $where = $where." AND `app_app_category`.`id` IN (".implode(',',$filters['industry']).')';
    }
    if($filters['front'] && !empty($filters['front'])){
    $where = $where." AND `app_frontend`.`id` IN (".implode(',',$filters['front']).')';
    }
    if($filters['back'] && !empty($filters['back'])){
    $where = $where." AND `app_backend`.`id` IN (".implode(',',$filters['back']).')';
  }
 //$where=$where."status=1";
 }
   
//order by app_list.top_priority desc
 $query = "SELECT app_list.*,app_app_category.category FROM app_list
join app_apps_categories on app_apps_categories.fk_app_id=app_list.id 
join app_app_category on app_app_category.id=app_apps_categories.fk_category_id
join app_apps_frontends on app_apps_frontends.fk_app_id=app_list.id 
join app_frontend on app_frontend.id=app_apps_frontends.fk_frontend_id
join app_apps_backends on app_apps_backends.fk_app_id=app_list.id 
join app_backend on app_backend.id=app_apps_backends.fk_backend_id
".$where." group by app_list.id ".$order."  limit $lim,6";

//".$where." group by app_list.id order by app_list.id desc limit $lim,6";
  
      $apps = fetch_data_by_custom_query($query);
         ?>
         <div id="port_modal"></div>
<div class="container">
          <?php
          if ($apps){
          foreach($apps as $app){ //echo "<pre>".print_r($app); die;
          ?>
         <div class="col-lg-4 col-sm-6 col-xs-12 paddinglr app_div custom-web-grid"  id="web_grid_25">
            <div class="mobile-porfolio-grid transition round10" data-id="<?php echo $app['id'];  ?>" >
               <div class="mobile-client-logo">
                    <img src='<?php echo $base_url.'/uploads/app_logos/'.$app['logo'];?>' style='' class='' onError="" alt="LUV ViD">
               </div>
               <div class="mobile-client-name"><?php echo $app['app_name'];?></div>
               <div class="mobile-clientProject"><?php echo $app['category'];?></div>
               <div class="text-center devices mobile">
                  <div>
                     <img src='<?php echo $base_url.'/uploads/app_thumb_image/'.$app['app_thumb_image'];?>' style='' class='' onError="" alt="<?php echo $app['app_name'];?>"> 
                  </div>
               </div>
               <div class="mobilegrid-hover">
                  <div class="mobileproject-descrption">
                     <div class="mobilep-des-info">
                        <p><?php echo $app['description']; ?></p>
                     </div>
                     <div class="mobile-casestudy" style="display: none"></div>
                     <div class="project-feature-btn">
                        <ul><center><?php if (isset($app) && !empty($app['website_url'])){  ?>
                          <li class="transition"><span><a target="_blank" href="<?php echo $app['website_url']; ?>"><?php echo 'Website'.''; ?></a></span></li><?php } ?>
   
                           <?php if (isset($app) && !empty($app['ios_app'])){  ?>
                           <li class="transition"><span><a target="_blank" href="<?php echo $app['ios_app']; ?>"><?php echo 'IPHONE'.''; ?></a></span></li><?php } ?>
         
                            <?php if (isset($app) && !empty($app['android_app'])){  ?>      
                           <li class="transition"><span><a target="_blank" href="<?php echo $app['android_app']; ?>"><?php echo 'Android'.''; ?></a></span></li><?php } ?>
                     </center>   </ul>
                     </div>
                  </div>
               </div>
            </div>
         <input type="hidden" name="data[portfolio_data]" data-attr="" id="portfolio_25" /> 
     </div>
<?php } }?>
</div>

<div class="page_top"> <a href="javascript:void(0);" id="gotop"></a> </div>
<div class="clearfix"></div>
    <script type="text/javascript">
           
           $(".round10").click(function(){
             //alert('working');
            var id= $(this).attr('data-id');
            //alert(id);
               jQuery.ajax({
                  url: "http://localhost/appsquadz/porfolio_modal_box.php",
                  method: 'POST',
                  //dataType: 'json',
                  data: {
                      id: id
                  },
                  success: function (data) {
                      if (data) {
                       // alert(data);
                          $('#port_modal').html(data);
                          $('#grid_Model').modal('toggle');

                      } 
                  }
               });
           });
         // function loadSurveyPortfolios() {
         //      var actionurl = "http://localhost/appsquadz/load_portfolio_ajax.php?page=" + pageNumber;
         //      $.ajax({
         //        type: "POST",
         //        url: actionurl,
         //        beforeSend: function () {
         //          $('#loadmore_data a').addClass('active');
         //        },
         //        success: function (data) {
         //          if (data != 'bottom_reached') {
         //            $('#survey_portfolio_div').append(data);
         //            if (totalCount > $('.app_div').length) {
         //              $('#loadmore_data').show();
         //            } else {
         //              $('#loadmore_data').hide();
         //            }
         //            pageNumber += 1;
         //          } else {
         //            $('#loadmore_data').hide();
         //          }

         //        },
         //        complete: function () {
         //          $('#loadmore_data a').removeClass('active');
         //        }
         //      });
         //    }
      </script>