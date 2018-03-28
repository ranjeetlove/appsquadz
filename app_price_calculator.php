<html >
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <!--Code for Canonical URLs-->
  <link rel="canonical" href="mobile_app_price_calculator.html"/>
    <meta charset="utf-8" />

    <title>Mobile App Cost Calculator</title>
    <meta name="twitter:image:src" content="design/calculator/img/facebook-ca.jpg">
    <meta name="twitter:domain" content="mobile_app_price_calculator.html">
    <link rel="stylesheet" href="design/calculator/css/font-awesome-4.4.0/css/font-awesome.css" >
    <link rel="stylesheet" href="design/calculator/fonts/simple-line/simple-line-icons.css" >
    <link rel="stylesheet" href="design/calculator/css/bootstrap.css">
    <link rel="stylesheet" href="design/calculator/css/style.css">
	<link rel="stylesheet" href="design/calculator/css/component.css" />
    <!-- Latest compiled and minified JavaScript -->
	<!--Bhawna-->
    
    <!-- START JAVASCRIPT SECTION - Load only modernizr script here -->
   <script type="text/javascript" src="../ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="themes/adminre/style/js/jquery-1.11.2.min.js"></script>
   
    <script type="text/javascript" src="themes/adminre/library/jquery/js/jquery-ui-touch.min.js"></script>
   <!--  <script type="text/javascript" src="/library/jquery/js/jquery-migrate.min.js"></script> -->
    <script type="text/javascript" src="themes/adminre/library/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="themes/adminre/library/core/js/core.min.js"></script>
	
    <!--/ Library script -->

    <!-- 3rd party plugin script : optional(per use) -->
    
   <style type="text/css">
    input.parsley-success,
    select.parsley-success,
    textarea.parsley-success {
      color: #468847;
      background-color: #DFF0D8;
      border: 1px solid #D6E9C6;
    }

    input.parsley-error,
    select.parsley-error,
    textarea.parsley-error {
      color: #B94A48;
      background-color: #F2DEDE;
      border: 1px solid #EED3D7;
    }

    .parsley-errors-list {
      margin: 2px 0 3px;
      padding: 0;
      list-style-type: none;
      font-size: 0.9em;
      line-height: 0.9em;
      opacity: 0;

      transition: all .3s ease-in;
      -o-transition: all .3s ease-in;
      -moz-transition: all .3s ease-in;
      -webkit-transition: all .3s ease-in;
    }

    .parsley-errors-list.filled {
      opacity: 1;
    }
@media (max-width: 992px) {
	body {
		overflow:scroll;
	}
}
</style>
<script type="text/javascript"></script>
</head>
<body class="vp-calculator scrollbody">
<!--<div id="large-header" class="large-header">
	<canvas id="demo-canvas"></canvas>
</div>-->
<div id="result" class="modal fade in" role="dialog">
        <div class="modal-dialog modal-md">
        <!-- Modal content-->
            <div class="modal-content modal-bg">
                <div class="modal-body col-md-12 pt15 pb15 text-center fs22">
                   <span id='result-message'> You can't have an app with no features!</span>  

                </div>
            </div>
        </div>
</div>
 <div class="cal-map page8  hide" id="calEstimate">
    
	<div class="cal-map-top">
		<div class="map-topbar">
			<p class="col-md-8 col-sm-8 col-xs-8 np mp-heading">
				Here's your cost estimate in different geographies!	
			</p>
			<ul class="mp-topicons">
				<li><a href="javascript:void(0);" class="active side-panel"><span class="icon-info" aria-hidden="true"></span></a></li>
				<li>
 
					<div class="cal_share">
						<span class="icon-share" aria-hidden="true"></span>
						<ul class="mp-topicons-child">
						<li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=" class="side-panel fb"><span class="icon-social-facebook" aria-hidden="true" title="Facebook"></span></a></li>
						<li><a target="_blank" href="https://twitter.com/home?status=Just%20estimated%20the%20cost%20of%20creating%20my%20app.%20Try%20yourself%20by%20answering%2010%20simple%20questions:" class="side-panel tw"><span class="icon-social-twitter" aria-hidden="true" title="Twitter"></span></a></li>
						</ul>
					</div>

				</li>
				<li><a href="javascript:void(0);" class="close-map"><span class="icon-close" aria-hidden="true"></span></a></li>
			</ul>
		</div>
	</div>
	<div class="cal-map-mid"  id="mapscrollmid">
		<div class="col-md-12">
			<div class="map_zone_outer">
				<div class="col-lg-4 col-md-4">
					<label id="div_130" class="radio-inline radio_btn radio_hide" type="button" >
					<input id="reg1" type="radio" name="zone" class="zone hide"  value="130" />
						<div   class="map-zone1 getestimate-spn" value="130" id="id1">
							<span >Zone 1 </span >
							<small> USA, Canada, Western Europe & Australia</small>
							<a href="javascript:void(0);" id="btn-id1" class="getestimate-btn" value="130">get estimate</a>
							<a href="javascript:void(0);" id="etestimate-btn-id1" class="getestimate-btn2 hide"></a>
						</div>
					</label>
				</div>
				<div class="col-lg-4 col-md-4 border_position_set"  >
					<label id="div_65" class="radio-inline radio_btn radio_hide" type="button">
						<input id="reg2" type="radio" name="zone" class="zone hide" value="65" />
						<div   class="map-zone1 getestimate-spn" value="65" id="id2">
							<span >Zone 2</span>  
							<small>Eastern Europe, Middle East, Central & South America </small>
							<a href="javascript:void(0);" id="btn-id2" class="getestimate-btn" value="65">get estimate</a>
							<a href="javascript:void(0);" id="etestimate-btn-id2" class="getestimate-btn2 hide"></a>
						</div>
					</label>
				</div>
				<div class="col-lg-4 col-md-4 " >
					<label id="div_40"  class="radio-inline radio_btn radio_hide" type="button" >
						<input id="reg3" type="radio" name="zone" class="zone hide" value="40">
						<div   class="map-zone1 getestimate-spn" value="40" id="id3">
							<span >Zone 3 </span>
							<small> South Asia, East Asia, South East Asia & Africa</small>
							<a href="javascript:void(0);" id="btn-id3" class="getestimate-btn hide" value="40">get estimate</a>
							<a href="javascript:void(0);"  id="etestimate-btn-id3" class="getestimate-btn2"></a>
						</div>
					</label>
				</div>
			</div>
			<div id="world-map-markers" class="panel-body map-hide text-center" >
				<div id="vmap1" style="height:250px; width:450px;"></div>
				<div id="vmap2" style="height:250px; width:450px;"></div>
				<div id="vmap3" style="height:250px; width:450px;"></div>  
			</div>
			<div class="col-md-12 text-center post-map-head">Want real quotes from vetted development teams?</div>
			<div class="col-xs-12 text-center">
				<a href="project.html" class="btn btn-redmap">Post Your Project <i class="fa fa-spinner fa-spin"></i></a>
			</div>
			<div class="col-md-12 text-left info-block">
				<a class="green-head" href="#"><i class="fa fa-bookmark-o"></i> Trade Off:</a>
				<p class="info-para"> Prices differ with geography due to differences in cost of living. While it may be cheaper to offshore, one may have to deal with time zone and communication challenges. On the other hand, onshore developers are more convenient to work with, but are more expensive. <br><br>
				<a href="http://blog.venturepact.com/blog/how-much-does-it-cost-to-build-a-mobile-application-india" target='_blank' class="green-head">Read more</a> on how we think about pricing.</p></div>
		
		</div>
	</div>
	<div class="cal-map-right">
		 
		<div class="mapright-total">
			<span class="icon-pointer total-icon" aria-hidden="true"></span>
			<div class="mapright-outr">
				<span class="mapright-heading2">Your App Estimate: <label id="lblAppEstimate">$</label></span>
				<span class="mapright-heading3">Zone 3: South Asia, East Asia, South East Asia & Africa</span>
			</div>
		</div>
		<span class="mapright-heading">COST BREAKUP <button href="#" data-toggle="tooltip" data-trigger="hover" title="*The prices suggested here are rough estimates based on developer surveys.
		Actual prices may differ as per requirements." id="" class=" help help1"
                            data-placement = "bottom"><span class="icon-question text-right pull-right"></span>
                    </button>
					</span>
		<div class="mapright-detail" id="mapscroll">

		    
		</div>
		<div class="result-logo"><span>Calculator Powered By </span>  <a href="http://outgrow.co/" target="_blank" ><img src="design/calculator/img/vp-logo1.png" alt="Outgrow Logo" ></a></div>
	</div>
  </div>
 
