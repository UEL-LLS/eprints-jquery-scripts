/**************************
 Script to replace the 
 standard small icon (glyphs) 
 with bootstrap Glyphicon 
 Halflings set 
 (http://glyphicons.com/). 
 A commented link is 
 inserted into your <head> 
 back to the creator. 

 req: bootstrap.css

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {
	j('head').append('<!-- Glyphicon Halflings courtesy of http://glyphicons.com/ -->'); //Just added a little bit of code to your head as requested by bootstrap

	// replaces the img code with spans. Bootstrap sees the classes and adds the glyphicons	
	j('img[src="/style/images/help.gif"]').replaceWith('<span class="glyphicon glyphicon-question-sign"></span>');
	j('img[src="/style/images/required.png"]').replaceWith('<span style="color: #FF8700!important" class="glyphicon glyphicon-exclamation-sign"></span>');
	
});
