////////////////////////////////////////////////////////////
// P2
////////////////////////////////////////////////////////////
var world;
var scaleX = 50, scaleY = -50;

var physicsData = {init:false, paused:true};
var carMaterial, wallMaterial, objectMaterial;
var worldData = {plane:[], car:[], objects:[]};

var carEngineData = {
						maxSteer:Math.PI / 6,
						accelaration:2,
						deceleration:2
					};
					
var carAIData = {
					reverse:100,
					reset:150
				};
	
/*!
 * 
 * START PHYSICS - This is the function that runs to start physics
 * 
 */
function startPhysics(){
	world = new p2.World({gravity:[0,0]});
	
	worldData.plane = [];
	worldData.car = [];
	worldData.objects = [];
	
	contactPhysics();
	
	if(!physicsData.init){
		physicsData.init = true;
		requestAnimationFrame(updatePhysics);
	}
}

function stopPhysics(){
	worldData.plane = [];
	worldData.car = [];
	worldData.objects = [];	
}

/*!
 * 
 * CONTACT PHYSICS - This is the function that runs for physics collision
 * 
 */
function contactPhysics(){
	carMaterial = new p2.Material();
	wallMaterial = new p2.Material();
	objectMaterial = new p2.Material();
	
	//contact
	var carVsCar = new p2.ContactMaterial(carMaterial, carMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: .7
	});
	
	var carVsWall = new p2.ContactMaterial(carMaterial, wallMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: .3
	});
	
	var carVsObject = new p2.ContactMaterial(carMaterial, objectMaterial, {
		// friction
		friction: 0.5,
		// bounce
		restitution: .3
	});
	
	world.addContactMaterial(carVsCar);
	world.addContactMaterial(carVsWall);
	world.addContactMaterial(carVsObject);

	world.on('beginContact', function (evt){
		if(!physicsData.paused){
			var contactVelocityA = getBodyVelocity(evt.bodyA);
			var contactVelocityB = getBodyVelocity(evt.bodyB);
			
			//car damage
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType === 'car' && evt.bodyB.contactCon){
				if(contactVelocityA > 3){
					var randomNum = Math.floor(Math.random()*4)+1;
					var thisCar = gameWorldData.car[evt.bodyA.index];
					playSoundWithinArea(thisCar, 'soundHitCrash'+randomNum);
				}
				
				if(contactVelocityB > 3){
					var randomNum = Math.floor(Math.random()*4)+1;
					var thisCar = gameWorldData.car[evt.bodyB.index];
					playSoundWithinArea(thisCar, 'soundHitCrash'+randomNum);
				}
				
				getPhysicsCarHit(evt.bodyA.index, evt.bodyB.index, contactVelocityB);
				getPhysicsCarHit(evt.bodyB.index, evt.bodyA.index, contactVelocityA);
			}
			
			//wall damage
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType === 'wall'){
				if(contactVelocityA > 2){
					var thisCar = gameWorldData.car[evt.bodyA.index];
					playSoundWithinArea(thisCar, 'soundHit');
				}
			}
			
			if(evt.bodyA.contactType === 'wall' && evt.bodyB.contactCon && evt.bodyB.contactType === 'car'){
				if(contactVelocityB > 2){
					var thisCar = gameWorldData.car[evt.bodyB.index];
					playSoundWithinArea(thisCar, 'soundHit');
				}
			}
			
			//explosion
			if(evt.bodyA.contactType == 'explosion' && evt.bodyA.contactCon && evt.bodyB.contactType == 'car'){
				if(contactVelocityB > 3){
					setPhysicsGasExplode(evt.bodyA.index);
				}
			}
			
			if(evt.bodyA.contactType == 'car' && evt.bodyB.contactType == 'explosion' && evt.bodyB.contactCon){
				if(contactVelocityA > 3){
					setPhysicsGasExplode(evt.bodyB.index);
				}
			}
			
			//objects
			if(evt.bodyA.contactType === 'car' && evt.bodyA.contactCon && evt.bodyB.contactType != 'car'){
				if(contactVelocityA > 2){
					var thisCar = gameWorldData.car[evt.bodyA.index];
					playSoundWithinArea(thisCar, 'soundHit');
				}
			}
			
			if(evt.bodyA.contactType != 'car' && evt.bodyB.contactCon && evt.bodyB.contactType === 'car'){
				if(contactVelocityB > 2){
					var thisCar = gameWorldData.car[evt.bodyB.index];
					playSoundWithinArea(thisCar, 'soundHit');
				}
			}
		}
	});
	
	// Disable any equations between the current passthrough body and the character
	world.on('preSolve', function (evt){
		
		for(var i=0; i<evt.contactEquations.length; i++){
			var eq = evt.contactEquations[i];
			eq.enabled = checkPhysicsCollision(eq);
		}
		
		for(var i=0; i<evt.frictionEquations.length; i++){
			var eq = evt.frictionEquations[i];
			eq.enabled = checkPhysicsCollision(eq);
		}
	});

	world.on('endContact', function (evt){
		
	});	
}

