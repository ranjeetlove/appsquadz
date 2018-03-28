(function($){$.fn.sectionsnap=function(options){var settings=$.extend({'delay':100,'selector':".section",'reference':.9,'animationTime':400,'offsetTop':0,'offsetBottom':0},options);var $wrapper=this,direction='down',currentScrollTop=$(window).scrollTop(),scrollTimer,animating=false;var updateDirection=function(){if($(window).scrollTop()>=currentScrollTop)
direction='down';else
direction='up';currentScrollTop=$(window).scrollTop();}
var getClosestElement=function(){var $list=$wrapper.find(settings.selector),wt=$(window).scrollTop(),wh=$(window).height(),refY=wh*settings.reference,wtd=wt+ refY- 1,$target;if(direction=='down'){$list.each(function(){var st=$(this).position().top;if((st>wt)&&(st<=wtd)){$target=$(this);return false;}});}else{wtd=wt- refY+ 1;$list.each(function(){var st=$(this).position().top;if((st<wt)&&(st>=wtd)){$target=$(this);return false;}});}
return $target;}
var snap=function(){var $target=getClosestElement();if($target){$('.success-story-item').removeClass('active');$($target).addClass('active');var activeIndicat=$('.success-story-item.active').attr('data-indicate');$('.success-screens-item').removeClass('active');$('.success-stories-indicator ul li').removeClass('active');$('.'+ activeIndicat).addClass('active');animating=true;$('html, body').animate({scrollTop:($target.offset().top)},settings.animationTime,function(){window.clearTimeout(scrollTimer);animating=false;});}}
var windowScroll=function(){if(animating)
return;var st=$(window).scrollTop();if(st<settings.offsetTop)
return;if(st>($("html").height()- $(window).height()- settings.offsetBottom))
return;updateDirection();window.clearTimeout(scrollTimer);scrollTimer=window.setTimeout(snap,settings.delay);}
$(window).scroll(windowScroll);return this;};})(jQuery);