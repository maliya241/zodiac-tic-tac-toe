var click_grid_squares = []; //transparent squares for clicking
var boars = []; //boar markers
var dogs = []; //dog markers
var roosters = []; //rooster markers 
var monkeys = []; //monkey markers
var sheep = []; //sheep markers 
var horses = []; //horse markers
var snakes = []; //snake markers
var dragons = []; //dragon markers
var rabbits = []; //rabbit markers
var tigers = []; //tiger markers
var oxen = []; //ox markers
var rats = []; //rat markers
var cats = []; //cat markers
var win_lines = [];
var player_one = null; //points to the player's marker array
var player_two = null;  //points to the player's marker array
var player_one_markers = []; //keeps an array of where each marker is placed on the board
var player_two_markers = []; //keeps an array of where each marker is placed on the board
var turn = 1; //odd is player 1 and even is player 2
var won = 0; //0 is game has not been won; 1 is game has been won

function validate_form() {
	var player_one_input = document.forms["player_assignment_form"]["player_one"].value;
	var player_two_input = document.forms["player_assignment_form"]["player_two"].value;
	if (player_one_input === "" || player_two_input === "") {
		document.getElementById("warning_alert").innerHTML = "Both fields are required. ";
	} else { 
		if (player_one !== null) { //allows refilling and resubmitting the form 
			for (i = 0; i < 9; i++) {
				if (player_one[i].classList.contains("show")) {
					player_one[i].classList.remove("show");
					player_one[i].classList.add("hide");
				} else if (player_two[i].classList.contains("show")) {
					player_two[i].classList.remove("show");
					player_two[i].classList.add("hide");
				}
				if (click_grid_squares[i].classList.contains("click_one_filter")) {
					click_grid_squares[i].classList.remove("click_one_filter");
				} else if (click_grid_squares[i].classList.contains("click_two_filter")) {
					click_grid_squares[i].classList.remove("click_two_filter");
				}
			}
			for (i = 0; i < 8; i++) {
				if (win_lines[i].classList.contains("show")) {
					win_lines[i].classList.remove("show");
					win_lines[i].classList.add("hide");
				}
			}
			turn = 1;
			won = 0;
			player_one_markers = [];
			player_two_markers = [];
			document.getElementById("turn").innerHTML = "Turn " + turn + ": Player 1";
		}
		//player one assignment
		if (player_one_input.toLowerCase() === "cat") {
			player_one = cats;
			document.getElementById("player_one_assignment").innerHTML = "Player 1: cat";
		} else {
			var player_one_input_modulo_12 = Math.abs(2020 - player_one_input) % 12;
			if (player_one_input_modulo_12 === 0) {
				//rat
				player_one = rats;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: rat";
			} else if (player_one_input_modulo_12 == 1) {
				//boar
				player_one = boars;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: boar";
			} else if (player_one_input_modulo_12 == 2) {
				//dog
				player_one = dogs;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: dog";
			} else if (player_one_input_modulo_12 == 3) {
				//rooster
				player_one = roosters;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: rooster";
			} else if (player_one_input_modulo_12 == 4) {
				//monkey
				player_one = monkeys;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: monkey";
			} else if (player_one_input_modulo_12 == 5) {
				//sheep
				player_one = sheep;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: sheep";
			} else if (player_one_input_modulo_12 == 6) {
				//horse
				player_one = horses;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: horse";
			} else if (player_one_input_modulo_12 == 7) {
				//snake
				player_one = snakes;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: snake";
			} else if (player_one_input_modulo_12 == 8) {
				//dragon
				player_one = dragons;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: dragon";
			} else if (player_one_input_modulo_12 == 9) {
				//rabbit
				player_one = rabbits;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: rabbit";
			} else if (player_one_input_modulo_12 == 10) {
				//tiger
				player_one = tigers;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: tiger";
			} else if (player_one_input_modulo_12 == 11) {
				//ox
				player_one = oxen;
				document.getElementById("player_one_assignment").innerHTML = "Player 1: ox";
			}
		}
		//player two assignment
		if (player_two_input.toLowerCase() === "cat") {
			player_two = cats;
			document.getElementById("player_two_assignment").innerHTML = " Player 2: cat";
		} else {
			var player_two_input_modulo_12 = Math.abs(2020 - player_two_input) % 12;
			if (player_two_input_modulo_12 === 0) {
				//rat
				player_two = rats;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: rat";
			} else if (player_two_input_modulo_12 == 1) {
				//boar
				player_two = boars;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: boar";
			} else if (player_two_input_modulo_12 == 2) {
				//dog
				player_two = dogs;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: dog";
			} else if (player_two_input_modulo_12 == 3) {
				//rooster
				player_two = roosters;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: rooster";
			} else if (player_two_input_modulo_12 == 4) {
				//monkey
				player_two = monkeys;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: monkey";
			} else if (player_two_input_modulo_12 == 5) {
				//sheep
				player_two = sheep;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: sheep";
			} else if (player_two_input_modulo_12 == 6) {
				//horse
				player_two = horses;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: horse";
			} else if (player_two_input_modulo_12 == 7) {
				//snake
				player_two = snakes;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: snake";
			} else if (player_two_input_modulo_12 == 8) {
				//dragon
				player_two = dragons;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: dragon";
			} else if (player_two_input_modulo_12 == 9) {
				//rabbit
				player_two = rabbits;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: rabbit";
			} else if (player_two_input_modulo_12 == 10) {
				//tiger
				player_two = tigers;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: tiger";
			} else if (player_two_input_modulo_12 == 11) {
				//ox
				player_two = oxen;
				document.getElementById("player_two_assignment").innerHTML = " Player 2: ox";
			}
		}
		document.getElementById("warning_alert").innerHTML = "";
		document.getElementById("turn").innerHTML = "Turn " + turn + ": Player 1";
	}
	return false;
}

