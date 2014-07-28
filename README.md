#aSlider
Super light jQuery slider controlled via Data Attributes

### By Alessandro Castellani, [Alecaddd](http://alecaddd.com/) 2014

This is a plugin based on jQuery which allows you to insert a content carousel inside your web page and easily control it via HTML data attributes 

**aSlider** uses [jQuery 2.0.0](http://code.jquery.com/jquery-2.0.0.min.js "jQuery") and a bunch of icons from [Font-Awesome v4.1](//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css "Font Awesome")

[Try the Demo](http://www.alecaddd.com/code-spellbook/aSlider/ "Demo")

## Getting Started
* Download the whole package and upload it on your server
* You can remove the img/ folder or use it to store your files
* Past the HTML code inside your site

## Documentation

1. HTML syntax.

    ```html
    <div class="aslider">
		<div id="s1" class="slide">
    	 	<img src="your-image.jpg">
    	 	<div class="caption"><h2>Your Title</h2><p>your description.</p></div>
			<a href="#">your link</a>
		</div>
		<div id="s2" class="slide">
    	 	<img src="your-image.jpg">
    	 	<div class="caption"><h2>Your Title</h2><p>your description.</p></div>
			<a href="#">your link</a>
		</div>
		<div id="s3" class="slide">
    	 	<img src="your-image.jpg">
    	 	<div class="caption"><h2>Your Title</h2><p>your description.</p></div>
			<a href="#">your link</a>
		</div>
    </div>
    ```
    
2. Activate the slider.

	```html		
    <div class="aslider" data-slide="aslider"> <!-- call the function and initialize the slider -->
	```
	
3. Control the available options.

	```html		
    <div class="aslider" data-slide="aslider" data-speed="500" data-wait="3000" data-preview="true" data-dots="true"> 
	```
	* **speed:** Control the duration of the cross fade transition effect _(in milliseconds)_
	* **wait:** Control the waiting time between the transitions _(in milliseconds)_
	* **preview:** Activate/Deactivate the visualization of a portion of the next slide during the arrows mouseover _(bool)_
	* **dots:** Activate/Deactivate the visualization of the navigation dots _(bool)_

### IE support

Sorry, obsolete browsers like IE 6,7 and 8 are not supported

#### Help

If you have some trouble please let me know <castellani.ale@gmail.com>
