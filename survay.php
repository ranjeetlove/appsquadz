<?php
include("query_helper.php");
if($_GET['id']){
  $id = $_GET['id'];
}
//if(isset($_GET['next'])){
$data=fetch_data_by_custom_query("select id from app_reviews where id != $id ORDER BY RAND() LIMIT 1");
$next_id = $data[0]['id'];
//}
error_reporting(1);
@$val_id=$_GET['val_id'];
$base_path = getcwd();
$base_url = "http://localhost/appsquadz/";
$final=$base_url;
$query = "SELECT `app_survey_answers`.*,app_survey_heading.heading as head,app_survey_question.fk_survey_heading_id
					FROM `app_survey_answers`
				    JOIN `app_survey_question` on `app_survey_question`.`id` = `app_survey_answers`.`ques_id` 
					JOIN `app_survey_heading` on `app_survey_heading`.`id` = `app_survey_question`.`fk_survey_heading_id` 
					WHERE `app_survey_answers`.`testimonial_id`='$id' group by app_survey_question.fk_survey_heading_id ";
					$sel=mysqli_query($conn,$query) or die(mysqli_error($conn));
					//$res = mysqli_fetch_array($sel);
		while($res = mysqli_fetch_assoc($sel)) {			
			$final_detail['heading'] = $res['head'];			
			$query1 = "SELECT `app_survey_answers`.*,app_survey_question.question
					FROM `app_survey_answers`
				    JOIN `app_survey_question` on `app_survey_question`.`id` = `app_survey_answers`.`ques_id` 
					JOIN `app_survey_heading` on `app_survey_heading`.`id` = `app_survey_question`.`fk_survey_heading_id` 
					WHERE `app_survey_heading`.`id`='$res[fk_survey_heading_id]'";
			$sel1=mysqli_query($conn,$query1) or die(mysqli_error($conn));
			$final_detail['answers'] =[];
			while($res1 = mysqli_fetch_assoc($sel1)) {
				$final_detail['answers'][] = $res1;
			}
			$final_details[] =$final_detail;
		}
//echo '<pre>'; print_r($final_details); //die;
//die;

			
//$result = $conn->query($query);					
//while($answers = $result->fetch_array(MYSQLI_ASSOC)) {
	//print_r($answers);
//}

/*$query = "SELECT `app_survey_question`.*,
                 `app_survey_heading`.`id` as heading_id,
                 `app_survey_heading`.`heading` as heading_name
					FROM `app_validaters` 
					JOIN `app_survey_heading` on `app_survey_heading`.`fk_validater_id` = `app_validaters`.`id` 
					JOIN `app_survey_question` on `app_survey_question`.`fk_survey_heading_id`= `app_survey_heading`.`id` 
					WHERE `app_validaters`.`id`='$val_id'";

$result = $conn->query($query);
while($project = $result->fetch_array(MYSQLI_ASSOC)) {
  //$surv[] = $project;
    $surveys[$project['heading_id']][] = $project;
    //echo $project;
	//echo '<pre>'; print_r($surveys); die;
}

*/