/*!
 * 
 * CHECK COLLISION WITHIN AREA - This is the function that runs to check if collision within area
 * 
 */
function playSoundWithinArea(thisCar, sound){
	var pt = p2Container.localToGlobal(thisCar.x, thisCar.y);
	
	var volume = .2;
	if(pt.x >= offset.x && pt.x < (canvasW-offset.x)){
		if(pt.y >= offset.y && pt.y < (canvasW-offset.y)){
			volume = 1;
		}	
	}
	
	playSound(sound, false, volume);
}

function checkPhysicsCollision(eq){
	var enable = true;
	if((eq.bodyA.contactCon === false || eq.bodyB.contactCon === false)){
		enable = false;
	}
	return enable;
}

/*!
 * 
 * CREATE PHYSICS OBJECT - This is the function that runs to create physics object
 * 
 */
function createPhysicsMap(array){
	//plane
	for(var n=0;n<array.length;n++){
		var width = convertCanvasToP2W(array[n].w);
		var height = convertCanvasToP2H(array[n].h);
		
		var planeShape = new p2.Box({width:width, height:height});
		planeShape.material = wallMaterial;
		
		var x = convertCanvasToP2X(array[n].x);
		var y = convertCanvasToP2Y(array[n].y);
		
		var planeBody = new p2.Body({
		  mass:0,
		  position:[x,y]
		});
		
		planeBody.contactType = 'wall';
		planeBody.addShape(planeShape);
		
		worldData.plane.push({body:planeBody, shape:planeShape});
		world.addBody(planeBody);
	}
	
	physicsData.paused = false;
	physicsData.init = true;
}

function createPhysicsCar(type,w,h,x,y,rotation){
	// Create a dynamic body for the chassis
	var chassisBody = new p2.Body({
		mass: .8,
		position:[convertCanvasToP2X(x), convertCanvasToP2Y(y)],
		angle: -(rotation) / (180 / Math.PI)
	});
	
	var carShape = new p2.Box({ width: convertCanvasToP2W(w), height: convertCanvasToP2H(h) });
	carShape.material = carMaterial;
	
	chassisBody.addShape(carShape);
	chassisBody.index = worldData.car.length;
	chassisBody.contactType = 'car';
	chassisBody.contactCon = true;
	chassisBody.carType = type;
	world.addBody(chassisBody);

	// Create the vehicle
	var vehicle = new p2.TopDownVehicle(chassisBody);

	// Add one front wheel and one back wheel - we don't actually need four :)
	var frontWheel = vehicle.addWheel({
		localPosition: [0, convertCanvasToP2W(h/1.5)]
	});
	frontWheel.setSideFriction(5);

	// Back wheel
	var backWheel = vehicle.addWheel({
		localPosition: [0, -(convertCanvasToP2W(h/1.5))]
	});
	backWheel.setSideFriction(3.8); // Less side friction on back wheel makes it easier to drift

	vehicle.addToWorld(world);	
	
	worldData.car.push({body:chassisBody, shape:carShape, vehicle:vehicle, frontWheel:frontWheel, backWheel:backWheel})
}

