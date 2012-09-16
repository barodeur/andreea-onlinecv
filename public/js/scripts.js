// for comments and notes //
/* for block comments */




//How to print to console //
console.log("Hola");

var age=23;

if (age < 18) {
	console.log("go away");
} else {
	console.log("come in");
}
//how to define a function //
function myFunc(number) {
	console.log("you found me");
	console.log("your number is" + number);
}

function isOldenough(age) {
	if(age < 28) {
		console.log("go away");
	} else {
		console.log("come in");
	}
}

/*
1) Choose all h2's in headers
2) When they're clicked, open div's called 'content'
3) If they are already, close them
*/

$(function() {
	//Write all jquery here://
	console.log("jquery ready to go");

var isAboutHidden = true;

	$("#about h1").click(function() {
	console.log("it works!");

	if(isAboutHidden) {
		$("#about .content").show(200);
		isAboutHidden = false;
	} else {
		$("#about .content").hide(200);
		isAboutHidden = true;
	}
	

	});

});
