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
	playerSprite = new Sprite(width/2, height - 100, 40, 'd');
	playerSprite.color = 'blue'

	targetGroup = new Group();
	for (let i = 0; i < 80; i++) { 
		targetSprite = new Sprite(random(500), random(200), 20, 20);
		targetGroup.add(targetSprite)
	}

	gunSprite = new Sprite(playerSprite.x, playerSprite.y, 20, 20, 'n');
	gunSprite.color ='green'

	//bulletSprite = new Sprite(playerSprite.x, playerSprite.y, 10, 'n')
	//bulletSprite.color = 'red'

	bulletGroup = new Group();

	roomScore = 0

	//let roomType = 0

	wallGroup = new Group();

	//door
	exitDoor = new Sprite(width / 2, 0, 100, 20, 's');
	exitDoor.color = 'orange'

	wallGroup.add(exitDoor);

	//walls

	wallLeft = new Sprite(0, height / 2, 8, height, 's');
	wallLeft.color = 'black';

	wallGroup.add(wallLeft);

	wallRight = new Sprite(width, height / 2, 8, height, 's');
	wallRight.color = 'black'

	wallGroup.add(wallRight);

	wallTop = new Sprite(width / 2, 0, width, 8, 's');
	wallTop.color = 'black'

	wallGroup.add(wallTop);

	wallBottom = new Sprite(width / 2, height, width, 8, 's');
	wallBottom.color = 'black'

	wallGroup.add(wallBottom);

}

function scoreUp() {
		roomScore +=1
		console.log("room cleared!!")
} 

bulletAngle = 0


	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	text("rooms cleared: " +roomScore, 50, 50)

	rayCastDirection = playerSprite.angleTo(mouseX, mouseY)

	/*
	targets.color = color(120);

	let sprites = world.rayCast(playerSprite, rayCastDirection, 5000);

	for (let s of sprites) s.color = 'orange';

	stroke('orange');
	line(playerSprite.x, playerSprite.y, mouse.x, mouse.y);
	noStroke();
	*/

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

	/*******************************************************/
	// player movement
	/*******************************************************/
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
	//gunSprite.moveTowards(mouseX, mouseY, 60);

	if (kb.pressed('space')) {
		
		/*
		let hitTarget = world.rayCast(playerSprite, rayCastDirection, 5000);

		if(hitTarget) {
			console.log("target hit 1")
			if(hitTarget.name = 'targets'){
				console.log("target hit 2");
				targets.delete()
			}
		}

		stroke('orange');
		line(playerSprite.x, playerSprite.y, mouse.x, mouse.y);
		noStroke();

		*/
		bulletSprite = new Sprite(gunSprite.x, gunSprite.y, 10, 'n');

		bulletSprite.direction = playerSprite.angleTo(mouseX, mouseY)

		bulletSprite.speed = 15;

		bulletGroup.add(bulletSprite);

	}
		//bulletSprite.moveTowards(playerSprite.x, playerSprite.y, 1);
	if (bulletGroup.overlaps(wallGroup, func2Call)) {}
	if (bulletGroup.overlaps(targetGroup, murder)) {}

		function func2Call(bulletSprite, wallGroup) {
		console.log("bullet colided")
		bulletSprite.remove();
	}

	function murder(bulletSprite, targetSprite){
		console.log("kill")
		bulletSprite.remove()
		targetSprite.remove()
	}
	// door
	if (playerSprite.collided(exitDoor)) {
		scoreUp()
		playerSprite.move(width/2, height - 100, 10000);
		setTimeout(1000)
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/