function createPhysicsObject(type,w,h,x,y,rotation,mass){
	var objectBody = new p2.Body({
		mass: mass,
		position:[convertCanvasToP2X(x), convertCanvasToP2Y(y)],
		damping:1,
		angle: -(rotation) / (180 / Math.PI)
	});
	var objectShape = new p2.Box({ width: convertCanvasToP2W(w), height: convertCanvasToP2H(h) });
	objectShape.material = objectMaterial;
	objectBody.contactType = 'item';
	objectBody.contactCon = true;
	objectBody.index = worldData.objects.length;
	objectBody.addShape(objectShape);
	
	if(type == 1){
		objectBody.contactType = 'explosion';	
	}
	
	world.addBody(objectBody);
	worldData.objects.push({body:objectBody, shape:objectBody});
}

/*!
 * 
 * PHYSICS LOOP - This is the function that runs to loop and update physics
 * 
 */
var lastTime;
var maxSubSteps = 5; // Max physics ticks per render frame
var fixedDeltaTime = 1 / 60; // Physics "tick" delta time

function updatePhysics(time){
	requestAnimationFrame(updatePhysics);

	// Get the elapsed time since last frame, in seconds
	var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
	lastTime = time;

	// Make sure the time delta is not too big (can happen if user switches browser tab)
	deltaTime = Math.min(1 / 10, deltaTime);

	// Move physics bodies forward in time
	world.step(fixedDeltaTime, deltaTime, maxSubSteps);
	
	if(worldData.car.length > 0){
		updateCarMovePhysics();
		renderPhysics();
	}
}

function renderPhysics(){
	// Draw all bodies
	drawCar();
	drawObjects();
}

function drawCar(){
	for(var n=0; n<worldData.car.length; n++){
		var x = worldData.car[n].body.interpolatedPosition[0],
			y = worldData.car[n].body.interpolatedPosition[1];
		
		var thisCar = gameWorldData.car[n];
		thisCar.x = x * scaleX;
		thisCar.y = y * scaleY;
		
		thisCar.lifeContainer.x = thisCar.x;
		thisCar.lifeContainer.y = thisCar.y+1;
		
		var currentRotate = -(worldData.car[n].body.angle) * 180 / Math.PI;
		if(currentRotate > 360 || currentRotate < -360){
			worldData.car[n].body.angle = 0;
		}else{
			thisCar.rotation = currentRotate;
		}
		
		if(gameData.markDelay > 0){
			gameData.markDelay--;	
		}else{
			moveTyreMark(thisCar);	
		}
		
		if(getBodyVelocity(worldData.car[n].body) > 7 && worldData.car[n].frontWheel.steerValue != 0){
			if(gameWorldData.car[n].tyre.playTime > 0){
				gameWorldData.car[n].tyre.playTime--
			}else{
				gameWorldData.car[n].tyre.playTime = 100;
				
				var thisCar = gameWorldData.car[n];
				var randomNum = Math.floor(Math.random()*4)+1;
				playSoundWithinArea(thisCar, 'soundTyre'+randomNum);
			}
		}
	}
}

function drawObjects(){
	for(var n=0; n<worldData.objects.length; n++){
		var x = worldData.objects[n].body.position[0],
			y = worldData.objects[n].body.position[1];
			
		var thisObjects = gameWorldData.objects[n];
		thisObjects.x = x * scaleX;
		thisObjects.y = y * scaleY;
		thisObjects.rotation = -(worldData.objects[n].body.angle) * 180 / Math.PI;
	}
}

/*!
 * 
 * UPDATE CAR MOVEMENT - This is the function that runs to update car movement
 * 
 */
 
