(function ( $ ) {

	$.fn.aslider = function( options ) {
		
		//hide all the slides except the first one
		this.find("div.slide:gt(0)").hide();
		
		//add a class "active" to the first slide
		this.find("div.slide:eq(0)").addClass('active');
		
        // register the options based on the data attributes.
        var settings = $.extend({
        	//data-speed="3000" data-wait="1000" data-preview="yes" data-dots="yes"
            speed: 500,
            wait: 3000,
            preview: 'no',
            dots: 'no'
        }, options );
		
		//duplicate selector
		var _ = this;
        
        //cross fade to the next slide
        this.nextSlide = function() {
        
        	console.log('next');
        	
			_.find('div.active').stop().
			fadeOut(settings.speed).removeClass('active').
			next().fadeIn(settings.speed).addClass('active').
			end().appendTo(this);
			
        }
        
        //crete the timer variable to store the setInterval function
        this.timer;
		
		this.startTimer = function() {
	
		    timer = setInterval(function() {
		    
		    	_.nextSlide();
			    
			},  settings.wait);
			
		}
		
		//on hover clear the interval and stop the slider
		this.hover(function(ev){
		
		    clearInterval(timer);
		    
		}, function(ev){
		
		    _.startTimer();
		    
		});
		
		//auto start
		_.startTimer();
 
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