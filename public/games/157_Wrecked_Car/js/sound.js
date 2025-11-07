////////////////////////////////////////////////////////////
// SOUND
////////////////////////////////////////////////////////////
var enableMobileSound = true;
var soundOn;

function playSound(target, loop, volume){
	if(soundOn){
		volume = volume == 'undefined' ? 1 : volume;
		
		var isLoop;
		if(loop){
			isLoop = -1;
			createjs.Sound.stop();
			var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_NONE, loop: isLoop})
			musicLoop = createjs.Sound.play(target, props);
			musicLoop.volume = volume;
			if (musicLoop == null || musicLoop.playState == createjs.Sound.PLAY_FAILED) {
				return;
			}else{
				musicLoop.removeAllEventListeners();
				musicLoop.addEventListener ("complete", function(musicLoop) {
					
				});
			}
		}else{
			isLoop = 0;
			createjs.Sound.play(target);
		}
	}
}

function stopSound(){
	createjs.Sound.stop();
}


/*!
 * 
 * PLAY MUSIC - This is the function that runs to play and stop music
 * 
 */
$.sound = {};
function playSoundLoop(sound){
	if(soundOn){
		if($.sound[sound]==null){
			$.sound[sound] = createjs.Sound.play(sound);
			$.sound[sound].removeAllEventListeners();
			$.sound[sound].addEventListener ("complete", function() {
				$.sound[sound].play();
			});
		}
	}
}

function stopSoundLoop(sound){
	if(soundOn){
		if($.sound[sound]!=null){
			$.sound[sound].stop();
			$.sound[sound]=null;
		}
	}
}

function playSoundLoopID(id, sound){
	if(soundOn){
		console.log('play')
		if($.sound[id]==null){
			$.sound[id] = createjs.Sound.play(sound);
			$.sound[id].removeAllEventListeners();
			$.sound[id].addEventListener ("complete", function() {
				$.sound[id].play();
			});
		}
	}
}

function stopSoundLoop(id){
	if(soundOn){
		if($.sound[id]!=null){
			$.sound[id].stop();
			$.sound[id]=null;
		}
	}
}

function setSoundVolume(sound, vol){
	if(soundOn){
		if($.sound[sound]!=null){
			$.sound[sound].volume = vol;
		}
	}
}

/*!
 * 
 * TOGGLE MUTE - This is the function that runs to toggle mute
 * 
 */
function toggleMute(con){
	createjs.Sound.muted = con;	
}