function updateCarMovePhysics(){
	//user car
	var userPhysicsCar = worldData.car[gameData.userIndex];
	var userCanvasCar = gameWorldData.car[gameData.userIndex];
	var userPress = false;
	
	if(!gameData.gameControl){
		userCanvasCar.keyData.speed = 0;	
	}
	
	if(userCanvasCar.keyData.up && gameData.gameControl){
		userCanvasCar.keyData.speed += carEngineData.accelaration;
		userCanvasCar.keyData.speed = userCanvasCar.keyData.speed > userCanvasCar.engineData.speed ? userCanvasCar.engineData.speed : userCanvasCar.keyData.speed;
		userPress = true;
	}
	
	if(userCanvasCar.keyData.down && gameData.gameControl){
		userCanvasCar.keyData.speed -= carEngineData.deceleration;
		userCanvasCar.keyData.speed = userCanvasCar.keyData.speed < -userCanvasCar.engineData.reverseSpeed ? -userCanvasCar.engineData.reverseSpeed : userCanvasCar.keyData.speed;
		userPress = true;
	}
	
	//userCanvasCar.engineData.speed = getPhysicsDamageSpeed(gameData.userIndex);
	
	var brakeForce = 0;
	if(!userCanvasCar.keyData.up && !userCanvasCar.keyData.down){
		if(userPhysicsCar.backWheel.getSpeed() > 0.1){
			userCanvasCar.keyData.speed--;
			userCanvasCar.keyData.speed = userCanvasCar.keyData.speed <= 0 ? 0 : userCanvasCar.keyData.speed;
		}else if(userPhysicsCar.backWheel.getSpeed() < 0){
			userCanvasCar.keyData.speed++;
			userCanvasCar.keyData.speed = userCanvasCar.keyData.speed > 0 ? 0 : userCanvasCar.keyData.speed;	
		}
		brakeForce = 1;
	}
	
	var turnLeft = userCanvasCar.keyData.left == true ? 1 : 0;
	var turnRight = userCanvasCar.keyData.right == true ? 1 : 0;
	
	// Steer value zero means straight forward. Positive is left and negative right.
	userPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer * (turnLeft - turnRight);
	
	// Engine force forward
	userPhysicsCar.backWheel.engineForce = userCanvasCar.keyData.speed;
	userPhysicsCar.backWheel.setBrakeForce(brakeForce);
	
	if(userCanvasCar.keyData.down && gameData.gameControl){
		userPress = true;
		if(userPhysicsCar.backWheel.getSpeed() > 0.1){
			// Moving forward - add some brake force to slow down
			userPhysicsCar.backWheel.setBrakeForce(5);
		} else {
			// Moving backwards - reverse the engine force
			userPhysicsCar.backWheel.setBrakeForce(0);
			userPhysicsCar.backWheel.engineForce = userCanvasCar.keyData.speed;
		}
	}
	
	//if car stuck
	/*if(userCanvasCar.engineData.life > 0){
		if(userCanvasCar.idleData.reset >= carAIData.reset){
			var velNum = .3;
			
			if(randomBoolean()){
				userPhysicsCar.body.velocity[0] += velNum;	
			}else{
				userPhysicsCar.body.velocity[0] -= velNum;	
			}
			
			if(randomBoolean()){
				userPhysicsCar.body.velocity[1] += velNum;	
			}else{
				userPhysicsCar.body.velocity[1] -= velNum;	
			}
		}
		
		if(userPress){
			var thisDistance = getDistanceByValue(userCanvasCar.oldX, userCanvasCar.oldY, userCanvasCar.x, userCanvasCar.y);
			userCanvasCar.oldX = userCanvasCar.x;
			userCanvasCar.oldY = userCanvasCar.y;
			
			if(thisDistance <= 0){
				userCanvasCar.idleData.reset++;
			}else{
				userCanvasCar.idleData.reset = 0;
			}
		}
	}*/
	
	//user car explode
	if(userCanvasCar.impulseData.time > 0){
		userCanvasCar.impulseData.time--;
		userPhysicsCar.body.applyImpulse([userCanvasCar.impulseData.x,userCanvasCar.impulseData.y]);
	}
	
	//enemy car
	for(var n=0; n<worldData.car.length; n++){
		positionMarkArea(gameWorldData.car[n]);
		
		if(n!=gameData.userIndex){
			findNearestCar(n);
			chaseUserPhysics(n);
		}
	}
}

/*!
 * 
 * FIND NEAREST CAR - This is the function that runs to find nearest car to chase
 * 
 */
