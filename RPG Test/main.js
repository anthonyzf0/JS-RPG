var textDisplay;
var textBox;
var text;
var lines = [];

function loaded(){

	textDisplay = document.getElementById("textView");
	textBox = document.getElementById("text");

	textBox.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode === 13) {
	        document.getElementById("enter").click();
	    }
	});

	main();

}


function show(val, color = "white", newLine = true){

	val = val.fontcolor(color);

	if (newLine){
		val = "<br />"+val;
		lines.push(val);
	}
	else{
		lines[lines.length - 1] += val;
	}

	textDisplay.innerHTML = lines.join();
	textDisplay.scrollTop = 1000000;

	console.log(lines.length)
	if (lines.length > 150)
		lines.splice(0,1);
}
 