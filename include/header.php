<progress id="progressbar" value="0" style="display:none"></progress>
<div id="header-section">
   <div class="start-a-project rq-ud-form closed">
      <div class="start-projectinner">
         <div class="container-fluid"  style="background-color: #005fbb;">
            <div class="col-sm-12">
               <header class="popup-header">
                  <a href="index.php" tabindex="-1"><img src="img/logo.png?1487942963" alt="Logo"></a> 
                  <div class="circCont close-button">
                     <button type="button" class="circle" data-animation="showShadow" data-remove="3000" data-from="req-a-quote"></button>
                  </div>
               </header>
            </div>
         </div>
         <!--current (request quote)-->
         <form  action="contact_us.php" id="get_in_touch" name="get_in_touch" onsubmit="return validateGetintouch()" enctype="multipart/form-data" novalidate="novalidate" method="post" accept-charset="utf-8">
            <div style="display:none;"><input type="hidden" name="_method" value="POST" /></div>
            <div class="container-fluid">
               <div class="row">
                  <div class="col-sm-12  rq-head" style="background-color: #005fbb;">
                     <div class="main-heading section-heading">
                        <div> <img src="img/namaste.png" alt="Namaste AppSquadz" width="60px"> </div>
                        <div class="section-title">
                           <h2>Gets in touch to get the ball rolling</h2>
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
                           <!-- <input type="hidden" name="data[Contacts][country]" value="India" id="ContactsCountry2" /><input type="hidden" name="data[Contacts][city]" value="Gurgaon" id="ContactsCity2" /><input type="hidden" name="data[Contacts][zip]" value="" id="ContactsZip2" /><input type="hidden" name="data[Contacts][state]" value="" id="ContactsState2" /><input type="hidden" name="data[Contacts][ip]" value="" id="ContactsIp2" /><input type="hidden" name="data[Contacts][type]" value="request-quote" id="ContactsType2" /><input type="hidden" name="data[Contacts][calling_code]" value="+91" id="ContactsCallingCode2" /><input type="hidden" name="data[Contacts][source]" value="https://www.appsquadz.com/" id="ContactsSource2" />-->
                           <div class="row">
                              <div class="col-md-12 col-sm-12">
                                 <div class="form-group input-effect">
                                    <div>
                                       <input name="name" class="effect-16 form-control LoNotSensitive"  placeholder="" autocomplete="off" tabindex="0" id="name" type="text" /> <label>Your Name*</label>
                                       <input type="hidden" name="page" value="letstalk">
                                       <input type="hidden" name="by_website" value="New_Appsquadz">
                                       <span class="focus-border"></span>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                 <div class="form-group marT50">
                                    <div class="form-group-country">
                                       <div name="country" id="country_id2" data-input-name="country" data-selected-country="IN" tabindex="-1"></div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                 <div class="form-group input-effect marT50">
                                    <div>
                                       <input name="email" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsEmail2" type="email" /> <label>Your Email*</label>
                                       <span class="focus-border"></span>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                 <div class="form-group input-effect mobile-number marT50">
                                    <input type="telwrwerwrw" name="code"  class="effect-16 form-control mobile-country" id="mobilenumber2" tabindex="-1">
                                    <div class="phonenumber-filed">
                                       <input name="mobile" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsPhone2" type="tel" /> <label>Phone Number*</label>
                                       <span class="focus-border"></span>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-6 col-sm-6">
                                 <div class="form-group input-effect marT50">
                                    <div>
                                       <input name="skype_whatsapp" class="effect-16 form-control LoNotSensitive" placeholder="" autocomplete="off" tabindex="0" id="ContactsSkypeid2" type="text" /> <label>Skype ID/Whatsapp No.</label>
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
                                       <textarea name="message" class="form-control effect-16 LoNotSensitive" onkeyup="textAreaAdjust(this)" tabindex="0" id="ContactsMessage2"></textarea> <label>What’s your project all about?*</label>
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
                                       <input type="checkbox" multiple name="category" value="Enterprise Software Solutions" id="ContactsCategory_1" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Enterprise Software Solutions
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Creating a Mobile App" id="ContactsCategory_2" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Creating a Mobile App
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Web Development" id="ContactsCategory_3" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Web Development
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Dedicated Team Service" id="ContactsCategory_4" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Dedicated Team Service
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="IT Consulting Services" id="ContactsCategory_5" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       IT Consulting Services
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Partnership Opportunities" id="ContactsCategory_7" /><span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Partnership Opportunities
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Enhancing an Existing Product" id="ContactsCategory_6" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Enhancing an Existing Products
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-md-4 col-sm-4">
                                    <div class="checkbox2">
                                       <label>
                                       <input type="checkbox" name="category" value="Enhancing an Existing Product" id="ContactsCategory_6" /> <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                       Others
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="row marT20 rq-select-boxes">
                              <div class="col-sm-6">
                                 <div class="form-group">
                                    <div class="select">
                                       <select name="budget" class="form-control" tabindex="0" id="ContactsBudget2">
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
                                       <select name="preferences" class="form-control" tabindex="0" id="ContactsTimeFrame">
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
                           <div class="form-group upoad-check-option full-block">
                              <div class="row marT60 rq-attech-file">
                                 <div class="col-sm-12">
                                    <div class="form-group">
                                       <div class="uploadFile">
                                          <!-- <input name="files" id="inquire_quote_files" name="file" type="file" class="file-upload" multiple tabindex="0" />-->
                                          <input name="file" name="file" id="inquire_quote_files" class="file-upload" multiple="" tabindex="0" type="file">  
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
                                 <!--new-->
                                 <div class="col-sm-12" style="margin-top:20px">
                                    <div class="checkbox" style="margin-right:130px;">
                                       <div class="cus-control-group">
                                          <label class="cus-control cus-control--checkbox">
                                          <i style="font-color:blue"class="add-file"> Yes, send me a Mutual NDA (Non-Disclosure Agreement)</i>
                                          <input type="checkbox" name="send_nda" tabindex="0" value="1" id="ContactsNda"> <span class="cus-control__indicator"></span>
                                          </label>
                                       </div>
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
                                 <input type="submit" name="submit" value="submit" style="border: none; margin-left: 160px;" class="comman-btn blue-new-btn nextButton" tabindex="0"></input>
                                 <!-- <button type="submit" style="border: none; margin-left: 160px;" name="submit" value="submit" class="blue-new-btn nextButton" tabindex="0">Let&#039;s go!</button> -->
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
                                 <span>(Response Time - 24 Hours)</span>
                              </div>
                              <div class="inquiry-block">
                                 <div class="img hr-inq"></div>
                                 <div class="inqSal">For HR Inquiry</div>
                                 <div class="inqSal"> <a href="email:919717270746">hr@appsquadz.com</a></div>
                                 <ul>
                                    <li class="flag3">
                                       <a href="tel:911204238296">+91-120-4238296</a>
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
                                          <li><a href="investor-relation.html">Investor Relationships</a></li>
                                          <li><a href="partner.html">Partners Relationships</a></li>
                                          <li><a href="Infrastructure.html">Company Profile</a></li>
                                          <li><a href="Infrastructure.html">Our Vision &amp; Mission</a></li>
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
                                          <li><a href="Project-Communication.html.html">Project Communication</a></li>
                                       </ul>
                                    </div>
                                    <div class="sub-menu-sec without-heading">
                                       <div class="menuHeadTitle">&nbsp;</div>
                                       <ul>
                                          <li><a href="testimonials.php">Client Reviews</a> </li>
                                          <li><a href="testimonials.php">Partner Reviews</a> </li>
                                          <li><a href="our-clients.html">Our Clients</a></li>
                                          <li><a href="our-partners.html">Our Partners</a></li>
                                          <li><a href="certifications-awards.html">Awards &amp; Memberships</a> </li>
                                       </ul>
                                    </div>
                                    <div class="sub-menu-sec without-heading">
                                       <div class="menuHeadTitle">&nbsp;</div>
                                       <ul>
                                          <li><a href="media-interviews.html">Press &amp; Media</a></li>
                                          <li><a href="blog/index.php">Our Blog</a></li>
                                          <li><a href="media-interviews.html">Career With Us</a></li>
                                          <li><a href="media-interviews.html">FAQs</a></li>
                                          <li><a href="media-interviews.html">Contact Us</a></li>
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
                                          <li><a href="enterprise-app-development.html">SMEs</a></li>
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
                                          <li><a href="mobile-app-maintenance-support-services.html">Support &amp; Maintenance</a></li>
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
                                       <a href="testimonials.php" class="comman-btn">What Clients Say</a> <br />
                                       <a href="case-study.html" class="comman-btn mt14">View Case Studies</a> 
                                       <a href="case-study.html" class="comman-btn mt14">Portfolio</a> 
                                    </div>
                                    <div class="sub-menu-sec highlight-link show-only-iphone">
                                       <ul>
                                          <li>
                                             <a href="testimonials.php" class="">What Clients Say</a> 
                                          </li>
                                          <li>
                                             <a href="case-study.html" class="">View Case Studies</a> 
                                          </li>
                                          <li>
                                             <a href="case-study.html" class="">Portfolio</a> 
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
                     <a href="portfolios.php" class="transition">Work</a> 
                  </li>
                  <li class="show-tablet">
                     <a href="portfolios.php" class="transition">Work</a> 
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
                           <li itemprop="email"> <a href="testimonials.php"><i class="xfa fa-envelope-ox" aria-hidden="true"></i><span class="__cf_email__" >Testimonials</a> </li>
                           <li itemprop="email"> <a href="portfolios.php"><i class="xfa fa-envelope-ox" aria-hidden="true"></i><span class="__cf_email__" >Our Fresh Work</a> </li>
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
                                             <li><a href="testimonials.php">Client Reviews</a> </li>
                                             <li><a href="testimonials.php">Partner Reviews</a> </li>
                                             <li><a href="our-clients.html">Our Clients</a></li>
                                             <li><a href="our-partners.html">Our Partners</a></li>
                                             <li><a href="certifications-awards.html">Awards &amp; Memberships</a> </li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec without-heading">
                                          <div class="menuHeadTitle">&nbsp;</div>
                                          <ul>
                                             <li><a href="media-interviews.html">Press &amp; Media</a></li>
                                             <li><a href="blog/index.php">Our Blog</a></li>
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
                                    <a href="#"><img src="img/partner/partner.png"><span style="color: #fff;">Partner with us</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/carear.png"><span style="color: #fff;">Career with us</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/clintspeak.png"><span style="color: #fff;">Client Speak</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span></a>
                                 </div>
                                 <div class="celibration" style="float: right;">
                                    <a href="#"><img src="img/partner/celebrate.png"></a>
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
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="iphone-apps-developer.html">iPhone Apps </a></li>
                                             <li class="ssub-menu"> <a href="iphone-application-development.html">iPhone Apps Development</a> </li>
                                             <li class="ssub-menu"> <a href="apple-watch-application-development.html">Apple Watch Apps Development</a> </li>
                                             <li class="ssub-menu"> <a href="iphone-games-development.html">iPhone Games Development</a> </li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="ipad-apps-developer.html">iPad Apps </a></li>
                                             <li class="ssub-menu"> <a href="ipad-apps-development.html">iPad Apps Development</a> </li>
                                             <li class="ssub-menu"> <a href="ipad-games-development.html">iPad Games Development</a> </li>
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
                                             <li class="ssub-menu"> <a href="laravel-web-development.html">Laravel</a> <span>|</span> <a href="php-zend-development.html">Zend</a><span>|</span> <a href="php-yii-development.html">Yii</a><span>|</span> <a href="codeigniter-development.html">CodeIgnitor</a><span>|</span> <a href="cakephp-development.html">CakePHP</a><span>|</span> <a href="symfony-web-development.html">Symfony</a></li>
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
                                             <li class="ssub-menu"><a href="html5-web-development.html">HTML5/CSS </a><span>|</span> <a href="responsive-web-development.html">Responsive Web</a><span>|</span> <a href="psd-to-html5-development.html">PSD to HTML5</a>  </li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a href="microsoft-technologies-development.html">Microsoft Technologis</a></li>
                                             <li class="ssub-menu"><a href="asp-dotnet-development.html">.Net </a><span>|</span> <a href="c-sharp-development.html">C#</a><span>|</span> <a href="sharepoint-development.html">Sharepoint</a></li>
                                          </ul>
                                          <ul class="mt16">
                                             <li><a >Other Services</a></li>
                                             <li class="ssub-menu"><a href="dotnetnuke-development.html">DotNetNuke</a><span>|</span> <a href="salesforce-development.html">Sales Force</a><span>|</span> <a href="parse-development.html">Parse</a><span>|</span> <a href="mysql-development.html">MySql</a><span>|</span> <a href="mango-db-development.html">Mango DB</a></li>
                                          </ul>
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle"><a>Digital Marketing Services</a></div>
                                          <ul>
                                             <li><a href="seo-services.html">SEO Services</a></li>
                                             <li><a href="ppc-campaign-management.html">PPC Campaign Mgmt</a></li>
                                             <li><a href="social-media-marketing.html">Social Media Marketing</a></li>
                                             <!-- <li><a href="seo-packages.html">SEO Packages</a></li> -->
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
                                             <li><a href="pos-rfid-application-development.html">POS(Point of Sale) App-RFID Card</a></li>
                                             <li><a href="amazon-web-services.html">Amazon Web Services (AWS)</a> </li>
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
                                          <a href="testimonials.php" class="comman-btn">What Clients Say</a> <br />
                                          <a href="case-study.html" class="comman-btn mt14">View Case Studies</a> 
                                          <a href="case-study.html" class="comman-btn mt14">Portfolio</a> 
                                       </div>
                                       <div class="sub-menu-sec">
                                          <div class="menuHeadTitle">Solutions</div>
                                          <ul>
                                             <li><a href="ecommerce-solutions.html">eCommerce Solutions</a></li>
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
                                    <a href="#"><img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span></a>
                                 </div>
                                 <div class="partner-with" style="float: left;">
                                    <a href="#"><img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span></a>
                                 </div>
                                 <div class="celibration" style="float: right;">
                                    <a href="#"><img src="img/partner/celebrate.png"></a>
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
                     <a href="#"><img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span></a>
                     </div>
                     <div class="celibration" style="float: right;">
                     <img src="img/partner/celebrate.png">
                     </div>
                     </div>
                     </div>
                     </div>
                     </li>
                     <li>
                        <a href="portfolios.php" class="transition">Portfolio</a> 
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
                     <a href="#"><img src="img/partner/partner.png"> <span style="color: #fff;">Partner with us</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/carear.png"> <span style="color: #fff;">Career with us</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/clintspeak.png"> <span style="color: #fff;">Client Speak</span></a>
                     </div>
                     <div class="partner-with" style="float: left;">
                     <a href="#"><img src="img/partner/portfolio.png"> <span style="color: #fff;">Portfolio</span></a>
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
</div>