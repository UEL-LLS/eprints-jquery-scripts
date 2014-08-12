/**************************
***************************/
var j = jQuery.noConflict();

//button position
var fromtop = "2em";
var fromright = "1em";



j(document).ready(function () {

	j.getScript("http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js", function () {
		console.log("jQueryUI Loaded");

		j('body').append('<div id="addnewitem" class="draggable"></div>');
		j(function() {
			j( ".draggable" ).draggable({
				cancel: false
			});
		});
	
	
		//create div with code in it here
		j('#addnewitem').append('<form method="post" accept-charset="utf-8" action="/cgi/users/home" enctype="multipart/form-data"></form>');
		j('<input/>', {
			name: "screen",
			id: "screen",
			value: "NewEPrint",
			type: "hidden"
		}).appendTo('#addnewitem form');
		j('<input/>', {
			value: "New Publication",
			name: "_action_create",
			type: "submit",
			class: "btn btn-primary btn-docklands-prime"
		}).appendTo('#addnewitem form');
		j('#addnewitem').css({
			'position': 'absolute',
			'top': fromtop,
			'right': fromright
		});
		j('#addnewitem form').append('<button type="button" id="close-addnew" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>');
		j('#addnewitem .close').css({
			"float": "none",
			"cursor": "pointer",
			"color": "#fff",
			"border": "1px solid #AA1111",
			"border-radius": "12px",
			"border-bottom-left-radius": "0px",
			"background": "#EE3333",
			"display": "inline-block",
			"line-height": "0px",
			"padding": "8px 3px",
			"position": "relative",
			"top": "-9px",
			"right": "11px",
			"z-index": "10",
			"opacity": "1",
		});
		j('#close-addnew').mouseup(function() {
			j('#addnewitem').remove();
		});		
	});


});
