/**************************
 Script to an Add New 
 button to your repo. 
 Few config options at the
 top but these can be left 
 alone to function as is.
***************************/
var j = jQuery.noConflict();

//button position
var fromtop = "1em";
var fromright = "1em";

//do you want users to move it about?
//var draggable = true;
var draggable = false;


//do you want users to be able to close it? it'll keep coming back...
//var closeable = true;
var closeable = false;

j(document).ready(function () {

	j.getScript("http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js", function () {
		console.log("jQueryUI Loaded");

		j('body').append('<div id="addnewitem"></div>');
		if (draggable == true){
			j('#addnewitem').addClass('draggable');
		}
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

		if (closeable == true){
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
		}
	});


});
