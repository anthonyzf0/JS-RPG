async function main() {
	mainMenu();
    
}

//Main Menu
async function mainMenu(){

	show("===========================");
	show("WELCOME TO THE CONSOLE RPG");
	show("===========================\n\n");

	while (true){
		show("[1] Play");
		show("[2] ---");
		show("[3] Credits");

		var choice = await getRange(1,3);
		
		if (choice == 1)
			await setup();
		if (choice == 2)
			show("Bye!");
		if (choice == 3)
			break;
	}


}

async function setup(){

	show("If your going to play, then first I need a name to call you by...");
	await setName();
	show(Player.name+" What class will you be?");


}

