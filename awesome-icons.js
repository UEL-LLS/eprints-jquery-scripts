/**************************
 Script to replace icons 
 with Font Awesome icons, 
 by Dave Gandy. 
 http://fontawesome.io

***************************/


// Include the following in header: 
/*
  <!-- Font Awesome by Dave Gandy - http://fontawesome.io -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
*/

var j = jQuery.noConflict();

j(document).ready(function () {

	j('.ep_doc_icon[src$="fileicons/application_msword.png"]').replaceWith('<i class="fa fa-file-word-o fa-5x"></i>');
	j('.ep_doc_icon[src$="fileicons/application_pdf.png"]').replaceWith('<i class="fa fa-file-pdf-o fa-5x"></i>');	
	j('.ep_doc_icon[src$="fileicons/text.png"]').replaceWith('<i class="fa fa-file-text-o fa-5x"></i>');
	j('.ep_doc_icon[src$="fileicons/other.png"]').replaceWith('<i class="fa fa-file-o fa-5x"></i>');
	j('.ep_doc_icon[src$="fileicons/unknown.png"]').replaceWith('<i class="fa fa-file-o fa-5x"></i>');
	j('.ep_doc_icon[src$="fileicons/archive.png"]').replaceWith('<i class="fa fa-file-zip-o fa-5x"></i>');
	j('.ep_doc_icon[src$="fileicons/image.png"]').replaceWith('<i class="fa fa-file-image-o fa-5x"></i>');

});
