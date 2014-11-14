/**************************
 Script to convert EPrint 
 front page boxes into 
 Bootstrap panels 
***************************/
var j = jQuery.noConflict();

j(document).ready(function () {

	//initialisting	
	var panel = j('.ep_toolbox');	
	var unwrap = j('.ep_toolbox_content');
	var panelHeading = j('.ep_toolbox a'); 
	if (j('.ep_toolbox_content b').length){
		var panelTextNode = j('.ep_toolbox_content b');
		alert("test");
	}else {
		j('.ep_toolbox_content').contents().each(function(){
			 if(this.nodeName == "#text" && j.trim(this.nodeValue) !== ''){
        			j(this).wrap('<div class="panel-body"><p></p></div>');
    			} 
		});
	}

	//add the classes and the wrappers	
	panel.addClass('panel panel-default panel-docklands-fp');
	panelTextNode.wrap('<div class="panel-body"><p></p></div>');
	panelHeading.wrap('<div class="panel-heading"><h3 class="panel-title"></h3></div>');
	
	// Removing some stuff that isnt needed
	panel.find('br').remove();
	unwrap.children().unwrap();
	//j('.panel .panel-body p').is(':empty').remove();
	panel.removeClass('ep_toolbox').addClass('frontpage-panel');

});

