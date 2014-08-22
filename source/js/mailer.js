$(function(){
	//Get the Form
	var form = $('#js-contact');

	//Get the message div
	var formMessages = $('#js-form-messages');

	//set up an event listener for the contact form.
	$(form).submit(function(e){
		//stop the browser from submitting the form.
		e.preventDefault();

		//seralize the form data
		var formData = $(form).serialize();

		//submit the form using ajax
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response){
			//make sure that the form messages div has the 'success' class
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			//set the message text.
			$(formMessages).html(response);

			//Clear the form
			$('#firstName').val('');
			$('#lastName').val('');
			$('#company').val('');
			$('#phone').val('');
			$('#website').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data){
			//make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			//set the message text.
			if(data.responseText !== ''){
				$(formMessages).html(data.responseText);
			} else {
				$(formMessages).html('Oops! An error occured and your message could not be sent.');
			}
		});

	});
});