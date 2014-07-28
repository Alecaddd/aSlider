(function ( $ ) {

	$.fn.aslider = function( options ) {
	
		//crete the timer variable to store the setInterval function
        this.timer;
		
		//hide all the slides except the first one
		this.find("div.slide:gt(0)").hide();
		
		//add a class "active" to the first slide
		this.find("div.slide:eq(0)").addClass('active');
		
        // register the options based on the data attributes.
        var settings = $.extend({
        	//data-speed="3000" data-wait="1000" data-preview="yes" data-dots="yes"
            speed: 500,
            wait: 3000,
            preview: false,
            dots: false
        }, options );
		
		//duplicate selector
		var _ = this;
		
		//store the amount of slides
        var tot = _.find('div.slide').length;
        
        var firstClass = '';
        var dotNext = '';
        var slideNext = '';
                
        //cross fade to the next slide
        this.nextSlide = function() {
        
        	dotNext = _.find('div.active').next('div.slide').attr('id');
        	$('.dot[data-slide="'+dotNext+'"]').addClass('active').siblings().removeClass('active');
        	
			_.find('div.active').stop().
			fadeOut(settings.speed).removeClass('active').
			next('div.slide').fadeIn(settings.speed).addClass('active').
			end().appendTo(this);
			
        }
        
        //cross fade to the previous slide
        this.prevSlide = function() {
        	
        	//check if a previsou element exists, otherwise prepend the last element
        	if ( _.find('div.active').prev('div.slide').length == 0 ) {
				
        		_.find('div.slide:last-child').insertAfter('.aslider-next');
        		
        	}
        	
        	dotNext = _.find('div.active').prev('div.slide').attr('id');
        	$('.dot[data-slide="'+dotNext+'"]').addClass('active').siblings().removeClass('active');
        		
			_.find('div.active').stop().
			fadeOut(settings.speed).removeClass('active').
			prev('div.slide').fadeIn(settings.speed).addClass('active');
			
        }
        
        //generate the navigation arrows
        this.navArrows = function () {
	        
	        _.prepend('<a class="aslider-nav aslider-prev" data-call="prevSlide" data-preview="prev"><i class="fa fa-angle-left"></i></a><a class="aslider-nav aslider-next" data-call="nextSlide" data-preview="next"><i class="fa fa-angle-right"></i></a>');
	        
        }
        
        //preview slide function
        this.previewSlide = function(slide) {
	        
	        if( slide=='prev' ){
				_.find('div.slide:last-child').find('img').clone().
				insertAfter('.aslider-'+slide).addClass('slide-preview preview-'+slide).animate({right:'90%'},200);
			} else if( slide=='next' ){
				_.find('div.active').next('div.slide').find('img').clone().
				insertAfter('.aslider-'+slide).addClass('slide-preview preview-'+slide).animate({left:'90%'},200);
			}
			
			_.find('.aslider-'+slide).on('mouseleave' , function() {
				if( slide=='prev' ){
					$('.slide-preview').animate({right:'100%'},200, function() { this.remove(); });
				} else if( slide=='next' ){
					$('.slide-preview').animate({left:'100%'},200, function() { this.remove(); });
				}
			});
	        
        }
        
        this.activeDots = function () {
        	
        	if( tot > 0 ){
	        	
	        	$('<div class="dots"></div>').insertAfter(this);
	        	
	        	$('div.slide').each(function( index ) {
	        		if (index==0) { firstClass = ' active'; }else{ firstClass = ''; }
	        		$('.dots').append('<a class="dot'+firstClass+'" data-slide="'+$(this).attr('id')+'"></a>');
	        	});

	        	$('.dot').on('click',function(){
	        		
	        		clearInterval(timer);
		        	
		        	$(this).addClass('active').siblings().removeClass('active');
		        	
		        	slideNext = $(this).data('slide');
		        	
		        	_.find('div.active:not(#'+slideNext+')').stop().fadeOut(settings.speed).removeClass('active');
					_.find('div#'+slideNext+':not(.active)').fadeIn(settings.speed).addClass('active').prevAll('div.slide').appendTo(_);
		        	
	        	});
	        	
        	}
        	
        }
		
		this.startTimer = function() {
	
		    timer = setInterval(function() {
		    
		    	_.nextSlide();
			    
			},  settings.wait);
			
		}
		
		//on hover clear the interval and stop the slider
		this.hover(function(ev){ clearInterval(timer); }, function(ev){ _.startTimer(); });
		
		//auto start
		_.startTimer(); _.navArrows();
		
		//call the navigation functions on click
		_.find('.aslider-nav').on('click' , function() {
			
			$.isFunction(_[$(this).data('call')]) && _[$(this).data('call')]();
			
			if( settings.preview == true ) {

				$('.slide-preview').fadeOut(200, function() { this.remove(); });
			
			}
			
		});
		
		//if preview is true, show the next/prev slide preview
		if( settings.preview == true ) {
			
			_.find('.aslider-nav').on('mouseenter' , function() {
				_.previewSlide( $(this).data('preview') );
			});
			
		}
		
		if( settings.dots == true ) {
			
			_.activeDots();
			
		}
 
    };

	$('[data-slide="aslider"]').each(function() { 
		$(this).aslider({
            speed: $(this).data('speed'),
            wait: $(this).data('wait'),
            preview: $(this).data('preview'),
            dots: $(this).data('dots')
		}); 
	});
 
}( jQuery ));