window.addEventListener("load", set_up);

function set_up() {
	var tic_tac_toe_svg = document.getElementById('Noughts_and_Crosses_Grid');
	//click grid
	for (i = 0; i < 9; i++) {
		click_grid_squares[i] = document.getElementsByClassName("click_square")[i];
	}
	//boars 
	for (i = 0; i < 9; i++) {
		boars[i] = document.getElementsByClassName("boar")[i];
	}
	//dogs 
	for (i = 0; i < 9; i++) {
		dogs[i] = document.getElementsByClassName("dog")[i];
	}
	//roosters 
	for (i = 0; i < 9; i++) {
		roosters[i] = document.getElementsByClassName("rooster")[i];
	}
	//monkeys 
	for (i = 0; i < 9; i++) {
		monkeys[i] = document.getElementsByClassName("monkey")[i];
	}
	//sheep 
	for (i = 0; i < 9; i++) {
		sheep[i] = document.getElementsByClassName("sheep")[i];
	}
	//horses 
	for (i = 0; i < 9; i++) {
		horses[i] = document.getElementsByClassName("horse")[i];
	}
	//snakes 
	for (i = 0; i < 9; i++) {
		snakes[i] = document.getElementsByClassName("snake")[i];
	}
	//dragons 
	for (i = 0; i < 9; i++) {
		dragons[i] = document.getElementsByClassName("dragon")[i];
	}
	//rabbits 
	for (i = 0; i < 9; i++) {
		rabbits[i] = document.getElementsByClassName("rabbit")[i];
	}
	//tigers 
	for (i = 0; i < 9; i++) {
		tigers[i] = document.getElementsByClassName("tiger")[i];
	}
	//oxen 
	for (i = 0; i < 9; i++) {
		oxen[i] = document.getElementsByClassName("ox")[i];
	}
	//rats 
	for (i = 0; i < 9; i++) {
		rats[i] = document.getElementsByClassName("rat")[i];
	}
	//cats 
	for (i = 0; i < 9; i++) {
		cats[i] = document.getElementsByClassName("cat")[i];
	}
	//win lines 
	for (i = 0; i < 8; i++) {
		win_lines[i] = document.getElementsByClassName("win_line")[i];
	}
	
	click_square();
}

function click_square() {
	click_grid_squares[0].addEventListener("click", function() {grid_square_clicked(0);});
	click_grid_squares[1].addEventListener("click", function() {grid_square_clicked(1);});
	click_grid_squares[2].addEventListener("click", function() {grid_square_clicked(2);});
	click_grid_squares[3].addEventListener("click", function() {grid_square_clicked(3);});
	click_grid_squares[4].addEventListener("click", function() {grid_square_clicked(4);});
	click_grid_squares[5].addEventListener("click", function() {grid_square_clicked(5);});
	click_grid_squares[6].addEventListener("click", function() {grid_square_clicked(6);});
	click_grid_squares[7].addEventListener("click", function() {grid_square_clicked(7);});
	click_grid_squares[8].addEventListener("click", function() {grid_square_clicked(8);});
}

