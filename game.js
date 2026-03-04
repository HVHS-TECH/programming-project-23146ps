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
	playerSprite = new Sprite(width/2,height/2,50);
	playerSprite.color = 'blue'

	roomScore = 0

	//let roomType = 0
	function scoreUp() {
			roomScore +=1
			console.log("room cleared!!")
	} 

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
		playerSprite.vel.x = -4;
	} else if (kb.pressing('right')){
		playerSprite.vel.x = 4;
	} else {
		playerSprite.vel.x = 0;
	}

	if (kb.pressing('up')){
		playerSprite.vel.y = -4;
	} else if (kb.pressing('down')){
        playerSprite.vel.y = 4;
    } else {
		playerSprite.vel.y = 0;
	}

	playerSprite.collided(exitDoor, scoreUp())

	//text("Rooms Cleared: " +score, 50, 50);
}

/*******************************************************/
//  END OF APP
/*******************************************************/