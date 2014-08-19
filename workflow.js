/**************************
 Script to make the
 workflow into aa more 
 bootstrap style
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	j("main > div > form[action='/cgi/users/home#t']").addClass('row');
	j('.ep_form_field_input').removeClass("col-md-5").addClass('col-md-12');
	//j("main > div > form[action='/cgi/users/home#t'] textarea, main > div > form[action='/cgi/users/home#t'] select, main > div > form[action='/cgi/users/home#t'] table.ep_form_input_grid input").addClass('form-control');
	//j("main > div > form[action='/cgi/users/home#t'] table.ep_form_input_grid input").css("margin","2px");
	

});