function grid_square_clicked(clicked_square) {
	if (won === 1) {
		
	} else if (player_one[clicked_square].classList.contains("hide") && player_two[clicked_square].classList.contains("hide")) { 
		if ((turn % 2) === 0) {
			//player 2
			turn++;
			player_two[clicked_square].classList.remove("hide");
			player_two[clicked_square].classList.add("show");
			click_grid_squares[clicked_square].classList.add("click_two_filter");
			player_two_markers.push(clicked_square);
			document.getElementById("turn").innerHTML = "Turn " + turn + ": Player 1";
		} else {
			//player 1
			turn++;
			player_one[clicked_square].classList.remove("hide");
			player_one[clicked_square].classList.add("show");
			click_grid_squares[clicked_square].classList.add("click_one_filter");
			player_one_markers.push(clicked_square);
			document.getElementById("turn").innerHTML = "Turn " + turn + ": Player 2";
		}
	}
	win();
}

function win() {
	if (player_one_markers.includes(0) && player_one_markers.includes(1) && player_one_markers.includes(2)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[0].classList.remove("hide");
		win_lines[0].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(0) && player_two_markers.includes(1) && player_two_markers.includes(2)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[0].classList.remove("hide");
		win_lines[0].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(3) && player_one_markers.includes(4) && player_one_markers.includes(5)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[1].classList.remove("hide");
		win_lines[1].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(3) && player_two_markers.includes(4) && player_two_markers.includes(5)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[1].classList.remove("hide");
		win_lines[1].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(6) && player_one_markers.includes(7) && player_one_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[2].classList.remove("hide");
		win_lines[2].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(6) && player_two_markers.includes(7) && player_two_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[2].classList.remove("hide");
		win_lines[2].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(0) && player_one_markers.includes(3) && player_one_markers.includes(6)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[3].classList.remove("hide");
		win_lines[3].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(0) && player_two_markers.includes(3) && player_two_markers.includes(6)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[3].classList.remove("hide");
		win_lines[3].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(1) && player_one_markers.includes(4) && player_one_markers.includes(7)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[4].classList.remove("hide");
		win_lines[4].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(1) && player_two_markers.includes(4) && player_two_markers.includes(7)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[4].classList.remove("hide");
		win_lines[4].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(2) && player_one_markers.includes(5) && player_one_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[5].classList.remove("hide");
		win_lines[5].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(2) && player_two_markers.includes(5) && player_two_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[5].classList.remove("hide");
		win_lines[5].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(0) && player_one_markers.includes(4) && player_one_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[6].classList.remove("hide");
		win_lines[6].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(0) && player_two_markers.includes(4) && player_two_markers.includes(8)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[6].classList.remove("hide");
		win_lines[6].classList.add("show");
		finish_game();
	} else if (player_one_markers.includes(2) && player_one_markers.includes(4) && player_one_markers.includes(6)) {
		document.getElementById("turn").innerHTML = "Winner is Player 1!";
		win_lines[7].classList.remove("hide");
		win_lines[7].classList.add("show");
		finish_game();
	} else if (player_two_markers.includes(2) && player_two_markers.includes(4) && player_two_markers.includes(6)) {
		document.getElementById("turn").innerHTML = "Winner is Player 2!";
		win_lines[7].classList.remove("hide");
		win_lines[7].classList.add("show");
		finish_game();
	} else if (turn === 10) {
		document.getElementById("turn").innerHTML = "Tie!";
		finish_game();
	}
}

function finish_game() {
	won = 1;
}

function reset() {
	for (i = 0; i < 9; i++) {
		if (player_one[i].classList.contains("show")) {
			player_one[i].classList.remove("show");
			player_one[i].classList.add("hide");
		} else if (player_two[i].classList.contains("show")) {
			player_two[i].classList.remove("show");
			player_two[i].classList.add("hide");
		}
		if (click_grid_squares[i].classList.contains("click_one_filter")) {
			click_grid_squares[i].classList.remove("click_one_filter");
		} else if (click_grid_squares[i].classList.contains("click_two_filter")) {
			click_grid_squares[i].classList.remove("click_two_filter");
		}
	}
	for (i = 0; i < 8; i++) {
		if (win_lines[i].classList.contains("show")) {
			win_lines[i].classList.remove("show");
			win_lines[i].classList.add("hide");
		}
	}
	turn = 1;
	won = 0;
	player_one_markers = [];
	player_two_markers = [];
	document.getElementById("turn").innerHTML = "Turn " + turn + ": Player 1";
	click_square();
}