function findNearestCar(index){
	var thisCanvasCar = gameWorldData.car[index];
	var nearestArr = [];
	
	for(var n=0; n<worldData.car.length; n++){
		var targetCanvasCar = gameWorldData.car[n];
		if(n != index && targetCanvasCar.engineData.life > 0){
			var thisDistance = getDistanceByValue(thisCanvasCar.x, thisCanvasCar.y, targetCanvasCar.x, targetCanvasCar.y);
			nearestArr.push({index:n, distance:thisDistance});		
		}
	}
	
	sortOnObject(nearestArr, 'distance', false);
	
	thisCanvasCar.chaseIndex = -1;
	if(nearestArr.length > 0){
		thisCanvasCar.chaseIndex = nearestArr[0].index;
	}
}

/*!
 * 
 * CHASE CAR - This is the function that runs to chase cars
 * 
 */
 
function chaseUserPhysics(n){
	var thisCanvasCar = gameWorldData.car[n];
	var targetCanvasCar = gameWorldData.car[thisCanvasCar.chaseIndex];
	var thisPhysicsCar = worldData.car[n];
	var targetPhysicsCar = worldData.car[thisCanvasCar.chaseIndex];
	
	thisPhysicsCar.frontWheel.steerValue = 0;
	positionDetectionArea(thisCanvasCar);
	
	//suicide car movement
	if(thisCanvasCar.engineData.life > 0){
		if(thisPhysicsCar.body.carType == 'pursuit' && thisCanvasCar.chaseIndex != -1){
			if(gameData.gameAIControl){
				var wheelSide = getWheelDirection(thisCanvasCar);
				var engineDirection = checkCarEngine(thisCanvasCar, thisPhysicsCar);
				var engineValue = engineDirection == true ? thisCanvasCar.engineData.speed : -thisCanvasCar.engineData.speed;
				
				if(engineDirection){
					if(wheelSide == 'left'){
						thisPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer;	
					}else if(wheelSide == 'right'){
						thisPhysicsCar.frontWheel.steerValue = -carEngineData.maxSteer;		
					}
				}else{
					if(wheelSide == 'left'){
						thisPhysicsCar.frontWheel.steerValue = -carEngineData.maxSteer;	
					}else if(wheelSide == 'right'){
						thisPhysicsCar.frontWheel.steerValue = carEngineData.maxSteer;		
					}	
				}
			
			
				thisPhysicsCar.backWheel.engineForce = engineValue;
			}else{
				thisPhysicsCar.backWheel.engineForce = 0;	
			}
		}
		
		//if car stuck at corner or not move
		/*if(thisCanvasCar.idleData.reset >= carAIData.reset){
			var velNum = .3;
			
			if(randomBoolean()){
				thisPhysicsCar.body.velocity[0] += velNum;	
			}else{
				thisPhysicsCar.body.velocity[0] -= velNum;	
			}
			
			if(randomBoolean()){
				thisPhysicsCar.body.velocity[1] += velNum;	
			}else{
				thisPhysicsCar.body.velocity[1] -= velNum;	
			}
		}*/
	}else{
		thisPhysicsCar.backWheel.engineForce = 0;	
	}
	
	//car explode
	if(thisCanvasCar.impulseData.time > 0){
		thisCanvasCar.impulseData.time--;
		thisPhysicsCar.body.applyImpulse([thisCanvasCar.impulseData.x,thisCanvasCar.impulseData.y]);
	}
}

/*!
 * 
 * POSITION CAR AREA - This is the function that runs to position car area
 * 
 */
function positionDetectionArea(thisCanvasCar){
	for(var n=0; n<3; n++){
		var currentRotate = thisCanvasCar.rotation-90;
		if(n == 0){
			currentRotate -= 30;
		}else if(n == 2){
			currentRotate += 30;
		}
		
		var pos = getAnglePosition(thisCanvasCar.x, thisCanvasCar.y, 60, currentRotate);
		var thisDetect = thisCanvasCar.detectionArray[n];
		thisDetect.x = pos.x;
		thisDetect.y = pos.y;
	}	
}

function positionMarkArea(thisCanvasCar){
	for(var n=0; n<2; n++){
		var currentRotate = thisCanvasCar.rotation+90;
		if(n == 0){
			currentRotate -= 28;
		}else if(n == 1){
			currentRotate += 28;
		}
		
		var pos = getAnglePosition(thisCanvasCar.x, thisCanvasCar.y, 50, currentRotate);
		var thisTyre = thisCanvasCar.tyreArray[n];
		thisTyre.x = pos.x;
		thisTyre.y = pos.y;
	}	
}

