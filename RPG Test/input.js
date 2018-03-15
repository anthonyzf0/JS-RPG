//Types of inputs

var callback;
var validAnswers = {};

function input(){

	return new Promise(resolve => {

		validAnswers.type = "String";

		callback = function(input){resolve(input)};

	});

}

function getRange(a,b){
	return new Promise(resolve => {

		validAnswers.type = "Number";

		validAnswers.low = a;
		validAnswers.high = b;

		callback = function(input){resolve(input)};

	});
}

//Called when text is inputed

function enter(){

	//Show text on screen and make it colored

	text = textBox.value;
	textBox.value = "";

	show(">","red",true);
	show(text,"white",false);

	//Types and exceptions

	switch(validAnswers.type){

		case "String":

			callback(text);

		break;

		case "Number":

			var num = parseInt(text);
			if (num >= validAnswers.low && num <= validAnswers.high)
				callback(num);
			else 
				show("Not a valid number","red");

		break;


	}

}