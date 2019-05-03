<template>
	<form>
		<button type="button" v-on:click=onClick>Старт</button>
		<p>{{timeLabel}}</p>
	</form>
</template>

<script>
	export default {
		name: "Timer",
		data: function () {
			var Timer = function (callBack) {
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
			return {
				timeLabel: "",
				timer: new Timer(this.onTick)

			};
		},
		methods: {
			onClick: function () {
				this.timer.start();
				this.$emit('start');
			},
			onTick: function (time) {
				var date = new Date(time);
				this.timeLabel = "";
				this.timeLabel +=date.getMinutes() +":";
				this.timeLabel +=date.getSeconds() +":";
				this.timeLabel +=date.getMilliseconds();
			}

		}
	}
</script>

<style scoped>

</style>