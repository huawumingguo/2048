var nextVal1 = function(val){
	var arr = ['这','宜','江','中','亚','世'];
	var pindex = arr.indexOf(val);
	if(pindex!=-1){
		return arr[pindex+1];
	}
};


// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
