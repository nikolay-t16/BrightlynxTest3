export default function () {
	var status = 0;
	var color;
	this.colors = ["red", "green", "blue", "yellow", "black", "orange", "brown", "gray"];
	const defaultClass = "white";
	var activate = function () {
		status = 1;
		this.class = color
	}
	this.hide = function () {
		if (status != 1)
			return;
		this.toDefault();
	}
	this.toDefault = function () {
		status = 0;
		this.class = defaultClass;
	}
	this.done = function () {
		status = 2;
	}
	this.isDone = function () {
		return status == 2;
	}
	this.setColor = function (colorIndex) {
		color = this.colors[colorIndex];
	}
	this.getColor = function () {
		return color;
	}
	this.onClick = function () {
		if (status == 0) {
			activate.call(this);
			return true;
		}
		return false;
	}
	this.class = defaultClass;


}