<div class="mapdiv"></div>
<div class="calculator-main map-bg2 text-center">
  <!-- header--section -->
  <nav role="navigation" class="navbar pt10 navbar-custom" id="navbar">
    <div class="container-fluid">
      <div class="navbar-header">

        <a class="navbar-brand" href="index.html">
        <img class="rs-logo rs-hide" itemprop="image" src="img/logo.png" alt="Appsquadz Logo" width="100%">
        <img class="mobilelogo-show rs-show" itemprop="image" src="img/logo.png" alt="Appsquadz Logo" width="100%" data-pin-nopin="true">
        </a>
        
         <ul class="nav navbar-nav navbar-right mt10 pull-right">
          <li><label class="head-prize hide"><small>Rough Estimate</small><br><span id="totalprice">$0</span></label></li>
        </ul>
      </div>
    </div>
  </nav>
  <!----end of header section---->
    <section class="page1 ">
        <div class="cal-valign frame-5">
            <span class="featured-text anim-text" style="margin-top: -150px;">LOOKING TO BUILD AN APP?</span>
            <span class="subtext mb30 anim-text">Find out how much it will cost in different regions!</span>
            <p class="text-center anim-btn">
                <button class="btn btn-red sliding-next get-started"  data-slide="2">Get an Estimate <i class="fa fa-spinner fa-spin"></i></button>
            </p>
            <div class="map-block ">
               <!-- <img src="/../../design/calculator/img/map.png" class=" map-img img-responsive">-->
            </div>
            
            <div class="side-dots hide">
                <div class="col-xs-12 text-right">
                                        <span data-page="page2" class="slide-title"><span class="slide-point">Platform</span> <span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot2" data-slide="2"></span></span></span>
                                        <span data-page="page3" class="slide-title"><span class="slide-point">Design</span> <span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot3" data-slide="3"></span></span></span>
                                        <span data-page="page4" class="slide-title"><span class="slide-point">Security</span> <span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot4" data-slide="4"></span></span></span>
                                        <span data-page="page5" class="slide-title"><span class="slide-point">Data</span> <span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot5" data-slide="5"></span></span></span>
                                        <span data-page="page6" class="slide-title"><span class="slide-point">Admin & Other Features</span> <span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot6" data-slide="6"></span></span></span>
                                 <span data-page="page7" class="slide-title"><span class="slide-point">Done </span><span class="pagination-circle-new"><span class="pc-inside-light-new slide-dot7" data-slide="7"></span></span></span>
               </div>
            </div>  
        </div>
		<div style="visibility:hidden;"> <div class="vp-ic fa fa-android">&nbsp;</div><div class="vp-ic icon-globe">&nbsp;</div></div>
		<div class="footer-logo"><span>Calculator Powered By </span> <a href="#" target="_blank" ><img src="img/logo.png" alt="Appsquadz Logo" ></a></div>
    </section>

        
       <form class="form-horizontal form-bordered" data-parsley-validate="data-parsley-validate" id="wizard-validate" action="https://venturepact.com/mobile_app_price_calculator" method="post">                    <input type="hidden" name="total_price" value="" id="total_price"/>
                    <input type="hidden" name="total_hour" value="" id="total_hour"/>
                    <input type="hidden" name="zoneqprice1" value="" id="zoneqprice1"/>
                    <input type="hidden" name="zoneqprice2" value="" id="zoneqprice2"/>
                    <input type="hidden" name="zoneqprice3" value="" id="zoneqprice3"/>


    
  <section id="page2" class="page2 pages  hide ">
        <div class="container">
            <h3 id="header2" class="featured-text header"> Platform</h3>

            <!-- <h4 class="subtext">Tell us a little bit more about project, so we can<br/>
                find the perfect teams for you!
            </h4> -->

           <!--  <h4 class="subtext">            </h4> -->

             
            <div class="row">
                
                <div class="block text-left">
                     
                    <h1 class="nm block-head-text" id="9"> Which platform will the app be built on?</h1>
                          <div class="col-xs-12 np mb70 ui-theme-block two-section pull-left">
                            <input type="checkbox" class="header2" id="chkbx_51"  value="addition" name="result" data-hour="30">
                            <label for="chkbx_51"><div class="icon-box"><div class="vp-ic vp-ic fa fa-android">&nbsp;</div></div>
                          <div class="text" id="optionheader51">Android </div></label>
                        </div>
                        <div class="col-xs-12 col-sm-6 ic-check tip">
                         <input type="checkbox" class="header2" id="chkbx_52"  value="addition" name="result" data-hour="30">
                      <label for="chkbx_52"><div class="icon-box"><div class="vp-ic fa fa-apple">&nbsp;</div></div>
                         <div class="text" id="optionheader52">IOS</div></label>
                        </div>
                          <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                              <input type="checkbox" class="header2" id="chkbx_53"  value="addition" name="result" data-hour="30">
                            <label for="chkbx_53"><div class="icon-box"><div class="vp-ic fa fa-windows">&nbsp;</div></div>
                            <div class="text" id="optionheader53">Windows</div></label>
                        </div>
                            <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                        <input type="checkbox" class="header2" id="chkbx_54"  value="addition" name="result" data-hour="20">
                            <label for="chkbx_54"><div class="icon-box"><div class="vp-ic icon-globe">&nbsp;</div></div>
                                <div class="text" id="optionheader54">Hybrid
                    <span style="line-height: 10px;">(Cross platform using HTML5)</span></div></label>
                        </div>
                        

                   </div>
                    
                                       
                </div>
                  
            </div>
         
            <button type="button" class="btn btn-green sliding-next mb100"   data-slide="3">Proceed <i class="fa fa-spinner fa-spin"></i></button>
        </div>
    </section>

          
  <section id="page3" class="page3 pages  hide ">
        <div class="container">
            <h3 id="header3" class="featured-text header"> Design</h3>

            <!-- <h4 class="subtext">Tell us a little bit more about project, so we can<br/>
                find the perfect teams for you!
            </h4> -->

           <!--  <h4 class="subtext">            </h4> -->

             
            <div class="row">
                
                <div class="block text-left">
                     
                    <h1 class="nm block-head-text" id="10"> What would your UI theme be?</h1>
                                        <div class="col-xs-12 np mb70 ui-theme-block two-section pull-left">
                                                                                                          <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header3" id="chkbx_27"  value="27" name="checkbox[10][]" data-hour="10">
                            <label for="chkbx_27"><div class="icon-box"><div class="vp-ic fa fa-columns">&nbsp;</div></div>
                                <div class="text" id="optionheader27">Stock or Template UI</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header3" id="chkbx_28"  value="28" name="checkbox[10][]" data-hour="30">
                            <label for="chkbx_28"><div class="icon-box"><div class="vp-ic icon-settings">&nbsp;</div></div>
                                <div class="text" id="optionheader28">Custom Branded UI</div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header3" id="chkbx_29"  value="29" name="checkbox[10][]" data-hour="60">
                            <label for="chkbx_29"><div class="icon-box"><div class="vp-ic icon-control-play">&nbsp;</div></div>
                                <div class="text" id="optionheader29">Animated UI</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header3" id="chkbx_30"  value="30" name="checkbox[10][]" data-hour="100">
                            <label for="chkbx_30"><div class="icon-box"><div class="vp-ic icon-game-controller">&nbsp;</div></div>
                                <div class="text" id="optionheader30">Game Animations</div></label>
                        </div>
                        

                   </div>
                    
                     
                    <h1 class="nm block-head-text" id="21"> How many approximate number of screens will your app have?</h1>
                                        <div class="col-xs-12 np mb70 admin-block two-section pull-left">
                                                                                                      <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header3" id="chkbx_55"  value="55" name="checkbox[21][]" data-hour="12">
                            <label for="chkbx_55"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader55">1 - 6</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header3" id="chkbx_56"  value="56" name="checkbox[21][]" data-hour="40">
                            <label for="chkbx_56"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader56">7 - 12</div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header3" id="chkbx_57"  value="57" name="checkbox[21][]" data-hour="70">
                            <label for="chkbx_57"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader57">13 - 20</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header3" id="chkbx_62"  value="62" name="checkbox[21][]" data-hour="1">
                            <label for="chkbx_62"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader62">21+</div></label>
                        </div>
                        

                   </div>
                    
                                       
                </div>
                  
            </div>
         
            <button type="button" class="btn btn-green sliding-next mb100"   data-slide="4">Proceed <i class="fa fa-spinner fa-spin"></i></button>
        </div>
    </section>

          
  <section id="page4" class="page4 pages  hide ">
        <div class="container">
            <h3 id="header4" class="featured-text header"> Security</h3>

            <!-- <h4 class="subtext">Tell us a little bit more about project, so we can<br/>
                find the perfect teams for you!
            </h4> -->

           <!--  <h4 class="subtext">            </h4> -->

             
            <div class="row">
                
                <div class="block text-left">
                     
                    <h1 class="nm block-head-text" id="11"> How will your users sign up and login into the app?</h1>
                                        <div class="col-xs-12 np mb70 ui-theme-block two-section pull-left">
                                                                                                          <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header4" id="chkbx_10"  value="10" name="checkbox[11][]" data-hour="8">
                            <label for="chkbx_10"><div class="icon-box"><div class="vp-ic icon-envelope">&nbsp;</div></div>
                                <div class="text" id="optionheader10">Email ID and Password</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header4" id="chkbx_11"  value="11" name="checkbox[11][]" data-hour="20">
                            <label for="chkbx_11"><div class="icon-box"><div class="vp-ic icon-globe">&nbsp;</div></div>
                                <div class="text" id="optionheader11">Via Social Networks
