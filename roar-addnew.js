/**************************
 Script to add roar-style
 add new button
***************************/
var j = jQuery.noConflict();

//button position
var fromtop = "1em";
var fromright = "1em";

j(document).ready(function () {


		j('body').append('<div id="add_item" class="visible-md visible-lg"></div>');
		j('<input/>', {
			value: "New Deposit",
			id: "add_item_show",
			type: "button",
			class: "btn btn-lg btn-docklands-prime pull_right",
			title: "Add a new item"
		}).appendTo('#add_item');
		j('#add_item').append('<div id="add_item_content" style="width: 0;"></div>');
		
			
	
		//create div with code in it here
		j('#add_item_content').append('<h3>Add and Item:</h3>');
		j('<div />', {
			class: "btn-group"
		}).appendTo('#add_item_content');
		j('#add_item_content .btn-group').append('<form id="form_add_roar" method="post" accept-charset="utf-8" action="/cgi/users/home" enctype="multipart/form-data"></form>');
		j('<input/>', {
			name: "screen",
			id: "screen",
			value: "NewEPrint",
			type: "hidden"
		}).appendTo('form#form_add_roar');
		j('<input/>', {
			value: "New Publication",
			name: "_action_create",
			type: "submit",
			class: "btn btn-docklands-prime"
		}).appendTo('form#form_add_roar');
		j('#add_item_content .btn-group').append('<form id="form_add_data" method="post" accept-charset="utf-8" action="http://data.uel.ac.uk/cgi/users/home" enctype="multipart/form-data"></form>');
                j('<input/>', {
                        name: "screen",
                        id: "screen",
                        value: "NewEPrint",
                        type: "hidden"
                }).appendTo('form#form_add_data');
                j('<input/>', {
                        value: "New Dataset",
                        name: "_action_create",
                        type: "submit",
                        class: "btn btn-docklands-data"
                }).appendTo('form#form_add_data');
		



		j('#').css({
			'position': 'absolute',
			'top': fromtop,
			'right': fromright
		});


	j('#add_item_show').hover( function() {
                j('#add_item_content').addClass('display-div');
                j('#add_item_show').addClass('hidden');
                j('#add_item_show').parent().css('width','25em');
                j('#add_item_content').css('width','100%');
        })

});
