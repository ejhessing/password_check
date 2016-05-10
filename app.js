// Hide hints 
$("form span").hide();

function passwordEvent () {
	if($(this).val().length > 8){
		//hide hint if valid
		$(this).next().hide();
	} else {
		//else show hint
	$(this).next().show();

	}
}

function confirmPasswordEvent(){
	//find out if password and confirmation match
	if($("#password").val() === $("#confirm_password").val()){
		//hide hint if match
		$("#confirm_password").next().hide();

	} else {
		//else show hint 
		$("#confirm_password").next().show();
	}	
}



//when event happens on password input
// find out if password is valid
$("#password").focus(passwordEvent).keyup(passwordEvent);
	
	
		

// when event happens on confirmation
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
