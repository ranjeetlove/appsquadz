<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/WebPage">
   <meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
   <head>
      <title>Top Mobile App Development Company India, USA, UK &amp; UAE - AppSquadz</title>
      <meta name="description" content="AppSquadz is one of the top mobile app development companies in India, USA, UK &amp; UAE focusing on iPhone, iPad &amp; Android applications. Offer web development services across the globe." />
      <?php include("./include/head.php")?>
   </head>
   <body itemscope itemprop='mainEntity' itemtype='http://schema.org/Organization' class=''>
      <?php 
         include('query_helper.php');
         $query="select * from app_reviews where status=1 OR status=3";
         $result=fetch_data_by_custom_query($query);
         //print_r($result);
         $query_app_list="SELECT * FROM app_list where id>0 and status=1 order by create_date DESC  limit 10";                  
         $results_app_list=fetch_data_by_custom_query($query_app_list);
         ?>
      <!--  SELECT app_list.description,app_list.id,app_list.app_name,app_list.logo,app_list.app_thumb_image,app_app_category.category FROM app_list 
         join app_apps_categories ON app_apps_categories.fk_app_id= app_list.id 
         join app_app_category ON app_apps_categories.fk_category_id = app_app_category.id where app_list.id>0 group by app_list.app_name-->
      <?php include('include/header.php'); ?>
      <!-- end of header section -->
      <section class="main-banner-cover selected custom-banner index-banner" style="background:url(img/banners/home_banner_new.jpg) no-repeat center top; background-size: cover; background-size: 100% 116%;">
         <div class="container">
            <div class="mainsec">
               <h1 id="content-bg" style="line-height: 74px; margin-top: -60px;">
                  <span class="aletest">
                     <span style="font-style: initial;">We</span>
                     <div class="overlay">
                        <a target="_blank" href="https://www.youtube.com/watch?v=8O1g9PQ4UzM"><img src="img/welcomeplay.svg" style="margin-left: 0px; margin-top: -20px;"></a>
                     </div>
                  </span>
                  are a
                  <span class="aletest">
                     <span style="font-style: initial;">Trusted</span>
                     <div class="overlay">
                        <div class="text">4.7/5 BY CLUTCH.CO</div>
                        <img src="img/star.svg" style="margin-left: -160px; margin-top: -26px;">
                     </div>
                  </span>
                  <span class="aletest" style="font-style: initial;">
                     Mobile
                     <div class="overlay">
                        <a href="#"><img src="img/android.svg" width="28px" class="androidsvg"></a>
                        <a href="#"><img src="img/apple.svg" width="28px" class="applesvg"></a>
                        <a href="#"><img src="img/windows-8.svg" width="28px" class="androidsvg"></a>
                        <a href="#"><img src="img/blackberry.svg" width="28px" class="applesvg"></a>
                     </div>
                  </span>
                  &amp; <br> 
                  <span class="aletest" style="font-style: initial;">
                     Web Application
                     <div class="overlay">
                        <a href="asp-dotnet-development.html"><img src="img/net.svg" width="28px" class="androidsvg"></a>
                        <a href="http://localhost/appsquadzwebsitenew/appsquadz.com/php-web-development.html"><img src="img/php.svg" width="28px" class="applesvg"></a>
                        <a href="http://localhost/appsquadzwebsitenew/appsquadz.com/java-application-development.html"><img src="img/java.svg" width="28px" class="androidsvg"></a>
                        <a href="#"><img src="img/wordpress-square-logo.svg" width="28px" class="applesvg"></a>
                        <a href="#"><img src="img/js-file-format-symbol.svg" width="28px" class="applesvg"></a>
                     </div>
                  </span>
                  Development Company
               </h1>
               <h2 style="font-weight: bolder;">MOBILE • WEB • AI • VR • IOT</h2>
               <!-- <h2 style="font-weight: bolder;">FOR YOU • WITH YOU • ALWAYS</h2> -->
               <p>
                  Our aim is to deliver as our customers desire. We develop enriching, engaging and user-friendly mobile applications and provide fulfilling web solutions which consist of intuitive UX, recent technology and state of the art interfaces.
                  <br><!-- <b>We are 650+ projects young and have delivered in almost 30+ countries</b> -->
               </p>
               <div class="btn-section_work">
                  <a href="portfolios.php" class="latest_work_btn headerestimate">RECENT PROJECTS IN A GLANCE</a>
                  <a href="app_price_calculator.html" class="latest_work_btn headerestimate">Get an Estimate</a>
               </div>
            </div>
         </div>
         <div class="client-logo-block">
            <div class="container">
               <div class="heading-block">
                  <p><b style="font-size:20px;" >650+</b> CUSTOMERS FROM<br> SMBs
                     TO FORTUNE <br><b style="font-size:20px;">500</b> COMPANIES                
                  </p>
               </div>
               <div id="mcts1">
                  <a><img src="img/final/american.png" alt="American Express"></a>
                  <a><img src="img/final/cocacola.png" alt="Coca Cola"></a>
                  <a><img src="img/final/times_group.png" alt="Time Group"></a>
                  <a><img src="img/final/havells.png" alt="Havells"></a>
                  <a><img src="img/final/delhi_metro.png" alt="Delhi Metro"></a>
                  <a><img src="img/final/sony.png" alt="Sony TV"></a>
                  <a><img src="img/final/videocon.png" alt="Videocon"></a>
                  <a><img src="img/final/apollo.png" alt="Apollo"></a>
                  <a><img src="img/final/max_health_care.png" alt="Max Health Care"></a>
                  <a><img src="img/final/axis_bank.png" alt="Axis Bank"></a>
                  <a><img src="img/final/icici_bank.png" alt="Icici Bank"></a>
                  <a><img src="img/final/jet_airways.png" alt="Jet Airways"></a>
                  <a><img src="img/final/himachal.png" alt="Himachal Forest"></a>
                  <a><img src="img/final/amar_ujala.png" alt="Amaz Ujala"></a>
                  <a><img src="img/final/icsi.png" alt="The Institute of Company Secretaries of India"></a>
                  <a><img src="img/final/bsnl.png" alt="Bsnl India"></a>
                  <a><img src="img/final/kpmg.png" alt="KPMG"></a>
                  <a><img src="img/final/dabur.png" alt="Dabur"></a>
                  <a><img src="img/final/delhi_press.png" alt="Delhi Press"></a>
                  <a><img src="img/final/bhel.png" alt="BHEL"></a>
                  <a><img src="img/final/dams.png" alt="Delhi Academy of Medical Science"></a>
                  <a><img src="img/final/schand.png" alt="S Chand"></a>
                  <a><img src="img/final/time.png" alt="TIME"></a>
                  <a><img src="img/final/escorts.png" alt="Escorts"></a>
                  <a><img src="img/final/taxi_for_sure.png" alt="Taxi For Sure"></a>
                  <a><img src="img/final/grab_taxi.png" alt="Grab Taxi"></a>
                  <a><img src="img/final/barbequenation.png" alt="Barbeque nation"></a>
               </div>
            </div>
         </div>
      </section>
      <!---modale box-->
      <!---end of modle box-->
      <section class="pastPerformance" id="caseStudyLoadSection">
         <div class="container">
            <div class="fadeInUp animated3">
               <h3 style="font-size: 48px !important;"><span>DEVELOPING APPLICATIONS | CURATING EXPERIENCES</span></h3>
               <p>We move forward with a strong vision taking along with us our past experiences which lead to development of engaging mobile applications with high ROI and maximum conversions</p>
            </div>
            <div class="row">
               <div class="col-sm-4 zoomIn animated3 delay1">
                  <div class="resultBlock">
                     <div class="resultTitle titleGreen"> <span class="count">12Years</span>+</div>
                     <p>Development Experience</p>
                  </div>
               </div>
               <div class="col-sm-4 zoomIn animated3 delay2">
                  <div class="resultBlock">
                     <div class="resultTitle titlePurpel"><span class="count">100</span>+</div>
                     <p>Talented Squadz</p>
                  </div>
               </div>
               <div class="col-sm-4 zoomIn animated3 delay3">
                  <div class="resultBlock">
                     <div class="resultTitle titleOrange"><span class="count">650</span>+</div>
                     <p>Apps Developed</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-sm-4 zoomIn animated3 delay1">
                  <div class="resultBlock">
                     <div class="resultTitle titlePur"> <span class="count">100</span>%</div>
                     <p>Projects Delivered on Time</p>
                  </div>
               </div>
               <div class="col-sm-4 zoomIn animated3 delay2">
                  <div class="resultBlock">
                     <div class="resultTitle titleOrange1"><span class="count">30</span>+</div>
                     <p>Countries Served</p>
                  </div>
               </div>
               <div class="col-sm-4 zoomIn animated3 delay3">
                  <div class="resultBlock">
                     <div class="resultTitle titleBlue"><span class="count">100</span>%</div>
                     <p>Client Satisfaction</p>
                  </div>
               </div>
            </div>
         </div>
         <br><br><br><br>
      </section>
      <section class="features-block of-hidden">
         <div class="container">
            <div class="main-content-block rows fadeInUp animated3">
               <h2>OUR IDEOLOGIES</h2>
               <div class="title-bar">DEVELOPING EXPERIENCES FOR THE WORLD IN THE FORM OF MOBILE AND WEB APPLICATIONS</div>
               <p>Mobile applications and websites are a crucial aspect of any business today. Without them, every industry is always lacking. Our mobile application (which include both android and iOS) and website development squad is always present to help you overcome this lacking and make you succeed in a market full of competition. We aim at developing applications which deliver outcomes at a higher rate and accelerate your ranking and numbers. Our goal is to develop engaging, enriching and optimised android and iOS applications which are user-friendly and digitally advanced. We have made our work strategy extremely simple — work towards attaining results without rigidity. We believe in changing with the trends and constantly evolving our technologies and concepts as per requirement. We are recognised for creating flawless mobile applications and providing real time web and mobile application solutions. We are where your search for a dedicated mobile application company ends.</p>
               <p><strong>Contact us for expert mobile and web solutions.</strong></p>
            </div>
            <div class="features-section deliver rows">
               <div class="col-md-12">
                  <div id="col-manage-block-heights1" class="row">
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #fcb042 !important;">
                           <div class="img-block mobile"><img src="img/icons/technoligies1.png"></div>
                           <div class="content-part">
                              <h3>Mobile Applications &amp; Wearables</h3>
                              <p>Integrating various arenas for a connected future through iOS and Android applications.</p>
                           </div>
                           <ul class="list">
                              <li> <a href="iphone-application-development.html">iPhone</a> </li>
                              <li> <a href="android-app-development.html">Android</a> </li>
                              <li> <a href="cross-platform-app-development.html">Cross Platform</a> </li>
                           </ul>
                           <div class="btn-block rows"> <a href="mobile-application-development.html" class=" transition">Read More</a> </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #39b44a !important;">
                           <div class="img-block web"><img src="img/icons/technoligies2.png"></div>
                           <div class="content-part">
                              <h3>Web Development</h3>
                              <p>We develop cult, full of potential and engaging websites for startups and enterprises which help them stand out from the crowd.</p>
                           </div>
                           <ul class="list">
                              <li> <a href="website-design.html">UI/UX</a> </li>
                              <li> <a href="php-web-development.html">PHP</a> </li>
                              <li> <a href="asp-dotnet-development.html"><strong>.</strong>NET</a> </li>
                              <li> <a href="java-application-development.html">Java</a></li>
                           </ul>
                           <div class="btn-block rows"> <a href="web-development.html" class="transition">Read More</a> </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #04a59d !important;">
                           <div class="img-block cart"><img src="img/icons/technoligies3.png"></div>
                           <div class="content-part">
                              <h3>E-commerce Development</h3>
                              <p>We help you develop and execute high profile yet affordable e-commerce services.</p>
                           </div>
                           <ul class="list">
                              <li> <a href="magento-ecommerce-development.html">Magento</a> </li>
                              <li>Opencart</li>
                              <li> <a href="wordpress-cms-development.html">wordpress</a> </li>
                           </ul>
                           <div class="btn-block rows"> <a href="ecommerce-web-development.html" class=" transition">Read More</a> </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #f15b29 !important;">
                           <div class="img-block mobile"><img src="img/icons/technoligies4.png"></div>
                           <div class="content-part">
                              <h3>Cloud Computing</h3>
                              <p>Having a prolific partnership with AWS, our experts provide optimised cloud solutions to migrate, manage and customise your cloud experience.</p>
                           </div>
                           <ul class="list">
                              <li>Architect</li>
                              <li>Build</li>
                              <li>Manage</li>
                           </ul>
                           <div class="btn-block rows"> <a href="cloud-application-development.html" class="transition">Read More</a> </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #d81e5d !important;">
                           <div class="img-block cart"><img src="img/icons/technoligies5.png"></div>
                           <div class="content-part">
                              <h3>Offshore staffing</h3>
                              <p>We provide quality hiring and staffing solutions with a full-fledged hardware and software setup and progressive working environment.</p>
                           </div>
                           <ul class="list">
                              <li> <a href="hire-iphone-developer.html">iPhone</a> </li>
                              <li> <a href="hire-android-developer.html">Android</a> </li>
                              <li> <a href="hire-php-developer.html">PHP</a> </li>
                              <li> <a href="hire-magento-developer.html">Magento</a> </li>
                           </ul>
                           <div class="btn-block rows"> <a href="hire-dedicated-developer.html" class="transition">Read More</a> </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="feature-block col-block-height transition" style="background-color: #7e57c2 !important;">
                           <div class="img-block cart"><img src="img/icons/technoligies6.png"></div>
                           <div class="content-part">
                              <h3>Digital Marketing Services</h3>
                              <p>We help brands optimise their Digital Marketing Performance. We offer a successful SEO service for our clients.</p>
                           </div>
                           <ul class="list">
                              <li> <a href="seo-services.html">SEO</a> </li>
                              <li> <a href="social-media-marketing.html">SMO</a> </li>
                              <li> <a href="ppc-campaign-management.html">PPC</a> </li>
                           </ul>
                           <div class="btn-block rows"> <a href="seo-services.html" class="transition">Read More</a> </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="mobile-features-tabing" id=leading-sec>
         <div class=leading-sec>
            <div class="in-banner-content-home1 fadeInUp animated3" >
               <h1  style ="color :#fff" >OUR HARD WORK APPRAISED</h1>
            </div>
            <div class="clear"></div>
            <ul class=adf-firstul-2 style="border-bottom: 1px solid #48464d;">
               <li>
                  <span class=firstul-img><img src=img/top-app/appfutura-img.png alt="AppFutura"></span>
                  <div class=clear></div>
                  <div class=firstul-title style="font-size: 18px;">
                     Top App
                     <br> Designers & Developers in World
                     <p>AppFutura App Designer & Developer List-2016</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-img><img src="img/top-app/goodfirm.png" alt="good firm"></span>
                  <div class=clear></div>
                  <div class=firstul-title  style="font-size: 18px;">
                     Top Rated
                     <br> App Developers in World
                     <p>GoodFirms Top App Developer List-2016</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-img><img src=img/top-app/appfirm.png alt="appfirm"></span>
                  <div class=clear></div>
                  <div class=firstul-title  style="font-size: 18px;">
                     Community of Highly Rated Developers
                     <p>appfirms</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-img><img src=img/top-app/extract.png alt="extract"></span>
                  <div class=clear></div>
                  <div class=firstul-title  style="font-size: 18px;">
                     Most innovative
                     <br> Mobile App Development Company
                     <p>Extract Top 5 Mobile App Developers List-2016</p>
                  </div>
               </li>
            </ul>
            <div class=clear></div>
            <ul class=adf-firstul-2>
               <li>
                  <span class=firstul-number>88<sup>%</sup></span>
                  <span class=firstul-img><img src=img/top-app/elance.png alt="Elance"></span>
                  <div class=clear></div>
                  <div class=firstul-title  style="font-size: 18px;">
                     Success Rate
                     <br>
                     <p>Elance Portal</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-number>85<sup>%</sup></span>
                  <span class=firstul-img><img src=img/top-app/upwork.png alt="Up Work"></span>
                  <div class=clear></div>
                  <div class=firstul-title   style="font-size: 18px;">
                     Success Rate
                     <br>
                     <p>Up Work Portal</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-number>100<sup>%</sup></span>
                  <span class=firstul-img><img src=img/top-app/star.png alt="star"></span>
                  <div class=clear></div>
                  <div class=firstul-title   style="font-size: 18px;">
                     5 Star
                     <br>Client Reviews
                     <p>Mentioned in Our Testimonials</p>
                  </div>
               </li>
               <li>
                  <span class=firstul-number>25</span>
                  <span class=firstul-img><img src=img/top-app/content.png alt="content"></span>
                  <div class=clear></div>
                  <div class=firstul-title   style="font-size: 18px;">
                     Featured Articles
                     <br>
                     <p>India's Most Recognized & Deserving App Design & Development Startup from AppFutura to Clutch</p>
                  </div>
               </li>
            </ul>
            <div class=clear></div>
         </div>
      </section>
      <div class="container-fluid">
         <section class="success-stories">
            <div class="success-story-item" data-indicate="ssindicate0">
               <div class="table">
                  <div class="table-cell" style="background:#fff;">
                     <div class="container-fluid" >
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 blacktext" id="proh">Udemy</h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20 blacktextp">Appsquadz has successfully developed an enriching application for all professionals who are wanting to enhance their skills. This application provides a platform to both experts and students to develop courses as well study them. The application has gained immense popularity and is still growing.</p>
                              <a href="mobile-portfolio/journey-social-network.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText blacktextsecondp">
                                 <span class="poppinsSemiboldFont " style="font-size: 30px; color:#000;">Featured on Google Play <br> #EDITOR CHOICE</span>
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">on app store</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;">under <b>Education</b> category</span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">5 Million +</span>
                                 <span class="poppinsSemiboldFont font30" style="color:#000;">downloads</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;">& still counting...</span>
                              </p>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #000"><b>5.0/5.0 on Clutch review</b></span>
                              </div>
                              <div class="icon-block">
                                 <ul style="margin-left: -9px; float: left !important; margin-top: 55px;">
                                    <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                    <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                    <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class=" table-cell purpleBg"  style="background:#fff;" >
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-story-item" data-indicate="ssindicate1">
               <div class="table">
                  <div class="table-cell" style="background:#1866B1;">
                     <div class="container-fluid" >
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 whitetext">Taxi For Sure</h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20" style="color:#fff;">Appsquadz has developed the Taxi For Sure application which was the brainchild of Raghunandan G. It is a taxi service application for both drivers and passengers. The application did great business and was eventually bought out by OLA for $200 million.</p>
                              <a href="mobile-portfolio/aweza.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont">$40Million Funding</span>
                                 <span class="poppinsSemiboldFont font30">Acquired by OLA $200 Million</span>
                                 <span class="section-description poppinsRegularFont">No#1 Taxi Booking & Ride Sharing App in India</span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont" >2 Million +</span>
                                 <span class="poppinsSemiboldFont font30" >downloads</span>
                              </p>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #fff"><b>4.9/5.0 on Clutch review</b></span>
                              </div>
                              <div class="icon-block">
                                 <ul style="margin-left: -9px; float: left !important; margin-top: 55px;" >
                                    <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                    <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                    <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-cell purpleBg" style="background: #1866B1;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-story-item" data-indicate="ssindicate2">
               <div class="table">
                  <div class="table-cell" >
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 blacktext"><b>Amar Ujala</b></h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20 blacktextp">Amar Ujala is a household name in since the last 70 years. We helped Amar Ujala develop a mobile application to bring their offline content to people’s mobile phones globally and expand their viewership exponentially.</p>
                              <a href="case-studies/6-pack-promise-plus.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText">
                                 <span class="poppinsSemiboldFont font30" style="color:#000;">Featured app</span>
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">on app store</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;">No.#1 News Paper app in India</span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">1 Million +</span>
                                 <span class="poppinsSemiboldFont font30" style="color:#000;">downloads</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;">& still counting...</span>
                              </p>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #000"><b>4.9/5.0 on Clutch review</b></span>
                                 <div class="icon-block">
                                    <ul style="margin-left: -9px; float: left !important; margin-top: 55px;">
                                       <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                       <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                       <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-cell purpleBg" style="background: #fff;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-story-item" data-indicate="ssindicate3">
               <div class="table">
                  <div class="table-cell" style="background:#1866B1;" >
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 whitetext">Lazada</h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20" style="color:#fff;">Lazada provides customers with an incomparable online shopping experience. With mobile applications and web access, multiple payment methods including cash-on-delivery, extensive customer care and free returnsand retailers with simple and direct access to approximately 550 million consumers in six countries through one retail channel.</p>
                              <a href="mobile-portfolio/inner-citadel.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText">
                                 <span class="poppinsSemiboldFont font30" >Featured app</span>
                                 <span class="section-subtitle poppinsMediumFont">on app store</span>
                                 <span class="section-description poppinsRegularFont">in 'Shopping Apps'</span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont">50 Million +</span>
                                 <span class="poppinsSemiboldFont font30">downloads</span>
                                 <span class="section-description poppinsRegularFont">& still counting...</span>
                              </p>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #fff"><b>5.0/5.0 on Appfirms review</b></span>
                              </div>
                              <div class="icon-block">
                                 <ul style="margin-left: -9px; float: left !important; margin-top: 55px;">
                                    <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                    <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                    <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-cell purpleBg" style="background:#1866B1;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-story-item" data-indicate="ssindicate4">
               <div class="table">
                  <div class="table-cell">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 blacktext">Coca Cola</h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20 blacktextp">Appsquadz developed the KoM Survey mobile application for coca cola which enables efficient surveys for the company and helps enhance operation.</p>
                              <a href="mobile-portfolio/creator.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText">
                                 <span class="poppinsSemiboldFont font30" style="color:#000;">Survey App</span>
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">on app store</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;">in 'Best New Apps'</span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont" style="color:#000;">European Design</span>
                                 <span class="poppinsSemiboldFont font30" style="color:#000;">Award Winner</span>
                                 <span class="section-description poppinsRegularFont" style="color:#000;"></span>
                              </p>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #000"><b>5.0/5.0 on GoodFirms review</b></span>
                              </div>
                              <div class="icon-block">
                                 <ul style="margin-left: -9px; float: left !important; margin-top: 55px;">
                                    <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                    <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                    <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-cell purpleBg" style="background: #fff;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-story-item" data-indicate="ssindicate5" style="background:#1866B1;">
               <div class="table" style="margin-top: -28px;">
                  <div class="table-cell" style="background:#1866B1;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-offset-2">
                              <h4 class="purpleText section-subtitle poppinsMediumBold margin-bottom20 whitetext">Chalklit</h4>
                              <p class="opensanseRegularFont text111 section-description margin-bottom20" style= "color: #fff">AppSquadz developed a mobile applicationwith the name Chalklit which again is a e-learning platform but for teachers. This applications helps teachers enhance their skills and promotes innovative teaching and refined knowledge.</p>
                              <a href="mobile-portfolio/in-my-diary.html" class="pinkBg whiteText rounded-btn">App details</a>
                              <p class="success-point whiteText">
                                 <span class="poppinsSemiboldFont font30">$1.2Million Funding by Google</span>
                                 <span class="section-subtitle poppinsMediumFont">Teacher's Traning App</span>
                                 <span class="section-description poppinsRegularFont"></span>
                              </p>
                              <p class="success-point whiteText">
                                 <span class="section-subtitle poppinsMediumFont">Teacher Training Partner of</span>
                                 <span class="poppinsSemiboldFont font30">#Delhi SCERT</span>
                                 <span class="poppinsSemiboldFont font30">#GOA SCERT</span>
                              <div class="tm-star">
                                 <ul>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                    <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                 </ul>
                                 <span class="section-description poppinsRegularFont" style="color: #fff"><b>5.0/5.0 on Clutch review</b></span>
                              </div>
                              <div class="icon-block">
                                 <ul style="margin-left: -9px; float: left !important; margin-top: 55px;">
                                    <li><span class="cib-tooltip">Website</span><a href="http://www.thesmartlink.com.au/" target="" title="" class="web-icon"></a></li>
                                    <li><span class="cib-tooltip">iPhone</span><a href="https://itunes.apple.com/au/app/the-smartlink/id1105845010?mt=8" target="" title="" class="apple-icon"></a></li>
                                    <li><span class="cib-tooltip">Android</span><a href="https://play.google.com/store/apps/details?id=au.com.thesmartlink&amp;hl=en" target="" title="" class="android-icon"></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="table-cell purpleBg" style="background:#1866B1;">
                     <div class="container-fluid">
                        <div class="row">
                           <div class="col-md-12 col-md-offset-2 col-lg-6 col-lg-offset-3 col-md-offset-pr-1">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="success-stories-indicator">
               <ul></ul>
            </div>
            <div class="success-screens">
               <img src="js/success-stories/img/mobile-device.png" alt="Mobile device" class="device">
               <div class="ssindicate0 success-screens-item">
                  <img alt="journey icon" src="js/success-stories/img/app-icon0.png" class="app-icon">
                  <img alt="journey screen" src="js/success-stories/img/screen0.png" class="app-screen">
               </div>
               <div class="ssindicate1 success-screens-item">
                  <img alt="aweza icon" src="js/success-stories/img/app-icon1.png" class="app-icon">
                  <img alt="aweza screen" src="js/success-stories/img/screen1.png" class="app-screen">
               </div>
               <div class="ssindicate2 success-screens-item">
                  <img alt="6 pack icon" src="js/success-stories/img/app-icon2.png" class="app-icon">
                  <img alt="6 pack screen" src="js/success-stories/img/screen2.png" class="app-screen">
               </div>
               <div class="ssindicate3 success-screens-item">
                  <img alt="inner citadel icon" src="js/success-stories/img/app-icon3.png" class="app-icon">
                  <img alt="inner citadel screen" src="js/success-stories/img/screen3.png" class="app-screen">
               </div>
               <div class="ssindicate4 success-screens-item">
                  <img alt="creator icon" src="js/success-stories/img/app-icon4.png" class="app-icon">
                  <img alt="creator screen" src="js/success-stories/img/screen4.png" class="app-screen">
               </div>
               <div class="ssindicate5 success-screens-item">
                  <img alt="in my diary icon" src="js/success-stories/img/app-icon5.png" class="app-icon">
                  <img alt="in my diary screen" src="js/success-stories/img/screen5.png" class="app-screen">
               </div>
            </div>
         </section>
      </div>
      <div class="container" style ="background :#fff">
         <div class="in-banner-content-home fadeInUp animated3" >
            <span class="sub_text" style ="color :#000">See how we’ve delivered best results to our smartest clients</span>
            <h1  style ="color :#000" >OUR CASE STUDIES IN DETAIL</h1>
            <p  style ="color :#000">Below are some recently updated case studies involving our web design, mobile app development, eCommerce, <br />on-demand, IoT, wearable, cloud services etc.</p>
         </div>
      </div>
      <div class="clearfix"></div>
      <section class="caseStudySec">
         <div class="row">
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName garb-taxi">
                        <h1 style="font-size:45px;"><b>GRAB TAXI</b></h1>
                        <span style="font-size:30px;margin-top:-10px ;">$700 Million Fund Raised</span>
                        <span style="margin-top:-10px;  font-size:20px;">Aaron Gill , Head of Product</span>
                        <a href="case-study/grab-taxi-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #fff"></div>
               </div>
            </div>
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName eMedicoz">
                        <h1 style="font-size:45px"><b>eMedicoz - DAMS</b></h1>
                        <span style="font-size:30px;margin-top:-10px">No.#1 PG Institute in INDIA</span>
                        <span style="margin-top:-10px;font-size:20px;">Sumer Sethi, Director</span>
                        <a href="case-study/emedicoz-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #1866B1;"></div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName Traveloka">
                        <h1 style="font-size:45px"><b>TRAVELOKA</b></h1>
                        <span style="font-size:30px;margin-top:-10px">Travel Aggregator - 20 Million+ Downloads</span>
                        <span style="margin-top:-10px; font-size:20px;">Dudung Rahmanto , Senior Manager</span>
                        <a href="case-study/traveloka-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #1866B1;"></div>
               </div>
            </div>
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName lovo">
                        <h1 style="font-size:45px;"><b>LOVO - Free Dating</b></h1>
                        <span style="font-size:30px;margin-top:-10px;">10 Million+ Downloads</span>
                        <span style="margin-top:-10px; font-size:20px;">Mario Sorge , Adroid Engineer</span>
                        <a href="case-study/lovoo-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #fff;"></div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName Tupelo">
                        <h1 style="font-size:45px;"><b>TUPELO LIFE</b></h1>
                        <span style="font-size:30px;margin-top:-10px;">No.#1 Health &amp; Fitness App in UAE</span>
                        <span style="margin-top:-10px; font-size:20px;">Sachin Kumar - Chief Technology Officer</span>
                        <a href="case-study/tupelo-life-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #fff;opacity: 0.7;"></div>
               </div>
            </div>
            <div class="col-md-6 col-md-push-6-home">
               <div class="caseSec">
                  <div class="caseImgHome" >
                     <div class="caseName Gullak">
                        <h1 style="font-size:45px"><b>GULLAK - Expense Manager</b></h1>
                        <span style="font-size:30px;margin-top:-10px">2 Million+ Downloads</span>
                        <a href="case-study/gullak-case-study.html" class="viewCaseBtn transtition">Open Case Study</a> 
                     </div>
                  </div>
                  <div class="caseSec_overlay" style=" background-color: #1866B1;"></div>
               </div>
            </div>
         </div>
         <div class="clearfix"></div>
      </section>
      <section class="development-process-block" style="margin-top: -56px;">
         <div class="container">
            <div class="main-content-block rows fadeInUp animated3">
               <h2>AppSquadz Application Development Process</h2>
               <!-- <div class="title-bar">"Our diverse expertise optimizes your app for maximum results"</div> -->
            </div>
         </div>
         <div class="development-tabing-block">
            <div class="tablist-block">
               <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="first-tab active">
                     <div class="center-block"> <a href="#discovery" role="tab" data-toggle="tab"> <i class="search"></i> <br>
                        <span class="transition">Discover</span> </a> 
                     </div>
                  </li>
                  <li role="presentation" class="second-tab">
                     <div class="center-block"><a href="#design" role="tab" data-toggle="tab"> <i class="edit"></i> <br>
                        <span class="transition">Define</span> </a>
                     </div>
                  </li>
                  <li role="presentation" class="third-tab">
                     <div class="center-block"><a href="#release-planning" role="tab" data-toggle="tab"> <i class="list"></i> <br>
                        <span class="transition">Design</span> </a>
                     </div>
                     <div class="process-bar"> <img src="img/process-bar.png" alt="App Development Process"> </div>
                  </li>
                  <li role="presentation" class="fouth-tab">
                     <div class="center-block"><a href="#development" role="tab" data-toggle="tab"> <i class="wrench-tool"></i> <br>
                        <span class="transition">Develop</span> </a>
                     </div>
                  </li>
                  <li role="presentation" class="five-tab">
                     <div class="center-block"><a href="#final-lunch" role="tab" data-toggle="tab"> <i class="paper-plane"></i> <br>
                        <span class="transition"> Deliver</span> </a>
                     </div>
                  </li>
               </ul>
            </div>
            <div class="tab-content">
               <div class="tab-pane active cus-fadeInUp animated3" id="discovery">
                  <div class="container">
                     <div class="main-content-block">
                        <p>Being a round the clock mobile and web application development agency, our process begins with an extensive comprehensive research and planning, strategising along the idea the clients share, which lay the groundwork for every project we develop. To grasp our concept and broaden our horizons we constantly interact with clients and keep validating changes. This helps us align ourselves with their team, leading us to recognise and associate with their business goal such that we deliver a quality service.
                        </p>
                        <div class="btn-block rows"> <a href="Development-Methodology.html" target="_blank" class="comman-btn transition">Read More</a> </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane cus-fadeInUp animated3" id="design">
                  <div class="container">
                     <div class="main-content-block">
                        <p>Never settling for less, we refine each designing detail with a sharp eye. We understand that UX/UI are the reasons for user's delight and disappointment. So, the very next step is to craft pleasing and engaging mobile app designs to produce resourceful interfaces that make sense to businesses and users alike. Look for nothing less than a super-impressive feel wrapped in uber-stunning looks.</p>
                        <div class="btn-block rows"> <a href="Development-Methodology.html" target="_blank" class="comman-btn transition">Read More</a> </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane cus-fadeInUp animated3" id="release-planning">
                  <div class="container">
                     <div class="main-content-block">
                        <p>With an extensive experience of 14 years, we are motivated to cater to the requirements and scope of companies of all sizes and all types. Because we understand that every business has different priorities, resources and timeframes, we generate a plan to deliver on-time, on-budget for each of them. Our release plan says it all- we are upfront with our costs, our time estimates and our value propositions.</p>
                        <div class="btn-block rows"> <a href="Development-Methodology.html" target="_blank" class="comman-btn transition">Read More</a> </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane cus-fadeInUp animated3" id="development">
                  <div class="container">
                     <div class="main-content-block">
                        <p>Our development process includes pairing up the right technology with a profitable solution. Upon finalization of release plan, wireframes, diagrams and other documents, we put up with immunized and clean coding. Swift, Objective-C, Java, WordPress, HTML5, Magento, PHP, Xamarin, PhoneGap, Sencha are some of our pioneer services - we offer under one roof.</p>
                        <div class="btn-block rows"> <a href="Development-Methodology.html" target="_blank" class="comman-btn transition">Read More</a> </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane cus-fadeInUp animated3" id="final-lunch">
                  <div class="container">
                     <div class="main-content-block">
                        <p>For each project, we try to maintain a balance between technical and business approaches as both are equally important for the project's success. Before the final deployment on App Stores, our quality assurance team performs a meticulous and out-and-out quality check so that the final product is error-free. A real-time, meaningful user acceptance testing is performed making sure that the app victoriously handles all required tasks in real-world scenarios.</p>
                        <div class="btn-block rows"> <a href="Development-Methodology.html" target="_blank" class="comman-btn transition">Read More</a> </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div id="industries" class="industries-section ">
         <div class="career-hiring" id="career-hiring">
            <div class="container">
               <div class="main-content-block pdT18">
                  <h2>ONE SQUAD, MANY FOOTINGS</h2>
                  <div class="title-bar">A multi talented team of dedicated innovators</div>
                  <p>We act like your company is our company and the project is our very own. Our clients are very close to our heart and we work like an army to develop what is close to theirs.</p>
               </div>
               <div class=" row text-center marT61 hiring_skilled">
                  <div class="col-sm-3">
                     <div class="career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon ui-ux transition "></span>
                        <h3><b>Taxi Booking &amp; Ride Sharing</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon ui-ux transition "></span>
                              <h3><b>Taxi Booking &amp; Ride Sharing</b></h3> -->
                           <a href="taxi-booking-ride-sharing-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon frontend transition "></span>
                        <h3><b>Education &amp; eLearning</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon frontend transition "></span>
                              <h3><b>Education &amp; eLearning</b></h3> -->
                           <a href="elearning-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon phpDev transition "></span>
                        <h3><b>Dating &amp; Social Networking</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon phpDev transition "></span>
                              <h3><b>Dating &amp;Social Networking</b></h3> -->
                           <a href="social-networking-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon dotnet transition "></span>
                        <h3><b>On Demand Services</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon dotnet transition "></span>
                              <h3><b>On Demand Services</b></h3> -->
                           <a href="on-demand-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon apple transition "></span>
                        <h3><b>Healthcare &amp; Fitness</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon apple transition "></span>
                              <h3><b>Healthcare &amp; Fitness</b></h3> -->
                           <a href="healthcare-fitness-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon android transition "></span>
                        <h3><b>Real Estate &amp; Property</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon android transition "></span>
                              <h3><b>Real Estate &amp; Property</b></h3> -->
                           <a href="real-estate-property-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon nodeDev transition"></span>
                        <h3><b>Food &amp; Beverages</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon nodeDev transition "></span>
                              <h3><b>Food &amp; Beverages</b></h3> -->
                           <a href="food-and-beverages-app-development..html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon anguDev transition"></span>
                        <h3><b>Transport &amp; Logistics</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon anguDev transition "></span>
                              <h3><b>Transport &amp; Logistics</b></h3> -->
                           <a href="transport-logistics-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon javaDev transition"></span>
                        <h3><b>News &amp; Magazine</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon javaDev transition "></span>
                              <h3><b>News &amp; Magazine</b></h3> -->
                           <a href="news-magazine-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class=" career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon ba transition"></span>
                        <h3><b>Travel &amp; Hospitality</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon ba transition "></span>
                              <h3><b>Travel &amp; Hospitality</b></h3> -->
                           <a href="travel-hospitality-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon bde transition"></span>
                        <h3><b>Banking, Finance &amp; Insurance</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon bde transition "></span>
                              <h3><b>Banking, Finance &amp; Insurance</b> </h3> -->
                           <a href="banking-finance-app-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-3">
                     <div class="career-text imghvr-hinge-up career-text-index">
                        <span class="careerIcon qa transition"></span>
                        <h3><b>Event &amp; Tickets</b></h3>
                        <div class="figcaption">
                           <!-- <span class="careerIcon qa transition "></span>
                              <h3><b>Event &amp; Tickets</b></h3> -->
                           <a href="event-tickets-portal-development.html" class="apply_btn transition">More Info</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="business-requir-detail gray-gradient2">
            <div class="container">
               <div class="row">
                  <div class="col-md-9 col-md-offset-1">
                     <div class="col-md-8">
                        <h3>Translate your vision into an exciting product.</h3>
                        <p>The First Step is Easy!</p>
                     </div>
                     <div class="col-md-4">
                        <div class="btnRow rows"> <a href="javascript:void(0)" class="bcm_btn transition cs_req_btn">Request a quote</a> </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--our Portfolios on index page-->  
      <section class="home-portfolio-block">
         <div class="main-content-block fadeInUp animated3">
            <h2>Let our work speak for itself</h2>
            <!-- <div class="title-bar"></div> -->
         </div>
         <div id="w">
            <br>
            <div class="container">
               <div id="port_modal"> </div>
               <!--22jan-->
               <!-- <div class="main-content-block fadeInUp animated3">
                  <h1>Our clients</h1>
                  </div> -->                
               <div class="crsl-items fadeInUp animated3" data-navigation="navbtns">
                  <div class="crsl-wrap">
                     <?php foreach($results_app_list as $result_app_list){        ?>
                     <div class="crsl-item">
                        <div class="mobile-porfolio-grid transition round10" data-id="<?php echo $result_app_list['id'];?>">
                           <!--portfolio-->
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
                                    <ul>
                                       <center>
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
      <div class="full-portfolio-block">
         <div id="grid_Model" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
               <div class="modal-content">
                  <section class="page1 slide work selected" id="slide-work-1" data-id="1" style="top: 0px; opacity: 1;">
                     <div id="portfolio_background" class="slide1 slide_back">
                        <div class="container">
                           <div class="row">
                              <div class="col-md-5">
                                 <div class="slide_detail">
                                    <div class="study_title"> <span id="portfolio_app"> </span> / <span id="portfolio_indus"> </span></div>
                                    <div class="slidTitile" id="portfolio_short_desc"></div>
                                    <div class="category-tag" id="port_tags"></div>
                                    <a href="#" class="view_casestudy" target="_blank" style="display:none !important;" id="port_casestudy">View Casestudy
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </a>
                                    <div class="case_app_icon1">
                                       <ul id="port_url"></ul>
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
      <section id="overflow-slide_5" class="project-delivered-section blue-bg">
         <div class="container" id="ktestimonialTextDiv">
            <!-- <div class="loader center-sec">Loading...</div> -->
         </div>
         <section class="web_disigner">
            <div class="main-content-block fadeInUp animated3">
               <h2>CLIENTS SPEAK</h2>
               <div class="title-bar">Read success stories of our esteemed clients straight from them</div>
            </div>
            <div class="web_disigner_contain">
               <div class="container">
                  <div class='row'>
                     <div class='col-md-12'>
                        <div class="carousel slide media-carousel" id="media">
                           <div class="carousel-inner">
                              <?php
                                 $records = count($result);
                                 //$main_div = round($records/6);
                                 $main_div = round($records/6);
                                 $active = "active";
                                 $indexing = 0; 
                                   // for($i=1;$i<$main_div+1;$i++){  
                                 for($i=1;$i<$records;$i++){
                                 
                                   
                                  // if($i==1){
                                    // $indexing = 0; 
                                  // }else{
                                    // $indexing = $indexing+5; 
                                      // }      
                                  ?>    
                              <div class="item  <?php echo $active; ?>">
                                 <div class="row">
                                    <div class="col-md-4 padtop30">
                                       <center>
                                          <div class="parent_circle">
                                             <?php $padtop = 0;
                                                $class = "clint-profile";        
                                                for($j=1;$j<7;$j++){
                                                 $padtop++;          
                                                if($j%2==0){
                                                if($class == "clint-profile"){
                                                  $class = "clint-profile-large";
                                                }else{
                                                  $class = "clint-profile";
                                                }
                                                }         
                                                ?>
                                             <a href="survay.php?id=<?php echo $result[$indexing]['id'];?>">
                                                <!--22 jan-->
                                                <div class="parent_circle_contain">
                                                   <div class="<?php echo $class; ?>">
                                                      <img src="uploads/client_profile/<?php echo $result[$indexing]['client_profile']; ?>">
                                                   </div>
                                                   <div class="clints-reviews">
                                                      <br>
                                                      <div class="tm-project-name fbold khichke-head"><?php echo $result[$indexing]['client_name']; ?></div>
                                                      <div class="tm-client-post fsemibold khichke-des"><?php echo $result[$indexing]['client_company_name']; ?>, <?php echo $result[$indexing]['designation']; ?></div>
                                                      <div class="tm-star khichke-rate rate-index">
                                                         <ul>
                                                            <?php for($i=0;$i<$result[$indexing]['rating'];$i++){?>
                                                            <li> 
                                             <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                                             <?php }?>
                                             </ul>
                                             </div>
                                             <div class="tm-project-discription discription-height">
                                             <p class="flight">
                                             <span>"</span> <?php echo $result[$indexing]['review_description']; ?><span>"</span>         
                                             </p>
                                             </div> <?php  if($result[$indexing]['linkedin_link']){?>
                                             <a href="<?php echo $result[$indexing]['linkedin_link'];?>">
                                             <img src="img/linked_in.png" width="80px" height="20px" aria-hidden="true">
                                             </a>
                                             <?php } ?>
                                             </div>
                                             </div>  
                                             </a>                                                                                                                              <!--22 jan-->
                                             <?php 
                                                $indexing++;         
                                                if($padtop==1){
                                                echo "<br>";
                                                }else if($padtop==2){
                                                $padtop=0;
                                                echo '</div></center></div><div class="col-md-4 padtop30"><center><div class="parent_circle">';
                                                }
                                                if(!isset($result[$indexing])){
                                                break;
                                                }
                                                } ?>
                                             <br>
                                          </div>
                                       </center>
                                    </div>
                                 </div>
                              </div>
                              <?php $active = "actived";
                                 if(!isset($result[$indexing+1])){
                                  break;
                                 }        
                                 } ?>
                           </div>
                           <a data-slide="prev" href="#media" class="left carousel-control">‹</a>
                           <a data-slide="next" href="#media" class="right carousel-control">›</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </section>
      </a>
      <div class="clearfix"></div>
      <!-- appsquadz slider -->
      <section class=press-release>
         <div class=container>
            <div class="main-content-block rows fadeInUp animated3">
               <h2>Proud Releases</h2>
               <div class="title-bar">We have been featured numerously on the best Known Platforms.</div>
            </div>
            <ul>
               <li>
                  <div class=media_logos>
                     <img src=img/featured/1.png alt="contract IQ">
                     <img src=img/featured/2.png alt="Angel List">
                     <img src=img/featured/3.png alt="Youth Connect">
                     <img src=img/featured/4.png alt="Your Story">
                     <img src=img/featured/5.png alt="Crunch Base">
                     <img src=img/featured/6.png alt="Start Up">
                     <img src=img/featured/7.png alt="Start Up Grind">
                     <img src=img/featured/8.png alt="up work">
                     <!--<img src=assets/images/recent/featured/9.png alt=Elance>-->
                     <img src=img/featured/appfutura-logo.png alt="AppFutura">
                     <img src=img/featured/11.png alt="Clutch Firms">
                     <img src=img/featured/12.png alt="Good Firms">
                     <img src=img/featured/app.png alt="App Firms"> 
                  </div>
               </li>
            </ul>
         </div>
         <div class=clearfix></div>
      </section>
      <!-- footer section -->
      <section id="pop-scroll" class="get-in-touch-section top-bofu">
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <?php include('include/footer.php'); ?>      
      <?php include('include/globaljs.php'); ?>      
      <script type="text/javascript" src="./js/pages/index.js"></script>
   </body>
</html>