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
	playerSprite = new Sprite(width/2, 800, 50);
	playerSprite.color = 'blue'

	gunSprite = new Sprite(playerSprite.x, playerSprite.y, 20, 20, 'n');
	gunSprite.color ='green'

	//bulletSprite = new Sprite(playerSprite.x, playerSprite.y, 10, 'n')
	//bulletSprite.color = 'red'

	bulletGroup = new Group();

	/*
	for (i = 0; i < 40; i++) {
		
		bulletSprite = new Sprite(playerSprite.x, playerSprite.y, 10);
		
		bulletSprite.vel.x = randNum = random(2, 8);
		
		bulletSprite.vel.y = randNum = random(2, 8);
		
		bulletGroup.add(bulletSprite);
	}
	*/

	roomScore = 0

	//let roomType = 0

	//door
	exitDoor = new Sprite(width / 2, 0, 100, 20, 's');
	exitDoor.color = 'orange'

	//walls

	wallGroup = new Group();

	wallLeft = new Sprite(0, height / 2, 8, height, 'k');
	wallLeft.color = 'black';

	wallGroup.add(wallLeft);

	wallRight = new Sprite(width, height / 2, 8, height, 'k');
	wallRight.color = 'black'

	wallGroup.add(wallRight);

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');
	wallTop.color = 'black'

	wallGroup.add(wallTop);

	wallBottom = new Sprite(width / 2, height, width, 8, 'k');
	wallBottom.color = 'black'

	wallGroup.add(wallBottom);

}

function scoreUp() {
		roomScore +=1
		console.log("room cleared!!")
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

	// gun
	gunSprite.moveTowards(playerSprite.x, playerSprite.y, 1);
	gunSprite.rotateTowards(mouseX, mouseY, 1);
	if (kb.pressed('space')) {
		
		bulletSprite = new Sprite(playerSprite.x, playerSprite.y, 10);
		
		bulletSprite.moveTo(mouseX, mouseY, 50);

		bulletGroup.add(bulletSprite);

	} else {
		//bulletSprite.moveTowards(playerSprite.x, playerSprite.y, 1);

	bulletGroup.collides(wallGroup, func2Call)

		function func2Call(bulletSprite, wallGroup) {
		console.log("bullet colided")
		// Delete the alien which was hit
		bulletSprite.remove();
	}

	// door
	if (playerSprite.collided(exitDoor)) {
		scoreUp()
		playerSprite.moveTo(width/2, 800, 10000);
		setTimeout(1000)
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/