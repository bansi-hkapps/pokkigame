////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);	
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, holesContainer, effectContainer, ballContainer, handleContainer, resultContainer;
var guideline, bg, logo, buttonStart, buttonContinue, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.selectCar = {};
$.selectMap = {};
$.selectStats = {};
$.car = {};
$.maps = {};
$.items = {};
$.itemsExplode = {};
$.buttons = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	selectContainer = new createjs.Container();
	mobileControllerContainer = new createjs.Container();
	countdownContainer = new createjs.Container();
	p2Container = new createjs.Container();
	mapContainer = new createjs.Container();
	objectContainer = new createjs.Container();
	indicatorContainer = new createjs.Container();
	effectContainer = new createjs.Container();
	tyreMarkContainer = new createjs.Container();
	scoreContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	optionsContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	
	backgroundWhite = new createjs.Bitmap(loader.getResult('backgroundWhite'));
	backgroundWhite.alpha = 0;
	bg = new createjs.Bitmap(loader.getResult('background'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	
	buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
	centerReg(buttonStart);
	buttonStart.x = canvasW/2;
	buttonStart.y = canvasH/100 * 72;
	
	//selection
	itemSelect = new createjs.Bitmap(loader.getResult('itemSelect'));
	
	buttonReady = new createjs.Bitmap(loader.getResult('buttonReady'));
	centerReg(buttonReady);
	buttonReady.x = canvasW/2;
	buttonReady.y = canvasH/100 * 72;
	
	buttonLeftMap = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonLeftMap);
	buttonLeftMap.x = canvasW/100 * 20;
	buttonLeftMap.y = canvasH/100 * 79;
	
	buttonRightMap = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRightMap);
	buttonRightMap.x = canvasW/100 * 27;
	buttonRightMap.y = canvasH/100 * 79;
	
	buttonLeftCar = new createjs.Bitmap(loader.getResult('buttonLeft'));
	centerReg(buttonLeftCar);
	buttonLeftCar.x = canvasW/100 * 73;
	buttonLeftCar.y = canvasH/100 * 79;
	
	buttonRightCar = new createjs.Bitmap(loader.getResult('buttonRight'));
	centerReg(buttonRightCar);
	buttonRightCar.x = canvasW/100 * 80;
	buttonRightCar.y = canvasH/100 * 79;
	
	selectContainer.addChild(itemSelect);
	
	//stats
	var startX = canvasW/100 * 55;
	var startY = canvasH/100 * 30;
	var currentX = startX;
	var currentY = startY;
	
	for(var n=0; n<stats_arr.length; n++){
		$.selectStats[n] = new createjs.Text();
		$.selectStats[n].font = "25px built_titlingregular";
		$.selectStats[n].color = "#fff";
		$.selectStats[n].textAlign = "left";
		$.selectStats[n].textBaseline='alphabetic';
		$.selectStats[n].text = stats_arr[n];
		$.selectStats[n].x = currentX;
		$.selectStats[n].y = currentY;
		
		$.selectStats['bar'+n] = new createjs.Shape();	
		$.selectStats['bar'+n].graphics.beginFill(statsBar.bgColor).drawRect(0, 0, statsBar.width, statsBar.height);
		$.selectStats['bar'+n].x = currentX + 120;
		$.selectStats['bar'+n].y = currentY - 20;
		
		$.selectStats['fill'+n] = new createjs.Shape();	
		$.selectStats['fill'+n].graphics.beginFill(statsBar.color).drawRect(0, 0, statsBar.width, statsBar.height);
		$.selectStats['fill'+n].x = currentX + 120;
		$.selectStats['fill'+n].y = currentY - 20;
		$.selectStats['fill'+n].value = 0;
		
		currentY += 30;
		selectContainer.addChild($.selectStats[n], $.selectStats['bar'+n], $.selectStats['fill'+n]);
	}
	
	//game
	itemGamebg = new createjs.Bitmap(loader.getResult('itemResult'));
	
	gameCountdownTxt = new createjs.Text();
	gameCountdownTxt.font = "120px built_titlingregular";
	gameCountdownTxt.color = "#fff";
	gameCountdownTxt.textAlign = "center";
	gameCountdownTxt.textBaseline='alphabetic';
	gameCountdownTxt.text = '3';
	gameCountdownTxt.x = canvasW/2;
	gameCountdownTxt.y = canvasH/100 * 41;
	
	gameCountdownShadowTxt = new createjs.Text();
	gameCountdownShadowTxt.font = "120px built_titlingregular";
	gameCountdownShadowTxt.color = "#333";
	gameCountdownShadowTxt.textAlign = "center";
	gameCountdownShadowTxt.textBaseline='alphabetic';
	gameCountdownShadowTxt.text = '3';
	gameCountdownShadowTxt.x = gameCountdownTxt.x;
	gameCountdownShadowTxt.y = gameCountdownTxt.y+10;
	
	itemGameStat = new createjs.Bitmap(loader.getResult('itemGameStat'));
	
	itemArrow = new createjs.Bitmap(loader.getResult('itemArrow'));
	centerReg(itemArrow);
	itemArrow.regY = 70;
	
	itemArrowUser = new createjs.Bitmap(loader.getResult('itemArrowUser'));
	centerReg(itemArrowUser);
	itemArrowUser.regY = 120;
	
	for(var n=0; n<car_array.length; n++){
		var _frameW = 90;
		var _frameH = 130;
		var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
		var _animations = {animate:{frames: [0,1], speed:1}};
							
		itemCarData = new createjs.SpriteSheet({
			"images": [loader.getResult('car'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.car[n] = new createjs.Sprite(itemCarData, "animate");
		$.car[n].gotoAndStop(0);
		$.car[n].framerate = 20;
		$.car[n].x = -500;
		gameContainer.addChild($.car[n]);
		
		$.selectCar[n] = $.car[n].clone();
		$.selectCar[n].x = canvasW/100 * 70;
		$.selectCar[n].y = canvasH/100 * 54;
		$.selectCar[n].scaleX = $.selectCar[n].scaleY = 1.5;
		
		if(car_array[n].data.speed > statsData.speed){
			statsData.speed = car_array[n].data.speed;
		}
		if(car_array[n].data.life > statsData.strength){
			statsData.strength = car_array[n].data.life;
		}
		if(car_array[n].data.damage > statsData.damage){
			statsData.damage = 	car_array[n].data.damage;
		}
		
		selectContainer.addChild($.selectCar[n]);
	}
	
	for(var n=0; n<map_array.length; n++){
		$.maps[n] = new createjs.Bitmap(loader.getResult('map'+n));
		centerReg($.maps[n]);
		mapContainer.addChild($.maps[n]);
		
		$.selectMap[n] = new createjs.Bitmap(loader.getResult('mapThumb'+n));
		centerReg($.selectMap[n]);
		$.selectMap[n].x = canvasW/100 * 29.5;
		$.selectMap[n].y = canvasH/100 * 48;
		selectContainer.addChild($.selectMap[n]);
	}
	
	for(var n=0; n<item_array.length; n++){
		$.items[n] = new createjs.Bitmap(loader.getResult('item'+n));
		centerReg($.items[n]);
		gameContainer.addChild($.items[n]);
	}
	
	for(var n=0; n<itemExplode_array.length; n++){
		var _frameW = itemExplode_array[n].width;
		var _frameH = itemExplode_array[n].height;
		
		var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
		var _animations = {static:{frames: [0]},
							explode:{frames: [1]}};
							
		var animateData = new createjs.SpriteSheet({
			"images": [loader.getResult('itemExplode'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.itemsExplode[n] = new createjs.Sprite(animateData, "static");
		$.itemsExplode[n].framerate = 20;
		$.itemsExplode[n].x = 0;
		$.itemsExplode[n].y = -500;
		
		gameContainer.addChild($.itemsExplode[n]);
	}
	
	
	var _frameW = 200;
	var _frameH = 134.5;
	var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 12, "width": _frameW};
	var _animations = {animate:{frames: [0,1,2,3,4,5,6,7,8,9,10,11], speed:2, next:'last'},
						last:{frames: [18], speed:2}};
						
	itemExplosionGasData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemExplosionGas').src],
		"frames": _frame,
		"animations": _animations
	});
	
	itemExplosionGasAnimate = new createjs.Sprite(itemExplosionGasData, "animate");
	itemExplosionGasAnimate.framerate = 20;
	itemExplosionGasAnimate.scaleX = itemExplosionGasAnimate.scaleY = 3;
	itemExplosionGasAnimate.x = 0;
	itemExplosionGasAnimate.y = -500;
	
	var _frameW = 118;
	var _frameH = 118;
	var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 5, "width": _frameW};
	var _animations = {animate:{frames: [0,1,2,3,4], speed:1, next:'last'},
						last:{frames: [4]}};
						
	itemExplosionCarData = new createjs.SpriteSheet({
		"images": [loader.getResult('itemExplosionCar').src],
		"frames": _frame,
		"animations": _animations
	});
	
	itemExplosionCarAnimate = new createjs.Sprite(itemExplosionCarData, "animate");
	itemExplosionCarAnimate.gotoAndStop(0);
	itemExplosionCarAnimate.framerate = 20;
	itemExplosionCarAnimate.scaleX = itemExplosionCarAnimate.scaleY = 3;
	itemExplosionCarAnimate.x = 0;
	itemExplosionCarAnimate.y = -500;
	
	gameScoreDisplayTxt = new createjs.Text();
	gameScoreDisplayTxt.font = "50px built_titlingregular";
	gameScoreDisplayTxt.color = "#fff";
	gameScoreDisplayTxt.textAlign = "left";
	gameScoreDisplayTxt.textBaseline='alphabetic';
	gameScoreDisplayTxt.text = gameScoreDisplayText;
	
	gameScoreTxt = new createjs.Text();
	gameScoreTxt.font = "80px built_titlingregular";
	gameScoreTxt.color = "#FFFF00";
	gameScoreTxt.textAlign = "left";
	gameScoreTxt.textBaseline='alphabetic';
	gameScoreTxt.text = 0;
	
	totalMobileButtons = ['itemButtonLeft','itemButtonRight','itemButtonAcc','itemButtonBrake'];
	for(var n = 0; n<totalMobileButtons.length; n++){
		var _frameW = 74;
		var _frameH = 74;
		var _frame = {"regX": _frameW/2, "regY": _frameH/2, "height": _frameH, "count": 2, "width": _frameW};
		var _animations = {static:{frames: [0]},
							press:{frames: [1]}};
							
		itemButtonData = new createjs.SpriteSheet({
			"images": [loader.getResult(totalMobileButtons[n]).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.buttons[totalMobileButtons[n]] = new createjs.Sprite(itemButtonData, "static");
		$.buttons[totalMobileButtons[n]].gotoAndStop('static');
		$.buttons[totalMobileButtons[n]].framerate = 20;
		
		mobileControllerContainer.alpha = .8;
		mobileControllerContainer.addChild($.buttons[totalMobileButtons[n]]);
	}
	
	//result
	itemResult = new createjs.Bitmap(loader.getResult('itemResult'));
	
	resultTitleTxt = new createjs.Text();
	resultTitleTxt.font = "50px built_titlingregular";
	resultTitleTxt.color = "#fff";
	resultTitleTxt.textAlign = "center";
	resultTitleTxt.textBaseline='alphabetic';
	resultTitleTxt.text = resultTitleWinText;
	resultTitleTxt.x = canvasW/2;
	resultTitleTxt.y = canvasH/100 * 31;
	
	resultScoreTxt = new createjs.Text();
	resultScoreTxt.font = "100px built_titlingregular";
	resultScoreTxt.color = "#FFFF00";
	resultScoreTxt.textAlign = "center";
	resultScoreTxt.textBaseline='alphabetic';
	resultScoreTxt.text = '';
	resultScoreTxt.x = canvasW/2;
	resultScoreTxt.y = canvasH/100 * 44;
	
	resultShareTxt = new createjs.Text();
	resultShareTxt.font = "30px built_titlingregular";
	resultShareTxt.color = "#fff";
	resultShareTxt.textAlign = "center";
	resultShareTxt.textBaseline='alphabetic';
	resultShareTxt.text = shareText;
	resultShareTxt.x = canvasW/2;
	resultShareTxt.y = canvasH/100 * 52;
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	buttonFacebook.x = canvasW/100*42;
	buttonTwitter.x = canvasW/2;
	buttonWhatsapp.x = canvasW/100*58;
	buttonFacebook.y = buttonTwitter.y = buttonWhatsapp.y = canvasH/100*59;
	
	buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
	centerReg(buttonContinue);
	createHitarea(buttonContinue);
	buttonContinue.x = canvasW/2;
	buttonContinue.y = canvasH/100 * 72;
	
	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemResult'));
	itemExit.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, itemExit.image.naturalWidth, itemExit.image.naturalHeight));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	buttonConfirm.x = canvasW/100* 42;
	buttonConfirm.y = canvasH/100 * 65;
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	buttonCancel.x = canvasW/100 * 58;
	buttonCancel.y = canvasH/100 * 65;
	
	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "50px built_titlingregular";
	confirmMessageTxt.color = "#fff";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = exitMessage;
	confirmMessageTxt.lineHeight = 50;
	confirmMessageTxt.x = canvasW/2;
	confirmMessageTxt.y = canvasH/100 *45;
	
	confirmContainer.addChild(itemExit, buttonConfirm, buttonCancel, confirmMessageTxt);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	p2Container.x = canvasW/2;
	p2Container.y = canvasH/2;
	
	mainContainer.addChild(bg, logo, buttonStart);
	selectContainer.addChild(buttonReady, buttonLeftMap, buttonRightMap, buttonLeftCar, buttonRightCar);
	p2Container.addChild(mapContainer, tyreMarkContainer, objectContainer, itemArrowUser, effectContainer, scoreContainer);
	countdownContainer.addChild(itemGameStat, gameCountdownShadowTxt, gameCountdownTxt);
	gameContainer.addChild(itemArrow, itemExplosionCarAnimate, itemExplosionGasAnimate, p2Container, indicatorContainer, countdownContainer, mobileControllerContainer, gameScoreDisplayTxt, gameScoreTxt);
	resultContainer.addChild(itemResult, resultTitleTxt, resultScoreTxt, buttonContinue);
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;
	
	if(shareEnable){
		resultContainer.addChild(resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	canvasContainer.addChild(itemGamebg, mainContainer, selectContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		buttonSettings.x = (canvasW - offset.x) - 60;
		buttonSettings.y = offset.y + 60;
		
		var distanceNum = 75;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*3);
		}
		
		//game
		gameScoreDisplayTxt.x = offset.x + 50;
		gameScoreDisplayTxt.y = offset.y + 70;
		gameScoreTxt.x = gameScoreDisplayTxt.x + 110;
		gameScoreTxt.y = gameScoreDisplayTxt.y + 10;
		
		
		//buttons
		var rangeX = 85;
		var rangeY = 70;
		
		$.buttons['itemButtonLeft'].x = offset.x + rangeX;
		$.buttons['itemButtonLeft'].y = (canvasH - offset.y) - rangeY;
		
		$.buttons['itemButtonRight'].x = $.buttons['itemButtonLeft'].x + rangeX;
		$.buttons['itemButtonRight'].y = $.buttons['itemButtonLeft'].y;
		
		$.buttons['itemButtonBrake'].x = (canvasW - offset.x) - rangeX;
		$.buttons['itemButtonBrake'].y = (canvasH - offset.y) - rangeY;
		
		$.buttons['itemButtonAcc'].x = $.buttons['itemButtonBrake'].x - rangeX;
		$.buttons['itemButtonAcc'].y = $.buttons['itemButtonBrake'].y;
		
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}