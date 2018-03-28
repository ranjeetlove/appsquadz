<?php
error_reporting(1);
include("config.php");
include("get_data.php");
$base_path = getcwd(); 
$base_url = "http://localhost/appsquadz/";
$path=$_SERVER['SCRIPT_FILENAME'];
// $path=explode('/',$_SERVER['SCRIPT_FILENAME']);
// array_pop($path); 
// $final =implode('/',$path); 
// echo '<pre>'; print_r($_SERVER);
$final=$base_url;
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "appsquadz_main_db1";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
//echo "working";
//$query = "SELECT app_reviews.*,app_list.logo,app_validaters.id as val_id FROM app_reviews join app_list on app_list.id= app_reviews.app_id join app_validaters on app_reviews.validated_by= app_validaters.id order by app_reviews.id desc";
$query = "SELECT * from app_reviews where  status=3 order by id desc";
$result = $conn->query($query);
$count=mysqli_num_rows($result);
while ($project = $result->fetch_array(MYSQLI_ASSOC)) {
    $testimonals[] = $project;
    //echo $project;
}
//echo '<pre>'; print_r($testimonals); die;
    ?>
<?php include 'header/header.php';?>
 <section class="innerpage-banner selected custom-banner" >
         <div class="container">
            <div class="in-banner-content">
               <h1>The Highest Standards. The Happiest Clients.</h1>
               <p>We love our clients and they love us back. Hear what they’re saying…</p>
               <div class="tm-star">
                      <ul>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
              <span class="section-description poppinsRegularFont" style="color: #fff ; font-size:20px"><b> &nbsp; Clutch Review</b></pan>
                       </ul>
                       <ul>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
              <span class="section-description poppinsRegularFont" style="color: #fff ; font-size:20px"><b> &nbsp; Goodfirms Review</b></span>
                       </ul>
                                     <ul>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
              <span class="section-description poppinsRegularFont" style="color: #fff ; font-size:20px"><b> &nbsp; Appfirms Review</b></span>
                       </ul>
                                     <ul>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
                        <li> <a href="javascript:void(0)" class="active"><i class="fa fa-star" aria-hidden="true"></i></a> </li>
              <span class="section-description poppinsRegularFont" style="color: #fff ; font-size:20px"><b> &nbsp; AppFutra Review</b></span>
                       </ul>
                 </div>
            </div>

         </div>
      </section>
        <section class="support-content-block blue-bg process-page selected">
            <div class="container">
                <div class="col-md-12">
                    <div class="process-blue-block fadeInUp animated3">
                        <div class="row">
                            <h2>Trusted by startups, enterprises &amp; businesses in every industry, across the world</h2>
                            <p>We have impressed millions of our respected customers with our project management, designs, development, solutions, services, professionals, technologies, culture, quality, communication, leadership, and business acumen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="nd-testimonial-section">
            <div class="container">
                <div class="main-content-block fadeInUp animated3">
                    <h2>If you need us, we’re really the right people to help.</h2>
                    <div class="title-bar">READ THE REAL SUCCESS STORIES IN OUR CLIENT’S WORDS</div>
                </div>
                <div class="row" id="survey_testimonials_div">
                    <div class="row" id="survey_testimonials_div">
                        
					</div>
                </div>
                <div id="load_video_popup_div">
                </div>
                <div class="col-md-12 text-center load-more-btn " name="btn_more" id="loadmore_data" style="margin-bottom:10px;">
                    <a href="javascript:void(0)" style="text-decoration:none" class="fbold transition active">
                        Load more <span><i class="loader">Loading...</i></span>
                    </a>
                </div>
				<br>
            </div>
            <br>
        </section>

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
                           <div class="emailid-block rows">
                              <a href="cdn-cgi/l/email-protection.html#681b09040d1b280307061b1c09061c01060e07460b0705" class="transition" tabindex="-1">
                              <i class="email-icon"></i> <span class="small-text rows">mail to our sales department</span>
                              <span class="large-text rows" style=" font-size: 17px; line-height: 36px;"><span class="__cf_email__" data-cfemail="c1b2a0ada4b281aaaeafb2b5a0afb5a8afa7aeefa2aeac">sales@appsquadz.com</span></span>
                              </a>
                           </div>
                           <div class="emailid-block voicemsg rows marT20">
                              <a href="skype:sales.appsquad?call" class="transition" tabindex="-1"><i class="skype-icon"></i> <span class="small-text rows">Our Skype Id</span> <span class="large-text rows" style=" font-size: 17px; line-height: 38px;">sales.appsquadz</span> </a>
                           </div>
                           <div class="emailid-block voicemsg rows marT20">
                              <a href="https://calendly.com/appsquadz/meeting" class="transition" tabindex="-1"><i class="skype-icon"></i> <span class="small-text rows">Let's plan a quick call</span> <span class="large-text rows" style=" font-size: 17px; line-height: 38px;">Schedule a Meeting</span> </a>
                           </div>
                            <div class="emailid-block voicemsg rows marT20">
                              <a href="skype:sales.appsquadz?call" class="transition" tabindex="-1"><i class="skype-icon"></i> <span class="small-text rows">Our Phone Number<span> <span class="large-text rows" style=" font-size: 15px; line-height: 30px;">+91-9717270746 (India) <br>+1-877-659-9068(US)<br> +44-203-807-3810(UK)<br> +91-9717270746(UAE)<br>+66-0946430863(Thailand)</span> </span></span></a>
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
                                 <li><i></i>No obligation quote.</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-7">
                        <div class="from-right-block rows">
                           <form action="" id="contactForm" name="contactForm" onsubmit="return validateGetintouch()" enctype="multipart/form-data" novalidate="" method="post" accept-charset="utf-8">
                              <div style="display:none;"><input type="hidden" name="_method" value="POST"></div>
                              <input type="hidden" name="data[Contacts][country]" value="India" id="ContactsCountry"><input type="hidden" name="data[Contacts][city]" value="Gurgaon" id="ContactsCity"><input type="hidden" name="data[Contacts][zip]" value="" id="ContactsZip"><input type="hidden" name="data[Contacts][state]" value="" id="ContactsState"><input type="hidden" name="data[Contacts][ip]" value="" id="ContactsIp"><input type="hidden" name="data[Contacts][type]" value="footer" id="ContactsType"><input type="hidden" name="data[Contacts][calling_code]" value="+91" id="ContactsCallingCode"><input type="hidden" name="data[Contacts][source]" value="" id="ContactsSource"> 
                              <div class="form-group input-effect">
                                 <div>
                                    <i class="name"></i>
                                    <input name="data[Contacts][name]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="text" id="ContactsName"> <label>Name*</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect">
                                 <div>
                                    <i class="email"></i>
                                    <input name="data[Contacts][email]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="email" id="ContactsEmail"> <label>Email address*</label>
                                    <span class="focus-border"></span>
                                 </div>
                              </div>
                              <div class="form-group input-effect mobile-number">
                                 <input type="text" class="effect-16 form-control mobile-country" id="mobilenumber" tabindex="-1">
                                 <div class="phonenumber-filed">
                                    <input name="data[Contacts][phone]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="tel" id="ContactsPhone"> <label>Phone Number*</label>
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
                                    <input name="data[Contacts][skypeid]" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" type="text" id="ContactsSkypeid"> <label>Skype ID/Whatsapp No.</label>
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
                                    <input name="quote_files[]" id="quote_files" type="file" multiple="" tabindex="0">
                                    <p><span>+</span>Add file</p>
                                    <div id="progress-wrp">
                                       <div class="progress-bar"></div>
                                       <div class="status"></div>
                                    </div>
                                 </div>
                                 <div class="checkbox">
                                    <div class="cus-control-group">
                                       <label class="cus-control cus-control--checkbox">
                                       Yes, send me a Mutual NDA (Non-Disclosure Agreement)
                                       <input type="checkbox" name="data[Contacts][nda]" tabindex="0" value="1" id="ContactsNda"> <span class="cus-control__indicator"></span>
                                       </label>
                                    </div>
                                 </div>
                                 <div class="add-file-output" id="output"></div>
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
                              <a href="app_price_calculator.html" class="latest_work_btn headerestimate" tabindex="-1">Get an Estimate of your app</a>
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
        <div class="page_top"> <a href="#top"></a> </div>
        <script>
            var pageNumber = 1;
            var totalCount = parseInt('<?php echo $count;?>');
            $(document).ready(function () {
                $('#loadmore_data a').addClass('active');
                loadSurveyTestimonials();

                $("#loadmore_data").click(function () {
                    loadSurveyTestimonials();
                });
            });

            function loadSurveyTestimonials() {
                var actionurl = "http://localhost/appsquadz/load_data.php?page=" + pageNumber;
                $.ajax({
                    type: "POST",
                    url: actionurl,
                    beforeSend: function () {
                        $('#loadmore_data a').addClass('active');
                    },
                    success: function (data) {
                        if (data != 'bottom_reached') {
                            $('#survey_testimonials_div').append(data);
                            if (totalCount > $('.count-list').length) {
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


        <div class="page_top"> <a href="javascript:void(0);" id="gotop"></a> </div>



        <div class="clearfix"></div>

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
                        <a href="hire-dedicated-android-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Android App Developer</a> 
                        <a href="hire-dedicated-ios-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire iPhone App Developer</a> 
                        <a href="hire-dedicated-ipad-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire iPad App Developer</a>
                        <a href="hire-dedicated-cross-platform-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Hybrid App Developer</a>
                        <a href="hire-dedicated-html-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire HTML Developer</a>
                        <a href="hire-dedicated-php-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire PHP Developer</a>

                         <a href="hire-dedicated-paython-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Python Developer</a>
                          <a href="hire-dedicated-django-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Python Django Developer</a>
                        <a href="hire-dedicated-asp-dot-net-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire .Net Developer</a>
                        <a href="hire-dedicated-java-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Java Developer</a>
                        <a href="hire-dedicated-magento-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Magento Developer</a>
                        <a href="hire-dedicated-wordpress-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Wordpress Developer</a>
                        <a href="hire-dedicated-drupal-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Drupal Developer</a>
                        <a href="hire-dedicated-ruby-on-rails-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Ruby on Rails Developer</a>
                        <a href="hire-dedicated-node-js-developer.html" class="email-link transition" tabindex="-1"><i></i><span></span>Hire Node JS Developer</a>                      
                        
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

            $(document).on('click', '#get-the-news-open', function () {

                loaderSubmit.removeAttr('disabled');
                loaderSubmit.attr('value', normaltxt);
                $('#newsletter_email').removeClass('newsletter_form_error');
                $('#newsletter_email').val('');
                $('#newsletter_email').focus();
            });

            $(document).on('click', 'input#subscribe_now', function () {

                var newsletter_email = $('#newsletter_email').val();
                var email_re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
                if (!email_re.test(newsletter_email) || !newsletter_email.trim()) {
                    $('#newsletter_email').addClass('newsletter_form_error');
                    $('#newsletter_email').focus();
                    return false;
                } else {
                    $('#newsletter_email').removeClass('newsletter_form_error');
                }

                var recapcharesponse = grecaptcha.getResponse(CRecaptchaField3);
                if (!recapcharesponse) {
                    $('#RecaptchaField3').addClass('newsletter_form_error2');
                    return false;
                } else {
                    $('#RecaptchaField3').removeClass('newsletter_form_error2');
                }

                var error = $('#newsletter_error');
                var form = $('#site-searchform1');

                var frm_serialize_data = jQuery("#site-searchform1").serialize();
                var action = "contacts/newsletter.html";
                $.ajax({
                    type: "POST",
                    url: action,
                    //data:{email: newsletter_email },
                    data: frm_serialize_data + "&email=" + newsletter_email,
                    beforeSend: function () {

                        loaderSubmit.attr('disabled', 'disabled');
                        loaderSubmit.attr('value', wait);

                        error.hide();
                    },
                    success: function (data) {
                        //console.log(data); 
                        if (data) {
                            //success 
                            //send to thanks-for-subscribe.php
                            //$('#newsletter_email').val(''); 
                            form.attr('action', data);
                            form.submit();
                        } else {
                            error.show();

                            loaderSubmit.removeAttr('disabled');
                            loaderSubmit.attr('value', normaltxt);

                            //alert(data);
                        }
                        //$('#newsletter_email').val(''); 
                    },
                    complete: function () {

                    }
                });
            });
        </script>

        <script type="text/javascript">
            (function () {
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
                app_id: "hfwqvn87"
            };
        </script>
        <script>(function () {
                var w = window;var ic = w.Intercom;if (typeof ic === "function") {
                    ic('reattach_activator');ic('update', intercomSettings);} else {
                    var d = document;var i = function () {
                        i.c(arguments)};
                    i.q = [];
                    i.c = function (args) {
                        i.q.push(args)
                    };
                    w.Intercom = i;
                    function l() {
                        var s = d.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = 'https://widget.intercom.io/widget/hfwqvn87';
                        var x = d.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                    }
                    if (w.attachEvent) {
                        w.attachEvent('onload', l);
                    } else {
                        w.addEventListener('load', l, false);
                    }
                }
            })()
        </script>
		
			<script>
         /*     $(document).ready(function () {
             $(document).on('click', '#loadmore_data', function () {
				  alert("hello"); exit;
          //    var id = $(this).attr('id'); //var id =13;//(this).attr('data-bind'); 
           

            $.ajax({
                url: "load_data.php"
                method: 'POST',
                data: {
                    id: id
                },
                success: function (response) {  //alert(response);                  
                    $("#load").html(response);
                    $("#load_ajax_new_page").append(data);
                }

            });
        });
    });*/
</script>
    </body>

    <!-- Mirrored from www.konstantinfo.com/testimonials.php by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 24 Oct 2017 04:32:39 GMT -->
</html>