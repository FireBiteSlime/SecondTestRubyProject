// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery
//= require jquery_ujs
//= require_tree .

var $ = require('jquery');
$(document).ready(function() {

		$('#addproject').hide();

		$("#submit").click(function(event) {
		  event.preventDefault();
		  $("#form").submit();
		 });

		$("#plus").click(function(event) {
		  $('#addtask').fadeIn();
	    $('#addtaskflex').fadeIn();
		});

		$("#hide").click(function(event) {
		  $('#addtask').fadeOut();
	    $('#addtaskflex').fadeOut();
	  });
		$("#project_id").change(function(event){
			if(event.currentTarget.value == 'newctg'){
			 $('#addproject').fadeIn();
			}
			else{
				$('#addproject').fadeOut();
			}
		});


		$("input").click("ifToggled", function(event){
			var todo_id = event.currentTarget.value;
			$("#"+todo_id).submit();
      console.log(event);
		});

	});



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
