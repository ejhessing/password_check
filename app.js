var $password =  $("#password");
var $confirm_password = $('#confirm_password');


// Hide hints 
$("form span").hide();

function isPasswordValid() {
	return $password.val().length > 8;
}

function arePasswordsMatching (){
	return $password.val() === $confirm_password.val();
}

function canSubmit(){
	//check if passwords are valid and they match
	return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent () {
	if(isPasswordValid()){
		//hide hint if valid
		$password.next().hide();
	} else {
		//else show hint
		$password.next().show();

	}
}

function confirmPasswordEvent(){
	//find out if password and confirmation match
	if(arePasswordsMatching()){
		//hide hint if match
		$confirm_password.next().hide();

	} else {
		//else show hint 
		$confirm_password.next().show();
	}	
}

function enableSumbitEvent() {
	$('#submit').prop("disabled", !canSubmit());
}


//when event happens on password input
// find out if password is valid
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSumbitEvent);
		

// when event happens on confirmation
$confirm_password.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSumbitEvent);

enableSumbitEvent();
