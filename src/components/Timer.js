export default function (callBack) {
	var timeStart;
	var intervalId = null;
	this.start = function () {
		timeStart = Date.now();
		this.stop();
		intervalId = setInterval(this.onTick, 13);
		callBack(0);

	}
	this.onTick = function () {
		var curentTime = Date.now();
		var timeLeft = curentTime - timeStart;
		callBack(timeLeft);
	}
	this.stop = function () {
		if (intervalId != null)
			clearInterval(intervalId);
	}
}