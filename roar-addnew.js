/**************************
 Script to add roar-style
 add new button
***************************/
var j = jQuery.noConflict();

//Configure the repos
var repos = {};
repos['repo_1'] = [
		"roar", //name
		"Publication", //type of item
		"http://roar.uel.ac.uk" //url (no trailing slash)
		];
repos['repo_2'] = [
		"data",
		"Dataset",
		"http://data.uel.ac.uk"
		];

//console.log("output for roar-addnew.js");

j(document).ready(function () {
	if (window.top==window.self)
        {

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
	
		// loop through the repos array and creat buttons for each
		j.each(repos, function(index,value){
			//console.log(index+": \n name: "+value['0']+"\n url: "+value['2']+"\n type: "+value['1']);

			j('#add_item_content .btn-group').append('<form id="form_add_'+value['0']+'" method="post" accept-charset="utf-8" action="'+value['2']+'/cgi/users/home" enctype="multipart/form-data"></form>');
			j('<input/>', {
				name: "screen",
				id: "screen",
				value: "NewEPrint",
				type: "hidden"
			}).appendTo('form#form_add_'+value['0']);
			j('<input/>', {
				value: "New "+value['1'],
				name: "_action_create",
				type: "submit",
				class: "btn btn-docklands-prime btn-docklands-"+value['0']
			}).appendTo('form#form_add_'+value['0']);
		});			


		j('#add_item_show').hover( function() {
                	j('#add_item_content').addClass('display-div');
                	j('#add_item_show').addClass('hidden');
                	j('#add_item_show').parent().css('width','25em');
                	j('#add_item_content').css('width','100%');
        	})

	}
});