<span>(Facebook, Linkedin, Twitter etc)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header4" id="chkbx_12"  value="12" name="checkbox[11][]" data-hour="25">
                            <label for="chkbx_12"><div class="icon-box"><div class="vp-ic icon-shuffle">&nbsp;</div></div>
                                <div class="text" id="optionheader12">Using 2 Step Authorization
<span>(Required for financial apps)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header4" id="chkbx_63"  value="63" name="checkbox[11][]" data-hour="1">
                            <label for="chkbx_63"><div class="icon-box"><div class="vp-ic icon-login">&nbsp;</div></div>
                                <div class="text" id="optionheader63">No Sign Up Required</div></label>
                        </div>
                        

                   </div>
                    
                     
                    <h1 class="nm block-head-text" id="17"> How do you wish to secure your app?</h1>
                                        <div class="col-xs-12 np mb70 admin-block two-section pull-left">
                                                                                                      <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header4" id="chkbx_33"  value="33" name="checkbox[17][]" data-hour="0">
                            <label for="chkbx_33"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader33">Security Not Important <span>(For initial MVP versions)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header4" id="chkbx_34"  value="34" name="checkbox[17][]" data-hour="10">
                            <label for="chkbx_34"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader34">Basic Security Measures</div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header4" id="chkbx_35"  value="35" name="checkbox[17][]" data-hour="18">
                            <label for="chkbx_35"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader35">Encrypted Communication <span>(SSL etc)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header4" id="chkbx_36"  value="36" name="checkbox[17][]" data-hour="60">
                            <label for="chkbx_36"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader36">Complete Protection <span>(Protection against XSS &amp; SQL Injection)</span></div></label>
                        </div>
                        

                   </div>
                    
                                       
                </div>
                  
            </div>
         
            <button type="button" class="btn btn-green sliding-next mb100"   data-slide="5">Proceed <i class="fa fa-spinner fa-spin"></i></button>
        </div>
    </section>

          
  <section id="page5" class="page5 pages  hide ">
        <div class="container">
            <h3 id="header5" class="featured-text header"> Data</h3>

            <!-- <h4 class="subtext">Tell us a little bit more about project, so we can<br/>
                find the perfect teams for you!
            </h4> -->

           <!--  <h4 class="subtext">            </h4> -->

             
            <div class="row">
                
                <div class="block text-left">
                     
                    <h1 class="nm block-head-text" id="13"> Which 3rd party services do you need to integrate with?</h1>
                                        <div class="col-xs-12 np mb70 ui-theme-block two-section pull-left">
                                                                                                          <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header5" id="chkbx_13"  value="13" name="checkbox[13][]" data-hour="26">
                            <label for="chkbx_13"><div class="icon-box"><div class="vp-ic icon-user-following">&nbsp;</div></div>
                                <div class="text" id="optionheader13">Social Networks <span>(Facebook, Linkedin, Twitter etc)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header5" id="chkbx_14"  value="14" name="checkbox[13][]" data-hour="26">
                            <label for="chkbx_14"><div class="icon-box"><div class="vp-ic icon-pointer">&nbsp;</div></div>
                                <div class="text" id="optionheader14">Location <span>(Google Maps)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header5" id="chkbx_15"  value="15" name="checkbox[13][]" data-hour="29">
                            <label for="chkbx_15"><div class="icon-box"><div class="vp-ic icon-film">&nbsp;</div></div>
                                <div class="text" id="optionheader15">Media <span>(Youtube, Vimeo etc)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header5" id="chkbx_16"  value="16" name="checkbox[13][]" data-hour="36">
                            <label for="chkbx_16"><div class="icon-box"><div class="vp-ic icon-basket">&nbsp;</div></div>
                                <div class="text" id="optionheader16">eCommerce <span>(Payments, BI, Salesforce etc)</span></div></label>
                        </div>
                        

                   </div>
                    
                     
                    <h1 class="nm block-head-text" id="23"> Where do you want to save your application data ?</h1>
                                        <div class="col-xs-12 np mb70 admin-block two-section pull-left">
                                                                                                      <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header5" id="chkbx_58"  value="58" name="checkbox[23][]" data-hour="50">
                            <label for="chkbx_58"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader58">A new database <span>(mySQL, MongoDB etc)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header5" id="chkbx_59"  value="59" name="checkbox[23][]" data-hour="25">
                            <label for="chkbx_59"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader59">An Existing Database</div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header5" id="chkbx_60"  value="60" name="checkbox[23][]" data-hour="35">
                            <label for="chkbx_60"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader60">Cloud Database <span>(Fit for simpler MVPs)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header5" id="chkbx_61"  value="61" name="checkbox[23][]" data-hour="50">
                            <label for="chkbx_61"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader61">I'm not sure</div></label>
                        </div>
                        

                   </div>
                    
                                       
                </div>
                  
            </div>
         
            <button type="button" class="btn btn-green sliding-next mb100"   data-slide="6">Proceed <i class="fa fa-spinner fa-spin"></i></button>
        </div>
    </section>

          
  <section id="page6" class="page6 pages  hide ">
        <div class="container">
            <h3 id="header6" class="featured-text header"> Admin & Other Features</h3>

            <!-- <h4 class="subtext">Tell us a little bit more about project, so we can<br/>
                find the perfect teams for you!
            </h4> -->

           <!--  <h4 class="subtext">            </h4> -->

             
            <div class="row">
                
                <div class="block text-left">
                     
                    <h1 class="nm block-head-text" id="19"> Which administration features do you need?</h1>
                                        <div class="col-xs-12 np mb70 ui-theme-block two-section pull-left">
                                                                                                          <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header6" id="chkbx_40"  value="40" name="checkbox[19][]" data-hour="49">
                            <label for="chkbx_40"><div class="icon-box"><div class="vp-ic icon-user-following">&nbsp;</div></div>
                                <div class="text" id="optionheader40">User Management <span>(Manage user's roles &amp; permissions)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header6" id="chkbx_41"  value="41" name="checkbox[19][]" data-hour="30">
                            <label for="chkbx_41"><div class="icon-box"><div class="vp-ic icon-note">&nbsp;</div></div>
                                <div class="text" id="optionheader41">Content Management <span>(Edit data from dynamic admin panel)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header6" id="chkbx_42"  value="42" name="checkbox[19][]" data-hour="50">
                            <label for="chkbx_42"><div class="icon-box"><div class="vp-ic icon-bar-chart">&nbsp;</div></div>
                                <div class="text" id="optionheader42">Reporting and Analytics</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header6" id="chkbx_43"  value="43" name="checkbox[19][]" data-hour="77">
                            <label for="chkbx_43"><div class="icon-box"><div class="vp-ic fa fa-line-chart">&nbsp;</div></div>
                                <div class="text" id="optionheader43">Notification Control</div></label>
                        </div>
                        

                   </div>
                    
                     
                    <h1 class="nm block-head-text" id="20"> Which other features will you have in your app?</h1>
                                        <div class="col-xs-12 np mb70 admin-block two-section pull-left">
                                                                                                      <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header6" id="chkbx_44"  value="44" name="checkbox[20][]" data-hour="39">
                            <label for="chkbx_44"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader44">Activity feeds or user walls <span>(Facebook)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip">
                                                           <input type="checkbox" class="header6" id="chkbx_45"  value="45" name="checkbox[20][]" data-hour="15">
                            <label for="chkbx_45"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader45">In-app purchases <span> (Economist, Angry Birds)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header6" id="chkbx_46"  value="46" name="checkbox[20][]" data-hour="25">
                            <label for="chkbx_46"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader46">Shopping Cart</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header6" id="chkbx_47"  value="47" name="checkbox[20][]" data-hour="25">
                            <label for="chkbx_47"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader47">Search <span> (Amazon)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header6" id="chkbx_48"  value="48" name="checkbox[20][]" data-hour="12">
                            <label for="chkbx_48"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader48">Referral system <span> (Uber)</span></div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header6" id="chkbx_49"  value="49" name="checkbox[20][]" data-hour="40">
                            <label for="chkbx_49"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader49">Chatting <span>(Whatsapp)</span></div></label>
                        </div>
                                                    <div class="col-xs-12 col-sm-6 ic-check tip bt border-right-none">
                                                      <input type="checkbox" class="header6" id="chkbx_50"  value="50" name="checkbox[20][]" data-hour="20">
                            <label for="chkbx_50"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader50">Rating & reviews (Yelp)</div></label>
                        </div>
                                                        <div class="col-xs-12 col-sm-6 ic-check tip bt ">
                                                           <input type="checkbox" class="header6" id="chkbx_64"  value="64" name="checkbox[20][]" data-hour="1">
                            <label for="chkbx_64"><div class="icon-box"><div class="vp-ic icon-check">&nbsp;</div></div>
                                <div class="text" id="optionheader64">Integration
<span>(Marketing automation, CRM)</span></div></label>
                        </div>
                        

                   </div>
                    
                                       
                </div>
                  
            </div>
         
            <button type="button" class="btn btn-green sliding-next mb100"   data-slide="7">Proceed <i class="fa fa-spinner fa-spin"></i></button>
        </div>
    </section>

          
    
  
    
    <section id="page7" class="page7 pages  hide">
        <div class="container">
            <h3 class="featured-text">Almost Done!</h3>
            <h4 class="subtext">Where should we send you the detailed estimate?</h4>
            <div class="row">
                <div class="block text-left pb70">
                    
                    <h1 class="nm block-head-text">My name is: </h1>
                    <input type="text" id="name" name="name" placeholder="Mark" class="text-box required" data-parsley-minlength="2" data-parsley-minlength-message="Minimun length required is 2" data-parsley-pattern="^[a-z A-Z]+$">
                    <h1 class="nm block-head-text mt50">You can email me at:</h1>
                     <span id="errorMessage" class="hide" style="color:red;font-size:13px;"></span>
                    <input type="text" name="email" id="email" placeholder="mark@facebook.com" class="text-box required"  data-parsley-type="email" data-parsley-type-message="This Email doesn't seem right!">
                    <h1 class="nm block-head-text mt50">One of my friends who might benefit from this calculator:</h1>
                    <input type="email" name="email1" placeholder="my_friend@gmail.com" class="text-box " data-parsley-type="email" data-parsley-type-message="This Email doesn't seem right!">
                   
                </div>
            </div>
            <div class="col-md-12 mb100 mt30">
                <button type="button" class="btn btn-green getdetailed">Get Detailed Estimate <i class="fa fa-spinner fa-spin"></i></button>
                <div class="alert alert-danger hide mt15 repsoneRest"  style="width:50%; margin:0 auto;">
                      <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
                      <p class="messageResponse"></p>
                </div>
              <!-- <span class="text-center footer-span mt10">It will show location wise app estimate with all the details</span> -->
            </div>
        </div>
    </section>

       </form></div>

</body>
<style>
body.scrollbody{overflow:hidden;padding-right:17px;}
</style>
<script type="text/javascript" src="../code.jquery.com/jquery-1.9.1.js"></script>
<script  type="text/javascript" src="themes/adminre/js/selectize.js" ></script>

 <script src="themes/adminre/style/js/parsley.min.js"></script>
 <script type="text/javascript" src="themes/adminre/plugins/steps/js/jquery.steps.min.js"></script>
 <script type="text/javascript" src="themes/adminre/plugins/inputmask/js/inputmask.min.js"></script>
 <script type="text/javascript" src="themes/adminre/html/javascript/page.js"></script>
<script type="text/javascript" src="themes/adminre/style/js/jquery.slimscroll.js"></script>
<script src="../maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script>
window.onbeforeunload = function() {
window.scrollTo(0,0);
$("html").remove();
}
/* slimscroll*/
$(function(){
  $('#mapscroll').slimScroll({
	  height: '69%',
	  color: '#a1abb4',
	  wheelStep : 20,
  });

});
$(function(){
  $('#mapscrollmid').slimScroll({
	  height: '100%',	  
	  color: '#a1abb4',
	  wheelStep : 20,
  });

});

    $(".help1").click(function(){
        $(".help1").toggleClass("active");
    });
    $('.help').tooltip();
    $(".get-started").click(function(){
		$('body').removeClass('scrollbody');
		$('body').addClass('bodybg');
		$('.calculator-main').removeClass('map-bg2');
		$('.page1').addClass('map-bg');
        $(".page1 .featured-text").css("margin-top","80px");
        $(".page1 .subtext").css("margin-bottom","80px");
        $(".navbar").addClass("navbar-fixed-top");
        $(".calculator-main").css("margin-top","0px")
    });
    $(".close-map").click(function(){
        $(".page8").addClass("hide");
        $("#navbar").css("display","block");
        $('body').css("overflow-y","scroll");
    });
    
    
    $(".sliding-next").click(function(){
		$('body').css("overflow-y","scroll");
        $(this).hide();
        /* next slide section to show*/
        var slideNumber =   $(this).data('slide');
        $(".page"+ slideNumber).addClass("show");
        var divToShow   =   $('.page'+slideNumber);
        $('html, body').animate({
            scrollTop: divToShow.offset().top-25
        }, 1000);
    });
	
	$(window).on('scroll', function() {
		$('.pages.show').each(function() {
			var offset = $(this).offset();
			var fromTop = (offset.top - $(window).scrollTop());
			var selectPoint = $(this).attr('id');
			if(fromTop < 300 && fromTop > -$(this).height()+300) {
				$('*[data-page="'+selectPoint+'"]').addClass('green').removeClass('grey');
			} else {
				if($('*[data-page="'+selectPoint+'"]').hasClass('green'))
					$('*[data-page="'+selectPoint+'"]').removeClass('green').addClass('grey');
			}
		});
	});


    $('.slide-title').on('click',function(e){
        //remove class from selected dot
        var slideNumber =   $(this).children().find('span').data('slide');
        if($('.page'+slideNumber).hasClass('show')){
            var divToShow   =   $('.page'+slideNumber);
            $('html, body').animate({
                scrollTop: divToShow.offset().top - 25
            }, 1000);
        }
    });

    $(window).scroll(function() {
        //alert($(this).scrollTop());
        if ($(this).scrollTop() > 400) {
            $(".head-prize").removeClass("hide");
            $(".side-dots").removeClass("hide");
            $(".navbar").css("background","#070d13");
        }
        else {
            $(".head-prize").addClass("hide");
            $(".side-dots").addClass("hide");
            $(".navbar").css("background","");
        }
    });
	
</script>
<!-- vmap script -->
<script type="text/javascript">
    jQuery(document).ready(function() {
        var isChecked='false';
        var region1 = {
            us: '#e5654b',
            ca: '#e5654b',
            be: '#e5654b',
            at: '#e5654b',
            fr: '#e5654b',
            nl: '#e5654b',
            dk: '#e5654b',
            fi: '#e5654b',
            gr: '#e5654b',
            ie: '#e5654b',
            is: '#e5654b',
            it: '#e5654b',
            no: '#e5654b',
            pt: '#e5654b',
            es: '#e5654b',
            de: '#e5654b',
            gb: '#e5654b',
            au: '#e5654b',
        }
        var region2 = {
            eg: '#e5654b',
            ir: '#e5654b',
            iq: '#e5654b',
            tr: '#e5654b',
            sa: '#e5654b',
            ye: '#e5654b',
            sy: '#e5654b',
            il: '#e5654b',
            jo: '#e5654b',
            ae: '#e5654b',
            lb: '#e5654b',
            kw: '#e5654b',
            qa: '#e5654b',
            cy: '#e5654b',
            ru: '#e5654b',
            ua: '#e5654b',
            md: '#e5654b',
            by: '#e5654b',
            at: '#e5654b',
            hu: '#e5654b',
            pl: '#e5654b',
            cz: '#e5654b',
            ro: '#e5654b',
            si: '#e5654b',
            sk: '#e5654b',
            pa: '#e5654b',
            cr: '#e5654b',
            gt: '#e5654b',
            ni: '#e5654b',
            hn: '#e5654b',
            bo: '#e5654b',
            br: '#e5654b',
            ar: '#e5654b',
            cl: '#e5654b',
            co: '#e5654b',
            pe: '#e5654b',
            uy: '#e5654b',
            ec: '#e5654b',
            py: '#e5654b',
            ve: '#e5654b',
            gy: '#e5654b',
            sr: '#e5654b',
            gf: '#e5654b',
        }
        var region3 = {
            af: '#e5654b',
            am: '#e5654b',
            az: '#e5654b',
            bd: '#e5654b',
            bt: '#e5654b',
            bn: '#e5654b',
            mm: '#e5654b',
            cn: '#e5654b',
            cy: '#e5654b',
            ge: '#e5654b',
            in : '#e5654b',
            id: '#e5654b',
            ir: '#e5654b',
            iq: '#e5654b',
            il: '#e5654b',
            jp: '#e5654b',
            mn: '#e5654b',
            my: '#e5654b',
            mv: '#e5654b',
            np: '#e5654b',
            om: '#e5654b',
            pk: '#e5654b',
            ph: '#e5654b',
            sa: '#e5654b',
            sy: '#e5654b',
            tj: '#e5654b',
            tw: '#e5654b',
            tr: '#e5654b',
            th: '#e5654b',
            tm: '#e5654b',
            uz: '#e5654b',
            vn: '#e5654b',
            ye: '#e5654b',
            cf: '#e5654b',
            za: '#e5654b',
            ao: '#e5654b',
            bj: '#e5654b',
            bw: '#e5654b',
            bi: '#e5654b',
            bf: '#e5654b',
            cm: '#e5654b',
            cv: '#e5654b',
            cd: '#e5654b',
            cg: '#e5654b',
            dj: '#e5654b',
            eg: '#e5654b',
            er: '#e5654b',
            et: '#e5654b',
            gh: '#e5654b',
            gm: '#e5654b',
            gn: '#e5654b',
            gq: '#e5654b',
            ls: '#e5654b',
            lr: '#e5654b',
            ly: '#e5654b',
            mg: '#e5654b',
            ml: '#e5654b',
            ma: '#e5654b',
            mu: '#e5654b',
            mz: '#e5654b',
            na: '#e5654b',
            ne: '#e5654b',
            ng: '#e5654b',
            rw: '#e5654b',
            st: '#e5654b',
            sn: '#e5654b',
            td: '#e5654b',
            so: '#e5654b',
            sz: '#e5654b',
            sd: '#e5654b',
            tg: '#e5654b',
            tn: '#e5654b',
            ug: '#e5654b',
            zm: '#e5654b',
            zw: '#e5654b',
            tz: '#e5654b',
            ke: '#e5654b',
            mw: '#e5654b',
            mr: '#e5654b',
            dz: '#e5654b',
            kh: '#e5654b',
            la: '#e5654b',
            pg: '#e5654b',
            ga: '#e5654b',
            ci: '#e5654b',
            sl: '#e5654b',
            gw: '#e5654b',
            jo: '#e5654b',
            ae: '#e5654b',
        }
        jQuery('#vmap1').vectorMap({
            map: 'world_en',
            backgroundColor: '',
            color: '#d6dee0',
            colors: region1,
            enableZoom: false,
            hoverColor: '#e5654b',
            hoverOpacity: null,
            normalizeFunction: 'polynomial',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#C8C8C8',
            selectedRegion: null,
            showTooltip: true,
        });
        jQuery('#vmap2').vectorMap({
            map: 'world_en',
            backgroundColor: '',
            color: '#d6dee0',
            colors: region2,
            enableZoom: false,
            hoverColor: '#e5654b',
            hoverOpacity: null,
            normalizeFunction: 'polynomial',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#C8C8C8',
            selectedRegion: null,
            showTooltip: true,
        });
        jQuery('#vmap3').vectorMap({
            map: 'world_en',
            backgroundColor: '',
            color: '#d6dee0',
            colors: region3,
            enableZoom: false,
            hoverColor: '#d6dee0',
            hoverOpacity: null,
            normalizeFunction: 'polynomial',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#C8C8C8',
            selectedRegion: null,
            showTooltip: true,
        });
        $('#vmap1').show();
        $('#vmap2').hide();
        $('#vmap3').hide();
        $('#reg1').on('click', function() {
            $('#vmap1').show();
            $('#vmap2').hide();
            $('#vmap3').hide();
        });
        $('#reg2').on('click', function() {
            $('#vmap1').hide();
            $('#vmap2').show();
            $('#vmap3').hide();
        });
        $('#reg3').on('click', function() {
            $('#vmap1').hide();
            $('#vmap2').hide();
            $('#vmap3').show();
        });
    });
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','../www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-35066643-1', 'auto');
  ga('send', 'pageview');

</script>
<script type="text/javascript">
    $(document).ready(function() {
		
        /*Zone 1 Western Europe US & Canada Australia$110 - $150 / hour=> 130 */
        var zoneqprice1 = 130;
        $('#zoneqprice1').val(130);
        

        /*Zone 2 Middle East Estern Europe Central & South America $50 - $80=> 65 / hour*/
        var zoneqprice2 = 65;
        $('#zoneqprice2').val(65);

        /*Zone 3 South Asia Africa East Asia South East Asia $30 - $50=> 40 / hour*/
        var zoneqprice3 = 40;
        $('#zoneqprice3').val(40);
        
        var hourcalculated = 0;
                    var hourcalculated = 0;
            
        $("[id^=chkbx_] ").on("change", function() {

            if ($(this).prop("checked"))
                hourcalculated += eval($(this).data("hour"));
            else
                hourcalculated -= eval($(this).data("hour"));

            zoneqprice = eval($(".zone:checked").val());
            $("#totalprice ").html("$" + (hourcalculated * zoneqprice3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "&nbsp-&nbsp" + "$" + (hourcalculated * zoneqprice1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $("#total_price ").val( hourcalculated * zoneqprice3);
            $("#total_hour").val(hourcalculated);

        });
        $(".zone").on("change", function() {
            //alert($(this).val());
            //$(".zone").parent().removeClass("btn-primary").addClass("btn-default");
            //$(this).parent().addClass("btn-primary").removeClass("btn-default");
            zoneqprice = eval($(this).val());
            localStorage.setItem("zone_price", zoneqprice);
            console.log(localStorage.getItem("zone_price"));
            //$("#totalprice ").html("$" + hourcalculated * zoneqprice);
            $("#total_price ").val(hourcalculated * zoneqprice);
            $("#total_hour").val(hourcalculated);
        });
       /* $(".zone").on("change", function() {
           // alert($(this).val());
            $(".zone").parent().removeClass("btn-primary").addClass("btn-default");
            $(this).parent().addClass("btn-primary").removeClass("btn-default");
            zoneqprice = eval($(this).val());
            $(".totalprice").html("$" + hourcalculated * zoneqprice + "<sup>*</sup>");
            console.log("hourcalculated : " + hourcalculated + " - " + zoneqprice);
        });*/

        //Email Id validation
        $("#passButSat").click(function() {
            if ($("#email").val().length > 0) {
                $("#hiddenemail").val($("#email").val());
                $("#bs-modal-email").modal("hide");
            } else {
                alert("Please enter email");
            }
        });
        // $("#wizard").steps("next");
        // $("#wizard").steps("next");
        // $("#wizard").steps("next");
        // $("#wizard").steps("next");
        $(".actions").addClass("hide");
//$('li.first').addClass('satnam');
$('li.current').addClass('done');


$(".getdetailed").click(function(){
    $arrCategory=[];
    $arrCategoryUnique=[];
    $arrOption=[];
    $arrDataHour=[];
    $isChecked='false';
   $("[id^=chkbx_] ").each(function(){ 
        if ($(this).prop("checked"))
        {
            $isChecked='true';
            var HeaderId='#'+$(this).attr('class');
            var optionId='#optionheader'+$(this).attr('value');
            $arrCategory.push(HeaderId);
            $arrOption.push(optionId);
            $arrDataHour.push($(this).attr('data-hour'));
            if($arrCategoryUnique.indexOf(HeaderId)==-1)
            $arrCategoryUnique.push(HeaderId);
        }

   });

      if($isChecked=='true')
{
   var form=$('#wizard-validate');
   if(form.parsley().validate())
    {
      $('#errorMessage').addClass('hide');
      var that = $(this); 
      that.html("Calculating...");
      that.attr('disabled','disabled');
      //$(this).html('Calculating...');
        var hourcalculated=  $("#total_hour").attr('value');
        console.log('in');
        ga('send', {
        hitType: 'event',
        eventCategory: 'Calculator CTA',
        eventAction: 'Details Submit',
        eventLabel: 'Calculator'
        });
         $.ajax({
                type: 'POST',
                url: "/site/SaveCalculatorData2",
                data: form.serialize(),
                datatype: 'json',
                success: function(resPartial) {
                    console.log(resPartial);
                  
                    if(resPartial && resPartial!=0)
                    {
                        var mapRightHtml='';
                         $('.fb').attr('href',"https://www.facebook.com/sharer/sharer.php?u=https://venturepact.com/mobile_app_price_calculator");
                          $('.tw').attr('href',"https://twitter.com/home?status=Just%20estimated%20the%20cost%20of%20creating%20my%20app.%20Try%20yourself%20by%20answering%2010%20simple%20questions:%20https://venturepact.com/mobile_app_price_calculator");
                         $(".getdetailed").html('Get Detailed Estimate');

                         
                       
                           for($i=0;$i<$arrCategoryUnique.length;$i++){
                               var HeaderId=$arrCategoryUnique[$i];
                                var optionHtml='';
                                    for($j=0;$j<$arrCategory.length;$j++){
                                        var optionId=$arrOption[$j];
                                        if(HeaderId==$arrCategory[$j])
                                        {
                                        optionHtml= optionHtml+'<div> <span class="mpdetail-2">'+$(optionId).html()+'</span>  <span class="mpdetail-3" id='+$arrDataHour[$j]+'>$'+$arrDataHour[$j]*40+'</span> </div>';
                                        }
                                        
                                    }
                                    mapRightHtml =mapRightHtml+'<div class="mp-deatil-outr"><span class="mpdetail-1">'+$(HeaderId).html()+'</span> <div class="col-xs-8 np"> '+optionHtml+'    </div> </div>';
                              }


                          $('.mapright-detail').html(mapRightHtml); 
                     // $('#calEstimate').html(resPartial);
                        var x = hourcalculated * 130;
                        var y = hourcalculated * 65;
                        var z = hourcalculated * 40;
                        $('#etestimate-btn-id1').html("$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        $('#etestimate-btn-id2').html("$" + y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        $('#etestimate-btn-id3').html("$" + z.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                        $('#lblAppEstimate').html($('#etestimate-btn-id3').html());
                        $('#vmap3').css('display','block');
                        $('#vmap1').css('display','none');
                        $('#vmap2').css('display','none');
                        $(".getestimate-btn").removeClass('hide');
                        $(".getestimate-btn2").addClass('hide');
                        $("#btn-id3").addClass('hide');
                        $("#etestimate-btn-id3").removeClass('hide');
                        $(".page8").removeClass("hide");
                        $("#navbar").css("display","none");
                        $('body').css("overflow","hidden");
                        $('.repsoneRest').addClass('hide');
                      }
                     else{
                       $('.repsoneRest').removeClass('hide').html("Sorry, The email address your are using seems to be fake.").show();
                       that.html("Get Detailed Estimate");
                       that.prop("disabled", false);
                       setTimeout(function() {
                          $('.repsoneRest').html('');
                          $('.repsoneRest').fadeOut();
                        }, 3000);
                  }
                }
                
            });
   }

}
else
   {

   $('#result').modal('show');
   }
      return false;
    }); 
   
$(".getestimate-spn").on('click',function()
        {
            var x=$( this ).attr('value');
          
            if(x=='130')
            {
                $('#vmap1').css('display','block');
                $('#vmap2').css('display','none');
                $('#vmap3').css('display','none');
            } 
            if(x=='65')
            {
                $('#vmap2').css('display','block');
                $('#vmap1').css('display','none');
                $('#vmap3').css('display','none');
            }
            if(x=='40')
            {
                $('#vmap3').css('display','block');
                $('#vmap1').css('display','none');
                $('#vmap2').css('display','none');
            }
            var message = $(this).closest('.map-zone1').find('span').html()+": "+$(this).closest('.map-zone1').find('small').html();
            $('.mapright-heading3').html(message);
            $(".getestimate-btn").removeClass('hide');
            $(".getestimate-btn2").addClass('hide');
            //$(this).addClass('hide');
            var id= '#btn-'+$(this).attr('id');
            $(id).addClass('hide');
            var id= '#etestimate-btn-'+$(this).attr('id');
            $(id).removeClass('hide');
            $('#lblAppEstimate').html(  $(id).html());
            $( ".mpdetail-3" ).each(function( index ) {
            console.log( index + ": " + $( this ).attr('id') );
            $( this ).html('<span style="font-size:14px;">+</span>$'+$( this ).attr('id')*x);



});

       // $(this).closest( ".getestimate-btn2 " ).removeClass('hide');
    });



 
    });


</script>
 

<script>

function validateEmail(email) {
        email = $.trim(email);
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (email.length > 0 && filter.test(email)) return true;
        else return false;
    }

    $(document).ready(function(){
       var local_storage = localStorage.getItem("zone_price");

       //console.log(local_storage);
        local_storage = 40;

       if(local_storage!=130)
       {
            $("#div_130").removeClass("btn-primary1");
            $("#div_130").parent().removeClass("btn-primary1");
            $("#div_" + local_storage).addClass("btn-primary1").removeClass("btn-default1");


       }

       if(local_storage==130)
       {
          $('#vmap1').show();
          $('#vmap2').hide();
          $('#vmap3').hide();

       }else if(local_storage==65)

       {
          $('#vmap1').hide();
          $('#vmap2').show();
          $('#vmap3').hide();
       }else{
          $('#vmap1').hide();
          $('#vmap2').hide();
          $('#vmap3').show();

       }

         $("[id^='wizard-t-']").attr("href","");


    });
</script>

<script type="text/javascript">
    $(document).ready(function() {

       localStorage.setItem("zone_price", "130");
        /*Zone 1 Western Europe US & Canada Australia$110 - $150 / hour=> 130 */
        var zoneqprice1 = 130;

        /*Zone 2 Middle East Estern Europe Central & South America $50 - $80=> 65 / hour*/
        var zoneqprice2 = 65;

        /*Zone 3 South Asia Africa East Asia South East Asia $30 - $50=> 40 / hour*/
        var zoneqprice3 = 40;

                    var hourcalculated = 0;
            
        $("[id^=chkbx_] ").on("change", function() {

            if ($(this).prop("checked"))
                hourcalculated += eval($(this).data("hour"));
            else
                hourcalculated -= eval($(this).data("hour"));

            zoneqprice = eval($(".zone:checked").val());
            $("#totalprice ").html("$" + (hourcalculated * zoneqprice3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "&nbsp-&nbsp" + "$" + (hourcalculated * zoneqprice1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $("#total_price ").val( hourcalculated * zoneqprice3);
            $("#total_hour").val(hourcalculated);

        });
        $(".zone").on("change", function() {
            //alert($(this).val());
            //$(".zone").parent().removeClass("btn-primary").addClass("btn-default");
            //$(this).parent().addClass("btn-primary").removeClass("btn-default");
            zoneqprice = eval($(this).val());
            localStorage.setItem("zone_price", zoneqprice);
            console.log(localStorage.getItem("zone_price"));
            $("#totalprice ").html("$" + hourcalculated * zoneqprice);
            $("#total_price ").val(hourcalculated * zoneqprice);
            $("#total_hour").val(hourcalculated);
        });

        //fake forrm get and validate
    //  var fake_form = $("#fake-form").parsley();
        $("#fake-form").on("submit",function(){
            console.log("working ",fake_form.isValid());
            if(fake_form.isValid()){
                $("#bs-modal-email").modal("hide");
                $("#hiddenemail").val($("#email").val());
            }
            return false;
        });

        //Email Id validation

    });

</script>
<script type="text/javascript" src="design/calculator/js/vmap/js/jquery.vmap.min.js"></script>
<script type="text/javascript" src="design/calculator/js/vmap/js/jquery.vmap.world.js"></script>
<script type="text/javascript" src="design/calculator/js/vmap/js/jquery.vmap.sampledata.js"></script>

<!-- Mirrored from venturepact.com/mobile_app_price_calculator by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 07 Nov 2017 12:58:47 GMT -->
</html>