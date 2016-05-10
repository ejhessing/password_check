var $password =  $("#password");
var $confirm_password = $('#confirm_password');


// Hide hints 
$("form span").hide();

function passwordEvent () {
	if($password.val().length > 8){
		//hide hint if valid
		$password.next().hide();
	} else {
		//else show hint
		$password.next().show();

	}
}

function confirmPasswordEvent(){
	//find out if password and confirmation match
	if($password.val() === $confirm_password.val()){
		//hide hint if match
		$confirm_password.next().hide();

	} else {
		//else show hint 
		$confirm_password.next().show();
	}	
}



//when event happens on password input
// find out if password is valid
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
	
	
		

// when event happens on confirmation
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
