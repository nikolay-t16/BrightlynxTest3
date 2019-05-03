<template>
	<div id="popup" v-bind:style="display">
		<p>Поздравляем, вы выйграли</p>
		<p>Время:{{timeLabel}}</p>
		<button type="button" v-on:click="hide">Ок</button>
	</div>
</template>

<script>
	export default {
		name: "Popup",
		props: {timeLabel: String},
		data: function () {
			return {display: ""}
		},
		methods: {
			hide: function () {
				this.display = "";
			},
			show: function () {
				this.display = "display:block";
			}
		}
	}
</script>

<style scoped>
	#popup {
		display: none;
		position: absolute;
		width: 300px;
		height: 130px;
		left: calc(50% - 150px);
		top: calc(50% - 65px);
		border: 1px black solid;
		background: white;
	}
</style>