<template>
	<form>
		<button type="button" v-on:click=onClick>Старт</button>
		<p>{{timeLabel}}</p>
		<popup ref=popup v-bind:timeLabel=timeLabel></popup>
	</form>

</template>

<script>
	import Timer from './Timer.js';
	import Popup from './Popup';

	export default {
		name: "Timer",
		components: {Popup},
		component: {Popup},
		props: {isWin: Boolean},
		data: function () {
			return {
				timeLabel: "",
				timer: new Timer(this.onTick)
			};
		},
		methods: {
			onClick: function () {
				this.timer.start();
				this.$emit('start');
				this.$refs.popup.hide();
			},
			onTick: function (time) {
				var date = new Date(time);
				this.timeLabel = "";
				this.timeLabel += date.getMinutes() + ":";
				this.timeLabel += date.getSeconds() + ":";
				this.timeLabel += date.getMilliseconds();
			},
			win: function () {
				this.timer.stop();
				this.$refs.popup.show();
			}

		}
	}
</script>

<style scoped>

</style>