/*!
 * 
 * CAR ENGINE - This is the function that runs to check car engine
 * 
 */
function checkCarEngine(thisCanvasCar, thisPhysicsCar){
	var engineDirection = true;
	var thisDistance = getDistanceByValue(thisCanvasCar.oldX, thisCanvasCar.oldY, thisCanvasCar.x, thisCanvasCar.y);
	thisCanvasCar.oldX = thisCanvasCar.x;
	thisCanvasCar.oldY = thisCanvasCar.y;
		
	if(thisCanvasCar.idleData.reverse >= 0){
		thisCanvasCar.idleData.time = 0;
		thisCanvasCar.idleData.reverse--;
		engineDirection = false;
	}else{
		var carSpeed = getBodyVelocity(thisPhysicsCar.body);
		if(thisDistance <= 2 && carSpeed <= 2){
			thisCanvasCar.idleData.time++;
		}else{
			thisCanvasCar.idleData.time = 0;
		}
		
		if(thisCanvasCar.idleData.time >= carAIData.reverse){
			thisCanvasCar.idleData.reverse = carAIData.reverse;
		}		
	}
	
	if(thisDistance <= 0){
		thisCanvasCar.idleData.reset++;
	}else{
		thisCanvasCar.idleData.reset = 0;
	}
	
	return engineDirection;
}

/*!
 * 
 * WHEEL DIRECTION - This is the function that runs to get wheel direction
 * 
 */
function getWheelDirection(thisCanvasCar){
	var targetCanvasCar = gameWorldData.car[thisCanvasCar.chaseIndex];
	
	var nearestArr = [];
	for(var n=0; n<3; n++){
		var thisDetect = thisCanvasCar.detectionArray[n];
		var thisDistance = getDistanceByValue(thisDetect.x, thisDetect.y, targetCanvasCar.x, targetCanvasCar.y);
		nearestArr.push({index:n, distance:thisDistance})
	}
	
	sortOnObject(nearestArr, 'distance', false);
	
	var wheelSide;
	if(nearestArr[0].index == 0){
		wheelSide = 'left';	
	}else if(nearestArr[0].index == 1){
		wheelSide = 'none';	
	}else if(nearestArr[0].index == 2){
		wheelSide = 'right';	
	}
	
	return wheelSide;
}

/*!
 * 
 * GET CAR HIT - This is the function that runs to get car hit
 * 
 */
function getPhysicsCarHit(index, indexOpp, damage){
	var thisCanvasCar = gameWorldData.car[index];
	var damageMul = 1;
	var scoreNum = 0;
	if(indexOpp != -1 && !thisCanvasCar.engineData.dead){
		var targetCanvasCar = gameWorldData.car[indexOpp];
		damageMul = targetCanvasCar.engineData.damage;
		
		scoreNum = Math.round(Math.round(damage) * damageMul) * gameHitScore;
		targetCanvasCar.score += scoreNum;
		
		if(index == gameData.userIndex && gameData.scoreUpdateNum <= 0 && scoreNum > 0 && targetCanvasCar.engineData.life > 0){
			animateScoreText(targetCanvasCar.x, targetCanvasCar.y, scoreNum);	
		}
	}
	
	thisCanvasCar.engineData.life -= Math.round(damage) * damageMul;
	thisCanvasCar.engineData.life = thisCanvasCar.engineData.life < 0 ? 0 : thisCanvasCar.engineData.life;
	
	if(thisCanvasCar.engineData.life <= 0 && !thisCanvasCar.engineData.dead){
		if(indexOpp != -1){
			targetCanvasCar.score += gameKillScore;
			if(index == gameData.userIndex){
				animateScoreText(targetCanvasCar.x, targetCanvasCar.y, gameKillScore);	
			}
		}
		setPhysicsCarExplode(index);
	}
	
	updateLifeBar(thisCanvasCar);
}

/*!
 * 
 * MISC - This is the function that runs for misc physics
 * 
 */
