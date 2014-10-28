/**************************
 Blank Script

***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	if (j("meta[name='eprints.type']").attr("content") == "collection"){ 
		j('#main_title h1').attr('style', 'background-color: #B800D8!important');
		j('.btn-docklands-prime').attr('style', 'background-color: #B800D8!important');
		j('.btn-docklands-prime').mouseover(function(){
			j(this).attr('style', 'background-color: red!important');
		});
		j('.btn-docklands-prime').mouseout(function(){
                        j(this).attr('style', 'background-color: #B800D8!important');
                });     
		j('#summary_downloads .panel-docklands-prime .panel-heading').attr('style', 'background-color: #B800D8!important');

		j('.docklands_footer').attr('style', 'border-color: #B800D8!important');
	};

});
