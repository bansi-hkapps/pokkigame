////////////////////////////////////////////////////////////
// GAME v1.2
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */
 
//keyboard key code
var keyboard_arr = {left:[65,37],
					right:[68,39],
					up:[87,38],
					down:[83,40]};

//car array	
var car_array = [
					{image:'assets/car1.png', data:{width:60, height:120, speed:10, reverseSpeed:8, life:300, damage:1.3}},
					{image:'assets/car2.png', data:{width:60, height:120, speed:15, reverseSpeed:12, life:250, damage:1.3}},
					{image:'assets/car3.png', data:{width:60, height:117, speed:10, reverseSpeed:8, life:250, damage:1.8}},
					{image:'assets/car4.png', data:{width:60, height:117, speed:10, reverseSpeed:8, life:300, damage:1.3}},
					{image:'assets/car5.png', data:{width:60, height:117, speed:15, reverseSpeed:12, life:250, damage:1.3}},
					{image:'assets/car6.png', data:{width:60, height:117, speed:10, reverseSpeed:8, life:250, damage:1.8}},
					{image:'assets/car7.png', data:{width:60, height:117, speed:10, reverseSpeed:8, life:300, damage:1.3}},
					{image:'assets/car8.png', data:{width:60, height:117, speed:15, reverseSpeed:12, life:250, damage:1.3}},
				];

//item array							
var item_array = [
					{
						image:'assets/item_world_zone.png',
						width:48,
						height:48,
						mass:.1
					},
					{
						image:'assets/item_world_rock1.png',
						width:104,
						height:117,
						mass:0
					},
					{
						image:'assets/item_world_rock2.png',
						width:80,
						height:125,
						mass:0
					},
					{
						image:'assets/item_world_rock3.png',
						width:102,
						height:160,
						mass:0
					},
					{
						image:'assets/item_world_rock4.png',
						width:176,
						height:152,
						mass:0
					},
					{
						image:'assets/item_world_rock5.png',
						width:95,
						height:68,
						mass:0
					}
				];

//explosion array				
var itemExplode_array = [
					{
						image:'assets/item_world_gas.png',
						width:53,
						height:54,
						mass:.1
					}
				];
				
//map array		
var map_array = [
					{
						image:'assets/map1.png',
						thumb:'assets/map1_thumb.png',
						width:1800,
						height:1200,
						areaW:1400,
						areaH:900,
						cars:[
								{x:-600, y:360, rotation:45},
								{x:600, y:360, rotation:-45},
								{x:-600, y:-360, rotation:135},
								{x:600, y:-360, rotation:-135},
								{x:0, y:360, rotation:0},
								{x:0, y:-360, rotation:180},
								{x:-300, y:0, rotation:90},
								{x:300, y:0, rotation:-90}
							],
						items:[
								{type:0, index:0, x:-300, y:200, rotation:90},
								{type:0, index:0, x:300, y:-200, rotation:45},
								{type:1, index:0, x:655, y:0, rotation:0},
								{type:1, index:0, x:-655, y:0, rotation:0},
								{type:1, index:0, x:-350, y:400, rotation:0},
								{type:1, index:0, x:350, y:400, rotation:0},
								{type:1, index:0, x:-350, y:-400, rotation:0},
								{type:1, index:0, x:350, y:-400, rotation:0},
							]
					},
					{
						image:'assets/map2.png',
						thumb:'assets/map2_thumb.png',
						width:2300,
						height:1800,
						areaW:2000,
						areaH:1500,
						cars:[
								{x:-650, y:0, rotation:90},
								{x:650, y:0, rotation:-90},
								{x:-460, y:-480, rotation:135},
								{x:460, y:-480, rotation:-135},
								{x:-460, y:480, rotation:45},
								{x:460, y:480, rotation:-45},
								{x:0, y:-530, rotation:180},
								{x:0, y:530, rotation:0}
							],
						items:[
								{type:0, index:1, x:-800, y:547, rotation:90},
								{type:0, index:2, x:-688, y:580, rotation:140},
								{type:0, index:3, x:730, y:400, rotation:60},
								{type:0, index:4, x:630, y:522, rotation:35},
								{type:0, index:5, x:794, y:530, rotation:45},
								{type:0, index:3, x:335, y:-577, rotation:45},
								{type:0, index:2, x:726, y:-353, rotation:270},
								{type:0, index:4, x:-708, y:-307, rotation:100},
								{type:1, index:0, x:-393, y:685, rotation:100},
								{type:1, index:0, x:342, y:634, rotation:100},
								{type:1, index:0, x:-393, y:-685, rotation:100},
								{type:1, index:0, x:342, y:-634, rotation:100},
							]
					},
					{
						image:'assets/map3.png',
						thumb:'assets/map3_thumb.png',
						width:1800,
						height:1200,
						areaW:1400,
						areaH:900,
						cars:[
								{x:-600, y:360, rotation:45},
								{x:600, y:360, rotation:-45},
								{x:-600, y:-360, rotation:135},
								{x:600, y:-360, rotation:-135},
								{x:0, y:360, rotation:0},
								{x:0, y:-360, rotation:180},
								{x:-300, y:0, rotation:90},
								{x:300, y:0, rotation:-90}
							],
						items:[
								{type:1, index:0, x:-628, y:0, rotation:100},
								{type:1, index:0, x:-628, y:-35, rotation:100},
								{type:1, index:0, x:-628, y:35, rotation:100},
								{type:1, index:0, x:-628, y:-75, rotation:100},
								{type:1, index:0, x:-628, y:75, rotation:100},
								{type:1, index:0, x:628, y:0, rotation:100},
								{type:1, index:0, x:628, y:-35, rotation:100},
								{type:1, index:0, x:628, y:35, rotation:100},
								{type:1, index:0, x:628, y:-75, rotation:100},
								{type:1, index:0, x:628, y:75, rotation:100},
							]
					}
				];