function getPhysicsDamageSpeed(index){
	var thisCanvasCar = gameWorldData.car[index];
	var thisEngineSpeed = thisCanvasCar.engineData.speed;
	
	if(thisCanvasCar.engineData.life < thisCanvasCar.engineData.lifeMax/3){
		//thisEngineSpeed = thisEngineSpeed * .6;
	}
	
	return thisEngineSpeed;	
}

function getBodyVelocity(body){
	return Math.abs(body.velocity[0]) + Math.abs(body.velocity[1]);
}

function convertCanvasToP2X(x){
	return x/scaleX;
}

function convertCanvasToP2Y(y){
	return y/scaleY;
}

function convertCanvasToP2W(w){
	return w/scaleX;
}

function convertCanvasToP2H(h){
	return h/scaleX;
}

/*!
 * 
 * SET GAS EXPLODE - This is the function that runs to set gas explode
 * 
 */
function setPhysicsGasExplode(index){
	if(gameWorldData.objects[index].exploded){
		return;	
	}
	
	var randomNum = Math.floor(Math.random()*3)+1;
	playSound('soundExplodeGas'+randomNum);
	
	gameWorldData.objects[index].exploded = true;
	gameWorldData.objects[index].gotoAndStop('explode');
	createGasExplode(gameWorldData.objects[index]);
	
	var explodeRange = 250;
	var explodeImpulse = 0.008;
	var thisGas = gameWorldData.objects[index];
	
	for(var n=0; n<worldData.car.length; n++){
		var thisCanvasCar = gameWorldData.car[n];
		var thisPhysicsCar = worldData.car[n];
		
		if(getDistanceByValue(thisGas.x, thisGas.y, thisCanvasCar.x, thisCanvasCar.y) < explodeRange){
			thisCanvasCar.impulseData.time = 10;
			
			var dx = thisGas.x - thisCanvasCar.x;
			var dy = thisGas.y - thisCanvasCar.y;
			var rotateTo = getDegrees(getRadians(dx, dy));
			rotateTo -= 180;
			
			var pos = getAnglePosition(thisGas.x, thisGas.y, explodeRange, rotateTo);
			var disX = pos.x - thisCanvasCar.x;
			var disY = thisCanvasCar.y - pos.y;
			
			thisCanvasCar.impulseData.x = (disX) * explodeImpulse;
			thisCanvasCar.impulseData.y = (disY) * explodeImpulse;
			
			thisPhysicsCar.body.applyImpulse([thisCanvasCar.impulseData.x,thisCanvasCar.impulseData.y]);
			
			getPhysicsCarHit(n, -1, getBodyVelocity(thisPhysicsCar.body));
		}
	}
}

/*!
 * 
 * SET CAR EXPLODE - This is the function that runs to set car explode
 * 
 */
function setPhysicsCarExplode(index){
	var explodeRange = 200;
	var explodeImpulse = 0.005;
	var thisCanvasExplodeCar = gameWorldData.car[index];
	
	createCarExplode(thisCanvasExplodeCar);
	
	playSound('soundExplodeCar');
	
	for(var n=0; n<worldData.car.length; n++){
		if(n != index){
			var thisCanvasCar = gameWorldData.car[n];
			var thisPhysicsCar = worldData.car[n];
			
			if(getDistanceByValue(thisCanvasExplodeCar.x, thisCanvasExplodeCar.y, thisCanvasCar.x, thisCanvasCar.y) < explodeRange){
				thisCanvasCar.impulseData.time = 10;
				
				var dx = thisCanvasExplodeCar.x - thisCanvasCar.x;
				var dy = thisCanvasExplodeCar.y - thisCanvasCar.y;
				var rotateTo = getDegrees(getRadians(dx, dy));
				rotateTo -= 180;
				
				var pos = getAnglePosition(thisCanvasExplodeCar.x, thisCanvasExplodeCar.y, explodeRange, rotateTo);
				var disX = pos.x - thisCanvasCar.x;
				var disY = thisCanvasCar.y - pos.y;
				
				thisCanvasCar.impulseData.x = (disX) * explodeImpulse;
				thisCanvasCar.impulseData.y = (disY) * explodeImpulse;
				
				thisPhysicsCar.body.applyImpulse([thisCanvasCar.impulseData.x,thisCanvasCar.impulseData.y]);
			}
		}
	}
}
