<script type="text/javascript"> 
         var s;
         $(document).on('ready', function() { // start doc ready
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
                  utilsScript: "./js/utils.js"
               });
               
               $('.country-list li').on('click',function(){ 
                  var CallingCode = $(this).attr('data-dial-code');
                  $('#ContactsCallingCode').val('+'+CallingCode);
               });
               
            }      
         
            function openRequestQuote(){
           
               $.ajax({
               type: "GET",
               url: "https://www.appsquadz.com/request-a-quote.php" , 
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


    
}); // end doc ready

    
     $(function(){
      //SyntaxHighlighter.all();
    });

     function openRequestedPopup() {
    var w=420; var h=320;
    var url="";
    var title="Appsquadz Voice Recorder";
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
                     url: "/upload",
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
      <script>
         window.intercomSettings = {
           app_id: "emnqcxhx"
         };
      </script>