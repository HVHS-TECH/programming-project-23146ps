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
	playerSprite = new Sprite(width / 2, height - 100, 40, 'd');
	playerSprite.color = 'blue'
	

	targetGroup = new Group();



	/*******************************************************/
	// FOR LOOP START
	for (let i = 0; i < 80; i++) {
		targetSprite = new Sprite(random(900), random(200), 20, 20);
		targetGroup.add(targetSprite)
	}
	// FOR LOOP END
	/*******************************************************/



	gunSprite = new Sprite(playerSprite.x, playerSprite.y, 20, 20, 'n');
	gunSprite.color = 'green'

	//bulletSprite = new Sprite(playerSprite.x, playerSprite.y, 10, 'n')
	//bulletSprite.color = 'red'

	bulletGroup = new Group();

	roomScore = 0

	//let roomType = 0

	wallGroup = new Group();

	//door
	exitDoor = new Sprite(width / 2, 0, 100, 30, 'n');
	exitDoor.color = 'orange'

	wallGroup.add(exitDoor);

	//walls

	roomType = 1

	wallLeft = new Sprite(0, height / 2, 8, height, 's');
	wallLeft.color = 'black';

	wallGroup.add(wallLeft);

	wallRight = new Sprite(width, height / 2, 8, height, 's');
	wallRight.color = 'black';

	wallGroup.add(wallRight);

	wallTop = new Sprite(width / 2, 0, width, 8, 's');
	wallTop.color = 'black';

	wallGroup.add(wallTop);

	wallBottom = new Sprite(width / 2, height, width, 8, 's');
	wallBottom.color = 'black';

	wallGroup.add(wallBottom);

}

function scoreUp() {
	roomScore += 1
	console.log("room cleared!!");
}

bulletAngle = 0

playerHealth = 3


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	text("rooms cleared: " + roomScore, 50, 50)
	text("targets left: " + targetGroup.length, 50, 75)
	text("health: " + playerHealth, 50, 100)


	/*******************************************************/
	// player movement
	/*******************************************************/
	if (kb.pressing('a')) {
		playerSprite.vel.x = -4;
	} else if (kb.pressing('d')) {
		playerSprite.vel.x = 4;
	} else {
		playerSprite.vel.x = 0;
	}

	if (kb.pressing('w')) {
		playerSprite.vel.y = -4;
	} else if (kb.pressing('s')) {
		playerSprite.vel.y = 4;
	} else {
		playerSprite.vel.y = 0;
	}


	/*******************************************************/
	// shooting killing
	/*******************************************************/
	gunSprite.moveTowards(playerSprite.x, playerSprite.y, 1);
	//gunSprite.moveTowards(mouseX, mouseY, 60);

	if (kb.pressed('space')) {

		bulletSprite = new Sprite(gunSprite.x, gunSprite.y, 10, 'n');

		bulletSprite.direction = playerSprite.angleTo(mouseX, mouseY)

		bulletSprite.speed = 15;

		bulletGroup.add(bulletSprite);

	}
	//bulletSprite.moveTowards(playerSprite.x, playerSprite.y, 1);
	if (bulletGroup.overlaps(wallGroup, bulletWallColide)) { }
	if (bulletGroup.overlaps(targetGroup, murder)) { }

	function bulletWallColide(bulletSprite, wallGroup) {
		console.log("bullet colided")
		bulletSprite.remove();
	}

	function murder(bulletSprite, targetSprite) {
		console.log("kill")
		bulletSprite.remove()
		targetSprite.remove()
	}

	/*******************************************************/
	// player health
	/*******************************************************/
	if(playerSprite.collides(targetGroup, damagePlayer)) { }

	function damagePlayer(playerSprite, targetSprite) {
		playerHealth -= 1
		targetSprite.remove()
	}

	targetGroup.moveTo(playerSprite.x, playerSprite.y, 1);


	/*******************************************************/
	// levelchange
	/*******************************************************/
	if (playerSprite.overlaps(exitDoor) && targetGroup.length < 1) {
		scoreUp();
		playerSprite.moveTo(550, 850, 10000);

		//targetGroup.visible = false
		//targetGroup.physicsType = none

		if (roomType = 1) {
			background('ccc');
			roomOne();
			//roomType = random(2, 3)
		}

		function roomOne() {
			wallCenter = new Sprite(width / 2, height / 2, 400, 50, 's');
			wallGroup.add(wallCenter);
		}

		setTimeout(1000);
	} else if (playerSprite.overlapping(exitDoor) && targetGroup.length > 0) {

		text("oops! you need to destroy all the targets before progressing!", width / 2, height / 2);
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/