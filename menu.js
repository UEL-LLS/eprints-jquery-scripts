/**************************
 Script to change eprint  
 login menu to bootstap 
 nav-stacked
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//left hand side menu. Addes the classes needed for bootstrap to style the menu 
	j('#ep_tm_menu_tools, .ep_tm_key_tools').addClass('nav nav-pills nav-stacked');
	//menu manipluation and collapse stuff
	//if on side menu {
	j('#main_page .ep_tm_key_tools').removeClass('ep_tm_key_tools').addClass('navbar-collapse collapse').attr('id','ep_menu');
	//}else {
	j('header .ep_tm_key_tools').removeClass('ep_tm_key_tools').addClass('nav navbar-nav navbar-right').attr('id','ep_menu_top');
	//}
	j('nav #ep_menu li:not(:first-child)').wrapInner('<a style="cursor:default;color:#555 " href="#"></a>');
	j('nav #ep_menu li:first-child').wrapInner('<div class="well well-sm"></a>');
	j('header #ep_menu_top li:first-child').remove();

});
