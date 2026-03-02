/*******************************************************/
// P5.play: project
// Written by 23146ps
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1100, 900);

	//player
	sprite = new Sprite(width/2,height/2,50);
	sprite.color = 'blue'

	let score = 0

	//let roomType = 0

	//door
	exitDoor = new Sprite(width / 2, 0, 100, 20, 'k');
	exitDoor.color = 'orange'

	//walls
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH = new Sprite(width, height / 2, 8, height, 'k');
	wallRH.color = 'black'
	wallTop = new Sprite(width / 2, 0, width, 8, 'k');
	wallTop.color = 'black'
	wallBot = new Sprite(width / 2, height, width, 8, 'k');
	wallBot.color = 'black'
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	/*
	if (roomType = 1){
		background('ccc');
		roomOne()
		roomType = random(2,3)
	} 

	function roomOne() {
		wallLH = new Sprite(0, height / 2, 8, height, 'k');
		wallLH.color = 'black';
		wallRH = new Sprite(width, height / 2, 8, height, 'k');
		wallRH.color = 'black'
		wallTop = new Sprite(width / 2, 0, width, 8, 'k');
		wallTop.color = 'black'
		wallBot = new Sprite(width / 2, height, width, 8, 'k');
		wallBot.color = 'black'
	}
	*/

	//sprite.moveTowards(mouseX, mouseY, 10);

	// movement
	if (kb.pressing('left')) {
		sprite.vel.x = -4;
	} 
	
	if (kb.pressing('right')){
		sprite.vel.x = 4;
	}

	if (kb.pressing('up')){
		sprite.vel.y = -4;
	}
	
	if (kb.pressing('down')){
        sprite.vel.y = 4;
    }

	if (kb.released('left')) {
		sprite.vel.x = 0
	}
	
	if (kb.released('right')){
		sprite.vel.x = 0
	}

	if (kb.released('up')) {
		sprite.vel.y = 0
	}
	
	if (kb.released('down')){
		sprite.vel.y = 0
	}

}

/*******************************************************/
//  END OF APP
/*******************************************************/