//car life bar
var lifeBar = {
					width:90, //width of the bar
					height:15, //height of the bar
					strokeNum:8, //stroke number
					strokeColor:'#333', //stroke color
					fillColor:'#00D936', //fill color
					bgColor:'#333', //background color
					offset:70 //offet position y from car
				};

//car tyre mark			
var tyreMarkSettings = {
							delay:50, //delay to start
							alpha:.1, //opacity
							color:'#000', //color
							stroke:8, //tyre stroke
							distance:10, //distance to update 
							reset:5, //reset new path
							fadeSpeed:.5, //fade speed
							fadeDelay:3 //delay speed
						};
						
//stats
var stats_arr = ['Acceleration','Strength','Damage']; //stats display text
var statsBar = {
					width:270, //width
					height:20, //height
					color:'#fff', //fill color
					bgColor:'#666' //background color
				};

//game countdown text						
var countdown_arr = [
						"3",
						"2",
						"1",
						"GO!",
					];
					
var gameHitScore = 20; //multiply by collision
var gameKillScore = 5000; //kill a car score

var gameScoreDisplayText = 'SCORE :'; //game score display text
var gameScoreText = '[NUMBER] PTS'; //game score display text

var gameWinMessage = 'YOU SURVIVE!'; //game win message
var gameLossMessage = 'YOU ARE WRECKED!'; //game loss message

var exitMessage = 'ARE YOUR SURE YOU\nWANT TO QUIT THE GAME?'; //exit game message

var resultTitleWinText = 'CONGRATULATION, YOU WIN!'; //result title display text
var resultTitleLoseText = 'GAME OVER!'; //result title display text
var resultScoreText = '[NUMBER] PTS'; //result score display text

//Social share, [SCORE] will replace with game score
var shareEnable = false; //toggle share
var shareText = 'SHARE YOUR SCORE'; //social share message
var shareTitle = 'Highscore on Death Race Game is [SCORE]PTS.';//social share score title
var shareMessage = '[SCORE]PTS is mine new highscore on Death Race Game! Try it now!'; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
 
var playerData = {win:false, score:0, scoreEase:0};
var gameData = {paused:true, gameControl:false, gameAIControl:false, userIndex:0, carIndex:0, mapIndex:0, mapW:0, mapH:0, cars:[], pos:[], markDelay:0, gameEnd:false, scoreUpdateDelay:5, scoreUpdateNum:0};
var statsData = {speed:0, strength:0, damage:0};
var gameWorldData = {car:[], objects:[], aniamtion:[]};
var cameraData = {shakeRange:0, shakeTime:0};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	mobileControllerContainer.visible = false;
	
	if($.browser.mobile || isTablet){
		mobileControllerContainer.visible = true;	
	}else{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if(isInIframe){
			this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
		
			$(window).blur(function() {
				appendFocusFrame();
			});
			appendFocusFrame();
        }else{
            this.document.onkeydown = keydown;
			this.document.onkeyup = keyup;
        }
	}
	
	buttonStart.cursor = "pointer";
	buttonStart.addEventListener("click", function(evt) {
		playSound('soundClick');
		playSound('soundEngine');
		goPage('select');
	});
	
	//select
	buttonLeftMap.cursor = "pointer";
	buttonLeftMap.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMap(false);
	});
	
	buttonRightMap.cursor = "pointer";
	buttonRightMap.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameMap(true);
	});
	
	buttonLeftCar.cursor = "pointer";
	buttonLeftCar.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameCar(false);
	});
	
	buttonRightCar.cursor = "pointer";
	buttonRightCar.addEventListener("click", function(evt) {
		playSound('soundClick');
		toggleGameCar(true);
	});
	
	buttonReady.cursor = "pointer";
	buttonReady.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('game');
	});
	
	//result
	buttonContinue.cursor = "pointer";
	buttonContinue.addEventListener("click", function(evt) {
		playSound('soundClick');
		goPage('main');
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleGameMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleGameMute(false);
	});
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		toggleConfirm(true);
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		toggleConfirm(false);
		goPage('result');
	});
	
	itemExit.addEventListener("click", function(evt) {
		
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		toggleConfirm(false);
	});
	
	//mobile buttons
	totalMobileDirection = ['left','right','up','down'];
	for(var n = 0; n<totalMobileButtons.length; n++){
		$.buttons[totalMobileButtons[n]].name = totalMobileButtons[n];
		$.buttons[totalMobileButtons[n]].direction = totalMobileDirection[n];
		$.buttons[totalMobileButtons[n]].addEventListener("mousedown", function(evt) {
			toggleKeyPress(evt.target.name, evt.target.direction, true);
		});
		$.buttons[totalMobileButtons[n]].addEventListener("pressup", function(evt) {
			toggleKeyPress(evt.target.name, evt.target.direction, false);
		});	
	}
	
	for(var n=0; n<car_array.length; n++){
		gameData.cars.push(n);
	}
}