$get_rev_query = "SELECT * from app_reviews join app_list on app_list.id=app_reviews.app_id where app_reviews.id=".$_GET['id'];
$get_rev_res = $conn->query($get_rev_query)->fetch_array(MYSQLI_ASSOC);
//echo '<pre>'; print_r($get_rev_res); die;
// $get_test_link = "SELECT * from app_list where id=".$_GET['id'];
// $get_test = $conn->query($get_test_link)->fetch_array(MYSQLI_ASSOC);
// echo '<pre>'; print_r($get_test); die;
?>
<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">
   <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
   <head>
      <div id="header">
      <script type="text/javascript">
         (function(p,u,s,h){
             p._pcq=p._pcq||[];
             p._pcq.push(['_currentTime',Date.now()]);
             s=u.createElement('script');
             s.type='text/javascript';
             s.async=true;
             s.src='https://cdn.pushcrew.com/js/4802fd4a1fdd24db58e930087f67e0bd.js';
             h=u.getElementsByTagName('script')[0];
             h.parentNode.insertBefore(s,h);
         })(window,document);
      </script>
      <link rel="canonical" href="https://www.appsquadz.com/about-us.html" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="Googlebot" content="index, follow" />
      <meta itemprop="name" content="AppSquadz Technologies Pvt. Ltd." />
      <meta itemprop="description" content="AppSquadz is one of the top mobile app development companies in India, USA ,UK &amp; UAE focusing on iPhone, iPad &amp; Android applications. Offer web development services across the globe." />
      <title>Top Mobile App Development Company India, USA, UK &amp; UAE - AppSquadz</title>
      <meta name="description" content="AppSquadz is one of the top mobile app development companies in India, USA, UK &amp; UAE focusing on iPhone, iPad &amp; Android applications. Offer web development services across the globe." />
      <meta name="google-site-verification" content="AIzaSyCuvoKrK_pagANsX6iiizxbBu_i_al9XW8" />
      <meta name="msvalidate.01" content="5D6019EB1D974BA930F08E67BA123AF6" />
      <meta name="p:domain_verify" content="da1810d471446566eca0be010efbbedf"/>
      <meta property="fb:admins" content="445348202311675" />
      <meta name=DC.title content="Top Mobile App Development Company" />
      <meta name=geo.region content="IN-UP" />
      <meta name=geo.placename content= "H 35, Sector 63, Noida" />
      <meta name=geo.position content="28.629343,77.379053" />
      <meta name=ICBM content="28.626641, 77.384803" />
      <link rel="alternate" type="application/rss+xml" title="AppSquadz Technologies Pvt. Ltd.- RSS" href="ror.xml" />
      <meta property="og:url" content="https://www.appsquadz.com/" />
      <meta property="og:title" content="Top Mobile App Development Company in India, USA, UK &amp; UAE - AppSquadz" />
      <meta property="og:site_name" content="AppSquadz Technologies Pvt. Ltd." />
      <meta property="og:description" content="AppSquadz is one of the top mobile app development companies in India, USA, UK &amp; UAE focusing on iPhone, iPad &amp; Android applications. Offer web development services across the globe." />
      <meta property="og:type" content="https://www.appsquadz.com/" />
      <meta property="og:image" content="https://www.appsquadz.com/img/popup-logo.png" />
      <meta property="og:locale" content="en_us" />
      <meta name="twitter:card" content="summary">
      <meta name="twitter:url" content="https://www.appsquadz.com/">
      <meta name="twitter:creator" content="@appsquadz">
      <meta name="twitter:title" content="Top Mobile App Development Company in India, USA, UK &amp; UAE - AppSquadz">
      <meta name="twitter:description" content="AppSquadz is one of the top mobile app development companies in India, USA, UK &amp; UAE focusing on iPhone, iPad &amp; Android applications. Offer web development services across the globe.">
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
      <link rel="stylesheet" type="text/css" href="css/assets/main.mind1.css" />
      <link rel="stylesheet" type="text/css" href="css/assets/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/material-design-iconic-font.min.css" />
      <link href="css/main.css" rel="stylesheet" type="text/css">
      <script src="js/main.js" type="text/javascript"></script>
      <script data-cfasync="false" type="text/javascript" src="js/thumbnail-slider.js"></script>
      <script type="text/javascript" async src="js/additional-methods.min.js"></script>
      <script type="text/javascript" async src="js/success-stories/success-stories.js"></script>
      <script type="text/javascript" async src="js/jquerysectionsnap.js"></script>
      <script type="text/javascript" data-cfasync="false">
         var RecapLength1 = 0;
         var RecapLength2 = 0;
         var RecapLength3 = 0;
         
         var CRecaptchaField1 = '';
         var CRecaptchaField2 = '';
         var CRecaptchaField3 = '';
         var CRecaptchaField4 = '';
         
         
         var CaptchaCallback = function() {
          //RecapLength1 = $('#RecaptchaField1').length; 
          RecapLength1 = document.getElementById("RecaptchaField1");
          if(RecapLength1 !== null){
           CRecaptchaField1 = grecaptcha.render('RecaptchaField1', {'sitekey' : '6LfhJhcUAAAAABDENatVe90Kw4-pWz6vodN3pzDa'});
          }
          
          //RecapLength2 = $('#RecaptchaField2').length; 
          RecapLength2 = document.getElementById("RecaptchaField2");
          if(RecapLength2 !== null){
           CRecaptchaField2 = grecaptcha.render('RecaptchaField2', {'sitekey' : '6LfhJhcUAAAAABDENatVe90Kw4-pWz6vodN3pzDa'});
          }
          
          //RecapLength3 = $('#RecaptchaField3').length; 
          RecapLength3 = document.getElementById("RecaptchaField3");
          if(RecapLength3 !== null){
           CRecaptchaField3 = grecaptcha.render('RecaptchaField3', {'sitekey' : '6LfhJhcUAAAAABDENatVe90Kw4-pWz6vodN3pzDa'});
          }
          
          //RecapLength4 = $('#RecaptchaField4').length; 
          RecapLength4 = document.getElementById("RecaptchaField4");
          if(RecapLength4 !== null){
           CRecaptchaField4 = grecaptcha.render('RecaptchaField4', {'sitekey' : '6LfhJhcUAAAAABDENatVe90Kw4-pWz6vodN3pzDa'});
          }
          
         };
         
         
         
            var mct1_Options =
         {
             sliderId: "mcts1",
             direction: "horizontal",
             scrollInterval: 1400,
             scrollDuration: 800,
             hoverPause: true,
             autoAdvance: true,
             scrollByEachThumb: true,
             circular: true,
             largeImageSlider: null,
             inSyncWithLargeImageSlider: true,
             license: "mylicense"
         };
         
         
         try {
             var thumbnailSlider = new ThumbnailSlider(mct1_Options);
         }
         catch(err) {
             console.log('Undefined thumbnailSlider');
         }
         
      </script>
      <script type="text/javascript"> 
         var s;
         $(document).on('ready', function() { // start doc ready
            
            
         
         
          //change page title when inactive window
         
           /* 'apple-touch-icon-precomposed': 'sitelogo-180x180.png',
                             'icon': 'sitelogo-32x32.png',
                             'shortcut icon': 'sitelogo-32x32.png' */
         
         
         /* $.mFancyTitle({
                         mftMissYou: true,
                         mftMissYouTitle: 'Come back, we still miss you!',
                         mftTitleBlink: [false, false], // active window, inactive window
                         mftTitleMarquee: [false, false],
                         mftMissYouFavicon: {
                            
                              'apple-touch-icon-precomposed': 'https://www.konstantinfo.com/favicon.ico',
                             'icon': 'https://www.konstantinfo.com/favicon.ico',
                             'shortcut icon': 'https://www.konstantinfo.com/favicon.ico'
         
                             
                         }
          });  */
         
            var mct1_Options =
         {
             sliderId: "mcts1",
             direction: "horizontal",
             scrollInterval: 1400,
             scrollDuration: 800,
             hoverPause: true,
             autoAdvance: true,
             scrollByEachThumb: true,
             circular: true,
             largeImageSlider: null,
             inSyncWithLargeImageSlider: true,
             license: "mylicense"
         };
         
         
         try {
             var thumbnailSlider = new ThumbnailSlider(mct1_Options);
         }
         catch(err) {
             console.log('Undefined thumbnailSlider');
         }
         
         
         
            $('.circle').on('click',function(){
               var animClass = $(this).data('animation');
               var removeTime = $(this).data('remove');
               if($(this).hasClass(animClass)){
                  $(this).removeClass(animClass);
               }else{
                  var data_from = $(this).attr('data-from');
                  if(data_from=='req-a-quote'){
                     //Reset form
                     $('#requestQuoteForm')[0].reset();
                     $.gritter.removeAll();
                     
                     $(".input-effect input").each(function(){
                        $(this).removeClass("has-content");
                        $(this).closest('.form-group').removeClass('error');
                     })
                     
                     $(".form-group select").each(function(){
                        $(this).removeClass("has-content");
                        $(this).closest('.form-group').removeClass('error');
                     })
                     
                     $(".input-effect textarea").each(function(){
                        $(this).removeClass("has-content");
                        $(this).closest('.form-group').removeClass('error');
                     });
                     
                     $('[id^="quoteby_"]').each(function(){
                        $(this).closest('.checkbox2').removeClass('error');
                        $(this).parent().parent().removeClass("checked");
                        $(this).parent().removeClass("active");
                     });
                     $('[id^="ContactsCommunicationMethod_"]').each(function(){
                        $(this).closest('.checkbox2').removeClass('error');
                        $(this).parent().parent().removeClass("checked");
                        $(this).parent().removeClass("active");
                     });
                     $('[id^="ContactsCategory_"]').each(function(){
                        $(this).closest('.checkbox2').removeClass('error');
                        $(this).parent().parent().removeClass("checked");
                        $(this).parent().removeClass("active");
                     });   
                  }
                  
                  $(this).addClass(animClass);
                  if(typeof removeTime != 'undefined'){
                     var el = $(this);
                     setTimeout(function(){
                     el.removeClass(animClass);
                     },removeTime);
                  }
               }
             });
         
            
            $('html').click(function (e) {
               var clickElementId = e.target.id;
               
               if (clickElementId.indexOf("portfoliotestimonialli_") >= 0){
                  var self = $(this);
                  self.toggleClass( "active" );
               }else if (clickElementId.indexOf("portfoliotestimoniala_") >= 0){
                  var self = $(this).parent();
                  self.toggleClass( "active" );
               }else if (clickElementId.indexOf("portfoliotestimoniali_") >= 0){
                  var self = $(this).parent().parent();
                  self.toggleClass( "active" );
               } else {
                  var self = $('[id^="portfoliotestimonialli_"]');
                  self.removeClass( "active" );
               }
               
               if (clickElementId.indexOf("main_toggle_vidwrap-") >= 0){
                  $('.theater-toggle').trigger("click");
               }
            });
         
            //var $nav = $('#navbar > ul > li');
            var  $nav = $('ul.menu-links > li');
            $nav.hover(
               function() {
                     $(this).addClass('hover');       
               },
               function() {
                     $(this).removeClass('hover');
                  
               }
            );
         
            /* this script use for mobile case */
         
            /* $("li.submenu a").click(function(){    
                 $("ul.dropdown").slideToggle("500");       
            }); */
           
            var width = $(window).width();
            if ((width <= 1199)) {
               $("li.submenu a").click(function(){  
                  if($(this).parent().hasClass("active")){ 
                     $(this).next().slideUp("500"); 
                     $(this).parent().removeClass("active");
                  }else{
                     $("ul.dropdown").slideUp("500"); 
                     $("li.submenu").removeClass("active");
                     $(this).next().slideDown("500"); 
                     $(this).parent().addClass("active");
                  }
               }); 
            }
               
               
         
         
               // This is for landing page technology section
            $(document).on('click','section.technologiesProvide li',function () {
               //alert('rd');
               var currLink   = $(this);
               var selectedId    = currLink.parents('section').attr("id");
               selectedId     = '.technologiesProvide';//'#'+selectedId;
               //alert(selectedId);
               var topSet = -140;
               if($(selectedId).hasClass('get-in-touch-section')) {
                   topSet = -300;
               }
               $.smoothScroll({
                 scrollTarget: selectedId,
                 speed: 1000,
                 offset: topSet
               });
            });
         
            //  common js code for landing pages 
          
               var owl = $(".owl-carousel");
               if($(".owl-carousel").length >0 ){
                  owl.owlCarousel({
                     autoPlay: true, 
                     rewindNav: true, 
                     autoHeight : true,
                     items : 3, //10 items above 1000px browser width
                     itemsDesktop : [1199,2], //5 items between 1000px and 901px
                     itemsDesktopSmall : [991,2], // 3 items betweem 900px and 601px
                     itemsTablet: [600,1], //2 items between 600 and 0;
                     itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                     afterAction: function(el){
                        if( $(window).width() >= 992) {
                           //remove class active
                           this
                           .$owlItems
                           .removeClass('active')
                           //add class active
                           this
                           .$owlItems //owl internal $ object containing items
                           .eq(this.currentItem + 1)
                           .addClass('active')
                        }else {
                            this
                           .$owlItems
                           .removeClass('active')
                           //add class active
                           this
                           .$owlItems //owl internal $ object containing items
                           .eq(this.currentItem)
                           .addClass('active')
                        }
                     }
                  });
                    // Custom Navigation Events
                  $(".customNavigation .next").click(function(){
                     owl.trigger('owl.next');
                  })
                  $(".customNavigation .prev").click(function(){
                     owl.trigger('owl.prev');
                  })
               }
         
            /* this script use for mobile case */
         
            $(".nav-grid").click(function(){
               $(".nav-grid").toggleClass("is-active");
               $(".navigation-part").toggleClass("is-active2"); 
               $(".menu-social-icon").toggleClass("active");
               $("body").toggleClass("cover-fixed"); 
             }); 
         
                /* this script use for to scroll get-in touch form when user click on ready to talk popup. */
         
               $('.bofu-scroll').on('click', function() {
                      $.smoothScroll({
                        scrollTarget: '#pop-scroll',
                        speed: 2000,
                        offset: -80
                      });
                      return false;
                  });
               
               
               $('.page_top a[href^="#"]').on('click',function (e) {
                  e.preventDefault();
                  var target = this.hash,
                  $target = $(target);
                  $('html, body').stop().animate({
                     'scrollTop': '0px'
                  }, 1500, 'swing', function () {
                     window.location.hash = target;
                  });
               });
               
               $('.page_top #gotop').on('click',function (e) {
                  e.preventDefault();
                  $('html, body').stop().animate({
                     'scrollTop': '0px'
                  }, 1500, 'swing', function () {
                     
                  });
               });
         
         
                /*Scroll support content block according to conettn div height*/   
            if($('.custom-support-content-tab').height() != null){
               var customTab= $('.custom-support-content-tab').height();
               var proposalBlock = '';
               if($('.proposal-block').length > 0 ){
                  var proposalBlock= $('.proposal-block').position().top;
               }
               
               var totalHeight = proposalBlock - customTab;
               $('.support-section').click( function(){
                     var totalHeight = proposalBlock - customTab;
                     console.log(totalHeight);
                     $('html,body').animate({scrollTop: totalHeight}, 1000);
               });     
            }
         
            /* This script is used for partner_with_us.ctp page on Become a partner button */
         
            $('.become_a_partner_btn').on('click',function (e) {
                  e.preventDefault();
                  /*
                  var target = this.hash,
                  $target = $(target);
                  $('html, body').stop().animate({
                     'scrollTop': $target.offset().top
                  }, 500, 'swing', function () {
                     window.location.hash = target; 
                  });
                  $("#partner-form").css('padding-top','100px'); */
                  var selectedId = $(this).attr('href');
                  var data_from = $(this).attr('data-from');
                  var topSet = -140;
                  if($(selectedId).hasClass('get-in-touch-section')) {
                      topSet = -300;
                  }
                  $.smoothScroll({
                    scrollTarget: selectedId,
                    speed: 2000,
                    offset: topSet
                  });
                  
               });
               
               
               $('.cbss').on('click',function (e) {
                  e.preventDefault();
                  var selectedId = $(this).attr('href');
                  var data_from = $(this).attr('data-from');
                  var topSet = -140;
                  if($(selectedId).hasClass('get-in-touch-section')) {
                      topSet = -300;
                  }
                  $.smoothScroll({
                    scrollTarget: selectedId,
                    speed: 2000,
                    offset: topSet
                  });
               });
               
               //heights1
               var divMaxHeight = -1;
               $('#col-manage-block-heights1 .col-block-height').each(function() {
                  divMaxHeight = divMaxHeight > $(this).height() ? divMaxHeight : $(this).height();
               });
               $('#col-manage-block-heights1 .col-block-height').each(function() {
                  $(this).height(divMaxHeight);
               });
               
               //heights2
               $('#col-manage-block-heights2 .col-block-height').each(function() {
                  divMaxHeight = divMaxHeight > $(this).height() ? divMaxHeight : $(this).height();
               });
               $('#col-manage-block-heights2 .col-block-height').each(function() {
                  $(this).height(divMaxHeight);
               });
               
               //heights3
               $('#col-manage-block-heights3 .col-block-height').each(function() {
                  divMaxHeight = divMaxHeight > $(this).height() ? divMaxHeight : $(this).height();
               });
               $('#col-manage-block-heights3 .col-block-height').each(function() {
                  $(this).height(divMaxHeight);
               });
               
               //heights4
               $('#col-manage-block-heights4 .col-block-height').each(function() {
                  divMaxHeight = divMaxHeight > $(this).height() ? divMaxHeight : $(this).height();
               });
               $('#col-manage-block-heights4 .col-block-height').each(function() {
                  $(this).height(divMaxHeight);
               });
         
           
            if( $('.mobile-country').length > 0 ) {
               $(".mobile-country").intlTelInput({
                  // allowDropdown: false,
                  // autoHideDialCode: false,
                  //autoPlaceholder: "on",
                  // dropdownContainer: "body",
                  // excludeCountries: ["us"],
                  //formatOnDisplay: false,
                  geoIpLookup: function(callback) {
                      /* $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "";
                        callback(countryCode);
                      }); */
                        callback('IN');
                  },
                  initialCountry: "auto",
                  // nationalMode: true,
                  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
                  //placeholderNumberType: "MOBILE",
                  // preferredCountries: ['cn', 'jp'],
                  separateDialCode: true,
                  utilsScript: "https://www.konstantinfo.com/js/utils.js"
               });
               
               $('.country-list li').on('click',function(){ 
                  var CallingCode = $(this).attr('data-dial-code');
                  $('#ContactsCallingCode').val('+'+CallingCode);
               });
               
            }      
         
            function openRequestQuote(){
           
               $.ajax({
               type: "GET",
               url: "https://www.konstantinfo.com/request-a-quote.php" , 
               data : { },
               success:function(data){
                  $.getScript('../www.google-analytics.com/analytics.js'); // jQuery shortcut
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', 'UA-18381062-1', 'auto');
                  ga('send', 'pageview','request-a-quote.html');
               }  
            });
               
            }
            
         
            /* this script used for inquery section Great, tell us about your project */
         
               //$(".inquiry-btn, .mainsec .btn-section .comman-btn").click(function(){
               //$(".inquiry-btn, .mainsec .btn-section .comman-btn").on("click", function(event){
               $(document).on('click', ".inquiry-btn, .mainsec .btn-section .comman-btn", function(){
                  //alert('r');
                  var cur_url = window.location.href;
                  history.pushState(null, null, cur_url+'?request-a-quote');
               
                  $('body').addClass('no-scroll');
                  $('.start-a-project--bg').css({'transform-origin': '0px 50vh 0px'});
                     
                  $('.start-a-project--bg').removeClass('delay_background');
                  $('.start-projectinner').removeClass('no-delay');
                  $(".start-a-project").removeClass("closed"); 
         
                  $('#intercom-container').css('display','none');
                  openRequestQuote();
               });
               
               //$(".cs_req_btn").click(function(){
               //$(".cs_req_btn").on("click", function(event){
               $(document).on('click', ".cs_req_btn", function(){
                  
                  var cur_url = window.location.href;
                  history.pushState(null, null, cur_url+'?request-a-quote');
                  
                  $('body').addClass('no-scroll');
                  $('.start-a-project--bg').css({'transform-origin': '0px 50vh 0px'});
                     
                  $('.start-a-project--bg').removeClass('delay_background');
                  $('.start-projectinner').removeClass('no-delay');
                  $(".start-a-project").removeClass("closed");
                  
                  $('#intercom-container').css('display','none');
                  openRequestQuote();
               });
               
               
               //$(".close-button").click(function(){ 
               //$(".close-button").on("click", function(event){
               $(document).on('click', ".close-button", function(){
                  
                  var cur_url = window.location.href;
                  var cur_url = cur_url.replace("?request-a-quote", "");
                  history.pushState(null, null, cur_url);
               
                  $('body').removeClass('no-scroll'); 
                  $(".start-a-project").addClass("closed");
                  $('.start-projectinner').addClass('no-delay');
                  $('.start-a-project--bg').addClass('delay_background');
                  $('#intercom-container').css('display','block');
               });     
         
               $("#step1").on("click", function(event){  
                  event.stopPropagation();      
                  var anchor = $("#what-you-making");    
                  var position = anchor.position().top + $('.popup-header').height()+134; 
                  $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
               });
               
               $("#step2").on("click", function(){    
                  var anchor = $("#what-you-making2");
                  var position = anchor.position().top+$('.popup-header').height()+134;   
                  $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
               });
               
               $("#step3").on("click", function(){    
                  var anchor = $("#time-framework");
                  var position = anchor.position().top+$('.popup-header').height()+134;   
                  $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
               });
               
               $('.checkbox2 input:checkbox').change(function(){
                  if($(this).is(":checked")) {
                     $(this).parent().parent().addClass("checked");
                  } else {
                     $(this).parent().parent().removeClass("checked");
                  }
               });
         
         
               /* this script used for inquery section Great, tell us about your project */
         
            $('.common-textarea').on('change keyup keydown paste cut', 'textarea', function () {
                 $(this).height(0).height(this.scrollHeight);
             }).find('textarea').change();
                  
               $('.watch-video-block').addClass('fadein');
              
                  $('.video-btn-play').on('click', function() {
                                //console.log($(this).parent().removeClass('fadein'));    
                         //$(this).parent().attr('class','video-block watch-video-block');
                         $(this).parent().removeClass('fadein');
                        // $(this).prev().attr('class','background-image-holder');
                         //console.log($(this).prev().attr('class','background-image-holder')); 
                         var _video = $(this).next();
                         
                        // $(_video).next().find('.videoinfo').removeClass('fadein')
                         
                         if(!$(this).hasClass('video-btn-pause') && !$(this).hasClass('cust-pause')) {
                           $('.testimonial-video').each(function() {
                                 $(this).get(0).pause();
                                 $(this).load();
                                 $('.video-btn-play').removeClass('video-btn-pause');
                           });
         
                           _video[0].play();
                         
                            
                            $(this).addClass('video-btn-pause');
                             
                             _video[0].onended = function(e) {
                                $(this).prev().attr('class','video-btn-play');
                             }
                             return false;
         
                         } else {
                             if($(this).hasClass('cust-pause')){
                                     $('.testimonial-video').each(function() {
                                        $(this).get(0).pause();
                                        $('.video-btn-play').removeClass('video-btn-pause');
                                     });
                                     
                                     _video[0].play();
                                 
                                     $(this).addClass('video-btn-pause');
                                  
                                     _video[0].onended = function(e) {
                                         $(this).prev().attr('class','video-btn-play');
                                     }
                                     $(this).removeClass('cust-pause');
                             }else{
                                   _video[0].pause();
                                   $(this).removeClass('video-btn-pause');
                                   $(this).addClass('cust-pause');
                             }
                           
                         }
                         
                         return false;
                     });
         
         
            
              /* $('.typed-string').hide();
                setTimeout(function() { 
                 $('#custom-remove').addClass('hidden')
                 $("#typed").typed({ 
                     stringsElement: $('.typed-string'),
                  showCursor: true, 
                  typeSpeed: 30,
                  backDelay: 500, 
                     loop: false,
                     contentType: 'html', // or text
                     // defaults to false for infinite loop
                     loopCount: false,
                     callback: function(){ 
                         
                         $('.typed-cursor').hide();
                         setTimeout(function() {
                             $('#typed').find('#custom-w-second').show();
                         }, 2000);
                         setTimeout(function() {
                            
                            $('#typed').find('#custom-w-first').show();
                         }, 1000);
                         
                     },
                     resetCallback: function() { newTyped(); }
                 });
             
             }, 3000); */
            
            setTimeout(function() {
               $('#content-bg').find('#custom-w-second').show();
               $('#content-bg').find('#custom-w-first').show();
            }, 2000);
            
              
               
              $('#horizontalTab').easyResponsiveTabs({
                    type: 'default', //Types: default, vertical, accordion           
                    width: 'auto', //auto or any width like 600px
                    fit: true   // 100% fit in a container
                });
         
                $('#verticalTab').easyResponsiveTabs({
                    type: 'vertical',
                    width: 'auto',
                    fit: true
                });
         
             
         }); // end doc ready
         
            
             $(function(){
               //SyntaxHighlighter.all();
             });
         
             function openRequestedPopup() {
            var w=420; var h=320;
            var url="https://www.speakpipe.com/widget/inline/ji7jgvx6jte8ktba3io5f3bbvqvs7stj?rf=https%3A%2F%2Fwww.speakpipe.com%2Fwidget%2Finline%2Fji7jgvx6jte8ktba3io5f3bbvqvs7stj&amp;mode=standalone";
            var title="Konstant Voice Recorder";
            var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
             var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
         
             var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
             var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
         
             var left = ((width / 2) - (w / 2)) + dualScreenLeft;
             var top = ((height / 2) - (h / 2)) + dualScreenTop;
             var newWindow = window.open(url, title, 'scrollbars=yes,  width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
         
            
         /* windowObjectReference = window.open(
             
            "https://www.speakpipe.com/widget/inline/ji7jgvx6jte8ktba3io5f3bbvqvs7stj?rf=https%3A%2F%2Fwww.speakpipe.com%2Fwidget%2Finline%2Fji7jgvx6jte8ktba3io5f3bbvqvs7stj&mode=standalone",
             "DescriptiveWindowName",
             "width=420,height=230,resizable,scrollbars=yes,status=1"
           );*/
         }
         
         /* This script use for get-in touch and contact-us page */
         // JavaScript for label effects only
            $(window).load(function(){
               //$(".form-group input").val("");
               
               $(".input-effect input").focusout(function(){
                  if($(this).val() != ""){
                     $(this).addClass("has-content");
                  }else{
                     $(this).removeClass("has-content");
                  }
               });
               
               $(".input-effect select").focusout(function(){
                  if($(this).val() != ""){
                     $(this).addClass("has-content");
                  }else{
                     $(this).removeClass("has-content");
                  }
               });
               
               $(".input-effect textarea").focusout(function(){
                  if($(this).val() != ""){
                     $(this).addClass("has-content");
                  }else{
                     $(this).removeClass("has-content");
                  }
               });
         
               jQuery('#grid').masonry({});
         
         
                        $('.flexslider').flexslider({
                     animation: "slide",
                     slideshow:false,
                     start: function(slider){
                       $('body').removeClass('loading');
                     }
                  });
                
         
         
         
         
            });
          
            /* Common for all pages to up top */
         $(window).scroll(function() {
           if ($(this).scrollTop() > 300){  
             $('.page_top').addClass("new_page_top fadeInUp animated3"); 
           }
           else{
             $('.page_top').removeClass("new_page_top fadeInUp animated3"); 
           }
         
           /* this script is used to hide ready to talk popup only for home page*/
         
           if ($(window).scrollTop() >= (($(document).height() - $(window).height()) - $('.top-bofu').innerHeight())) {
               $('.progress-nav-container').removeClass("prog-show"); 
           }
           else{  
           if ($(this).scrollTop() > 300){  
             $('.progress-nav-container').addClass("prog-show"); 
           }
           else{
             $('.progress-nav-container').removeClass("prog-show"); 
           }}
         
         }); 
            
         
         $(function() {
            
         $.each($.validator.methods, function (key, value) {
            $.validator.methods[key] = function () {           
               if(arguments.length > 0) {
                  arguments[0] = $.trim(arguments[0]);
               }
         
               return value.apply(this, arguments);
            };
         });
         
         //configuration
         var max_file_size          = 10485760; //allowed file size. (1 MB = 1048576)
         var allowed_file_types     = ['application/zip', 'application/x-compressed-zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-excel', 'application/pdf', 'text/plain', 'application/vnd.ms-powerpointtd', 'text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-powerpoint', 'application/octet-stream']; //allowed file types
         var result_output          = '#output'; //ID of an element for response output
         var my_form_id             = '#quote_files'; //ID of an element for response output
         var total_files_allowed    = 5; //Number files allowed to upload
         var progress_bar_id     = '#progress-wrp'; //ID of an element for response output
         
         //on form submit
         $('#quote_files').on("change", function(event) {
            event.preventDefault();
            var proceed = true; //set proceed flag
            var error = [];   //errors
            var total_files_size = 0;
            
            if(!window.File && window.FileReader && window.FileList && window.Blob){ //if browser doesn't supports File API
               $('.gritter-item-wrapper').remove();
               $.gritter.add({
                  title: 'File error:',
                  fade_in_speed: 'medium',
                  fade_out_speed: 2000,
                  time: 6000,
                  text: "Your browser does not support new File API! Please upgrade.",
                  sticky: false,
                  class_name: 'growl-warning',
               });
            }else{
               var total_selected_files = $('#quote_files')[0].files.length; //number of files
               //limit number of files allowed
               if(total_selected_files > total_files_allowed){
                  $('.gritter-item-wrapper').remove();
                  $.gritter.add({
                     title: 'File error:',
                     fade_in_speed: 'medium',
                     fade_out_speed: 2000,
                     time: 6000,
                     text: "You have selected "+total_selected_files+" file(s), " + total_files_allowed +" is maximum!",
                     sticky: false,
                     class_name: 'growl-warning',
                  });
                  proceed = false; //set proceed flag to false
               }
                //iterate files in file input field
               $($('#quote_files')[0].files).each(function(i, ifile){
                  if(ifile.value !== ""){ //continue only if file(s) are selected
                     file_exe = ifile.name.split('.').pop();
                     if(allowed_file_types.indexOf(ifile.type) === -1 && ifile.type!='' && file_exe!='zip'){ //check unsupported file
                        $('.gritter-item-wrapper').remove();
                        $.gritter.add({
                           title: 'File error:',
                           fade_in_speed: 'medium',
                           fade_out_speed: 2000,
                           time: 6000,
                           text: "<b>"+ ifile.name + "</b> is unsupported file type!",
                           sticky: false,
                           class_name: 'growl-danger',
                        });
                        proceed = false; //set proceed flag to false
                     }
         
                     total_files_size = total_files_size + ifile.size; //add file size to total size
                  }
               });
               
               //if total file size is greater than max file size
               if(total_files_size > max_file_size){  
                  $('.gritter-item-wrapper').remove();
                  $.gritter.add({
                     title: 'File error:',
                     fade_in_speed: 'medium',
                     fade_out_speed: 2000,
                     time: 6000,
                     text: "You have uploaded "+(total_files_size/1048576).toFixed(2)+" MB file size(s), only" + (max_file_size/1048576) +" MB file size is allowed!",
                     sticky: false,
                     class_name: 'growl-warning',
                  });
                  proceed = false; //set proceed flag to false
               }
               
               //if everything looks good, proceed with jQuery Ajax
               if(proceed){
                  var form_data = new FormData();
                  //Append files info
                  jQuery.each($('#quote_files')[0].files, function(i, file) {
                     form_data.append('quote_files['+i+']', file);
                     $('#files').val(file.name);
                  });
         
                  //jQuery Ajax to Post form data
                  $.ajax({
                     url: "https://www.konstantinfo.com/contacts/upload",
                     type: "POST",
                     data : form_data,
                     contentType: false,
                     cache: false,
                     processData:false,
                     xhr: function(){
                        //upload Progress
                        var xhr = $.ajaxSettings.xhr();
                        if (xhr.upload) {
                           $(progress_bar_id).show();
                           xhr.upload.addEventListener('progress', function(event) {
                              var percent = 0;
                              var position = event.loaded || event.position;
                              var total = event.total;
                              if (event.lengthComputable) {
                                 percent = Math.ceil(position / total * 100);
                              }
                              //update progressbar
                              $(progress_bar_id +" .progress-bar").css("width", + percent +"%");
                              $(progress_bar_id + " .status").text(percent +"%");
                              
                              setTimeout(function () {
                                 $(progress_bar_id +" .progress-bar").css("0", + percent +"%");
                                 $(progress_bar_id + " .status").text("0%");
                                 $(progress_bar_id).hide();
                              }, 2000)
                           }, true);
                        }
                        return xhr;
                     },
                     mimeType:"multipart/form-data"
                  }).complete(function(res){ //
                     /* $('.gritter-item-wrapper').remove();
                     $.gritter.add({
                        title: 'You have uploaded following files:',
                        fade_in_speed: 'medium',
                        fade_out_speed: 2000,
                        time: 6000,
                        text: res,
                        sticky: false,
                        class_name: 'growl-success',
                     }); */
                     $('#output').hide();
                     $('#output').html(res.responseText);
                     $('#output').show();
                     /* setTimeout(function(){
                        $('#output').show();
                     }, 1000); */
                  });
               }
            }
            
            $(result_output).html(""); //reset output 
            var newErrorMsg = '';
            $(error).each(function(i){ //output any error to output element
               //$(result_output).append('<div class="error">'+error[i]+"</div>");
               newErrorMsg += error[i] + '<br />';
            });
            
            if(newErrorMsg != '') {
               $('.gritter-item-wrapper').remove();
               $.gritter.add({
                  title: 'File error:',
                  fade_in_speed: 'medium',
                  fade_out_speed: 2000,
                  time: 6000,
                  text: newErrorMsg,
                  sticky: false,
                  class_name: 'growl-danger',
               });
            }
               
            //function to format bites bit.ly/19yoIPO
            function bytesToSize(bytes) {
               var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
               if (bytes == 0) return '0 Bytes';
               var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
               return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
            }
         });
         });
         
         //Form Validations by kiplphp48
         $.validator.setDefaults({
             highlight: function(element) {
               
                 $(element).closest('.form-group').addClass('error');
               
               var elementid = element.id;
               if(elementid.indexOf('ContactsCommunicationMethod_') >= 0){
                  $('[id^="ContactsCommunicationMethod_"]').each(function(){
                     $(this).closest('.checkbox2').addClass('error');
                  });
               }
               
               if(elementid.indexOf('ContactsCategory_') >= 0){
                  $('[id^="ContactsCategory_"]').each(function(){
                     $(this).closest('.checkbox2').addClass('error');
                  });
               }
               
               if(elementid.indexOf('quoteby_') >= 0){
                  $('[id^="quoteby_"]').each(function(){
                     $(this).closest('.checkbox2').addClass('error');
                  });
               }
               
             },
             unhighlight: function(element) {
                 $(element).closest('.form-group').removeClass('error');
               
               var elementid = element.id;
               if(elementid.indexOf('ContactsCommunicationMethod_') >= 0){
                  $('[id^="ContactsCommunicationMethod_"]').each(function(){
                     $(this).closest('.checkbox2').removeClass('error');
                  });
               }
               
               if(elementid.indexOf('ContactsCategory_') >= 0){
                  $('[id^="ContactsCategory_"]').each(function(){
                     $(this).closest('.checkbox2').removeClass('error');
                  });
               }
               
               if(elementid.indexOf('quoteby_') >= 0){
                  $('[id^="quoteby_"]').each(function(){
                     $(this).closest('.checkbox2').removeClass('error');
                  });
               }
             },
             errorElement: 'span',
             errorClass: 'help-block',
             errorPlacement: function(error, element) {
                 if(element.parent('.form-control').length) {
                     error.insertAfter(element.parent());
                 } else {
                     error.insertAfter(element);
                 }
             }
         });
         
         function validateGetintouch(){
            
            $("#contactForm").validate({
               rules: {
                  "data[Contacts][name]": {required: true},
                  "data[Contacts][email]": {required: true, email:true},
                  "data[Contacts][phone]": {required: true, minlength:5, maxlength:15},
                  "data[Contacts][category]": {required: true},
                  "data[Contacts][message]": {required: true},
                  "data[Contacts][budget]": {required: true}
               }, 
               messages: {
                  "data[Contacts][name]": {
                     required: 'Please enter your name.',
                  },
                  "data[Contacts][email]": {
                     required: 'Please enter your email address.',
                         email: 'Please enter valid email address.'
                  },
                  "data[Contacts][phone]": {
                     required: 'Please enter your phone number.',
                         minlength: 'Phone number is no less than 5 digits.',
                         maxlength: 'Phone number is no more than 15 digits.',
                  },
                  "data[Contacts][category]": {
                     required: 'Please select interested in.',
                  },
                  "data[Contacts][message]": {
                     required: 'Please enter your message.',
                  },
                  "data[Contacts][budget]": {
                     required: 'Please enter your budget.',
                  }
               },
               errorPlacement: function (error, element) {
                  return true;
               },
               invalidHandler: function (form, validator) {
                  var errors = validator.numberOfInvalids();
                  var errorMsgs = '';
                  $.each(validator.invalid, function (key, val) {
                     errorMsgs += val + '<br />';
                  });
                  if (errorMsgs) {
                     $('.gritter-item-wrapper').remove();
                     $.gritter.add({
                             title: 'Contact us error:',
                             fade_in_speed: 'medium',
                             fade_out_speed: 2000,
                             time: 6000,
                             text: errorMsgs,
                             sticky: false,
                             class_name: 'growl-danger',
                         });
                  }
               }
            }); 
            
            if($('#contactForm').valid()){
               
               var recapcharesponse = grecaptcha.getResponse( CRecaptchaField1 );
               
               //if($.trim($('#g-recaptcha-response').val().length > 1) == 'false') {
               if(!recapcharesponse) {
                  $('.gritter-item-wrapper').remove();
                  $.gritter.add({
                     title: 'Captcha error:',
                     fade_in_speed: 'medium',
                     fade_out_speed: 2000,
                     time: 6000,
                     text: "Captcha code is required.",
                     sticky: false,
                     class_name: 'growl-danger',
                  });
                  return false;
               }
               return true;
            } else  {
               return false;
            }     
            $('#contactForm').unbind('submit');
         }
         
         
         function validateWebDevPageForm(){
            
            $("#webPageDevForm").validate({
               rules: {
                  "data[Contacts][name]": {required: true},
                  "data[Contacts][email]": {required: true, email:true},
                  "data[Contacts][phone]": {required: true, minlength:5, maxlength:15},
                  "data[Contacts][category]": {required: true},
                  "data[Contacts][message]": {required: true},
                  "data[Contacts][budget]": {required: true}
               }, 
               messages: {
                  "data[Contacts][name]": {
                     required: 'Please enter your name.',
                  },
                  "data[Contacts][email]": {
                     required: 'Please enter your email address.',
                         email: 'Please enter valid email address.'
                  },
                  "data[Contacts][phone]": {
                     required: 'Please enter your phone number.',
                         minlength: 'Phone number is no less than 5 digits.',
                         maxlength: 'Phone number is no more than 15 digits.',
                  },
                  "data[Contacts][category]": {
                     required: 'Please select interested in.',
                  },
                  "data[Contacts][message]": {
                     required: 'Please enter your message.',
                  },
                  "data[Contacts][budget]": {
                     required: 'Please enter your budget.',
                  }
               },
               errorPlacement: function (error, element) {
                  return true;
               },
               invalidHandler: function (form, validator) {
                  var errors = validator.numberOfInvalids();
                  var errorMsgs = '';
                  $.each(validator.invalid, function (key, val) {
                     errorMsgs += val + '<br />';
                  });
                  if (errorMsgs) {
                     $('.gritter-item-wrapper').remove();
                     /* $.gritter.add({
                             title: 'Contact us error:',
                             fade_in_speed: 'medium',
                             fade_out_speed: 2000,
                             time: 6000,
                             text: errorMsgs,
                             sticky: false,
                             class_name: 'growl-danger',
                         }); */
                  }
               }
            }); 
            
            if($('#webPageDevForm').valid()){
               var recapcharesponse = grecaptcha.getResponse( CRecaptchaField4 );
               if(!recapcharesponse) {
                  $('.gritter-item-wrapper').remove();
                  /* $.gritter.add({
                     title: 'Captcha error:',
                     fade_in_speed: 'medium',
                     fade_out_speed: 2000,
                     time: 6000,
                     text: "Captcha code is required.",
                     sticky: false,
                     class_name: 'growl-danger',
                  }); */
                  $('#RecaptchaField4').addClass('newsletter_form_error');
                  return false;
               }
               return true;
            } else  {
               return false;
            }     
            $('#webPageDevForm').unbind('submit');
         }
         
         
         
         function imgError(image,path) {
            image.onerror = "";
            if(path){
               image.src = path;
            }else{
               image.src = "img/no-image100x100.jpg";
            }
            return true;
         }
          
         
         /* console.log( $.cookie('CakeCookie[User][eapi_id]') );
         
         console.log( $(location).attr('href') ); */
          
         //alert(readCookie('CakeCookie[User]') );
         
         //alert( JSON.parse( $.cookie('CakeCookie[User]') ).eapi_id  );
          
          //if( $.cookie('CakeCookie[User][eapi_id]') != undefined )
         
         var cookies = '';
         
         if( $.cookie('CakeCookie[User]') != undefined ){
              cookies = JSON.parse( $.cookie('CakeCookie[User]') );
         } 
         
          if( cookies != undefined && cookies != '' && cookies.eapi_id != undefined && cookies.eapi_id != '' )
          {  
            //alert("fff");
         
           var locationVar = $(location).attr('href') ;
         
          // var eapi_idCookie = $.cookie('CakeCookie[User][eapi_id]') ;
         
           var eapi_idCookie = cookies.eapi_id ;
         
           var pageTitle = $('title').html();
            $.ajax({
               type: "POST",
               url: "https://www.konstantinfo.com/contacts/user_visits/"+ eapi_idCookie, 
               data : { eapi_id : eapi_idCookie, page : locationVar, title : pageTitle },
               success:function(data){
             
               }
            
            });  
         }
         
         
         function onTaskCloneScroll(){
             var scrollPos = $(document).scrollTop();
            //alert('scrollPos-'+scrollPos);
             $('.common--cust-nav a').each(function () {
               //console.log($(this)); return false;
                 var currLink = $(this);
                 var refElement = $(currLink.attr("href"));
               
               var top_position = refElement.position().top - 200;
                 if (top_position <= scrollPos && top_position + refElement.height() > scrollPos) {
                     $('.common--cust-nav a').removeClass("active");
                     currLink.addClass("active");
                 }
             });
         }
          
         
          
         // new code end
      </script>
      <style>
         .theater {
         /* -webkit-transform: scale(2.5,2.5);
         position: fixed;
         left: 400px;
         top: 100px;
         border-right: 100% solid black;
         border-left: 100% solid black;
         margin: auto;
         border: 1px solid black; 
         z-index: 999; */
         }
      </style>
   </head>
   <body itemscope itemprop='mainEntity' itemtype='http://schema.org/Organization' class=''>
      <progress id="progressbar" value="0" style="display:none"></progress>
      <div class="start-a-project rq-ud-form closed">
         <div class="start-projectinner">
          <div class="container-fluid"  style="background-color: #005fbb;">
            <div class="col-sm-12">
               <header class="popup-header">
                  <a href="index.html" tabindex="-1"><img src="img/logo.png?1487942963" alt="Logo"></a> 
                  <div class="circCont close-button">
                     <button type="button" class="circle" data-animation="showShadow" data-remove="3000" data-from="req-a-quote"></button>
                  </div>
               </header>
            </div>
            </div>
            <form action="https://www.appsquadz.com/contacts/quotes" id="requestQuoteForm" name="requestQuoteForm" onsubmit="return validateRequestQuote()" enctype="multipart/form-data" novalidate method="post" accept-charset="utf-8">
               <div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-sm-12  rq-head" style="background-color: #005fbb;">
                        <div class="main-heading section-heading">
                          <div> <img src="img/namaste.png" alt="Namaste AppSquadz" width="60px"> </div> 
                           <div class="section-title">
                              <h2>Get in touch to get the ball rolling</h2>
                              <h3>We’re eager to work with you. Please share your project goals and contact information. We respond to 97% of messages within 1-2 business day. <strong>Really!</strong></h3>
                              <br><br>
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-12 mt60 rq-main-form-block">
                        <div class="popup-box got-an-idea" id="gotn-idea">
                           <div class="section-heading">
                              <div class="section-title">
                                 <h2>Tell us something about you</h2>
                              </div>
                           </div>
                           <div class="popup-form gotanidea-form">
                              <input type="hidden" name="data[Contacts][country]" value="India" id="ContactsCountry2" /><input type="hidden" name="data[Contacts][city]" value="Gurgaon" id="ContactsCity2" /><input type="hidden" name="data[Contacts][zip]" value="" id="ContactsZip2" /><input type="hidden" name="data[Contacts][state]" value="" id="ContactsState2" /><input type="hidden" name="data[Contacts][ip]" value="" id="ContactsIp2" /><input type="hidden" name="data[Contacts][type]" value="request-quote" id="ContactsType2" /><input type="hidden" name="data[Contacts][calling_code]" value="+91" id="ContactsCallingCode2" /><input type="hidden" name="data[Contacts][source]" value="https://www.appsquadz.com/" id="ContactsSource2" />
                              <div class="row">
                                 <div class="col-md-12 col-sm-12">
                                    <div class="form-group input-effect">
                                       <div>
                                          <input name="data[Contacts][name]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsName2" type="text" /> <label>Your Name*</label>
                                          <span class="focus-border"></span>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6 col-sm-6">
                                    <div class="form-group marT50">
                                       <div class="form-group-country">
                                          <div id="country_id2" data-input-name="country" data-selected-country="IN" tabindex="-1"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6 col-sm-6">
                                    <div class="form-group input-effect marT50">
                                       <div>
                                          <input name="data[Contacts][email]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsEmail2" type="email" /> <label>Your Email*</label>
                                          <span class="focus-border"></span>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6 col-sm-6">
                                    <div class="form-group input-effect mobile-number marT50">
                                       <input type="tel" class="effect-16 form-control mobile-country" id="mobilenumber2" tabindex="-1">
                                       <div class="phonenumber-filed">
                                          <input name="data[Contacts][phone]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsPhone2" type="tel" /> <label>Phone Number*</label>
                                          <span class="focus-border"></span>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-6 col-sm-6">
                                    <div class="form-group input-effect marT50">
                                       <div>
                                          <input name="data[Contacts][skypeid]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsSkypeid2" type="text" /> <label>Skype ID/Whatsapp No.</label>
                                          <span class="focus-border"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="section-heading mt90">
                              <div class="section-title">
                                 <h2>Tell us something about your project</h2>
                              </div>
                           </div>
                           <div class="popup-form gotanidea-form">
                              <div class="row">
                                 <div class="col-sm-12">
                                    <div class="form-group input-effect">
                                       <div id="content" class="common-textarea">
                                          <textarea name="data[Contacts][message]" class="form-control effect-16 LoNotSensitive" onkeyup="textAreaAdjust(this)" tabindex="0" id="ContactsMessage2"></textarea> <label>What’s your project all about?*</label>
                                          <span class="focus-border"></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="rq-looking-for">
                                 <div class="section-heading mt50">
                                    <div class="section-title">
                                       <h2>What are you looking for?*</h2>
                                    </div>
                                 </div>
                                 <div class="row marT40">
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Enterprise Software Solutions" id="ContactsCategory_1" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Enterprise Software Solutions
                                          </label>
                                       </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Creating a Mobile App" id="ContactsCategory_2" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Creating a Mobile App
                                          </label>
                                       </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Web Development" id="ContactsCategory_3" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Web Development
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Dedicated Team Service" id="ContactsCategory_4" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Dedicated Team Service
                                          </label>
                                       </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="IT Consulting Services" id="ContactsCategory_5" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          IT Consulting Services
                                          </label>
                                       </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Partnership Opportunities" id="ContactsCategory_7" /><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Partnership Opportunities
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col-md-4 col-sm-4" style="display:none">
                                       <div class="checkbox2">
                                          <label>
                                          <input type="checkbox" name="data[Contacts][category][]" value="Enhancing an Existing Product" id="ContactsCategory_6" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                          Enhancing an Existing Product
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row marT20 rq-select-boxes">
                                 <div class="col-sm-6">
                                    <div class="form-group">
                                       <div class="select">
                                          <select name="data[Contacts][budget]" class="form-control" tabindex="0" id="ContactsBudget2">
                                             <option value="">Select your budget range*</option>
                                             <option value="Less than $5,000">Less than $5,000</option>
                                             <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                             <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                             <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                             <option value="$50,000 - $1,00,000">$50,000 - $1,00,000</option>
                                             <option value="$100,000+">$100,000+</option>
                                          </select>
                                          <div class="select__arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-sm-6">
                                    <div class="form-group">
                                       <div class="select">
                                          <select name="data[Contacts][time_frame]" class="form-control" tabindex="0" id="ContactsTimeFrame">
                                             <option value="">When do you want to get started?*</option>
                                             <option value="Immediately">Immediately</option>
                                             <option value="Within a Month">Within a Month</option>
                                             <option value="1-3 Months">1-3 Months</option>
                                             <option value="3-6 Months">3-6 Months</option>
                                             <option value="6+ Months">6+ Months</option>
                                          </select>
                                          <div class="select__arrow"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row marT60 rq-attech-file">
                                 <div class="col-sm-12">
                                    <div class="form-group">
                                       <div class="uploadFile">
                                          <input name="quote_files[]" id="inquire_quote_files" type="file" class="file-upload" multiple tabindex="0" />
                                          <label>
                                          <i class="add-file"></i><strong>Attach any files you feel would be useful<br /> <span>(Attach Filesget (doc, xls, pdf, txt, ppt and zip files only, max Size 10MB)</span></strong>
                                          </label>
                                          <div id="progress-wrp2" style="display:none">
                                             <div class="progress-bar"></div >
                                             <div class="status"></div>
                                          </div>
                                          <div class='add-file-output' id="output2"></div>
                                          <div class='add-file-output' id="file_err_msg" style="color:#F00"></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                               <div class="row marT60 rq-attech-file">
                                <h3>"We check our email everyday and reply even if we're at dinner"</h3>
                               </div>
                              <div class="row marT50 rq-btn-block">
                                 <!-- <div class="col-md-5 col-sm-6">
                                    <div id="RecaptchaField2" class="captcha" style="width:306px"></div>
                                 </div> -->
                                 <div class="col-md-7 col-sm-12">
                                    <button type="submit" style="border: none; margin-left: 160px;" class="blue-new-btn nextButton" tabindex="0">Let&#039;s go!</button> 
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
         
          <div class="col-sm-12" style="background-color: #101e2a; padding: 40px 19px;">
            <div class="container">
                       <div class="footer-part1" id="footer-part1" >
                    <center>
                      <img src="img/icons/taj.png">
                      <a href="mobile-app-development-company-in-india.html"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> India</a> <br><br><br>
                      <p>H 35 , Sector 63, <br> Noida, India - 201301 <br> +91-9717270746,<br> +91-120-4238296</p>
                    </center>  
                   </div>
                 <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/us.png" width="13%;">
                      <a href="mobile-app-development-company-in-usa.html"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> USA</a>
                      <br><br><br>
                      <p>H 35 , Sector 63, <br> 426, Harrison ave,New Jersey, USA 07029 <br>+1-877-659-9068</p> 
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                       <img src="img/icons/uk.png" width="40%">
                       <a href="mobile-app-development-company-in-uk.html"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> UK</a>
                       <br><br><br>
                      <p>816A, Stockport Road, <br>Manchester - <br>M19 3BS <br>+44-203-807-3810</p>
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/aus.png" width="41%"> 
                       <a href="mobile-app-development-company-in-uae.html"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> UAE</a><br><br><br>
                      <p>Al Yahar Street,Al Khalidiya, Landmark Etisala Tower <br> Abu Dhabi - 33408 <br>+91-9717270746</p>
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/thai.png"> 
                      <br>
                      <a href="mobile-app-development-company-in-thailand.html"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> Thailand</a><br><br>
                      <p>279/16, Moo 3, Sankampaeng <br>Chiang Mai 50130 <br>+66-0946430863</p>
                    </center>  
                  </div>
          </div>
        </div>
                  </div>
                </div>
               <input type="hidden" name="data[Contacts][step_value]" id="step_value" value="" />
            </form>
         </div>
         <p class="pinned--bottom-right">
            Or send us an email at: <a href="cdn-cgi/l/email-protection.html#e291838e8791a2898d8c9196838c968b8c848dcc818d8f"><span class="__cf_email__" data-cfemail="b2c1d3ded7c1f2d9dddcc1c6d3dcc6dbdcd4dd9cd1dddf">[email&#160;protected]</span></a>
         </p>
         <script src="../ajax.cloudflare.com/cdn-cgi/scripts/78d64697/cloudflare-static/email-decode.min.js"></script><script type="text/javascript">
            $(function(){
               
               //configuration
               var max_file_size          = 10485760; //allowed file size. (1 MB = 1048576) (10 MB = 10485760)
               var allowed_file_types     = ['application/zip', 'application/x-compressed-zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-excel', 'application/pdf', 'text/plain', 'application/vnd.ms-powerpointtd', 'text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-powerpoint', 'application/octet-stream']; //allowed file types
               var result_output          = '#output2'; //ID of an element for response output
               var my_form_id             = '#inquire_quote_files'; //ID of an element for response output
               var total_files_allowed    = 5; //Number files allowed to upload
               var progress_bar_id     = '#progress-wrp2'; //ID of an element for response output
            
               //on form submit
               $('#inquire_quote_files').on("change", function(event) {
                  event.preventDefault();
                  var proceed = true; //set proceed flag
                  var error = [];   //errors
                  var total_files_size = 0;
                  
                  if(!window.File && window.FileReader && window.FileList && window.Blob){ //if browser doesn't supports File API
                     $('.gritter-item-wrapper').remove();
                     /* $.gritter.add({
                        title: 'File error:',
                        fade_in_speed: 'medium',
                        fade_out_speed: 2000,
                        time: 6000,
                        text: "Your browser does not support new File API! Please upgrade.",
                        sticky: false,
                        class_name: 'growl-warning',
                     }); */
                     $('#file_err_msg').text('Your browser does not support new File API! Please upgrade.');
                     $('#file_err_msg').css('display','block');
                  }else{
                     var total_selected_files = $('#inquire_quote_files')[0].files.length; //number of files
                     //limit number of files allowed
                     if(total_selected_files > total_files_allowed){
                        $('.gritter-item-wrapper').remove();
                        /* $.gritter.add({
                           title: 'File error:',
                           fade_in_speed: 'medium',
                           fade_out_speed: 2000,
                           time: 6000,
                           text: "You have selected "+total_selected_files+" file(s), " + total_files_allowed +" is maximum!",
                           sticky: false,
                           class_name: 'growl-warning',
                        }); */
                        $('#file_err_msg').text("You have selected "+total_selected_files+" file(s), " + total_files_allowed +" is maximum!");
                        $('#file_err_msg').css('display','block');
                        proceed = false; //set proceed flag to false
                     }
                      //iterate files in file input field
                     $($('#inquire_quote_files')[0].files).each(function(i, ifile){
                        if(ifile.value !== ""){ //continue only if file(s) are selected
                           file_exe = ifile.name.split('.').pop();
                           if(allowed_file_types.indexOf(ifile.type) === -1 && ifile.type!='' && file_exe!='zip'){ //check unsupported file
                              $('.gritter-item-wrapper').remove();
                              /* $.gritter.add({
                                 title: 'File error:',
                                 fade_in_speed: 'medium',
                                 fade_out_speed: 2000,
                                 time: 6000,
                                 text: "<b>"+ ifile.name + "</b> is unsupported file type!",
                                 sticky: false,
                                 class_name: 'growl-danger',
                              }); */
                              $('#file_err_msg').html("<b>"+ ifile.name + "</b> is unsupported file type!");
                              $('#file_err_msg').css('display','block');
                              proceed = false; //set proceed flag to false
                           }
            
                           total_files_size = total_files_size + ifile.size; //add file size to total size
                        }
                     });
                     
                     //if total file size is greater than max file size
                     if(total_files_size > max_file_size){  
                        $('.gritter-item-wrapper').remove();
                        /* $.gritter.add({
                           title: 'File error:',
                           fade_in_speed: 'medium',
                           fade_out_speed: 2000,
                           time: 6000,
                           text: "You have uploaded "+(total_files_size/1048576).toFixed(2)+" MB file size(s), only" + (max_file_size/1048576) +" MB file size is allowed!",
                           sticky: false,
                           class_name: 'growl-warning',
                        }); */
                        $('#file_err_msg').html("You have uploaded "+(total_files_size/1048576).toFixed(2)+" MB file size(s), only" + (max_file_size/1048576) +" MB file size is allowed!");
                        $('#file_err_msg').css('display','block');
                        proceed = false; //set proceed flag to false
                     }
                     
                     //if everything looks good, proceed with jQuery Ajax
                     if(proceed){
                        var form_data = new FormData();
                        //Append files info
                        jQuery.each($('#inquire_quote_files')[0].files, function(i, file) {
                           form_data.append('quote_files['+i+']', file);
                           $('#files').val(file.name);
                        });
            
                        //jQuery Ajax to Post form data
                        $.ajax({
                           url: "https://www.konstantinfo.com/contacts/upload",
                           type: "POST",
                           data : form_data,
                           contentType: false,
                           cache: false,
                           processData:false,
                           xhr: function(){
                              //upload Progress
                              var xhr = $.ajaxSettings.xhr();
                              if (xhr.upload) {
                                 $(progress_bar_id).show();
                                 xhr.upload.addEventListener('progress', function(event) {
                                    var percent = 0;
                                    var position = event.loaded || event.position;
                                    var total = event.total;
                                    if (event.lengthComputable) {
                                       percent = Math.ceil(position / total * 100);
                                    }
                                    //update progressbar
                                    $(progress_bar_id +" .progress-bar").css("width", + percent +"%");
                                    $(progress_bar_id + " .status").text(percent +"%");
                                    
                                    setTimeout(function () {
                                       $(progress_bar_id +" .progress-bar").css("0", + percent +"%");
                                       $(progress_bar_id + " .status").text("0%");
                                       $(progress_bar_id).hide();
                                    }, 2000)
                                 }, true);
                              }
                              return xhr;
                           },
                           mimeType:"multipart/form-data"
                        }).complete(function(res){ //
                           /* $('.gritter-item-wrapper').remove();
                           $.gritter.add({
                              title: 'You have uploaded following files:',
                              fade_in_speed: 'medium',
                              fade_out_speed: 2000,
                              time: 6000,
                              text: res,
                              sticky: false,
                              class_name: 'growl-success',
                           }); */
                           
                           //alert(JSON.stringify(res.responseText));
                           $('#file_err_msg').hide();
                           $('#output2').hide();
                           $('#output2').html(res.responseText);
                           $('#output2').show();
                           /* setTimeout(function(){
                              $('#output2').show();
                           }, 1000); */
                        });
                     }
                  }
                  
                  $(result_output).html(""); //reset output 
                  var newErrorMsg = '';
                  $(error).each(function(i){ //output any error to output element
                     //$(result_output).append('<div class="error">'+error[i]+"</div>");
                     newErrorMsg += error[i] + '<br />';
                  });
                  
                  if(newErrorMsg != '') {
                     $('.gritter-item-wrapper').remove();
                     $.gritter.add({
                        title: 'File error:',
                        fade_in_speed: 'medium',
                        fade_out_speed: 2000,
                        time: 6000,
                        text: newErrorMsg,
                        sticky: false,
                        class_name: 'growl-danger',
                     });
                  }
                     
                  //function to format bites bit.ly/19yoIPO
                  function bytesToSize(bytes) {
                     var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                     if (bytes == 0) return '0 Bytes';
                     var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
                     return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
                  }
               });
               
               
               $("#requestQuoteFormstep1").on("click", function(event){
                  if(stepValidateRequestQuote(1)){
                     event.stopPropagation();      
                     var anchor = $("#what-you-making");    
                     var position = anchor.position().top + $('.popup-header').height()+134; 
                     $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
                  }
               });
               
               $("#requestQuoteFormstep2").on("click", function(){
                  if(stepValidateRequestQuote(2)){
                     var anchor = $("#what-you-making2");
                     var position = anchor.position().top+$('.popup-header').height()+134;   
                     $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
                  }
               });
               
               $("#requestQuoteFormstep3").on("click", function(){ 
                  if(stepValidateRequestQuote(3)){
                     var anchor = $("#time-framework");
                     var position = anchor.position().top+$('.popup-header').height()+134;   
                     $(".start-projectinner").animate({scrollTop: position}, 1000, 'swing');
                  }
               });
               
               /* $('[id^="quoteby_"]').click(function(){
                  var id = this.id;
                  id = id.split('_');
                  crid = id[1];
                  $('[id^="quotebydiv_"]').removeClass('checked');
                  $("#quotebydiv_"+crid).addClass('checked');
                  
                  $('[id^="quotebylable_"]').removeClass('active');
                  $("#quotebylable_"+crid).addClass('active');
                  alert($("#quotebylable_"+crid).attr('class'));
                  
                  $('[id^="quoteby_"]').attr('checked',false);
                  $(this).attr('checked',true);
               }); */
               
               
               $('[id^="quoteby_"]').click(function(){
                  if($(this).is(':checked') && this.id=='quoteby_2'){
                     if($('#quoteby_1').is(':checked')){
                        $('#quoteby_1').click();
                     }
                  }
                  if($(this).is(':checked') && this.id=='quoteby_1'){
                     if($('#quoteby_2').is(':checked')){
                        $('#quoteby_2').click();
                     }
                  }
               });
               
               
               $('[id^="ContactsCategory_"]').click(function(){
                  var checkBoxId = $(this).attr('id');
                  var selectedId = checkBoxId.replace('ContactsCategory_', '');
                  if($(this).is(':checked')){
                     for(rk=1;rk<=7;rk++){
                        if(rk!=selectedId){
                           if($('#ContactsCategory_'+rk).is(':checked')){
                              $('#ContactsCategory_'+rk).click();
                           }
                        }
                     }
                     
                  }
               });
               
               
               $('#country_id2').flagStrap({
                  buttonSize: "btn-lg",
                  buttonType: "btn-country",
                  labelMargin: "20px",
                  scrollable: true,
                  scrollableHeight: "350px"
               });
               
               //$("#mobilenumber2").intlTelInput("setNumber", "+91");
               
               $("#mobilenumber2").on("countrychange", function(e, countryData) {
                  //alert(JSON.stringify(countryData.dialCode));
                  $('#ContactsCallingCode2').val('+'+countryData.dialCode);
               });
               
               //var countryData = $("#mobilenumber2").intlTelInput("getSelectedCountryData");
               //var country_code = countryData.iso2;
               //country_code = country_code.toUpperCase();
               //alert(country_code);
               // $('select[name="country"] option[value=AL]').attr('selected','selected');
               
               
               
               // Set validation rule
               //$('#gritter-notice-wrapper').css('top','100px');
               
               $.validator.addMethod("check_quoteby", function(value, element, param) {
                  if($('#quoteby_1').is(":checked") || $('#quoteby_2').is(":checked")){
                     return true;
                  }else{
                     return false;
                  }
               },'Please select Individual/Company.');
               
               
               $.validator.addMethod("check_company", function(value, element, param) {
                  if($('#quoteby_2').is(":checked")){
                     if($.trim( $('#ContactsCompany2').val() )==''){
                        return false;
                     }else{
                        return true;
                     }
                  }else{
                     return true;
                  }
               },'Please enter company name.');
               
               $.validator.addMethod("check_skypeid", function(value, element, param) {
                  if($('#ContactsCommunicationMethod_3').is(":checked")){
                     if($.trim( $('#ContactsSkypeid2').val() )==''){
                        return false;
                     }else{
                        return true;
                     }
                  }else{
                     return true;
                  }
               },'Please enter skype Id.');
               
               $.validator.addMethod("check_communication_method", function(value, element, param) {
                  var oncheck = 0;
                  $('[id^="ContactsCommunicationMethod_"]').each(function(){
                     if($(this).is(":checked")){
                        oncheck = 1;
                     }
                  });
                  if(oncheck){
                     return true;
                  }else{
                     return false;
                  }
               },'Please select atleast one communication method.' );
               
               
               
               $.validator.addMethod("check_category", function(value, element) {
                  var oncheck = 0;
                  $('[id^="ContactsCategory_"]').each(function(){
                     if($(this).is(":checked")){
                        oncheck = 1;
                     }
                  });
                  if(oncheck){
                     return true;
                  }else{
                     return false;
                  }
               });
               
               var validator = $("#requestQuoteForm").validate({
                  ignore: [],
                  rules: {
                     "data[Contacts][quoteby]": {check_quoteby: true},
                     "data[Contacts][name]": {required: true },
                     "data[Contacts][email]": {required: true, email:true},
                     "data[Contacts][phone]": {required: true, minlength:5, maxlength:15},
                     "data[Contacts][company]": {check_company: true },
                     "data[Contacts][skypeid]": {check_skypeid: true },
                     "country": {required: true},
                     "data[Contacts][communication_method][]": {check_communication_method: true},
                     "data[Contacts][category][]": {check_category: function(element) { return checkStep(element); } },
                     "data[Contacts][message]": {required: function(element) { return checkStep(element); } },
                     "data[Contacts][budget]": {required: function(element) { return checkStep(element); } },
                     "data[Contacts][time_frame]": {required: function(element) { return checkStep(element); } },
                  }, 
                  messages: {
                     "data[Contacts][quoteby]": {
                        check_quoteby: 'Please select Individual/Company.',
                     },
                     "data[Contacts][name]": {
                        required: 'Please enter your name.',
                     },
                     "data[Contacts][email]": {
                        required: 'Please enter your email address.',
                        email: 'Please enter valid email address.'
                     },
                     "data[Contacts][phone]": {
                        required: 'Please enter your phone number.',
                        minlength: 'Phone number is no less than 5 digits.',
                        maxlength: 'Phone number is no more than 15 digits.',
                     },
                     "data[Contacts][company]": {
                        check_company: 'Please enter company name.',
                     },
                     "data[Contacts][skypeid]": {
                        check_skypeid: 'Please enter skype Id.',
                     },
                     "country": {
                        required: 'Please select country.',
                     },
                     "data[Contacts][communication_method][]": {
                        check_communication_method: 'Please select atleast one communication method.',
                     },
                     "data[Contacts][category][]": {
                        check_category: 'Please select atleast one category.',
                     },
                     "data[Contacts][message]": {
                        required: 'Please enter description.',
                     },
                     "data[Contacts][budget]": {
                        required: 'Please select project budget.',
                     },
                     "data[Contacts][time_frame]": {
                        required: 'Please select when do you want to get started?.',
                     },
                  },
                  errorPlacement: function (error, element) {
                     return true;
                  },
                  invalidHandler: function (form, validator) {
                     var errors = validator.numberOfInvalids();
                     var errorMsgs = '';
                     $.each(validator.invalid, function (key, val) {
                        errorMsgs += val + '<br />';
                     });
                     if (errorMsgs) {
                        $('.gritter-item-wrapper').remove();
                        
                        /* $.gritter.add({
                           title: 'Quote Error:',
                           fade_in_speed: 'medium',
                           fade_out_speed: 2000,
                           time: 3000,
                           text: errorMsgs,
                           sticky: false,
                           class_name: 'growl-danger',
                        }); */
                     }
                  }
               });
               
            });
            
            function checkStep(element){
               var step = $('#step_value').val();
               var id = element.id;
               if(step==1){
                  return false;
               }else if(step==2){
                  if( id.indexOf('ContactsCategory_') >= 0 ){
                     return true;
                  }else{
                     return false;
                  }
               }else if(step==3){
                  if( id.indexOf('ContactsMessage2') >= 0 || id.indexOf('ContactsCategory_') >= 0 ){
                     return true;
                  }else{
                     return false;
                  }
               }else{
                  return true;
               }
            }
            
            function stepValidateRequestQuote(step){
               $('#step_value').val(step);
               if(step==1){
               } else if(step==2){
               }else if(step==3){
               }
               
               var IsValidForm = false;
               if($('#requestQuoteForm').valid()){
                  IsValidForm = true;
               } else  {
                  IsValidForm = false;
               }        
               return IsValidForm;
            }
            
            function validateRequestQuote(){
               $('#step_value').val(4);
               if($('#requestQuoteForm').valid()){
                  var recapcharesponse2 = grecaptcha.getResponse( CRecaptchaField2 ); 
            
                  // if($.trim($('#g-recaptcha-response').val().length > 1) == 'false') {
            
                     if(!recapcharesponse2) {
                     $('.gritter-item-wrapper').remove();
                     /* $.gritter.add({
                        title: 'Captcha error:',
                        fade_in_speed: 'medium',
                        fade_out_speed: 2000,
                        time: 6000,
                        text: "Captcha code is required.",
                        sticky: false,
                        class_name: 'growl-danger',
                     }); */
                     $('#RecaptchaField2').addClass('newsletter_form_error');
                     return false;
                  }  
                  return true;
               } else  {
                  return false;
               }
               $('#requestQuoteForm').unbind('submit');  
            }
              
            
         </script>
      </div>
      <div class="start-a-project--bg"></div>
      <div class="custom-navbar mobile-nav ">
         <nav class="animated3 navbar">
            <div class="navigation">
               <div class="nav-grid"><a href="javascript:void(0)" class=""><span></span></a></div>
               <div id="navbar-m" class="navbar-collapse navigation-part">
                  <div class="com-info">
                     <ul>
                        <li>
                           <a href="cdn-cgi/l/email-protection.html#9ceffdf0f9efdcf7f3f2efe8fdf2e8f5f2faf3b2fff3f1">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i><span class="__cf_email__" data-cfemail="691a08050c1a290206071a1d08071d00070f06470a0604">[email&#160;protected]</span>
                           </a>
                        </li>
                        <li class="number">
                           <a href="javascript:void(0)">
                           <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
                           <i class="fa fa-caret-down" aria-hidden="true"></i>
                           </a>
                           <div class="com-info-inquiry-dd">
                              <div class="com-info-inquiry">
                                 <div class="con-heading">AppSquadz Contacts</div>
                                 <div class="inquiry-block">
                                    <div class="img sales-inq"></div>
                                    <div class="inqSal">For Sales Inquiry</div>
                                    <ul>
                                       <li class="flag1"><a href="tel:13109335465">+1-310-933-5465</a></li>
                                       <li class="flag0"><a href="tel:1888-866-0067">+1-888-866-0067</a> (Toll Free)</li>
                                       <li class="flag2"><a href="tel:442032397253">+44-203-239-7253</a></li>
                                       <li class="flag3"><a href="tel:911412291398">+91-141-2291398</a>, <a href="tel:911414028078">4028078</a></li>
                                    </ul>
                                    <span>(If we don’t pick up, <a class="cs_req_btn" href="javascript:void(0)">drop inquiry.</a>)</span>
                                 </div>
                                 <div class="inquiry-block">
                                    <div class="img hr-inq"></div>
                                    <div class="inqSal">For HR Inquiry</div>
                                    <ul>
                                       <li class="flag3">
                                          <a href="tel:911412291398">+91-141-2291398</a>, <a href="tel:911414028078">4028078</a>
                                       </li>
                                    </ul>
                                    <span>(If we don’t pick up, <a href="cdn-cgi/l/email-protection.html#caa2b88aa1a5a4b9beaba4bea3a4aca5e4a9a5a7">drop inquiry.</a>)</span>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
                  <ul class="menu-links">
                     <li class="submenu">
                        <a href="javascript:void(0)" class="transition">Why AppSquadz <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                        <div class="dropdown">
                           <div class="sub-menu-section">
                              <div class="container">
                                 <div class="col-md-12">
                                    <div class="sub-menu-center-block rows">
                                       <div class="btn-block">
                                          <a href="careers.html" class="comman-btn">Join our team</a> <br />
                                          <a href="partnership.html" class="comman-btn mt14">Become a Partner</a> 
                                       </div>
                                       <div class="sub-menu-sec highlight-link show-only-iphone">
                                          <ul>
                                             <li>
                                                <a href="careers.html" class="">Join our team</a> 
                                             </li>
                                             <li>
                                                <a href="partnership.html" class="">Become a Partner</a> 
                                             </li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle">Why AppSquadz</div>
                                          <ul>
                                             <li> <a href="about-us.html">About Us</a></li>
                                             <li><a href="appsquadz-team.html">Our Team</a></li>
                                             <li><a href="Development-Methodology.html">Our Process</a></li>
                                             <li><a href="Infrastructure.html">Our Infrastructure</a></li>
                                             <li><a href="Infrastructure.html">Investor Relationships</a></li>
                                             <li><a href="Infrastructure.html">Partners Relationships</a></li>
                                             <li><a href="Infrastructure.html">Company Profile</a></li>
                                             <li><a href="Infrastructure.html">Our Vision & Mission</a></li>
                                             <li><a href="Infrastructure.html">Mobile App Development Company</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec without-heading">
                                          <div class="menuHeadTitle">&nbsp;</div>
                                          <ul>
                                             <li>
                                                <a href="testimonials.html">Client Reviews</a> 
                                             </li>
                                             <li><a href="our-clients.html">Our Clients</a></li>
                                             <li><a href="our-partners.html">Our Partners</a></li>
                                             <li>
                                                <a href="certifications-awards.html">Awards &amp; Memberships</a> 
                                             </li>
                                             <li><a href="blog/index.html">Our Blog</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec without-heading">
                                          <div class="menuHeadTitle">&nbsp;</div>
                                          <ul>
                                             <li><a href="media-interviews.html">Press &amp; Media</a></li>
                                             <li>
                                                <a href="contact-us.html">Contact Us</a> 
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="submenu">
                        <a href="javascript:void(0)" class="transition">Services <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                        <div class="dropdown">
                           <div class="sub-menu-section">
                              <div class="container">
                                 <div class="col-md-12">
                                    <div class="sub-menu-center-block cus-full-block rows">
                                       <div class="sub-menu-sec highlight-link">
                                          <ul>
                                             <li><a href="startup-app-development-company.html">Startups</a></li>
                                             <li><a href="enterprise-app-development.html">Enterprise</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle"><a>Mobile</a></div>
                                          <ul>
                                             <li>
                                                <a href="mobile-application-development.html">Mobile App Development</a> 
                                             </li>
                                             <li class="ssub-menu"><a href="iphone-application-development.html">iPhone</a><span> | </span><a href="android-app-development.html">Android</a> </li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="cross-platform-app-development.html">Cross Platform App Development</a></li>
                                             <li class="ssub-menu"><a href="phonegap-application-development.html">PhoneGap</a><span>|</span> <a href="xamarin-application-development.html">Xamarin</a></li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="app-prototyping-strategy.html">App Prototype and Strategy</a></li>
                                             <li><a href="website-design.html">UI &amp; UX Designing</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle"><a>Web</a></div>
                                          <ul>
                                             <li><a href="web-development.html">Web Development</a></li>
                                             <li class="ssub-menu"><a href="php-web-development.html">PHP</a><span>|</span> <a href="asp-dotnet-development.html">.NET</a> <span>|</span> <a href="java-application-development.html">JAVA</a></li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="opensource-cms-development.html">Opensource Development</a></li>
                                             <li class="ssub-menu"><a href="wordpress-cms-development.html">WordPress</a> <span>|</span> <a href="joomla-cms-development.html">Joomla</a> <span>|</span><a href="drupal-cms-development.html">Drupal</a></li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="ecommerce-web-development.html">Ecommerce &amp; CMS</a></li>
                                             <li class="ssub-menu"><a href="magento-ecommerce-development.html">Magento</a><span>|</span> <a href="wordpress-cms-development.html">WordPress</a> </li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle"><a tabindex="-1">Emerging Technologies</a></div>
                                          <ul>
                                             <li><a href="wearable-devices-app-development.html">Wearable App Development</a></li>
                                             <li><a href="cloud-application-development.html">Cloud Computing</a></li>
                                             <li><a href="iot-application-development.html">IoT Development</a></li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="consulting-services.html">Consulting Services</a> </li>
                                             <li><a href="software-maintenance-support.html">Software Maintenance &amp; Support</a></li>
                                             <li><a href="enterprise-app-development.html">Enterprise Software Development</a></li>
                                             <li><a href="hire-dedicated-developer.html">Staff Augmentation &amp; Dedicated Teams</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="submenu">
                        <a href="javascript:void(0)" class="transition">Solutions <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                        <div class="dropdown">
                           <div class="sub-menu-section">
                              <div class="container">
                                 <div class="col-md-12">
                                    <div class="sub-menu-center-block rows">
                                       <div class="btn-block">
                                          <a href="testimonials.html" class="comman-btn">What Clients Say</a> <br />
                                          <a href="case-study.html" class="comman-btn mt14">View Case Studies</a> 
                                       </div>
                                       <div class="sub-menu-sec highlight-link show-only-iphone">
                                          <ul>
                                             <li>
                                                <a href="testimonials.html" class="">What Clients Say</a> 
                                             </li>
                                             <li>
                                                <a href="case-study.html" class="">View Case Studies</a> 
                                             </li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle">Solutions</div>
                                          <ul>
                                             <li><a href="on-demand-app-development.html">On-Demand Solutions</a></li>
                                             <li><a href="chat-messaging-app-development.html">Chat Solution</a></li>
                                             <li><a href="classified-app-development.html">Classified App Solution</a></li>
                                             <li><a href="directory-app-development.html">Directory App Solution</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle"><a href="industries-we-serve.html">Industries We Serve</a></div>
                                          <ul>
                                             <li><a href="real-estate-property.html">Real Estate &amp; Property</a></li>
                                             <li><a href="on-demand-app-development.html">On-Demand Solutions</a></li>
                                             <li><a href="dating-social-networking.html">Social Networking</a></li>
                                             <li><a href="food-restaurant.html">Food &amp; Restaurant</a></li>
                                             <li><a href="banking-finance.html">Banking, Finance &amp;amp; Insurance</a></li>
                                             <li><a href="education-elearning.html">Education &amp;amp; eLearning</a></li>
                                             <li><a href="ecommerce-shopping.html">Ecommerce, Retail &amp; B2B</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec without-heading">
                                          <div class="menuHeadTitle">&nbsp;</div>
                                          <ul>
                                             <li><a href="travel-hospitality.html">Travel &amp; Hospitality</a></li>
                                             <li><a href="media-entertainment.html">Media &amp; Entertainment</a></li>
                                             <li><a href="healthcare-fitness.html">Healthcare &amp; Fitness</a></li>
                                             <li><a href="automotive-transportation.html">Transport &amp; Automotive</a></li>
                                             <li><a href="gaming-leisure.html">Gaming &amp; Leisure</a></li>
                                             <li><a href="directory-app-development.html">Directory &amp; Organization</a></li>
                                             <li><a href="event-tickets-portal-development.html">Event &amp; Tickets</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li class="show-iphone">
                        <a href="portfolios.html" class="transition">Work</a> 
                     </li>
                     <li class="show-tablet">
                        <a href="portfolios.html" class="transition">Work</a> 
                     </li>
                     <li>
                        <a href="resources.html" class="transition">Resources</a>
                     </li>
                     <li>
                        <a href="contact-us.html" class="transition">Contact</a> 
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
      <header class="selected ">
         <div class="header-inset">
            <div class="logo desktop">
               <a href="index.php" itemprop="url"><img itemprop="logo" src="img/logo.png" alt="logo" /></a>
            </div>
            <div class="logo mobile"><a href="index.php" itemprop="url"><img itemprop="logo" src="img/stiklogo.png" alt="logo" /></a></div>
            <div class="custom-navbar desktop-nav">
               <nav class="navbar">
                  <div class="navigation">
                     <div id="navbar-w" class="navbar-collapse navigation-part">
                        <div class="com-info">
                          <div class="inquiry-btn"> <a href="javascript:void(0)" class="transition" id="InquireNow">Let's Talk</a> </div>
                           <ul>
                             <li class="number">
                                 <a href="javascript:void(0)"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                 <div class="com-info-inquiry-dd">
                                    <div class="com-info-inquiry">
                                       <div class="con-heading">AppSquadz Contacts</div>
                                       <div class="inquiry-block">
                                         
                                          <div class="inqSal"> For Sales Inquiry</div>
                                          <div class="inqSal"> <a href="email:919717270746">sales@appsquadz.com</a></div>
                                          <ul>
                                             <li class="flag3"><a href="tel:919717270746">+91-9717270746 (INDIA)</a></li>
                                             <li class="flag1"><a href="tel:18776599068">+1-877-659-9068 (US)</a></li>
                                             <!-- li class="flag0"><a href="tel:1888-866-0067">+1-888-866-0067</a> (Toll Free)</li> -->
                                            <li class="flag2"><a href="tel:442038073810">+44-203-807-3810 (UK)</a></li>
                                             <li class="flag2"><a href="tel:442038073810">+91-9717270746 (UAE)</a></li>
                                            <li class="flag2"><a href="tel:442038073810">+66-0946430863 (THAILAND)</a></li>
                                          </ul>
                                          <span>(If we don’t pick up, <a class="cs_req_btn" href="javascript:void(0)">drop inquiry.</a>)</span>

                                       </div>
                                       <div class="inquiry-block">
                                        
                                          <div class="inqSal">For HR Inquiry</div>
                                          <div class="inqSal"> <a href="email:919717270746">hr@appsquadz.com</a></div>
                                          <ul>
                                             <li class="flag3"><a href="tel:911204238296">+91-120-4238296</a></li>
                                          </ul>
                                          <span>(If we don’t pick up, <a href="cdn-cgi/l/email-protection.html#bfd7cdffd4d0d1cccbded1cbd6d1d9d091dcd0d2">drop inquiry.</a>)</span>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li itemprop="email"> <a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i> <span class="__cf_email__" >sales@appsquadz.com</span></a> </li>
                              <li itemprop="email"> <a href="blog.html"><i class="fxa fa-envelope-ox" aria-hidden="true"></i><span class="__cf_email__">Blog</a> </li>
                                <li itemprop="email"> <a href="testimonials.html"><i class="xfa fa-envelope-ox" aria-hidden="true"></i><span class="__cf_email__" >Testimonials</a> </li>
                            
                              <li itemprop="email"> <a href="portfolios.html"><i class="xfa fa-envelope-ox" aria-hidden="true"></i><span class="__cf_email__" >Our Fresh Work</a> </li>
                                 <li itemprop="email"> <a href="https://calendly.com/appsquadz/meeting"><span class="" >Schedule a Meeting</a></li>
                             
                             
                              
                          
                            </span>
                           </ul>
                           
                        </div>
                        <ul class="menu-links">
                           <li class="submenu">
                              <a href="javascript:void(0)" class="transition">Why AppSquadz
                              <i class="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div class="dropdown">
                                 <div class="sub-menu-section">
                                    <div class="container">
                                       <div class="col-md-12">
                                          <div class="sub-menu-center-block rows">
                                             <div class="btn-block">
                                                <a href="careers.html" class="comman-btn">Join our team</a> <br />
                                                <a href="partnership.html" class="comman-btn mt14">Partner With us</a> 
                                                <a href="partnership.html" class="comman-btn mt14">Portfolio</a> 
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle">Why AppSquadz</div>
                                                <ul>
                                                  <li> <a href="about-us.html">About Us</a></li>
                                                 <li><a href="appsquadz-team.html">Our Team</a></li>
                                                 <li><a href="Development-Methodology.html">Our Process</a></li>
                                                 <li><a href="Infrastructure.html">Our Infrastructure</a></li>
                                                 <li><a href="investor-relation.html">Investor Relationships</a></li>
                                                 <li><a href="partner.html">Partners Relationships</a></li>
                                                 <li><a href="company-profile.html">Company Profile</a></li>
                                                 <li><a href="appsquadz-vision-and-mission.html">Our Vision & Mission</a></li>
                                                  <li><a href="value-for-money.html">Value For Money</a></li>
                                                   <li><a href="prompt-communication.html">Prompt Communication</a></li>
                                                 <li><a href="mobile-application-development.html">Mobile App Development Company</a></li>
                                                </ul>
                                             </div>
                                              <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                   <li><a href="business-engagement.html">Business Engagement Models</a></li>
                          <li><a href="Quality-Relationship.html">Quality Relationships</a></li>
                          <li><a href="Design-Methodology.html">Design Methodology</a> </li>
                          <li><a href="Development-Methodology.html">Development Methodology</a></li>
                          <li><a href="Project-Communication.html">Project Communication</a></li>
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                 
                                    <li><a href="testimonials.html">Client Reviews</a> </li>
                                    <li><a href="testimonials.html">Partner Reviews</a> </li>
                                    <li><a href="our-clients.html">Our Clients</a></li>
                                    <li><a href="our-partners.html">Our Partners</a></li>
                                    <li><a href="certifications-awards.html">Awards &amp; Memberships</a> </li>
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                   <li><a href="media-interviews.html">Press &amp; Media</a></li>
                                       <li><a href="blog/index.html">Our Blog</a></li>
                                       <li><a href="careers.html">Career With Us</a></li>
                                       <li><a href="faq.html">FAQs</a></li>
                                       <li><a href="contact-us.html">Contact Us</a></li>
                                                   </li>
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">Our Presense</div>
                                                <ul>
                                                   <li><a href="mobile-app-development-company-in-india.html">India</a></li>
                                       <li><a href="mobile-app-development-company-in-usa.html">United States</a></li>
                                       <li><a href="mobile-app-development-company-in-uk.html">United Kingdom</a></li>
                                       <li><a href="mobile-app-development-company-in-uae.html">UAE</a></li>
                                       <li><a href="mobile-app-development-company-in-thailand.html">Thailand</a></li>
                                                   </li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                       </div>
                                  

                              </div>
                            <div style = "height:70px; width:100% ; background:#077BEA ;margin-top:-8px">
                              <div class="container">
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span>
                              </div>
                              <div class="celibration" style="float: right;">
                                <img src="img/partner/celebrate.png">
                              </div>
                              </div>
                            </div>
                              </div>
                             
                           </li>
                          
                           <li class="submenu">
                              <a href="javascript:void(0)" class="transition">Services <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                              <div class="dropdown">
                                 <div class="sub-menu-section">
                                    <div class="container">
                                       <div class="col-md-12">
                                          <div class="sub-menu-center-block cus-full-block rows">
                                             <div class="sub-menu-sec highlight-link">
                                                <ul>
                                                   <li><a href="startup-app-development-company.html">Startups</a></li>
                                                   <li><a href="smes-app-development.html">SMEs</a></li>
                                                   <li><a href="enterprise-app-development.html">Enterprise</a></li>
                                                    <li><a href="government-it-app-development.html">Government IT</a></li>
                                                    <li><a href="ngo-app-development.html">NGO's</a></li>
                                                </ul>
                                              <div class="btn-block" style="margin-top: 250px;">
                                                <a style="min-width: 177px;" href="careers.html" class="comman-btn btn-block-2">Join our team</a> <br/>
                                                <a style="min-width: 177px;" href="partnership.html" class="comman-btn mt14 btn-block-2">Partner With us</a> 
                                                <a style="min-width: 177px;" href="partnership.html" class="comman-btn mt14 btn-block-2">Portfolio</a> 
                                             </div>
                                           </div>


                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle"><a>Mobile</a></div>
                                                <ul>
                                                   <li><a href="android-apps-developer.html">Android Apps</a></li>
                                                   <li class="ssub-menu"> <a href="android-application-development.html">Android Apps Development</a> </li>
                                                   <li class="ssub-menu"> <a href="android-wear-application-development.html">Android Wear Apps Development</a> </li>
                                                    <li class="ssub-menu"> <a href="android-game-development.html">Android Games Development</a> </li>
                                                    <li class="ssub-menu"> <a href="android-ui-ux-development.html">Android UI/UX  Development</a> </li>                                             

                                                </ul>
                                                 <ul class="mt16">
                                                   <li><a href="iphone-apps-developer.html">iPhone Apps </a></li>
                                                   <li class="ssub-menu"> <a href="iphone-application-development.html">iPhone Apps Development</a> </li>
                                                   <li class="ssub-menu"> <a href="apple-watch-application-development.html">Apple Watch Apps Development</a> </li>
                                                    <li class="ssub-menu"> <a href="iphone-games-development.html">iPhone Games Development</a> </li>
                                                    <li class="ssub-menu"> <a href="iphone-ui-ux-development.html">iPhone UI/UX Development</a> </li>
                                                </ul>
                                                 <ul class="mt16">
                                                   <li><a href="ipad-apps-developer.html">iPad Apps </a></li>
                                                   <li class="ssub-menu"> <a href="ipad-apps-development.html">iPad Apps Development</a> </li>
                                                    <li class="ssub-menu"> <a href="ipad-games-development.html">iPad Games Development</a> </li>
                                                    <li class="ssub-menu"> <a href="ipad-ui-ux-development.html">iPad UI/UX Apps Development</a> </li>
                                                </ul>
                                                <ul class="mt16">
                                                   <li><a href="cross-platform-app-development.html">Cross Platform App Development</a></li>
                                                   <li class="ssub-menu"><a href="phonegap-application-development.html">PhoneGap</a> <span>|</span><a href="xamarin-application-development.html">Xamarin</a><span>|</span><a href="ionic-application-development.html">Ionic</a> <span>|</span><a href="kotlin-application-development.html">Kotlin</a> <span>|</span><a href="titanium-application-development.html">Titanium</a><span>|</span><a href="opengl-application-development.html">OpenGL</a><span>|</span><a href="andengine-application-development.html">AndEngine</a><span>|</span><a href="react-native-application-development.html">React Native</a> <span>|</span><a href="unity-application-development.html">Unity</a> <span>|</span><a href="snecha-application-development.html">Snecha</a><span>|</span><a href="adobe-air-application-development.html">Adobe Air</a><span>|</span><a href="cocos2d-application-development.html">Cocos2d</a></li>
                                                </ul>
                                                <ul class="mt16">
                                                   <li><a href="app-prototyping-strategy.html">App Prototype and Strategy</a></li>
                                                   <li><a href="ui-ux-design.html">UI &amp; UX Designing</a></li>
                                                    <li><a href="mobile-app-maintenance-support-services.html">Support &amp; Maintenance</a></li>
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle"><a>Web</a></div>
                                                <ul>
                                                   <li>
                                                      <a href="web-development.html">Web Development</a> 
                                                   </li>
                                                   <li class="ssub-menu"><a href="php-web-development.html">PHP</a><span>|</span> <a href="java-application-development.html">JAVA</a>  <span>|</span><a href="angular-js-app-development.html">Angular JS</a> <span>|</span><a href="node-js-app-development.html">Node JS</a> <span>|</span><a href="react-js-app-development.html">React JS</a> <span>|</span><a href="ruby-on-rails-development.html">Ruby On Rails </a> <span>|</span><a href="python-development.html">Python</a> <span>|</span><a href="django-development.html">Django</a> </li>
                                                </ul>
                                                <ul class="mt16">
                                                   <li><a href="framework-development.html">Framework Development</a></li>
                                                   <li class="ssub-menu"> <a href="laravel-web-development.html">Laravel</a> <span>|</span> <a href="php-zend-development.html">Zend</a><span>|</span> <a href="php-yii-development.html">Yii</a><span>|</span> <a href="code-ignitor-web-development.html">CodeIgnitor</a><span>|</span> <a href="cake-php-web-development.html">CakePHP</a><span>|</span> <a href="symfony-web-development.html">Symfony</a></li>
                                                </ul>
                                                <ul class="mt16">
                                                   <li><a href="opensource-cms-development.html">Opensource Development</a></li>
                                                   <li class="ssub-menu"><a href="joomla-cms-development.html">Joomla</a> <span>|</span><a href="drupal-cms-development.html">Drupal</a> <span>|</span><a href="wordpress-cms-development.html">WordPress</a> <span>|</span> <a href="moodle-application-development.html">Moodle</a><span>|</span> <a href="open-mrs-application-development.html">Open MRS</a></li>
                                                </ul>
                                                <ul class="mt16">
                                                   <li><a href="ecommerce-web-development.html">Ecommerce &amp; CMS</a></li>
                                                   <li class="ssub-menu"><a href="magento-ecommerce-development.html">Magento</a><span>|</span> <a href="woo-commerce-development.html">WooCommerce</a> <span>|</span> <a href="shopify-ecommerce-development.html">Shopify</a><span>|</span> <a href="prestashop-ecommerce-development.html">PrestaShop</a><span>|</span> <a href="openkart-ecommerce-development.html">OpenKart</a><span>|</span> <a href="oscommerce-development.html">OSCommerce</a><span>|</span> <a href="ubercart-development.html">Ubercart</a> </li>
                                                </ul>
                                                 <ul class="mt16">
                                                   <li><a href="frontend-designing-development.html">Frontend Designing</a></li>
                                                   <li class="ssub-menu"><a href="html5-css-web-development.html">HTML5/CSS </a><span>|</span> <a href="responsive-web-development.html">Responsive Web</a><span>|</span> <a href="psd-to-html5-development.html">PSD to HTML5</a>  </li>
                                                </ul>
                                                   <ul class="mt16">
                                                   <li><a href="microsoft-technologies-development.html">Microsoft Technologis</a></li>
                                                   <li class="ssub-menu"><a href="asp-dotnet-development.html">.Net </a><span>|</span> <a href="c-sharp-development.html">C#</a><span>|</span> <a href="sharepoint-development.html">Sharepoint</a></li>
                                                </ul>
                                                
                                                   <ul class="mt16">
                                                   <li><a href="other-services.html">Other Services</a></li>
                                                   <li class="ssub-menu"><a href="dotnetnuke-development.html">DotNetNuke</a><span>|</span> <a href="salesforce-development.html">Sales Force</a><span>|</span> <a href="parse-development.html">Parse</a><span>|</span> <a href="mysql-development.html">MySql</a><span>|</span> <a href="mango-db-development.html">Mango DB</a></li>
                                                </ul>
                                             </div>
                                              <div class="sub-menu-sec">
                                                <div class="menuHeadTitle"><a>Digital Marketing Services</a></div>
                                                <ul>
                                                  <li><a href="seo-services.html">SEO Services</a></li>
                                                   <li><a href="ppc-campaign-management.html">PPC Campaign Mgmt</a></li>
                                                   <li><a href="social-media-marketing.html">Social Media Marketing</a></li>
                                                   <li><a href="seo-packages.html">SEO Packages</a></li>
                                                   <li><a href="content-marketing.html">Content Marketing</a></li>
                                                   <li><a href="brand-and-reputation-management.html">Brand  &amp; Reputation Mgmt</a></li>                                             
                                                </ul>
                                                
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle"><a>Emerging Technologies</a></div>
                                                <ul>
                                                   <li><a href="live-streaming-app-development.html">Live Streaming (Wowza, Adobe Media &amp; WebRTC )</a></li>
                                                   <li><a href="wearable-devices-app-development.html">Wearable App Development</a></li>
                                                   <li><a href="cloud-application-development.html">Cloud Computing</a></li>
                                                   <li><a href="iot-application-development.html">IoT Development</a></li>
                                                   <li><a href="ibeacon-application-development.html">iBeacon App Development</a></li>
                                                   <li><a href="iwatch-application-development.html">iWatch App Development</a></li>
                                                   <li><a href="ar-vr-application-development.html">AR/VR App Development</a></li>
                                                    <li><a href="ai-chatbot-application-development.html">AI &amp; Chatbot Development</a></li>
                                                   <li><a href="bitcoin-application-development.html">Blockchain/Bitcoin App Development</a></li>
                                                   <li><a href="pos-rfid-application-development.html">POS(Point of Sale) App-RFID Card</a></li>  <li><a href="amazon-web-services.html">Amazon Web Services (AWS)</a> </li>                                                 
                                                </ul>
                                                
                                             </div>

                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li class="submenu">
                              <a href="javascript:void(0)" class="transition">Solutions <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                              <div class="dropdown">
                                 <div class="sub-menu-section">
                                    <div class="container">
                                       <div class="col-md-12">
                                          <div class="sub-menu-center-block rows">
                                             <div class="btn-block">
                                                <a href="testimonials.html" class="comman-btn">What Clients Say</a> <br />
                                                <a href="case-study.html" class="comman-btn mt14">View Case Studies</a> 
                                                <a href="case-study.html" class="comman-btn mt14">Portfolio</a> 
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle">Solutions</div>
                                                <ul>
                                                    <li><a href="taxi-and-ride-sharing-app-development.html">Taxi &amp; Ride Sharing App Solutions</a></li>
                                                   <li><a href="on-demand-app-development.html">On Demand App Solutions</a></li>
                                                   <li><a href="chat-messaging-app-development.html">Instant Messaging / Chat App Solution</a></li>
                                                   <li><a href="live-stream-app-development.html">Live Streaming App Solution</a></li>
                                                   <li><a href="classified-app-development.html">Classified App Solution</a></li>
                                                   <li><a href="directory-app-development.html">Directory App Solution</a></li>
                                                   <li><a href="voip-app-development.html">VoIP (Voice over Internet Protocol)</a></li>
                                                   <li><a href="location-tracking-app-development.html">Location Tracking App Solution</a></li>
                                                   
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle"><a href="industries-we-serve.html">Industries We Serve</a></div>
                                                <ul>
                                                  <li><a href="e-governance-app-development.html">E-Governance</a></li>
                                                   <li><a href="government-it-app-development.html">Government IT</a></li>
                                                   <li><a href="non-profit-orgnaization-app-development.html">Non-Profit Organization</a></li>
                                                   <li><a href="video-streaming-and-confrencing-app-development.html">Video Streaming &amp; Conferencing</a></li>
                                                    <li><a href="taxi-booking-ride-sharing-app-development.html">Taxi Booking &amp; Ride Sharing</a></li>
                                                    <li><a href="transport-logistics-app-development.html">Transport &amp; Logistics</a></li>
                                                    <li><a href="food-and-beverages-app-development.html">Food &amp; Beverages</a></li>
                                                     <li><a href="healthcare-fitness-app-development.html">Healthcare &amp; Fitness</a></li>
                                                   <li><a href="real-estate-property-app-development.html">Real Estate &amp; Property</a></li>
                                                   <li><a href="social-networking-app-development.html">Social Networking</a></li>
                                                   <li><a href="banking-finance-app-development.html">Banking, Finance &amp; Insurance</a></li>
                                                   <li><a href="education-elearning-app-development.html">Education</a></li>
                                                    <li><a href="elearning-app-development.html">eLearning &amp; eTraining</a></li>
                                                   <li><a href="ecommerce-retail-b2b-app-development.html">mEcommerce, Retail &amp; B2B</a></li>
                                                   <li><a href="job-portal-and-recruiting-app-development.html">Job Portal &amp; Recruitment</a></li>
                                                   
                                                </ul>
                                             </div>
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                  <li><a href="news-magazine-app-development.html">News &amp; Magazine</a></li>
                                                   <li><a href="travel-hospitality-app-development.html">Travel &amp; Hospitality</a></li>
                                                   <li><a href="map-and-navigation-app-development.html">Map &amp; Navigation</a></li>                                                   
                                                   
                                                  
                                                   <li><a href="dating-app-development.html">Dating</a></li>
                                                   <li><a href="automotive-transportation-app-development.html">Automotive</a></li>
                                                   <li><a href="gaming-leisure-app-development.html">Gaming &amp; Leisure</a></li>                                                   
                                                   <li><a href="event-tickets-portal-development.html">Event &amp; Tickets</a></li>
                                                   <li><a href="marketing-and-classified-app-development.html">Marketing &amp; Classified</a></li>
                                                   <li><a href="maternity-app-development.html">Matrimony</a></li>
                                                   <li><a href="rfid-and-bluetooh-app-development.html">RFID &amp; Bluetooth Solution</a></li>
                                                   <li><a href="ocr-app-development.html">OCR Apps</a></li>
                                                   <li><a href="kiosk-app-development.html">KIOSK Based Solution</a></li>
                                                   <li><a href="mlm--app-development.html">MLM Software</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div style = "height:70px; width:100% ; background:#077BEA ;margin-top:-8px">
                                  <div class="container">
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span>
                              </div>
                              <div class="celibration" style="float: right;">
                                <img src="img/partner/celebrate.png">
                              </div>
                              </div>
                            </div>
                              </div>
                           </li>
                            <li class="submenu">
                              <a href="javascript:void(0)" class="transition">Hire Us
                              <i class="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div class="dropdown">
                                 <div class="sub-menu-section">
                                    <div class="container">
                                       <div class="col-md-12">
                                          <div class="sub-menu-center-block rows">
                                             <div class="btn-block">
                                                <a href="hire-dedicated-developer.html" class="comman-btn">Hire Developer</a> <br />
                                                 <a href="case-study.html" class="comman-btn mt14">View Case Studies</a> 
                                                <a href="partnership.html" class="comman-btn mt14">Portfolio</a>
                                                <br> 
                                               <div class="" style="width: 30%; margin-left: -22px;">
                                                <a style="text-align: left; color: #fff;">* 24x7 Technical Support</a>
                                                
                                                <a style="text-align: left; color: #fff;">* 100% Confidentiality Assured (Strick NDA)</a>
                                                   <a style="text-align: left; color: #fff;">* 100% Moneyback Gurantee</a>
                                               </div>
                                             </div>


                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle">Pick a Skill</div>
                                                <ul>
                                                   <li> <a href="hire-android-developer.html">Hire Android Developer</a></li>
                                                 <li> <a href="hire-ios-developer.html">Hire iPhone Developer</a></li>
                                                 <li> <a href="hire-ipad-developer.html">Hire iPad Developer</a></li>
                                                  <li> <a href="hire-phonegap-developer.html">Hire Phonegap Developer</a></li>
                                                 <li> <a href="hire-kotlin-developer.html">Hire Kotlin Developer</a></li>
                                                  <li> <a href="hire-ionic-developer.html">Hire Ionic Developer</a></li>
                                                <li> <a href="hire-xamarin-developer.html">Hire Xamarin Developer</a></li>
                                            <li> <a href="hire-sencha-developer.html">Hire Sencha Developer</a></li>
                                             <li> <a href="hire-react-native-developer.html">Hire React Native Developer</a></li>
                                           <li> <a href="hire-cross-platform-developer.html">Hire Cross Platform Developer</a></li>
                                          <li> <a href="hire-unity3d-developer.html">Hire Unity 3D Developer</a></li>
                                          <li> <a href="hire-opengl-developer.html">Hire OpenGL Developer</a></li>
                                          <li> <a href="hire-and-engine-developer.html">Hire AndEngine Developer</a></li>
                                                  <li> <a href="hire-html5-developer.html">Hire HTML5 Developer</a></li>
                                                  <li> <a href="hire-game-developer.html">Hire Game Developer</a></li>
                                                </ul>
                                             </div>
                                              <div class="sub-menu-sec">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                   <li> <a href="hire-php-developer.html">Hire PHP Developer</a></li>
                                                   <li> <a href="hire-java-developer.html">Hire Java Developer</a></li>
                                                   <li> <a href="hire-asp-dot-net-developer.html">Hire .Net Developer</a></li>
                                                   <li> <a href="hire-paython-developer.html">Hire Python Developer</a></li>
                                                  <li> <a href="hire-node-js-developer.html">Hire Node JS Developer</a></li>
                                                   <li> <a href="hire-ruby-on-rails-developer.html">Hire Ruby On Rails Developer</a></li>
                                                   <li> <a href="hire-django-developer.html">Hire Django Developer</a></li>
                                                   
                                                   <li> <a href="hire-drupal-developer.html">Hire Drupal Developer</a></li>
                                                   <li> <a href="hire-joomla-developer.html">Hire Joomla Developer</a></li>
                                                   <li> <a href="hire-magento-developer.html">Hire Magento Developer</a></li>
                                                   <li> <a href="hire-wordpress-developer.html">Hire Wordpress Developer</a></li>                                             
                                                   <li> <a href="hire-cms-developer.html">Hire CMS Developer</a></li>
                                                   <li> <a href="hire-html-developer.html">Hire HTML Developer</a></li>
                                                   <li> <a href="hire-e-commerce-developer.html">Hire e-Commerce Developer</a></li>
                                                </ul>
                                             </div>
                                              <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                    <li> <a href="hire-mobile-app-developer.html">Dedicated Mobile App Developer</a></li>
                                                     <li> <a href="hire-web-developer.html">Dedicated Web Developer</a></li>
                                                   <li> <a href="hire-project-manager.html">Dedicated Project Manager</a></li>
                                                   <li> <a href="hire-business-analyst.html">Dedicated Business Analyst</a></li>
                                                   <li> <a href="hire-ui-ux-developer.html">Dedicated UI/UX Designer </a></li>
                                                   <li> <a href="hire-qa-tester.html">Dedicated QA Tester</a></li>                                                   
                                             </div>                      
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                    <li> <a href="how-it-works.html"><b>How it Works?</b></a></li>
                                                    <li> <a href="offshore-model.html"><b>OFFSHORE Model</b></a></li>                   
                                                     <li> <a href="onshore-model.html"><b>ONSHORE Model</b></a></li>                   
                                                     <li> <a href="hybrid-model.html"><b>HYBRID Model</b></a></li>        
                                                     <li> <a href="contact-us.html"><b>#2 Week Free Trial - Connect Us</b></a></li>
                                                     
                                             </div>   
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div style = "height:70px; width:100% ; background:#077BEA ;margin-top:-8px">
                                  <div class="container">
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span>
                              </div>
                              <div class="celibration" style="float: right;">
                                <img src="img/partner/celebrate.png">
                              </div>
                              </div>
                            </div>
                              </div>
                           </li>
                           <li>
                              <a href="portfolios.html" class="transition">Portfolio</a> 
                           </li>
                           <li class="submenu">
                              <a href="javascript:void(0)" class="transition">Case Studies
                              <i class="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div class="dropdown">
                                 <div class="sub-menu-section">
                                    <div class="container">
                                       <div class="col-md-12">
                                          <div class="sub-menu-center-block rows">
                                             <div class="btn-block">
                                                <a href="partnership.html" class="comman-btn mt14">Portfolio</a> 
                                             </div>
                                             <div class="sub-menu-sec">
                                                <div class="menuHeadTitle">Checkout our success stories</div>
                                                <ul>
                                                   <li> <a href="case-study/taxi-for-sure-case-study.html">Taxi For Sure <b>(Acquired by OLA)</b></a></li>
                                                   <li> <a href="case-study/chalklit-case-study.html">Chalklit <b>(Funded by Google)</b></a></li>
                                                   <li> <a href="case-study/grab-taxi-case-study.html">Grab Taxi</a></li>
                                                  <li> <a href="case-study/havells-mkonnect-case-study.html">Havells mKonnect App</a></li>
                                                   <li> <a href="case-study/emedicoz-case-study.html">eMedicoz (DAMS) - eLearning , Course &amp; Tutorial</a></li>
                                                   <li> <a href="case-study/gullak-case-study.html">Gullak <b>(2M+ Downloads)</b></a></li>
                                                   <li> <a href="case-study/hangman-case-study.html">Hangman <b>(10M+ Downloads)</b></a></li>
                                                 
                                                   <li> <a href="case-study/news-hunt-case-study.html">News Hunt <b>(50M+ Downloads)</b></a></li>
                                                   <li> <a href="case-study/amar-ujala-case-study.html">Amar Ujala <b>(No#1 Newspaper in India)</b></a></li>
                                                   <li> <a href="case-study/innerchef-food-app-case-study.html">Innerchef - Food App</a></li>
                                                   <li> <a href="case-study/jiffy-shopping-app-case-study.html">Jiffy - Shopping App</a></li>
                                                </ul>
                                             </div>
                                              <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">&nbsp;</div>
                                                <ul>
                                                   <li> <a href="case-study/coca-cola-survey-app-case-study.html">Coca Cola (Survey App)</a></li>
                                                   <li> <a href="case-study/tupelo-life-case-study.html">Tupelo Life</a></li>
                                                   <li> <a href="case-study/udemy-case-study.html">Udemy Online Courses</a></li>
                                                   <li> <a href="case-study/simpli-learn-case-study.html">Simpli Learn</a></li>
                                                     <li> <a href="case-study/speaking-tree-case-study.html">Speaking Tree</a></li>
                                                   <li> <a href="case-study/lazada-case-study.html">Lazada <b>(50M+ Downloads)</b></a></li>
                                                    <li> <a href="case-study/tm-travel-case-study.html">TM Travel</a></li>
                                                     <li> <a href="case-study/traveloka-case-study.html">Traveloka</a></li>
                                                     <li> <a href="case-study/hitwe-case-study.html">Hitwe-Dating App</a></li>
                                                     <li> <a href="case-study/mico-case-study.html">Mico</a></li>
                                                     <li> <a href="case-study/lovoo-case-study.html">Lovoo - Free Dating App</a></li>
                                                     <li> <a href="case-study/dolly-case-study.html">Dolly - On Demand</a></li>
                                                     <li> <a href="case-study/nearify-case-study.html">Nearify - Discover Events</a></li>
                                             </div>                      
                                             <div class="sub-menu-sec without-heading">
                                                <div class="menuHeadTitle">Government Projects</div>
                                                <ul>                                                       
                                                   <li> <a href="case-study/urja-case-study.html">Urja - Power Finance Ministry</a></li>
                                                   <li> <a href="case-study/steelmint-case-study.html">SteelMint - Steel Authority of India</a></li>
                                                    <li> <a href="case-study/himachal-forest-department-case-study.html">Himachal Forest Department</a></li>
                                                   <li> <a href="case-study/drdo-case-study.html">E-Nasika - DRDO</a></li>
                                                   <li> <a href="case-study/nabha-power-plant-case-study.html">Nabha Power Plant</a></li>
                                                   <li> <a href="case-study/taste-of-bihar-case-study.html">Taste Of Bihar - Bihar Government</a></li> 
                                             </div>     
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div style = "height:70px; width:100% ; background:#077BEA ;margin-top:-8px">
                                  <div class="container">
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span>
                              </div>
                              <div class="partner-with" style="float: left;">
                                <img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span>
                              </div>
                              <div class="celibration" style="float: right;">
                                <img src="img/partner/celebrate.png">
                              </div>
                              </div>
                            </div>
                              </div>
                           </li>
                           <li><a href="contact-us.html" class="transition">Contact Us</a></li>
                          </ul>
                     </div>
                  </div>
               </nav>
            </div>
            <div class="clearfix"></div>
         </div>
      </header>


<div id="survey-page" class="middle-part">
<section class="survey-banner-section seconds-section hide-background-color custom-banner selected" style="background-image: url('https://s3-us-west-2.amazonaws.com/konstant-pipeline/k_portfolio/survey/1489499670_smartlink.jpg'); background-color: #357DA1">
<div class="container">
<div class="content-part">
<div class="logo-img">
<a href="javascript:void(0);">
<!--<img src="https://s3-us-west-2.amazonaws.com/konstant-pipeline/k_portfolio/logo/1487745385_smart-link-appicon.png" style="" class="" onerror="imgError(this);">-->

<img width="100px" height="100px" src="<?php echo $final."/uploads/app_logos/".$get_rev_res['logo']; ?>"/>

<!--<img width="100px" height="100px" src="<?php// echo $final."/uploads/app_logos/".unnamed (1).png ?>"/>-->

</a>
</div>
<h2>Interview with <strong><?php echo $get_rev_res['client_name']; ?></strong> <br>the <strong><?php echo $get_rev_res['designation']; ?> </strong> at <strong><?php echo $get_rev_res['client_company_name']; ?></strong> <br>
<span>
on <?php echo $get_rev_res['date_of_interview']; ?>
</span>
</h2>
<?php
echo ($get_rev_res['description']==""?'':'<div class="black-text"> <span> <p>'.$get_rev_res['description'].'&nbsp;<br></p></span></div>');
?>

<div class="Validated-block">
<p>Validated by:</p> <?php 



if($get_rev_res['validated_by']=='0' )
{
	//echo"<div><h3 style='color:white'>Not validated<h3></div>";
}
else {
	$validater_query 	            ="select image from app_validaters where id=".$get_rev_res['validated_by'];
	$validater_img_fire 			= $conn->query($validater_query)->fetch_array(MYSQLI_ASSOC);
	$validate_image = $base_url."uploads/validators_images/".$validater_img_fire['image'];
	
	}	
	?>
     <img src="<?php echo $validate_image; ?>" alt="validater logo" width="140px" height="30px">
</div>
   </div>
</div>

<div class="survey-slide-arrow">
<ul>
<li class="survey-next"><a href="survay.php?id=<?php echo $next_id; ?>"></a><span class="hov-text">Next Survey</span></li>
<li class="survey-prev"><a href="survay.php?id=<?php echo $next_id; ?>"></a><span class="hov-text">Pre Survey</span></li>
 </ul>
</div>
</section>
<section class="stick-deadline-section selected">
<div class="icon-block">
     <ul>
	  <?php if(!empty($get_rev_res['website_url'])){?>
         <li><span class="cib-tooltip">Website</span>
          <a target="_blank" href="<?php echo $get_rev_res['website_url']; ?>" target="" title="" class="web-icon"></a>
         </li>
		 <?php }?>
		 
		 <?php if(!empty($get_rev_res['ios_app'])){?>
         <li><span class="cib-tooltip">iPhone</span>
          <a target="_blank" href="<?php echo $get_rev_res['ios_app']; ?>" target="" title="" class="apple-icon"></a>
		 </li>
		 <?php }?>
		 
		 <?php if(!empty($get_rev_res['android_app'])){?>
         <li><span class="cib-tooltip">Android</span>
          <a target="_blank" href="<?php echo $get_rev_res['android_app']; ?>" target="" title="" class="android-icon"></a>
        </li>
		 <?php } ?>
     </ul>
</div>
<div class="starbg"><i class="fa fa-star" aria-hidden="true"></i></div>
<div class="container">
<div class="working-star-block">
<p>
<span>“</span> <?php echo $get_rev_res['review_description']; ?> <span>”</span> </p>
<br>
<div class="ratting-block-section">
<!-- <div class="client-cluth-logo">
<img src="https://www.konstantinfo.com/img/skedpal-suvey/client-cluth-logo.png" alt="Clutch">
</div> -->
<ul>
<li>
<div class="block">
<i><img src="https://www.konstantinfo.com/img/skedpal-suvey/calendra_icon.png"></i>
<span><?php echo $get_rev_res['schedule']; ?>/5</span>
<label>Schedule</label>
</div>
</li>
<li>
<div class="block">
<i><img src="https://www.konstantinfo.com/img/skedpal-suvey/batch_icon.png"></i>
<span><?php echo $get_rev_res['quality']; ?>/5</span>
<label>Quality</label>
</div>
</li>
<li>
<div class="block">
<i><img src="https://www.konstantinfo.com/img/skedpal-suvey/dollar_icon.png"></i>
<span><?php echo $get_rev_res['cost']; ?>/5</span>
<label>Cost</label>
</div>
</li>
<li>
<div class="block">
<i><img src="https://www.konstantinfo.com/img/skedpal-suvey/refer_icon.png"></i>
<span><?php echo $get_rev_res['willing_to_offer']; ?>/5</span>
<label>Willing to Refer</label>
</div>
</li>
<li>
<div class="block">
<i><img src="https://www.konstantinfo.com/img/skedpal-suvey/star_icon.png"></i>
<span><?php echo $get_rev_res['overall_rating']; ?>/5</span>
<label>Overall Rating</label>
</div>
</li>
<div class="equal-icon">=</div>
</ul>
</div>
</div>
</div>
</section>

<section class="project-summery-section">
<div class="container-fluid">
<?php 
if($final_details){ //echo '<pre>'; print_r($surveys); die;
  foreach($final_details as $final_detail){ //echo '<pre>'; print_r($survey); die;?>
<div class="discription-block">
<div class="container">
<div class="heading-block text-center"><h2><?php echo $final_detail['heading']; ?></h2></div>
<div class="content-right-block">
<?php foreach($final_detail['answers'] as $answer){ //echo '<pre>'; print_r($question); die;?>
<div class="content-block">
<h3><?php echo $answer['question']; ?></h3>
<p><?php echo $answer['answer']; ?></p>
</div>
<?php } ?>
</div>
</div>
</div>
<?php } }?>
<div class="clearfix">
</div>
<section class="proposal-block selected">
<div class="text-center ptb70 fadeInUp animated3">
<div class="font32 flight ">Need a proposal? Let's discuss the project!</div>
<div class="regular-sub-head nobg pb ">Get in touch with us and discuss the needs and requirements of your project.</div>
<div class="btn-section mt30"> <a href="javascript:void(0)" class="regular-btns tuppercase fbold cs_req_btn">Request a quote</a> </div>
</div>
</section>
<div class="page_top"> <a href="javascript:void(0);" id="gotop"></a> </div>
<div class="clearfix"></div>
<section class="footer-section">
<div class="container">
<div class="footer-part1 rows">
<div class="col-md-12">
<div class="row">
<div class="col-md-3 col-sm-6">
<div class="footerTitle">CAREERS</div>
<a href="careers.html" class="email-link transition"><i></i><span></span>We Are Hiring!</a> </div>
<br>
<div class="col-md-5 col-sm-6">
<div class="footerTitle">NEWSLETTER</div>
<p><a href="javascript:void(0)" data-toggle="modal" id="get-the-news-open" data-target="#get-the-news_footer">Get the latest industry news and insights</a></p>
</div>
<br>
<div class="col-md-4 col-sm-12">
<div class="social-icon-block">
<div class="footerTitle">Connect with us</div>
<ul>
<li><a itemprop="sameAs" title="Facebook" target="_blank" href="https://www.facebook.com/konstant.info/" class="transition"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="Twitter" target="_blank" href="https://twitter.com/konstantinfo" class="transition"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="Google Plus" target="_blank" href="https://plus.google.com/+Konstantinfo" class="transition"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="LinkedIn" target="_blank" href="https://www.linkedin.com/company/konstant-infosolutions-pvt-ltd" class="transition"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="Youtube" target="_blank" href="https://www.youtube.com/user/konstantinfo" class="transition"><i class="fa fa-play" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="Behance" target="_blank" href="https://www.behance.net/konstantinfo" class="transition"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
<li><a itemprop="sameAs" title="Dribbble" target="_blank" href="https://dribbble.com/konstantinfo" class="transition"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div class="footer-part2 rows">
<div class="col-md-12">
<div class="client-logos">
<ul>
<li><a><span><img src="../s3-us-west-2.amazonaws.com/konstant/img/footer-client-logo1.png" title="Paypal Partner" alt="Paypal Partner" class="transition"></span></a></li>
<li><a href="https://www.itfirms.co/top-mobile-app-development-companies/" rel="nofollow" target="_blank"><img src="../s3-us-west-2.amazonaws.com/konstant/img/footer-client-logo2.png" title="ITFirms" alt="ITFirms" class="transition"></a></li>
<li><a href="https://clutch.co/profile/konstant-infosolutions" rel="nofollow" target="_blank"><img src="../s3-us-west-2.amazonaws.com/konstant/img/footer-client-logo3.png" title="Recognized by Clutch" alt="Recognized by Clutch" class="transition"></a></li>
<li><a href="https://www.goodfirms.co/portfolios/details/602/8/konstant-infosolutions" rel="nofollow" target="_blank"><img src="../s3-us-west-2.amazonaws.com/konstant/img/footer-client-logo4.png" title="Goodfirms" alt="Goodfirms" class="transition"></a></li>
<li><a><img src="../s3-us-west-2.amazonaws.com/konstant/img/footer-client-logo5.png" title="Amazon Web Services Partner" alt="Amazon Web Services Partner" class="transition"></a></li>
</ul>
</div>
<p>Copyright &copy; 2003-2017 Konstant Infosolutions. All Rights Reserved. <a href="privacy-policy.html">Privacy Policy</a> | <a href="terms-conditions.html">Terms &amp; Conditions</a> | <a href="sitemap.html">Sitemap</a></p>
<div style="padding-top:0px;text-align:center;" class="dmca"><a target="_blank" href="https://www.dmca.com/Protection/Status.aspx?ID=0e807e3b-307d-474e-af60-747ec5b1bbc1" title="DMCA">
<img src="../s3-us-west-2.amazonaws.com/konstant/img/dmca_protected_sml_120c.png" alt="DMCA.com" style="margin-top: 10px;">
</a>
</div>
</div>
</div>
</div>
</section>


<div class="modal comman-popuo-block selected" id="get-the-news_footer" tabindex="-1" role="dialog">
<div class="modal-dialog fadeInUp animated2" role="document">
<div class="modal-content">
<h2 class="heading">Subscribe to our newsletter</h2>
<p class="title">Get updates on awesome happenings in the technology world!</p>
<div class="filed-block">
<p class="title" style="display:none;" id="newsletter_error">Oops, Something goes wrong please check your email address and verify captcha or please try again.</p>
<div class="filed">
<form method="post" id="site-searchform1">
<input type="text" placeholder="Enter your email address" autocomplete="off" name="email" id="newsletter_email" class="textfiled newsletter_default">
<input name="format" value="h" type="hidden">
<input type="button" value="Subscribe Now" id="subscribe_now" class="subscribe-btn transition">
<div class="input-group">
<div id="RecaptchaField3" class="captcha"></div>
</div>
</form>
</div>
</div>
<span class="note-line"><i class="fa fa-lock" style="display: inline-block;vertical-align: middle;"></i> We respect your privacy.</span>
</div>
</div>
</div>
<script src="../ajax.cloudflare.com/cdn-cgi/scripts/78d64697/cloudflare-static/email-decode.min.js"></script><script>
var wait = 'Please wait...';
var normaltxt = 'Subscribe Now';
var loaderSubmit = $('input#subscribe_now'); 

$(document).on('click','#get-the-news-open',function () {  
 
  loaderSubmit.removeAttr('disabled');
  loaderSubmit.attr('value', normaltxt);
  $('#newsletter_email').removeClass('newsletter_form_error');
  $('#newsletter_email').val('');
  $('#newsletter_email').focus(); 
});
  
  $(document).on('click','input#subscribe_now',function () { 
  
    var newsletter_email = $('#newsletter_email').val();
    var email_re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    if ( !email_re.test( newsletter_email ) || ! newsletter_email.trim() ) {
      $('#newsletter_email').addClass('newsletter_form_error');
      $('#newsletter_email').focus(); 
      return false;
    }else{
      $('#newsletter_email').removeClass('newsletter_form_error');
    }

		var recapcharesponse = grecaptcha.getResponse( CRecaptchaField3 );
		if(!recapcharesponse) {
			$('#RecaptchaField3').addClass('newsletter_form_error2'); 
			return false;
		}else{
			$('#RecaptchaField3').removeClass('newsletter_form_error2'); 
		}
	
      var error = $('#newsletter_error');  
      var form = $('#site-searchform1');

	  var frm_serialize_data = jQuery( "#site-searchform1" ).serialize();
      var action = "contacts/newsletter.html";
      $.ajax({
        type:"POST",
        url:action,
        //data:{email: newsletter_email },
		data:frm_serialize_data + "&email="+newsletter_email,
        beforeSend: function() {

          loaderSubmit.attr('disabled', 'disabled');
          loaderSubmit.attr('value', wait);

          error.hide(); 
        },
        success: function(data){
         //console.log(data); 
         if( data ){
          //success 
          //send to thanks-for-subscribe.php
          //$('#newsletter_email').val(''); 
          form.attr('action', data);
          form.submit(); 
         }else{
            error.show();
            
            loaderSubmit.removeAttr('disabled');
            loaderSubmit.attr('value', normaltxt);

            //alert(data);
         }
           //$('#newsletter_email').val(''); 
        },
        complete: function(){
            
        }
      });
   });
  </script>

<script type="text/javascript">
(function(){
	$("#progressbar").show();
	$(window).scroll(function () {
		var s = $(document).scrollTop(),
			d = $(document).height() - $(window).height();          
		$("#progressbar").attr('max', d);
		$("#progressbar").attr('value', s);
	 });
}());
</script>

<script>
         window.intercomSettings = {
           app_id: "emnqcxhx"
         };
     </script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/emnqcxhx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
   

<!-- Mirrored from www.konstantinfo.com/about-us.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 24 Oct 2017 04:32:31 GMT -->
</html>