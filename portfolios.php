<?php
include('query_helper.php');
error_reporting(1);
$base_path = getcwd();
include('config.php');
$where = "where app_list.id>0 ";
$filters = "ready_filters"; $ind_count=0;
$front_count=0;
$back_count=0;
 if($_POST){
 //print_r($_POST); die;
  $apply_filters  = $_POST;  

 if($_POST['industry'] && !empty($_POST['industry'])){
    $ind_count=sizeof($_POST['industry']);
    $where = $where." AND `app_app_category`.`id` IN (".implode(',',$_POST['industry']).')';
  }
  if($_POST['front'] && !empty($_POST['front'])){ 
    $front_count=count($_POST['front']);
    $where = $where." AND `app_frontend`.`id` IN (".implode(',',$_POST['front']).')';
  }
  if($_POST['back'] && !empty($_POST['back'])){ 
  $back_count=count($_POST['back']);
  $where = $where." AND `app_backend`.`id` IN (".implode(',',$_POST['back']).')';
  }
 }
 $count =0;
$query = "SELECT app_list.*,app_app_category.category FROM app_list
join app_apps_categories on app_apps_categories.fk_app_id=app_list.id 
join app_app_category on app_app_category.id=app_apps_categories.fk_category_id
join app_apps_frontends on app_apps_frontends.fk_app_id=app_list.id 
join app_frontend on app_frontend.id=app_apps_frontends.fk_frontend_id
join app_apps_backends on app_apps_backends.fk_app_id=app_list.id 
join app_backend on app_backend.id=app_apps_backends.fk_backend_id
".$where." group by app_list.id";
$apps = fetch_data_by_custom_query($query);
//print_r($apps);
if($apps){
  $count = count($apps);
  //echo($count);
}
$filters = urlencode(serialize($_POST));
?>
<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
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
  </script> <link rel="canonical" href="https://www.appsquadz.com/about-us.html" />
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
                            
                              'apple-touch-icon-precomposed': 'https://localhost/favicon.ico',
                             'icon': 'https://localhost/favicon.ico',
                             'shortcut icon': 'https://localhost/favicon.ico'
         
                             
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
         		var currLink 	= $(this);
         		var selectedId 	= currLink.parents('section').attr("id");
         		selectedId 		= '.technologiesProvide';//'#'+selectedId;
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
         			utilsScript: "https://localhost/js/utils.js"
         		});

             $('.country-list li').on('click',function(){ 
              var CallingCode = $(this).attr('data-dial-code');
              $('#ContactsCallingCode').val('+'+CallingCode);
            });

           }      

           function openRequestQuote(){

             $.ajax({
               type: "GET",
               url: "https://localhost/request-a-quote.php" , 
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




               $('input:checkbox').change(function(){
                 if($(this).is(":checked")) {
                  $(this).parent().addClass("active");
                } else {
                  $(this).parent().removeClass("active");
                }
              });

               $('.Labelchk').on('click',function(){
                 $(this).toggleClass('active');
         		//$(this).find('input:checkbox').click();
         	});


               $('#filterBtn').bind('click', function(){
                 $('body').addClass('fixedScroll');
                 $('.pfilterBlock').removeClass('filterblockHide');
                 $('.pfilterBlock').addClass('filterblockShow');

               });
               $('.searchfilterBtn').bind('click', function(){
                 $('body').addClass('fixedScroll');
                 $('.pfilterBlock').removeClass('filterblockHide');
                 $('.pfilterBlock').addClass('filterblockShow');

               });
               $('.close-button, .inquireNow').bind('click', function(){
                 $('body').removeClass('fixedScroll');
                 $('.pfilterBlock').removeClass('filterblockShow');
                 $('.pfilterBlock').addClass('filterblockHide');

               }) ; 


         }); // end doc ready


$(function(){
               //SyntaxHighlighter.all();
             });

function openRequestedPopup() {
  var w=420; var h=320;
  var url="";
  var title="appsquadz Voice Recorder";
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
         var max_file_size 			= 10485760; //allowed file size. (1 MB = 1048576)
         var allowed_file_types 		= ['application/zip', 'application/x-compressed-zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-excel', 'application/pdf', 'text/plain', 'application/vnd.ms-powerpointtd', 'text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-powerpoint', 'application/octet-stream']; //allowed file types
         var result_output 			= '#output'; //ID of an element for response output
         var my_form_id 				= '#quote_files'; //ID of an element for response output
         var total_files_allowed 	= 5; //Number files allowed to upload
         var progress_bar_id 		= '#progress-wrp'; //ID of an element for response output
         
         //on form submit
         $('#quote_files').on("change", function(event) {
         	event.preventDefault();
         	var proceed = true; //set proceed flag
         	var error = [];	//errors
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
         				url: "https://localhost/contacts/upload",
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
           url: "https://localhost/contacts/user_visits/"+ eapi_idCookie, 
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
</script>
</head>
   <body id='web-phone-grid' itemscope itemprop='mainEntity' itemtype='http://schema.org/Organization' class=''>
    <progress id="progressbar" value="0" style="display:none"></progress>
    <div class="start-a-project rq-ud-form closed">
     <div class="start-projectinner">
      <div class="col-sm-12">
       <header class="popup-header">
        <a href="index.php"><img src="img/popup-logo97e4.png?1487942963" alt="Logo" /></a> 
        <div class="circCont close-button">
         <button type="button" class="circle" data-animation="showShadow" data-remove="3000" data-from="req-a-quote"></button>
       </div>
     </header>
   </div>
   <form action="http://localhost/appsquadz/portfolios.php" id="requestQuoteForm" name="requestQuoteForm" onsubmit="return validateRequestQuote()" enctype="multipart/form-data" novalidate="novalidate" method="post" accept-charset="utf-8">
     <div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>
     <div class="container">
      <div class="row">
       <div class="col-sm-12 mt20 rq-head">
        <div class="main-heading section-heading">
         <div class="section-title">
          <h2>Get a perfect quote</h2>
          <h3>We’re eager to work with you. Please share your project goals and contact information. We respond to 97% of messages within 1-2 business day. <strong>Really!</strong></h3>
        </div>
      </div>
    </div>
    <div class="col-sm-12 mt60 rq-main-form-block">
      <div class="popup-box got-an-idea" id="gotn-idea">
       <div class="section-heading">
        <div class="section-title">
         <h2>Tell us about you</h2>
       </div>
     </div>
     <div class="popup-form gotanidea-form">
      <input type="hidden" name="data[Contacts][country]" value="India" id="ContactsCountry2" /><input type="hidden" name="data[Contacts][city]" value="Gurgaon" id="ContactsCity2" /><input type="hidden" name="data[Contacts][zip]" value="" id="ContactsZip2" /><input type="hidden" name="data[Contacts][state]" value="" id="ContactsState2" /><input type="hidden" name="data[Contacts][ip]" value="" id="ContactsIp2" /><input type="hidden" name="data[Contacts][type]" value="request-quote" id="ContactsType2" /><input type="hidden" name="data[Contacts][calling_code]" value="+91" id="ContactsCallingCode2" /><input type="hidden" name="data[Contacts][source]" value="http://localhost/appsquadz/portfolios.php" id="ContactsSource2" />
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
   <h2>Tell us about your Project</h2>
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
    <input type="checkbox" name="data[Contacts][category][]" value="Partnership Opportunities" id="ContactsCategory_7" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
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
      <i class="add-file"></i><strong>Attach any files you feel would be useful<br /> <span>(Attach Files (doc, xls, pdf, txt, ppt and zip files only, max Size 10MB)</span></strong>
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
<div class="row marT50 rq-btn-block">
 <div class="col-md-5 col-sm-6">
  <div id="RecaptchaField2" class="captcha" style="width:306px"></div>
</div>
<div class="col-md-7 col-sm-6">
  <button type="submit" style="border: none;" class="blue-new-btn nextButton" tabindex="0">Let&#039;s go!</button> 
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<input type="hidden" name="data[Contacts][step_value]" id="step_value" value="" />
</form>
</div>
<p class="pinned--bottom-right">
  Or send us an email at: <a href="cdn-cgi/l/email-protection.html#aad9cbc6cfd9eac1c5c4d9decbc4dec3c4ccc584c9c5c7"><span class="__cf_email__" data-cfemail="1c6f7d70796f5c7773726f687d726875727a73327f7371">[email&#160;protected]</span></a>
</p>
<script src="../ajax.cloudflare.com/cdn-cgi/scripts/78d64697/cloudflare-static/email-decode.min.js"></script><script type="text/javascript">
  $(function(){

            	//configuration
            	var max_file_size 			= 10485760; //allowed file size. (1 MB = 1048576) (10 MB = 10485760)
            	var allowed_file_types 		= ['application/zip', 'application/x-compressed-zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-excel', 'application/pdf', 'text/plain', 'application/vnd.ms-powerpointtd', 'text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-powerpoint', 'application/octet-stream']; //allowed file types
            	var result_output 			= '#output2'; //ID of an element for response output
            	var my_form_id 				= '#inquire_quote_files'; //ID of an element for response output
            	var total_files_allowed 	= 5; //Number files allowed to upload
            	var progress_bar_id 		= '#progress-wrp2'; //ID of an element for response output

            	//on form submit
            	$('#inquire_quote_files').on("change", function(event) {
            		event.preventDefault();
            		var proceed = true; //set proceed flag
            		var error = [];	//errors
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
            					url: "http://localhost/appsquadz/portfolios.php",
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
        <header class="selected sticky">
         <div class="header-inset">
          <div class="logo desktop">
           <a href="index.php"><img src="img/logo3e94.png?1487942978" alt="Logo" /></a> 
         </div>
         <div class="logo mobile">
           <a href="index.php"><img src="img/stiklogo.png?1487942949" alt="Logo" /></a> 
         </div>
         <div class="custom-navbar desktop-nav portfolio-header">
           <nav class="navbar">
            <div class="navigation">
             <div style="float:right">
              <!-- <div class="inquiry-btn"><a href="javascript:void(0)" class="transition" id="InquireNow">Request a Quote</a> </div> -->
              <div class="grid-filter">
               <a href="javascript:void(0)" class="filterBtn transition" id="filterBtn"> <span>Filter</span></a>
             </div>
           </div>
         </div>
       </nav>
     </div>
     <div class="clearfix"></div>
   </div>
 </header>
 <div class="container-fluid paddinglr">
   <div class="main-content-block rows portfolio-list-head">
    <div class="sub-title">/ Our Portfolio - Breakthrough Projects /</div>
    <h2>Just a couple of favorites to share with you. <br> Let our work speak for itself. </h2>
    <div class="title-bar">YOU’LL LOVE TO SEE SOME OF OUR BEST PROJECTS. TAKE A LOOK!</div>
  </div>
</div>
<div  class="row" id="survey_portfolio_div"></div>
<div class="col-md-12 text-center load-more-btn" id="loadmore_data" style="display:none; margin-bottom:10px;">
 <a href="javascript:void(0)" style="text-decoration:none" class="fbold transition">
   Load more <span><i class="loader">Loading...</i></span>
 </a>
</div>
<br>
<div class="clearfix"></div>
<section id="pop-scroll" class="get-in-touch-section top-bofu selected">
         <div class="container">
            <div class="from-block rows">
               <div class="col-md-12">
                  <div class="row">
                     <div class="col-md-5">
                        <div class="from-left-block rows">
                           <div class="sparater-block">
                           </div>
                           <div class="letbuild rows fadeInUp animated3">
                              <h2>Let’s build an amazing project</h2>
                              <div class="title-bar">Drop Us a Line</div>
                           </div>
                           <div class="emailid-block block-emailid rows">
                              <a href="" class="transition">
                              <i class="email-icon icon-email"></i> <span class="small-text rows">mail to our sales department</span>
                              <span class="large-text rows" style=" font-size: 17px; line-height: 36px;"><span class="__cf_email__" data-cfemail="c1b2a0ada4b281aaaeafb2b5a0afb5a8afa7aeefa2aeac">sales@appsquadz.com</span></span>
                              </a>
                           </div>
                           <div class="emailid-block block-emailid voicemsg rows marT20">
                              <a href="skype:sales.appsquad?call" class="transition"><i class="meeting"></i> <span class="small-text rows">Our Skype Id</span> <span class="large-text rows" style=" font-size: 17px; line-height: 38px;">sales.appsquadz</span> </a>
                           </div>
                           <div class="emailid-block block-emailid voicemsg rows marT20">
                              <a href="https://calendly.com/appsquadz/meeting" class="transition"><i class="skype-icon"></i> <span class="small-text rows">Let's plan a quick call</span> <span class="large-text rows" style=" font-size: 17px; line-height: 38px;">Schedule a Meeting</span> </a>
                           </div>
                           <div class="emailid-block block-emailid voicemsg rows marT20">
                              <a href="skype:sales.appsquadz?call" class="transition"><i class="phonecall"></i> <span class="small-text rows">Our Phone Number<span> <span class="large-text rows" style=" font-size: 15px; line-height: 30px;">+91-9717270746 (India) <br>+1-877-659-9068(US)<br> +44-203-807-3810(UK)<br> +91-9717270746(UAE)<br>+66-0946430863(Thailand)</span> </a>
                           </div>
                           <div class="listing-block rows">
                              <h3>We Offer:</h3>
                              <ul class="bluts">
                                 <li><i></i>On-call inquiry assistance within <b>24hour</b></li>
                                 <li><i></i><b>30 minutes free consultation</b> for selected projects.</li>
                                 <li><i></i><b>100% </b>Confidential Consultation! We sign NDA.</li>
                                 <li><i></i>Project consulting by experts</li>
                                 <li><i></i>Detailed project understanding</li>
                                 <li><i></i>Detailed project estimation by Sales team</li>
                                 <li><i></i>No obligation quote.</b></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-7">
                        <div class="from-right-block rows">
                           <form action="" id="contactForm" name="contactForm" onsubmit="return validateGetintouch()" enctype="multipart/form-data" novalidate method="post" accept-charset="utf-8">
                              <div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>
                              <input type="hidden" name="data[Contacts][country]" value="India" id="ContactsCountry" /><input type="hidden" name="data[Contacts][city]" value="Gurgaon" id="ContactsCity" /><input type="hidden" name="data[Contacts][zip]" value="" id="ContactsZip" /><input type="hidden" name="data[Contacts][state]" value="" id="ContactsState" /><input type="hidden" name="data[Contacts][ip]" value="" id="ContactsIp" /><input type="hidden" name="data[Contacts][type]" value="footer" id="ContactsType" /><input type="hidden" name="data[Contacts][calling_code]" value="+91" id="ContactsCallingCode" /><input type="hidden" name="data[Contacts][source]" value="" id="ContactsSource" /> 
                              <div class="form-group input-effect">
                                 <div>
                                    <i class="name"></i>
                                    <input name="data[Contacts][name]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="text" id="ContactsName" /> <label>Name*</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect">
                                 <div>
                                    <i class="email"></i>
                                    <input name="data[Contacts][email]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="email" id="ContactsEmail" /> <label>Email address*</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect mobile-number">
                                 <input type="text" class="effect-16 form-control mobile-country" id="mobilenumber" tabindex="-1">
                                 <div class="phonenumber-filed">
                                    <input name="data[Contacts][phone]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="tel" id="ContactsPhone" /> <label>Phone Number*</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect fixed-animation">
                                 <div>
                                    <i class="category"></i>
                                    <div class="select">
                                       <select name="data[Contacts][category]" class="form-control effect-16" tabindex="0" id="ContactsCategory">
                                          <option value="">Choose any</option>
                                          <option value="Enterprise Software Solutions">Enterprise Software Solutions</option>
                                          <option value="Creating a Mobile App">Creating a Mobile App</option>
                                          <option value="Web Development">Web Development</option>
                                          <option value="Dedicated Team Service">Dedicated Team Service</option>
                                          <option value="IT Consulting Services">IT Consulting Services</option>
                                          <option value="Enhancing an Existing Product">Enhancing an Existing Product</option>
                                          <option value="Partnership Opportunities">Partnership Opportunities</option>
                                          <option value="Others">Others</option>
                                       </select>
                                       <label>Interested In*</label>
                                       <div class="select__arrow"></div>
                                       <span class="focus-border"></span>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group input-effect fixed-animation">
                                 <div>
                                    <i class="budget"></i>
                                    <div class="select">
                                       <select name="data[Contacts][budget]" class="form-control effect-16" tabindex="0" id="ContactsBudget">
                                          <option value="">Choose any</option>
                                          <option value="Less than $5,000">Less than $5,000</option>
                                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                                          <option value="$50,000 - $1,00,000">$50,000 - $1,00,000</option>
                                          <option value="$100,000+">$100,000+</option>
                                       </select>
                                       <label>Your Budget*</label>
                                       <div class="select__arrow"></div>
                                       <span class="focus-border"></span>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-group input-effect">
                                 <div>
                                    <i class="skypeid"></i>
                                    <input name="data[Contacts][skypeid]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="text" id="ContactsSkypeid" /> <label>Skype ID/Whatsapp No.</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect textarea full-block">
                                 <label><i class="message"></i>Message*</label>
                                 <div>
                                    <textarea name="data[Contacts][message]" class="form-control input-effect LoNotSensitive" rows="3" tabindex="0" id="ContactsMessage"></textarea> 
                                 </div>
                              </div>
                              <div class="form-group upoad-check-option full-block">
                                 <div class="upload-block">
                                    <input name="quote_files[]" id="quote_files" type="file" multiple tabindex="0" />
                                    <p><span>+</span>Add file</p>
                                    <div id="progress-wrp">
                                       <div class="progress-bar"></div >
                                       <div class="status"></div>
                                    </div>
                                 </div>
                                 <div class="checkbox">
                                    <div class="cus-control-group">
                                       <label class="cus-control cus-control--checkbox">
                                       Yes, send me a Mutual NDA (Non-Disclosure Agreement)
                                       <input type="checkbox" name="data[Contacts][nda]" tabindex="0" value="1" id="ContactsNda" /> <span class="cus-control__indicator"></span>
                                       </label>
                                    </div>
                                 </div>
                                 <div class='add-file-output' id="output"></div>
                              </div>
                              <div class="form-group btn-row-block full-block">
                                 <div class="captcha">
                                    <div id="RecaptchaField1" class="captcha"></div>
                                 </div>
                                 <button type="submit" class="comman-btn" tabindex="0">Send your Inquiry</button> 
                              </div>
                           </form>
                        </div>
                        <div class="listing-block rows">
                           <br>
                        </div>
                        <div class="btn-section_work">                 
                           <a href="app_price_calculator.html" class="latest_work_btn headerestimate">Get an Estimate of your app</a>
                        </div>
                        <div class="aword">
                           <ul>
                              <li style="margin: 20px 8px;"><img src="img/network/amazon.jpg"></li>
                              <li style="margin: 20px 8px;"><img src="img/network/make.jpg"></li>
                           </ul>
                           <ul>
                              <li style="margin: 0px 8px;"><img src="img/network/Deloitte.jpg"></li>
                              <li style="margin: 0px 8px;"><img src="img/network/inspire.jpg"></li>
                           </ul>
                        </div>
                        <script src="../ajax.cloudflare.com/cdn-cgi/scripts/78d64697/cloudflare-static/email-decode.min.js"></script><script>
                           $(document).ready(function($) { 
                               $('a').attr('tabindex',-1); 
                           });
                        </script>
                     </div>
                  </div>
               </div>
            </div>
            <script type="text/javascript">
               $(function(){
                  //$("#mobilenumber").intlTelInput("setNumber", "+91");
               });
            </script> 
         </div>
      </section>
         <script type="text/javascript">
           var players = {}; 
           $(document).on("click",".theater-toggle",function(e){
            $('.slide_detail').removeClass('animation-none');
            var video = $(".iFrmeClass")
            var theaterToggle = $(".theater-toggle"); 

            var clickedId = $(this).attr('id');
            var clickedIdNew = clickedId.replace("toggle", "iframe");

            $("#main_"+clickedId).remove();
            var idStr = video.attr('id');

            console.log(clickedIdNew);
            $(".iFrmeClass").not( "#"+clickedIdNew ).removeClass("theater");  


            if( $("#"+clickedId).hasClass('glyphicon-fullscreen') ){
             $("body").addClass('no-scroll');
             $("#main_"+clickedId).addClass('watch-full-video-block');
             $("#"+clickedId).removeClass('glyphicon-fullscreen');
             $("#"+clickedId).addClass('glyphicon-resize-small');
         		//setTimeout( function(){ $("#main_"+clickedId).addClass('watch-full-video-block'); }, 1000);
         	}else{
         		$("body").removeClass('no-scroll');
         		$("#main_"+clickedId).removeClass('watch-full-video-block');
         		$("#"+clickedId).removeClass('glyphicon-resize-small');
         		$("#"+clickedId).addClass('glyphicon-fullscreen'); 
         	}
         	$("#"+clickedIdNew).toggleClass("theater"); 

         });


           var current = '';
           function play(data){ 
            $('.slide_detail').addClass('animation-none');

            var url = $(data).attr('data-att');
            var id = $(data).attr('id');

            var clickedIdNew1 =  'toggle_' + id;
         	//console.log(clickedIdNew1);
         	
         	//console.log($("#"+clickedIdNew1).length);
         	if( $("#"+clickedIdNew1).length !== 0 ){
         		return false;
         	}
         	//console.log('play');
         	
         	$( '<div style="display:none;" id="main_'+clickedIdNew1+'" class="watch-full-video-block"><div><button class="bcm_btn theater-toggle glyphicon glyphicon-remove" style="display:none;" id="'+clickedIdNew1+'" ></button> <iframe class="iFrmeClass"   id="iframe_' + id + '" frameborder="0" allowfullscreen width="370" border="0" height="206" src="'+url+'"></iframe></div></div>' ).insertAfter( "#"+id );
         	
         	current =  "iframe_"+id;


           setTimeout( function(){  	$('#main_'+clickedIdNew1).show();
             $('#'+clickedIdNew1).show();

         	  //$("#iframe_"+id).attr('src', url);

          }, 500);	
         }
         
         $(function(){
         	
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
         	
         	/* $('[id^="portfoliotestimoniala_"]').on('click',function(){
         		var self = $(this).parent();
         		self.toggleClass( "active" );
         	}); */
         });
         
         var pageNumber = 4;
         var processing = 0;
         var countRecords  = parseInt('50');
         var querystring  = '';
         var extra_div = 
         //alert(extra_div);
         $(document).ready(function(){
         	$('#grid_load_more').click(function(){
         		var actionurl = "http://localhost/appsquadz/portfolios.php"+pageNumber+"?"+querystring;
         		var recordOnPage = $('.custom-web-grid').length;
         		if(countRecords > recordOnPage && processing==0) {
         			$.ajax({
         				type:"POST",
         				url:actionurl,
         				data:{
         					pageType: 'web_grid'
         				},
         				beforeSend: function() {
         					processing = 1;
         					$('.web-grid-loader').show();
         					//$('#grid_load_more').hide();
         					$('#grid_load_more a').addClass('active');
         					$('#mainLoader').show();
         				},
         				success: function(result){
         					if(result != 'bottom_reached') {
         						$('.container-fluid').append(result);
         						var elementCount = $(".container-fluid").find("[id^='web_grid_']").length;
         						if(elementCount>=countRecords){
         							$('#grid_load_more').hide();
         						}
         						pageNumber +=1;
         					}else{
         						$('#grid_load_more').hide();
         					}
         				},
         				complete: function(){
         					processing = 0;
         					$('.web-grid-loader').hide();
         					$('#grid_load_more').show();
         					$('#grid_load_more a').removeClass('active');
         					$('#mainLoader').hide();
         					
         					var elementCount = $(".container-fluid").find("[id^='web_grid_']").length;
         					if(elementCount>=countRecords){
         						$('#grid_load_more').hide();
         						$('.container-fluid').append(extra_div);
         					}
         				}
         			});
         		}else{
         			$('#grid_load_more').hide();
         		}
         		
         	});

         });
         
         /* var pageNumber = 2;
         var processing = 0;
         var countRecords  = parseInt('5');
         $(document).ready(function(){
         	$(window).scroll(function(){
         		if (jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height()){
         		//if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {	
         	
         			var actionurl = "https://localhost/homes/loadPortfolio/page:"+pageNumber;
         			var recordOnPage = $('.custom-web-grid').length;
         			if(countRecords > recordOnPage && processing==0) {
         				$.ajax({
         					type:"POST",
         					url:actionurl,
         					data:{
         						pageType: 'web_grid'
         					},
         					beforeSend: function() {
         						processing = 1;
         						$('.web-grid-loader').show();
         						$('#mainLoader').show();
         					},
         					success: function(result){
         						if(result != 'bottom_reached') {
         							$('.container-fluid').append(result);
         							pageNumber +=1;
         						}
         					},
         					complete: function(){
         						processing = 0;
         						$('.web-grid-loader').hide();
         						$('#mainLoader').hide();
         					}
         				});
         			}
         		}
         	});
         
         });  */
       </script>
<section class="footer-section selected">
         <div class="container">
            <div class="footer-part1 rows">
               <div class="col-md-12">
                  <div class="row">
                     <div class="col-md-3 col-sm-6">
                        <div class="footerTitle">About</div>
                        <a href="about-us.html" class="email-link transition" tabindex="-1"><i></i><span></span>Who We Are</a> 
                        <a href="services.html" class="email-link transition" tabindex="-1"><i></i><span></span>Our Team</a>
                        <a href="services.html" class="email-link transition" tabindex="-1"><i></i><span></span>Our Process</a>
                        <a href="solutions.html" class="email-link transition" tabindex="-1"><i></i><span></span>Solutions</a>
                        <a href="portfolio.html" class="email-link transition" tabindex="-1"><i></i><span></span>Portfolio</a>
                        <a href="portfolio.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Us</a>
                        <a href="case-studies.html" class="email-link transition" tabindex="-1"><i></i><span></span>Case Studies</a>
                        <a href="blog.html" class="email-link transition" tabindex="-1"><i></i><span></span>Our Blog</a><br>
                        <a href="blog.html" class="email-link transition" tabindex="-1"><i></i><span></span>Press &amp; Media</a><br>
                        <a href="testimonials.html" class="email-link transition" tabindex="-1"><i></i><span></span>Our Clients</a>
                        <a href="testimonials.html" class="email-link transition" tabindex="-1"><i></i><span></span>Client Reviews</a>
                        <a href="our-partners.html" class="email-link transition" tabindex="-1"><i></i><span></span>Partner Reviews</a>
                        <a href="contact-us.html" class="email-link transition" tabindex="-1"><i></i><span></span>Contact Us</a><br>
                        <a href="privacy-policy.html" class="email-link transition" tabindex="-1"><i></i><span></span>Privacy Policy</a>
                        <a href="privacy-policy.html" class="email-link transition" tabindex="-1"><i></i><span></span>Terms &amp; Conditions</a>
                        <a href="sitemap.html" class="email-link transition" tabindex="-1"><i></i><span></span>Sitemap</a>
                        
                     </div>

                     <br>
                      <div class="col-md-3 col-sm-6">
                        <div class="footerTitle">Mobile &amp; Web</div>
                <a href="android-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Android App Development</a> 
                <a href="iphone-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>iPhone App Development</a> 
                <a href="ipad-apps-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>iPad App Development</a>
                <a href="phonegap-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>PhoneGap App Development</a>
                <a href="ionic-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Ionic App Development</a>
                <a href="react-native-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>React Native App Development</a>
                <a href="unity-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Unity App Development</a>
                <a href="opengl-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>OpenGL App Development</a>
                <a href="andengine-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>AndEngine App Development</a>
                 <a href="iwatch-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>iWatch App Development</a>
                  <a href="ibeacon-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>iBeacon App Development</a>
                  <a href="iot-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>IOT App Development</a>
                   <a href="bitcoin-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Bitcoin App Development</a>
                <a href="php-web-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>PHP Development</a>
                <a href="java-application-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Java Development</a>
                <a href="asp-dotnet-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>.Net Development</a>
                <a href="magento-ecommerce-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Magento Development</a>
                <a href="node-js-app-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Node JS Development</a>
                <a href="angular-js-app-development.html" class="email-link transition" tabindex="-1"><i></i><span></span>Angular JS Development</a>
                
                     </div>
                      <br>
                      <div class="col-md-3 col-sm-6">
                        <div class="footerTitle">Hire Dedicated Resource</div>
                        <a href="hire-android-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Android App Developer</a> 
                        <a href="hire-ios-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire iPhone App Developer</a> 
                        <a href="hire-ipad-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire iPad App Developer</a>
                        <a href="hire-cross-platform-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Hybrid App Developer</a>
                        <a href="hire-html-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire HTML Developer</a>
                        <a href="hire-php-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire PHP Developer</a>

                         <a href="hire-paython-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Python Developer</a>
                          <a href="hire-django-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Python Django Developer</a>
                        <a href="hire-asp-dot-net-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire .Net Developer</a>
                        <a href="hire-java-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Java Developer</a>
                        <a href="hire-magento-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Magento Developer</a>
                        <a href="hire-wordpress-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Wordpress Developer</a>
                        <a href="hire-drupal-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Drupal Developer</a>
                        <a href="hire-ruby-on-rails-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Ruby on Rails Developer</a>
                        <a href="hire-node-js-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Node JS Developer</a>                      
                        
                     </div>
                     
                     <br>
                     <div class="col-md-3 col-sm-12">
                       <div class="facebook-feed">
                        <div class="footerTitle" style="text-align: left;">FACEBOOK FEED</div>
                        <dl class="facebook">
                         <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/appsquadz/" data-tabs="timeline" data-width="253" data-height="280" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=1709661372644519&amp;container_width=275&amp;height=280&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fappsquadz%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=253"><span style="vertical-align: bottom; width: 253px; height: 280px;"><iframe name="f6ff46a33e5a0c" width="253px" height="280px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v2.6/plugins/page.php?adapt_container_width=true&amp;app_id=1709661372644519&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FlY4eZXm_YWu.js%3Fversion%3D42%23cb%3Df2be9740cdb6288%26domain%3Dwww.appsquadz.com%26origin%3Dhttps%253A%252F%252Fwww.appsquadz.com%252Ff4d3f95f338648%26relation%3Dparent.parent&amp;container_width=275&amp;height=280&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fappsquadz%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=253" style="border: none; visibility: visible; width: 253px; height: 280px;" class=""></iframe></span></div>
                        </dl>
                        </div>
                        <div class="twitter-feed">
                        <!-- <div class="footerTitle" style="text-align: left;">TWITTER FEED</div> -->
                        <!-- <dl class="tweet">
                         <dt> Twitter feed </dt>
                         <dd> <strong></strong> </dd>
                         <dd>
                        <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="twitter-timeline twitter-timeline-rendered" style="position: static; visibility: visible; display: inline-block; width: 100%; height: 280px; padding: 0px; border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;" data-widget-id="profile:appsquadz" title="Twitter Timeline"></iframe>
                        <script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                       </dd>
                     </dl> -->
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>

             
            <div class="footer-part2 rows">
              <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4"> 
                  <div class="foot-logo">
                  <img src="img/logo.png" alt="Appsquadz Technologies" width="80%" style="margin-left: 55px;"></div>
               </div>
                <div class="col-sm-4"></div>
            </div>
            <div class="row">
              <div class="social-icon-block">
                           <div class="footerTitle" style="text-align: left;"></div>
                           <center>
                           <ul>
                              <li><a itemprop="sameAs" title="Facebook" target="_blank" href="https://www.facebook.com/appsquadz/" class="transition" tabindex="-1"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Twitter" target="_blank" href="https://twitter.com/appsquadz" class="transition" tabindex="-1"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Google Plus" target="_blank" href="https://plus.google.com/+AppSquadzTechnologiesPvtLtd" class="transition" tabindex="-1"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="LinkedIn" target="_blank" href="https://www.linkedin.com/company/appsquadz" class="transition" tabindex="-1"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Youtube" target="_blank" href="https://www.youtube.com/c/AppSquadzTechnologiesPvtLtd" class="transition" tabindex="-1"><i class="fa fa-play" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Instagram" target="_blank" href="https://www.instagram.com/appsquadz" class="transition" tabindex="-1"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Behance" target="_blank" href="https://www.behance.net/AppSquadz" class="transition" tabindex="-1"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Dribbble" target="_blank" href="https://dribbble.com/" class="transition" tabindex="-1"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Pintrest" target="_blank" href="https://in.pinterest.com/appsquadztech" class="transition" tabindex="-1"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                              <li><a itemprop="sameAs" title="Blogspot" target="_blank" href="https://topmobileappdevelopmentcompanyusa.blogspot.in" class="transition" tabindex="-1"><img src="img/blogspot.png"></a></li>
                               <li><a itemprop="sameAs" title="Medium" target="_blank" href="https://medium.com/@appsquadz" class="transition" tabindex="-1"><i class="fa fa-medium" aria-hidden="true"></i></a></li>
                                <li><a itemprop="sameAs" title="Slideshare" target="_blank" href="http://www.slideshare.net/appsquadz" class="transition" tabindex="-1"><i class="fa fa-slideshare" aria-hidden="true"></i></a></li>
                                <li><a itemprop="sameAs" title="Reddit" target="_blank" href="https://www.reddit.com/appsquadz" class="transition" tabindex="-1"><i class="fa fa-reddit-alien" aria-hidden="true"></i></a></li>
                                  <li><a itemprop="sameAs" title="Flickr" target="_blank" href="https://www.flickr.com/photos/appsquadz" class="transition" tabindex="-1"><i class="fa fa-flickr" aria-hidden="true"></i></a></li>
                            </ul>
                            </center>
                        </div>
                    </div>
            <br><br>
              <!-- <div class="row">
                <div class="col-sm-3 col-xs-6">
                   <div class="footer-part1">
                    <center>
                      <img src="img/icons/taj.png">
                      <h2 style="font-weight: bold; color: #fff;"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #0084ff; margin-left: -30px; margin-right: 10px;" href="case-studies.html" ></i></span>India</h2>
                      <h2 style="font-weight: bold; color: #fff; text-transform: capitalize;">H 35 , Sector 63, <br> Noida, India - 201301 <br> +91-9717270746,<br> +91-120-4238296</h2>
                    </center>  
                  </div>
                </div>
                <div class="col-sm-2 col-xs-6">  
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/us.png"> 
                      <h2 style="font-weight: bold; color: #fff;"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #0084ff; margin-left: -30px; margin-right: 10px;"></i></span>USA</h2>
                      <h2 style="font-weight: bold; color: #fff; text-transform: capitalize;">426, Harrison ave,New Jersey, USA 07029 <br>+1-877-659-9068</h2>
                    </center>  
                  </div>
                </div>
                 <div class="col-sm-2 col-xs-6"> 
                   <div class="footer-part1" id="footer-part1">
                    <center>
                       <img src="img/icons/uk.png" width="65%">
                      <h2 style="font-weight: bold; color: #fff;"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #0084ff; margin-left: -30px; margin-right: 10px;"></i></span>UK</h2>
                      <h2 style="font-weight: bold; color: #fff; text-transform: capitalize;">816A, Stockport Road, <br>Manchester - <br>M19 3BS <br>+44-203-807-3810</h2>
                    </center>  
                  </div>
                </div>  
                <div class="col-sm-2 col-xs-6">  
                   <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/aus.png" width="70%"> 
                      <h2 style="font-weight: bold; color: #fff;"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #0084ff; margin-left: -30px; margin-right: 10px;"></i></span>UAE</h2>
                      <h2 style="font-weight: bold; color: #fff; text-transform: capitalize;">Al Yahar Street,Al Khalidiya, Landmark Etisala Tower <br> Abu Dhabi - 33408 <br>+91-9717270746</h2>
                    </center>  
                  </div>
                </div>  
                <div class="col-sm-3 col-xs-6">  
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/thai.png"> 
                      <br>
                      <h2 style="font-weight: bold; color: #fff; margin-top: 15px;"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #0084ff; margin-left: -30px; margin-right: 10px;"></i></span>Thailand</h2>
                      <h2 style="font-weight: bold; color: #fff; text-transform: capitalize;">279/16, Moo 3, Sankampaeng <br>Chiang Mai 50130 <br>+66-0946430863</h2>
                    </center>  
                  </div>
                </div>  
             </div> -->
             <div class="row">
              <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/taj.png">
                      <a href="mobile-app-development-company-in-india.html" tabindex="-1"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> India</a>
                      <p>H 35 , Sector 63, <br> Noida, India - 201301 <br> +91-9717270746,<br> +91-120-4238296</p>
                    </center>  
              </div>
              <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/us.png" width="13%;">
                      <a href="mobile-app-development-company-in-usa.html" tabindex="-1"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> USA</a>
                      <p>H 35 , Sector 63, <br> 426, Harrison ave,New Jersey, USA 07029 <br>+1-877-659-9068</p> 
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                       <img src="img/icons/uk.png" width="40%">
                       <a href="mobile-app-development-company-in-uk.html" tabindex="-1"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> UK</a>
                      <p>816A, Stockport Road, <br>Manchester - <br>M19 3BS <br>+44-203-807-3810</p>
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/aus.png" width="41%"> 
                       <a href="mobile-app-development-company-in-uae.html" tabindex="-1"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> UAE</a>
                      <p>Al Yahar Street,Al Khalidiya, Landmark Etisala Tower <br> Abu Dhabi - 33408 <br>+91-9717270746</p>
                    </center>  
                  </div>
                  <div class="footer-part1" id="footer-part1">
                    <center>
                      <img src="img/icons/thai.png"> 
                      <br>
                      <a href="mobile-app-development-company-in-thailand.html" tabindex="-1"><span><i class="fa fa-map-marker fa-1x" aria-hidden="true" style="color: #009afb;"></i></span> Thailand</a>
                      <p>279/16, Moo 3, Sankampaeng <br>Chiang Mai 50130 <br>+66-0946430863</p>
                    </center>  
                  </div>
             </div>
               <div class="col-md-12">
                <div class="row">

                  <div class="client-logos">

                     <!-- <ul>
                       <li><a href="#" rel="nofollow" target="_blank"><img src="img/final/footer-client-logo3.png" title="Recognized by Clutch" alt="Recognized by Clutch" class="transition"></a></li>
                        <li><a href="#" rel="nofollow" target="_blank"><img src="img/final/footer-client-logo4.png" title="Goodfirms" alt="Goodfirms" class="transition"></a></li>
                        <li><a><span><img src="img/final/footer-client-logo6.png" title="AppFirms" alt="Paypal Partner" class="transition"></span></a></li>
                        <li><a href="#" rel="nofollow" target="_blank"><img src="img/final/footer-client-logo2.png" title="ITFirms" alt="ITFirms" class="transition"></a></li>
                       
                        <li><a><img src="img/final/footer-client-logo5.png" title="Amazon Web Services Partner" alt="Amazon Web Services Partner" class="transition"></a></li>
                     </ul> -->
                  </div>
                  </div>
                  <p>Copyright © 2016-2017 AppSquadz Technologies. All Rights Reserved. <a href="privacy-policy.html" tabindex="-1">Privacy Policy</a> | <a href="terms-conditions.html" tabindex="-1">Terms &amp; Conditions</a> | <a href="sitemap.html" tabindex="-1">Sitemap</a></p>
                  <div style="padding-top:0px;text-align:center;" class="dmca"><a target="_blank" href="https://www.dmca.com/Protection/Status.aspx?ID=0e807e3b-307d-474e-af60-747ec5b1bbc1" title="DMCA" tabindex="-1">
                     <img src="img/dmca_protected_24_120.png" alt="DMCA.com" style="margin-top: 10px;">
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
<script>
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
<div class="pfilterBlock" id="filterMenu">
 <form action="http://localhost/appsquadz/portfolios.php" id="porfolioFilter" method="post" accept-charset="utf-8">
  <div class="container">
   <div class="circCont close-button padr">
    <button type="button" class="circle" data-animation="showShadow" data-remove="3000"></button>
  </div>
  <div class="row">
    <div class="col-sm-12">
     <div class="col-sm-6">
      <div class="filterList industry-block">
       <h4>Industry</h4>
       <ul class="double-row">

        <?php 
        $industries = fetch_data_by_custom_query("select * from app_app_category");

        if($industries){
          $ttl_industries = count($industries);

          $i=0;
          foreach($industries as $industry){ $i=$i+1;

          //}
        //}
        ?>
        <li class="my_array">
         <div class="checkbox port-folio-check-filter">
          <div class=" Labelchk">
           <input name="industry[]" style="display:none;" type="checkbox" value="<?php echo $industry['id']; ?>" data-att="Industry">
           <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
           <?php echo $industry['category']; ?>
         </div>
       </div>
     </li>


     <?php 
   } } ?>

     
</ul>
</div>
</div>

<div class="col-sm-3">
  <div class="filterList platform-block">
   <h4>Frontends</h4>
  <ul class="main-double-row">
        <?php 
        $frontends = fetch_data_by_custom_query("select * from  app_frontend");

        if($frontends){
          $ttl_frontends= count($frontends);
           foreach($frontends as $frontend){
        ?>
        <li class="my_array">
         <div class="checkbox port-folio-check-filter">
          <div class=" Labelchk">
           <input name="front[]" type="checkbox" value="<?php echo $frontend['id']; ?>" data-att="Industry">
           <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
           <?php echo $frontend['name']; ?>
         </div>
       </div>
     </li>
     <?php  } } ?>
</ul>
</div>
</div>
<div class="col-sm-3">
  <div class="filterList platform-block">
   <h4>Backends</h4>
  <ul class="main-double-row">
     
    <?php 
        $backends = fetch_data_by_custom_query("select * from   app_backend");
        if($backends){
          $ttl_backends= count($backends);
          $i=0;
          foreach($backends as $backend){ $i=$i+1;
        ?>
        <li class="my_array">
         <div class="checkbox port-folio-check-filter">
          <div class=" Labelchk">
           <input name="back[]" type="checkbox" value="<?php echo $backend['id']; ?>" data-att="Industrym">
           <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
           <?php echo $backend['name']; ?>
         </div>
       </div>
     </li>


     <?php 
   } } ?>
</ul>
</div>
</div>
</div>
</div>

<div class="row">
  <div class="col-sm-12">
   <div class="filterButton floatNone text-center">
    <button type="submit" class="transition bcm_btn inquireNow">Apply Filter</button>
  </div>
  <div class="clearfix"></div>
  <div class=" filterButton floatNone text-center">
    <a href="" onclick="refresh()" class="transition resetButton">Reset Filter</a> 
    <div class="clearfix"></div>
  </div>
</div>
</div>
</div>
<input type="hidden" name="i" value="" id="prot-industry">
<input type="hidden" name="p" value="" id="prot-platform">
<input type="hidden" name="a" value="w">
</form>
</div>
<script type="text/javascript">
 var industryArr = [];
 var plateformArr = [];
 $(document).ready(function() { 
   $('div .port-folio-check-filter').click(function() {

     var filterType = $(this).find('input').attr('data-att');
     if(filterType == 'Industry'){
       if (($(this).find('.Labelchk').hasClass('active'))) {
         	//alert('in');
         	var industryId = $(this).find('input').val();
         	industryArr.push(industryId);
         } else {
         	//alert('out');
         	var industryId = $(this).find('input').val();
         	industryArr = jQuery.grep(industryArr, function(value) {
         		return value != industryId;
         	});
         }
       }

       if(filterType == 'Platform'){
         if (($(this).find('.Labelchk').hasClass('active'))) {
         	var plateformId = $(this).find('input').val();
         	plateformArr.push(plateformId);
         } else {
         	var plateformId = $(this).find('input').val();
         	plateformArr = jQuery.grep(plateformArr, function(value) {
         		return value != plateformId;
         	});
         }
       }

         //alert('I='+industryArr);
         //alert('P='+plateformArr);
         var inudustryUnique = unique(industryArr);
         //alert('Industry before join '+inudustryUnique);
         var platformUnique = unique(plateformArr);
         
         var inudustryUnique = inudustryUnique.join("|");
         //alert('Industry after join '+inudustryUnique);
         var platformUnique  = platformUnique.join("|");
         
         //alert(inudustryUnique);
         $('#prot-industry').val(inudustryUnique);
         $('#prot-platform').val(platformUnique);
         
       });

 });
 function unique(array) {
   return $.grep(array, function(el, index) {
     return index == $.inArray(el, array);
   });
 }
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
  var pageNumber = 1;
  var filters = "<?php echo  $filters ?>"; 
  var ind_count = "<?php echo  $ind_count ?>";
  var back_count = "<?php echo  $back_count ?>";
  var front_count = "<?php echo  $front_count ?>";
  //alert(filters);
  var totalCount = parseInt('<?php echo $count;?>');
            $(document).ready(function () { //alert('dfs');
              $('#loadmore_data a').addClass('active');
              loadSurveyPortfolios();

              $("#loadmore_data").click(function () {
                loadSurveyPortfolios();
              });
            });

            function loadSurveyPortfolios() {
             // var actionurl = "http://localhost/appsquadz/load_portfolio_ajax.php?page=" + pageNumber +"&filters="+filters;
			 var actionurl = "http://localhost/appsquadz/load_portfolio_ajax.php?page=" + pageNumber +"&filters="+filters+"&ind_count="+ind_count;
              $.ajax({
                type: "GET",
                url: actionurl,
                beforeSend: function () {
                  $('#loadmore_data a').addClass('active');
                },
                success: function (data) {
                  if (data != 'bottom_reached') {
                    $('#survey_portfolio_div').append(data);
                    if (totalCount > $('.app_div').length) {
                      $('#loadmore_data').show();
                    } else {
                      $('#loadmore_data').hide();
                    }
                    pageNumber += 1;
                  } else {
                    $('#loadmore_data').hide();
                  }

                },
                complete: function () {
                  $('#loadmore_data a').removeClass('active');
                }
              });
            }
  </script> 


        </script>
        <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/hfwqvn87';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>

        <script>
          $('.my_array').click( function(){
              if($(this).find('input[type=checkbox]').attr('checked')){
                 $(this).find('input[type=checkbox]').attr('checked',false);
              }else{
                $(this).find('input[type=checkbox]').attr('checked','checked'); 
              }             
          });
        </script>


      </body>
      <!-- Mirrored from localhost/portfolios.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 24 Oct 2017 04:41:27 GMT -->
      </html>

