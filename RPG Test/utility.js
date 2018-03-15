async function setName(){

		show("Enter your new name");
		Player.name = await input();
		show("Nice to meet you "+name);

	}