function appendFocusFrame(){
	$('#mainHolder').prepend('<div id="focus" style="position:absolute; width:100%; height:100%; z-index:1000;"></div');
	$('#focus').click(function(){
		$('#focus').remove();
	});	
}

function toggleGameCar(con){
	if(con){
		gameData.carIndex++;
		gameData.carIndex = gameData.carIndex > car_array.length - 1 ? 0 : gameData.carIndex;
	}else{
		gameData.carIndex--;
		gameData.carIndex = gameData.carIndex < 0 ? car_array.length - 1 : gameData.carIndex;	
	}
	
	updateGameCar();
}

function updateGameCar(){
	for(var n=0; n<stats_arr.length; n++){
		var value = 0;
		if(n == 0){
			value = car_array[gameData.carIndex].data.speed;
		}else if(n == 1){
			value = car_array[gameData.carIndex].data.life;
		}else if(n == 2){
			value = car_array[gameData.carIndex].data.damage;	
		}
		TweenMax.to($.selectStats['fill'+n], 1, {value:value, overwrite:true, onUpdate:updateCarStats, onUpdateParams:[n]});
	}
	
	for(var n=0; n<car_array.length; n++){
		TweenMax.killTweensOf($.selectCar[n]);
		$.selectCar[n].rotation = 0;
		$.selectCar[n].visible = false;
	}
	
	$.selectCar[gameData.carIndex].visible = true;
	animateGameCar($.selectCar[gameData.carIndex]);
}

function updateCarStats(n){
	$.selectStats['fill'+n].graphics.clear();
	
	var widthPercent = 0;
	if(n == 0){
		widthPercent = $.selectStats['fill'+n].value/statsData.speed * statsBar.width;
	}else if(n == 1){
		widthPercent = $.selectStats['fill'+n].value/statsData.strength * statsBar.width;
	}else if(n == 2){
		widthPercent = $.selectStats['fill'+n].value/statsData.damage * statsBar.width;
	}
	$.selectStats['fill'+n].graphics.beginFill(statsBar.color).drawRect(0, 0, widthPercent, statsBar.height);	
}

function animateGameCar(car){
	car.rotation = 0;
	TweenMax.to(car, 1.5, {rotation:360, overwrite:true, ease:Linear.easeNone, onComplete:animateGameCar, onCompleteParams:[car]});	
}

function toggleGameMap(con){
	if(con){
		gameData.mapIndex++;
		gameData.mapIndex = gameData.mapIndex > map_array.length - 1 ? 0 : gameData.mapIndex;
	}else{
		gameData.mapIndex--;
		gameData.mapIndex = gameData.mapIndex < 0 ? map_array.length - 1 : gameData.mapIndex;	
	}
	
	updateGameMap();
}

function updateGameMap(){
	for(var n=0; n<map_array.length; n++){
		$.selectMap[n].visible = false;
	}
	
	$.selectMap[gameData.mapIndex].visible = true;
}

/*!
 * 
 * KEYBOARD EVENTS - This is the function that runs for keyboard events
 * 
 */
function keydown(event) {
	var userCar = gameWorldData.car[gameData.userIndex];
	if(keyboard_arr.left.indexOf(event.keyCode) != -1){
		//left
		userCar.keyData.left = true;
	}
	
	if(keyboard_arr.right.indexOf(event.keyCode) != -1){
		//right
		userCar.keyData.right = true;
	}
	
	if(keyboard_arr.up.indexOf(event.keyCode) != -1){
		//up
		userCar.keyData.up = true;
	}
	
	if(keyboard_arr.down.indexOf(event.keyCode) != -1){
		//down
		userCar.keyData.down = true;
	}
}

