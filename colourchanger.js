/****************************
 colourchanger.js

 Script to change the 
 colours of a repo (data.uel) 
 depending on the eprints.type 
 (in this case "collections")

 Could easily be adapted to 
 recolour based on other 
 metadata.

*****************************/
var j = jQuery.noConflict();

var colour1 = "#8B00A3";
var colour2 = "#700084";

j(document).ready(function () {

	if (j("meta[name='eprints.type']").attr("content") == "collection"){ 
		j('#main_title h1').attr('style', 'background-color: '+colour1+'!important');
		j('.btn-docklands-prime').attr('style', 'background-color: '+colour1+'!important');
		j('.btn-docklands-prime').mouseover(function(){
			j(this).attr('style', 'background-color: '+colour2+'!important');
		});
		j('.btn-docklands-prime').mouseout(function(){
                        j(this).attr('style', 'background-color: '+colour1+'!important');
                });     
		j('#summary_downloads .panel-docklands-prime .panel-heading').attr('style', 'background-color: '+colour1+'!important');

		j('.docklands_footer').attr('style', 'border-color: '+colour2+'!important');
	};

});
