/*******************************************************/
// P5.play: project
// Written by 23146ps
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function scoreUp() {
		roomScore +=1
		console.log("room cleared!!")
} 

function setup() {
	console.log("setup: ");
	cnv = new Canvas(1100, 900);

	//player
	playerSprite = new Sprite(width/2, 800, 50);
	playerSprite.color = 'blue'

	roomScore = 0

	//let roomType = 0

	//door
	exitDoor = new Sprite(width / 2, 0, 100, 20, 's');
	exitDoor.color = 'orange'

	//walls
	wallLeft = new Sprite(0, height / 2, 8, height, 'k');
	wallLeft.color = 'black';
	wallRight = new Sprite(width, height / 2, 8, height, 'k');
	wallRight.color = 'black'
	wallTop = new Sprite(width / 2, 0, width, 8, 'k');
	wallTop.color = 'black'
	wallBottom = new Sprite(width / 2, height, width, 8, 'k');
	wallBottom.color = 'black'
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	text("rooms cleared: " +roomScore, 50, 50)
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
	if (kb.pressing('a')) {
		playerSprite.vel.x = -4;
	} else if (kb.pressing('d')){
		playerSprite.vel.x = 4;
	} else {
		playerSprite.vel.x = 0;
	}

	if (kb.pressing('w')){
		playerSprite.vel.y = -4;
	} else if (kb.pressing('s')){
        playerSprite.vel.y = 4;
    } else {
		playerSprite.vel.y = 0;
	}

	// door
	if (playerSprite.collided(exitDoor)) {
		scoreUp()
		playerSprite.moveTo(width/2, 800, 10000);
		setTimeout(60)
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/