function keyup(event) {
	var userCar = gameWorldData.car[gameData.userIndex];
	if(keyboard_arr.left.indexOf(event.keyCode) != -1 && userCar.keyData.left){
		userCar.keyData.left = false
	}
	
	if(keyboard_arr.right.indexOf(event.keyCode) != -1 && userCar.keyData.right){
		userCar.keyData.right = false;
	}
	
	if(keyboard_arr.up.indexOf(event.keyCode) != -1 && userCar.keyData.up){
		userCar.keyData.up = false;
	}
	
	if(keyboard_arr.down.indexOf(event.keyCode) != -1 && userCar.keyData.down){
		userCar.keyData.down = false;
	}
}

function toggleKeyPress(name, side, con){
	if(con){
		$.buttons[name].gotoAndStop('press');
	}else{
		$.buttons[name].gotoAndStop('static');	
	}
	
	var userCar = gameWorldData.car[gameData.userIndex];
	userCar.keyData[side] = con;	
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	mainContainer.visible = false;
	selectContainer.visible = false;
	gameContainer.visible = false;
	resultContainer.visible = false;
	
	stopSoundLoop('musicGame');
	
	var targetContainer = null;
	switch(page){
		case 'main':
			playSoundLoop('musicMain');
			targetContainer = mainContainer;
		break;
		
		case 'select':
			targetContainer = selectContainer;
			
			gameData.carIndex = Math.round(Math.random()*(car_array.length-1));
			updateGameCar();
			updateGameMap();
		break;
		
		case 'game':
			targetContainer = gameContainer;
			
			stopSoundLoop('musicMain');
			playSoundLoop('musicGame');
			startGame();
		break;
		
		case 'result':
			targetContainer = resultContainer;
			playSoundLoop('musicMain');
			
			stopGame();
			stopPhysics();
			saveGame(playerData.score, gameData.mapIndex);
			
			if(playerData.win){
				resultTitleTxt.text = resultTitleWinText;
			}else{
				resultTitleTxt.text = resultTitleLoseText;	
			}
			
			resultScoreTxt.text = resultScoreText.replace('[NUMBER]', 0);	
			
			var tweenValue = {value:0}
			TweenMax.to(tweenValue, 1, {delay:.5, value:playerData.score, overwrite:true, onUpdate:function(){
				resultScoreTxt.text = resultScoreText.replace('[NUMBER]', addCommas(Math.round(tweenValue.value)));
			}});
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	
	if(con){
		TweenMax.pauseAll(true, true);
		gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true)
		gameData.paused = false;
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */

function startGame(){
	startPhysics();
	
	gameWorldData.car = [];
	gameWorldData.objects = [];
	gameWorldData.aniamtion = [];
	
	createMap(gameData.mapIndex);
	
	gameData.paused = false;
	gameData.gameEnd = false;
	gameData.markDelay = tyreMarkSettings.delay;
	itemArrowUser.animateData = {y:0, side:true, range:20};
	
	playerData.win = false;
	playerData.score = 0;
	playerData.scoreEase = 0;
	updateGameScore();
	
	//gameWorldData.car[gameData.userIndex].engineData.life = 1000;
	
	gameData.gameControl = gameData.gameAIControl = false;
	toggleCountdown(true);
}

/*!
 * 
 * COUNTDOWN - This is the function that runs countdown timer
 * 
 */
var countdownInterval = null;
var countNum = 0;
function toggleCountdown(con){
	if(con){
		countNum = 0;
		countdownInterval = setInterval(updateCountdown, 800);
		updateCountdown();
		gameCountdownTxt.alpha = 1;
	}else{
		clearInterval(countdownInterval);
		countdownInterval = null;
	}
}

function updateCountdown(){
	gameCountdownTxt.text = gameCountdownShadowTxt.text = countdown_arr[countNum];
	countNum++;
	countdownContainer.visible = true;
	if(countNum > countdown_arr.length){
		countdownContainer.visible = false;
		
		//start race
		gameData.gameControl = true;
		gameData.gameAIControl = true;
		toggleCountdown(false);
	}else if(countNum == countdown_arr.length){
		playSound('soundBeep2');
	}else{
		playSound('soundBeep1');	
	}
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	TweenMax.killAll();
	gameData.paused = true;
	physicsData.paused = true;
	
	effectContainer.removeAllChildren();
	objectContainer.removeAllChildren();
	indicatorContainer.removeAllChildren();
	tyreMarkContainer.removeAllChildren();
}

/*!
 * 
 * SAVE GAME - This is the function that runs to save game
 * 
 */
function saveGame(score, type){
	if ( typeof toggleScoreboardSave == 'function' ) { 
		$.scoreData.score = score;
		if(typeof type != 'undefined'){
			$.scoreData.type = type;	
		}
		toggleScoreboardSave(true);
	}

	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}

/*!
 * 
 * CREATE MAP - This is the function that run to load and create map
 * 
 */
function createMap(index){
	gameData.mapIndex = index;
	gameData.mapW = map_array[index].w;
	gameData.mapH = map_array[index].h;
	
	for(var n=0; n<map_array.length; n++){
		$.maps[n].visible = false;
	}
	
	$.maps[index].visible = true;
	
	var planeArray = [
						{x:0, y:-(map_array[index].areaH/2), w:map_array[index].areaW, h:10},
						{x:0, y:map_array[index].areaH/2, w:map_array[index].areaW, h:10},
						{x:-(map_array[index].areaW/2), y:0, w:10, h:map_array[index].areaH},
						{x:map_array[index].areaW/2, y:0, w:10, h:map_array[index].areaH}
					];
					
	createPhysicsMap(planeArray);
	
	shuffle(gameData.cars);
	var carIndex = 0;
	
	//cars
	gameData.pos = [];
	for(var n=0; n<map_array[index].cars.length; n++){
		gameData.pos.push(n);	
	}
	shuffle(gameData.pos);
	
	var firstRound = true;
	var resetCars = false;
	
	for(var n=0; n<gameData.pos.length; n++){
		var curCarIndex = gameData.cars[carIndex];
		var posIndex = gameData.pos[n];
		
		if(n == 0){
			//set first user
			curCarIndex = gameData.carIndex;
			gameData.userIndex = 0;
		}
		
		createCar('pursuit', curCarIndex, map_array[index].cars[posIndex].x, map_array[index].cars[posIndex].y, map_array[index].cars[posIndex].rotation, n);
		carIndex++;
		
		if(carIndex > car_array.length-1){
			resetCars = true;
		}
		
		if(firstRound){
			if(gameData.cars[carIndex] == gameData.carIndex){
				carIndex++;
				if(carIndex > car_array.length-1){
					resetCars = true;
				}
			}
		}
		
		if(resetCars){
			firstRound = false;
			shuffle(gameData.cars);
			carIndex = 0;	
		}
	}
	
	//items
	for(var n=0; n<map_array[index].items.length; n++){
		createObjects(map_array[index].items[n].type, map_array[index].items[n].index, map_array[index].items[n].x, map_array[index].items[n].y, map_array[index].items[n].rotation);
	}
}

/*!
 * 
 * CREATE CAR AND OBJECTS - This is the function that run to create car and objects
 * 
 */
function createCar(type,index,x,y,rotation,id){
	
	var newCar = $.car[index].clone();	
	newCar.x = x;
	newCar.y = y;
	newCar.rotation = rotation;
	newCar.keyData = {up:false, down:false, left:false, right:false, speed:0};
	newCar.engineData = {
							speed:car_array[index].data.speed,
							reverseSpeed:car_array[index].data.reverseSpeed,
							life:car_array[index].data.life,
							lifeMax:car_array[index].data.life,
							damage:car_array[index].data.damage,
							dead:false
						};
						
	newCar.idleData = {time:0, reset:0, reverse:0, impulse:0};
	newCar.score = 0;
	newCar.oldX = x;
	newCar.oldY = y;
	newCar.radius = 60;
	newCar.impulseData = {time:0, x:0, y:0};
	newCar.chaseIndex = -1;
	
	var indicator = itemArrow.clone();
	indicator.visible = false;
	newCar.indicator = indicator;
	
	//tyre array
	newCar.marks = {x:x, y:y, left:{x:x, y:y, shape:null}, right:{x:x, y:y, shape:null}, container:null, resetTime:null, reset:true};
	newCar.tyre = {playTime:0};
	
	//tyre array
	var tyreArray = [];
	for(var n=0; n<2; n++){
		tyreArray.push({x:0, y:0});
	}
	newCar.tyreArray = tyreArray;
	
	//detection array
	var detectionArray = [];
	for(var n=0; n<3; n++){
		detectionArray.push({x:0, y:0});
	}
	newCar.detectionArray = detectionArray;
	
	gameWorldData.car.push(newCar);
	objectContainer.addChild(newCar);
	indicatorContainer.addChild(indicator);
	
	createLifeBar(newCar);
	createPhysicsCar(type,car_array[index].data.width,car_array[index].data.height,x,y,rotation);
}

function createObjects(type,index,x,y,rotation){
	var newObject, objW, objH;
	if(type == 0){
		newObject = $.items[index].clone();
		objW = item_array[index].width;
		objH = item_array[index].height;
		objMass = item_array[index].mass;
	}else if(type == 1){
		newObject = $.itemsExplode[index].clone();
		newObject.exploded = false;
		objW = item_array[index].width;
		objH = item_array[index].height;
		objMass = item_array[index].mass;
	}
	
	newObject.x = x;
	newObject.y = y;
	newObject.rotation = rotation;
	
	gameWorldData.objects.push(newObject);
	objectContainer.addChild(newObject);
	createPhysicsObject(type,objW,objH,x,y,rotation,objMass);	
}

/*!
 * 
 * CREATE LIFEBAR - This is the function that run to create car life bar
 * 
 */
function createLifeBar(obj){
	var lifeBorder = new createjs.Shape();
	var lifeBg = new createjs.Shape();
	var lifeFill = new createjs.Shape();
	var lifeContainer = new createjs.Container();
	
	obj.lifeBorder = lifeBorder;
	obj.lifeBg = lifeBg;
	obj.lifeFill = lifeFill;
	obj.lifeContainer = lifeContainer;
	obj.lifeContainer.visible = false;
	
	obj.lifeContainer.regX = (lifeBar.width/2);
	obj.lifeContainer.regY = lifeBar.offset;
	
	lifeContainer.addChild(lifeBg, lifeFill, lifeBorder);
	objectContainer.addChild(lifeContainer);
	
	updateLifeBar(obj);
}

function updateLifeBar(obj){
	var lifeW, lifeH, lifeFill;
	var thisFillColor = lifeBar.fillColor;
	
	var barW = lifeBar.width;
	var barH = lifeBar.height;
	
	if(obj.engineData.life <= 0){
		obj.gotoAndStop(1);
		obj.lifeContainer.visible = false;
		obj.engineData.dead = true;
	}else{
		obj.lifeContainer.visible = true;
		
		lifeW = barW;
		lifeH = barH;
		lifeFill = obj.engineData.life / obj.engineData.lifeMax * lifeW;
		
		obj.lifeContainer.uncache();
		obj.lifeBorder.graphics.clear();
		obj.lifeBg.graphics.clear();
		obj.lifeFill.graphics.clear();
		obj.lifeBorder.graphics.setStrokeStyle(lifeBar.strokeNum).beginStroke(lifeBar.strokeColor).drawRect(0, 0, lifeW, lifeH);
		obj.lifeBg.graphics.beginFill(lifeBar.bgColor).drawRect(0, 0, lifeW, lifeH);
		obj.lifeFill.graphics.beginFill(thisFillColor).drawRect(0, 0, lifeFill, lifeH);
		obj.lifeContainer.cache(0,0,lifeW, lifeH);
	}
}

/*!
 * 
 * CREATE EXPLOSION - This is the function that run to create explosion
 * 
 */
 
function createCarExplode(obj){
	var newCarExplode = itemExplosionCarAnimate.clone();
	newCarExplode.x = obj.x;
	newCarExplode.y = obj.y;
	newCarExplode.rotation = obj.rotation;
	newCarExplode.gotoAndPlay('animate');
	
	cameraData.shakeTime = 15;
	cameraData.shakeRange = 15;
	effectContainer.addChild(newCarExplode);
	gameWorldData.aniamtion.push(newCarExplode);	
}

function createGasExplode(obj){
	var newGasExplode = itemExplosionGasAnimate.clone();
	newGasExplode.x = obj.x;
	newGasExplode.y = obj.y;
	newGasExplode.rotation = obj.rotation;
	newGasExplode.gotoAndPlay('animate');
	
	cameraData.shakeTime = 20;
	cameraData.shakeRange = 25;
	effectContainer.addChild(newGasExplode);
	gameWorldData.aniamtion.push(newGasExplode);	
}

function destroyLoopExplode(){
	for(var n=0; n<gameWorldData.aniamtion.length; n++){
		var thisAnimation = gameWorldData.aniamtion[n];
		
		if(thisAnimation.currentFrame == thisAnimation.spriteSheet.getNumFrames()-1){
			effectContainer.removeChild(thisAnimation);
			gameWorldData.aniamtion.splice(n,1);
		}
	}
}

/*!
 * 
 * MOVE TYRE MARK - This is the function that move and update tyre mark
 * 
 */
function moveTyreMark(obj){
	var distanceMark = getDistanceByValue(obj.marks.x, obj.marks.y, obj.x, obj.y);
	
	if(obj.marks.reset){
		obj.marks.reset = false;
		obj.marks.resetTime = new Date();
		
		var newPath = new createjs.Shape();
		newPath.alpha = tyreMarkSettings.alpha;
		newPath.graphics.beginStroke(tyreMarkSettings.color)
				  .setStrokeStyle(tyreMarkSettings.stroke)
				  .moveTo(obj.marks.left.x, obj.marks.left.y);
		
		obj.marks.left.x = obj.tyreArray[0].x;
		obj.marks.left.y = obj.tyreArray[0].y;
		
		obj.marks.left.path = newPath;
		
		var newPath = new createjs.Shape();
		newPath.alpha = tyreMarkSettings.alpha;
		newPath.graphics.beginStroke(tyreMarkSettings.color)
				  .setStrokeStyle(tyreMarkSettings.stroke)
				  .moveTo(obj.marks.right.x, obj.marks.right.y);
		
		obj.marks.right.x = obj.tyreArray[1].x;
		obj.marks.right.y = obj.tyreArray[1].y;
		 
		obj.marks.right.path = newPath;
		
		obj.marks.container = new createjs.Container();
		obj.marks.container.addChild(obj.marks.left.path, obj.marks.right.path);
		tyreMarkContainer.addChild(obj.marks.container);
	}
	
	if(distanceMark > tyreMarkSettings.distance){
		
		var markShapeLeft = obj.marks.left.path;
		markShapeLeft.graphics.beginStroke(tyreMarkSettings.color)
						  .setStrokeStyle(tyreMarkSettings.stroke)
						  .moveTo(obj.marks.left.x, obj.marks.left.y)
						  .lineTo(obj.tyreArray[0].x, obj.tyreArray[0].y);
						  
		var markShapeRight = obj.marks.right.path;
		markShapeRight.graphics.beginStroke(tyreMarkSettings.color)
						  .setStrokeStyle(tyreMarkSettings.stroke)
						  .moveTo(obj.marks.right.x, obj.marks.right.y)
						  .lineTo(obj.tyreArray[1].x, obj.tyreArray[1].y);
		
		//update tyre marks			  
		obj.marks.x = obj.x;
		obj.marks.y = obj.y;
		
		obj.marks.left.x = obj.tyreArray[0].x;
		obj.marks.left.y = obj.tyreArray[0].y;
		
		obj.marks.right.x = obj.tyreArray[1].x;
		obj.marks.right.y = obj.tyreArray[1].y;
	}
	
	//reset
	if(obj.marks.resetTime != null){
		var nowDate = new Date();
		var elapsedTime = (nowDate.getTime() - obj.marks.resetTime.getTime());
		elapsedTime = (elapsedTime/1000)%60;
		
		if(elapsedTime > tyreMarkSettings.reset){
			var leftPath = obj.marks.container;
			resetTyreMark(leftPath);
			
			obj.marks.reset = true;
		}
	}
}

function resetTyreMark(leftPath){
	TweenMax.to(leftPath, tyreMarkSettings.fadeSpeed, {delay: tyreMarkSettings.fadeSpeed, alpha:0, overwrite:true, onComplete:removeTyreMark, onCompleteParams:[leftPath]});
}

function removeTyreMark(leftPath){
	tyreMarkContainer.removeChild(leftPath);
}

/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(){
	if(!gameData.paused){
		updateCamera();
		updateCarArrow();
		updateGameScore();
		
		objectContainer.sortChildren(sortFunction);
		destroyLoopExplode();
		
		checkEndGame();
	}
}

/*!
 * 
 * UPDATE CAMERA - This is the function that runs to update camera
 * 
 */
function updateCamera(){
	var userCar = gameWorldData.car[gameData.userIndex];
	
	var currentX = userCar.x;
	var currentY = userCar.y;
	
	var extraSpaceX = (stageW-(offset.x*1.5)) - map_array[gameData.mapIndex].width;
	var extraSpaceY = (stageH-(offset.y*1.5)) - map_array[gameData.mapIndex].height;
	
	if(extraSpaceX < 0){
		currentX = currentX < (extraSpaceX/2) ? (extraSpaceX/2) : currentX;
		currentX = currentX > Math.abs(extraSpaceX/2) ? Math.abs(extraSpaceX/2) : currentX;
	}
	
	if(extraSpaceY < 0){
		currentY = currentY < (extraSpaceY/2) ? (extraSpaceY/2) : currentY;
		currentY = currentY > Math.abs(extraSpaceY/2) ? Math.abs(extraSpaceY/2) : currentY;
	}
	
	if(cameraData.shakeTime > 0){
		cameraData.shakeTime--;
			
		var shakeX = randomIntFromInterval(-cameraData.shakeRange, cameraData.shakeRange);
		var shakeY = randomIntFromInterval(-cameraData.shakeRange, cameraData.shakeRange);
		currentX += shakeX;
		currentY += shakeY;
	}
	
	p2Container.regX = currentX;
	p2Container.regY = currentY;
	
	//p2Container.rotation =  -userCar.rotation;
}

/*!
 * 
 * UPDATE INDICATOR - This is the function that runs to update car indicator
 * 
 */
 
function updateCarArrow(){
	var userCar = gameWorldData.car[gameData.userIndex];
	
	for(var n=0; n<gameWorldData.car.length; n++){
		var thisCar = gameWorldData.car[n];
		if(n != gameData.userIndex){
			var pt = p2Container.localToGlobal(thisCar.x, thisCar.y);
			var scrSize = {width:canvasW, height:canvasH};
			
			var centerMouse = {
								x:pt.x - (scrSize.width/2),
								y:pt.y  - (scrSize.height/2)};
			
			//find slope
			var slope = centerMouse.y/centerMouse.x;
        
			//for a bit of padding use a smaller screen size
			padSize = {width:scrSize.width-(offset.x * 2),
					  height:scrSize.height-(offset.y * 2)};
			
			//calculate indicator position
			if(centerMouse.y<0){
				//top of screen
				indicatorPos = {x:(-padSize.height/2)/slope,
							   y:-padSize.height/2}
			}else{
				// bottom of screen
				indicatorPos = {x:(padSize.height/2)/slope,
							   y:padSize.height/2}
			}
			
			if(indicatorPos.x<-padSize.width/2){
				//left side
				indicatorPos = {x:-padSize.width/2,
							   y:  slope * -padSize.width/2}
			}else if(indicatorPos.x>padSize.width/2){
				//right side
				indicatorPos = {x:padSize.width/2,
							   y:  slope * padSize.width/2}
			}
			
			indicatorPos = {x:indicatorPos.x + (scrSize.width/2),
                        y: indicatorPos.y + (scrSize.height/2)}
			
			thisCar.indicator.x = indicatorPos.x;
			thisCar.indicator.y = indicatorPos.y;
			
			thisCar.indicator.visible = false;
			if(!thisCar.engineData.dead){
				if(pt.x < offset.x - thisCar.radius){
					thisCar.indicator.visible = true;
				}else if(pt.x > (stageW - offset.x) + thisCar.radius){
					thisCar.indicator.visible = true;
				}else if(pt.y < offset.y - thisCar.radius){
					thisCar.indicator.visible = true;
				}else if(pt.y > (stageH - offset.y) + thisCar.radius){
					thisCar.indicator.visible = true;
				}	
			}
			
			
			var rotation = getDirection(thisCar.x, thisCar.y, userCar.x, userCar.y);
			thisCar.indicator.rotation = rotation+180;
		}else{
			itemArrowUser.x = thisCar.x;
			itemArrowUser.y = thisCar.y + itemArrowUser.animateData.y;
			
			if(itemArrowUser.animateData.side){
				itemArrowUser.animateData.y--;	
				if(itemArrowUser.animateData.y < -itemArrowUser.animateData.range){
					itemArrowUser.animateData.side = false;	
				}
			}else{
				itemArrowUser.animateData.y++;	
				if(itemArrowUser.animateData.y >= 0){
					itemArrowUser.animateData.side = true;	
				}
			}
		}
	}
}

function updateGameScore(score){
	if(gameData.scoreUpdateNum > 0){
		gameData.scoreUpdateNum--;	
	}
	
	var userCar = gameWorldData.car[gameData.userIndex];
	playerData.score = userCar.score;
	playerData.scoreEase;
	
	TweenMax.to(playerData, .3, {scoreEase:playerData.score, overwrite:true, onUpdate:function(){
		gameScoreTxt.text = gameScoreText.replace("[NUMBER]", addCommas(Math.round(playerData.scoreEase)));
	}});
}

function animateScoreText(x, y, score){
	gameData.scoreUpdateNum = gameData.scoreUpdateDelay;
	
	var newScoreTxt = new createjs.Text();
	newScoreTxt.font = "55px built_titlingregular";
	newScoreTxt.color = "#fff";
	newScoreTxt.textAlign = "center";
	newScoreTxt.textBaseline='alphabetic';
	newScoreTxt.text = '+'+score;
	newScoreTxt.x = x;
	newScoreTxt.y = y;
	newScoreTxt.alpha = 1;
	newScoreTxt.active = true;
	scoreContainer.addChild(newScoreTxt);
	
	TweenMax.to(newScoreTxt, .5, {y:y-50, overwrite:true, ease:Linear.easeNone, onComplete:function(){
		TweenMax.to(newScoreTxt, .5, {alpha:0, y:y-100, ease:Linear.easeNone, overwrite:true, onComplete:removeScoreText, onCompleteParams:[newScoreTxt]});		
	}});
}

function removeScoreText(obj){
	scoreContainer.removeChild(obj);	
}

function checkEndGame(){
	if(gameData.gameEnd){
		return;	
	}
	
	var gameIsEnd = false;
	if(gameWorldData.car[gameData.userIndex].engineData.life <= 0){
		gameIsEnd = true;
		gameData.gameControl = false;
		gameCountdownTxt.text = gameCountdownShadowTxt.text = gameLossMessage;
		countdownContainer.visible = true;
		playerData.win = false;
	}else{
		var deadCount = 0;
		for(var n=0; n<gameWorldData.car.length; n++){
			if(gameWorldData.car[n].engineData.dead){
				deadCount++;
			}
		}	
		
		if(deadCount >= gameWorldData.car.length-1){
			gameData.gameControl = false;
			gameData.gameAIControl = false;
			gameCountdownTxt.text = gameCountdownShadowTxt.text = gameWinMessage;
			countdownContainer.visible = true;
			gameIsEnd = true;	
			playerData.win = true;
		}
	}
	
	if(gameIsEnd){
		gameData.gameEnd = true;
		TweenMax.to(gameContainer, 3, {overwrite:true, onComplete:function(){
			goPage('result');	
		}});	
	}
}

function endGame(){
		
}

/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}

/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	title = shareTitle.replace("[SCORE]", addCommas(playerData.score));
	text = shareMessage.replace("[SCORE]", addCommas(playerData.score));
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}

var sortFunction = function(obj1, obj2, options) {
	if (obj1.y > obj2.y) { return 1; }
	if (obj1.y < obj2.y) { return -1; }
	return 0;
}