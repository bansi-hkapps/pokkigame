////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		resizeGameFunc();
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/button_start.png', id:'buttonStart'},
			
			{src:'assets/item_select.png', id:'itemSelect'},
			{src:'assets/button_ready.png', id:'buttonReady'},
			{src:'assets/button_left.png', id:'buttonLeft'},
			{src:'assets/button_right.png', id:'buttonRight'},
			
			{src:'assets/item_game_stat.png', id:'itemGameStat'},
			{src:'assets/item_arrow.png', id:'itemArrow'},
			{src:'assets/item_arrow_user.png', id:'itemArrowUser'},
			{src:'assets/item_explode_gas.png', id:'itemExplosionGas'},
			{src:'assets/item_explode_car.png', id:'itemExplosionCar'},
			
			{src:'assets/button_mobile_left.png', id:'itemButtonLeft'},
			{src:'assets/button_mobile_right.png', id:'itemButtonRight'},
			{src:'assets/button_mobile_acc.png', id:'itemButtonAcc'},
			{src:'assets/button_mobile_brake.png', id:'itemButtonBrake'},
			
			{src:'assets/button_yes.png', id:'buttonConfirm'},
			{src:'assets/button_no.png', id:'buttonCancel'},
			
			{src:'assets/button_continue.png', id:'buttonContinue'},
			{src:'assets/item_result.png', id:'itemResult'},
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}];
			
	for(var n=0; n<car_array.length; n++){
		manifest.push({src:car_array[n].image, id:'car'+n});	
	}
	
	for(var n=0; n<map_array.length; n++){
		manifest.push({src:map_array[n].image, id:'map'+n});
		manifest.push({src:map_array[n].thumb, id:'mapThumb'+n});
	}
	
	for(var n=0; n<item_array.length; n++){
		manifest.push({src:item_array[n].image, id:'item'+n});	
	}
	
	for(var n=0; n<itemExplode_array.length; n++){
		manifest.push({src:itemExplode_array[n].image, id:'itemExplode'+n});	
	}
	
	if ( typeof addScoreboardAssets == 'function' ) { 
		addScoreboardAssets();
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/music_main.ogg', id:'musicMain'});
		manifest.push({src:'assets/sounds/music_game.ogg', id:'musicGame'});
		manifest.push({src:'assets/sounds/sound_engine.ogg', id:'soundEngine'});
		manifest.push({src:'assets/sounds/sound_click.ogg', id:'soundClick'});
		manifest.push({src:'assets/sounds/sound_explode_car1.ogg', id:'soundExplodeCar'});
		manifest.push({src:'assets/sounds/sound_explode_gas1.ogg', id:'soundExplodeGas1'});
		manifest.push({src:'assets/sounds/sound_explode_gas2.ogg', id:'soundExplodeGas2'});
		manifest.push({src:'assets/sounds/sound_explode_gas3.ogg', id:'soundExplodeGas3'});
		manifest.push({src:'assets/sounds/sound_hit_crash1.ogg', id:'soundHitCrash1'});
		manifest.push({src:'assets/sounds/sound_hit_crash2.ogg', id:'soundHitCrash2'});
		manifest.push({src:'assets/sounds/sound_hit_crash3.ogg', id:'soundHitCrash3'});
		manifest.push({src:'assets/sounds/sound_hit_crash4.ogg', id:'soundHitCrash4'});
		manifest.push({src:'assets/sounds/sound_hit_object.ogg', id:'soundHitObject'});
		manifest.push({src:'assets/sounds/sound_hit.ogg', id:'soundHit'});
		manifest.push({src:'assets/sounds/sound_tyre1.ogg', id:'soundTyre1'});
		manifest.push({src:'assets/sounds/sound_tyre2.ogg', id:'soundTyre2'});
		manifest.push({src:'assets/sounds/sound_tyre3.ogg', id:'soundTyre3'});
		manifest.push({src:'assets/sounds/sound_tyre4.ogg', id:'soundTyre4'});
		manifest.push({src:'assets/sounds/sound_beep1.ogg', id:'soundBeep1'});
		manifest.push({src:'assets/sounds/sound_beep2.ogg', id:'soundBeep2'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}