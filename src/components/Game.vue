<template>
	<div class="game">
		<div class="row" v-for="row in cells">
			<div v-for="item in row" v-bind:class=item.class v-on:click=onClick(item)>
			</div>
		</div>
		<Timer ref="timer" v-on:start=start></Timer>
	</div>

</template>

<script>
	import Timer from './Timer';
	import Cell from './Cell.js';

	export default {
		name: 'Game',
		components: {Timer},
		data: function () {
			this.cells = [];
			for (var i = 0; i < 4; i++) {
				this.cells[i] = [];
				for (var j = 0; j < 4; j++) {
					this.cells[i].push(new Cell());
				}
			}
			return {
				cells: this.cells,
				selected: null,
				onClickDisabled: false
			}
		},
		methods: {
			onClick: function (item) {
				//Не обрабатывать клики до окончания паузы
				if (this.onClickDisabled)
					return;
				//Сброс клика при клике на активную или выполненую ячейку
				if (!item.onClick())
					return;
				//Установка выбранной ячейки
				if (this.selected == null) {
					this.selected = item;
					return;
				}
				if (this.selected.getColor() == item.getColor()) {
					this.selected.done();
					item.done();
					this.selected = null;
					if (this.checkResult()) {
						this.$refs.timer.win();
					}
				} else {
					this.onClickDisabled = true;
					var _this = this;
					setTimeout(function () {
						_this.selected.hide();
						item.hide();
						_this.onClickDisabled = false;
						_this.selected = null;
					}, 500);
				}
			},
			start: function () {
				this.selected = null;
				this.onClickDisabled = false;
				var colors = [0, 1, 2, 3, 4, 5, 6, 7]
				var colorForRandom = colors.concat(colors);
				for (var i = 0; i < this.cells.length; i++) {
					for (var j = 0; j < this.cells[i].length; j++) {
						var colorIndex = Math.floor(Math.random() * colorForRandom.length);
						this.cells[i][j].setColor(colorForRandom[colorIndex]);
						this.cells[i][j].toDefault();
						colorForRandom.splice(colorIndex, 1);
					}
				}
			},
			checkResult: function () {
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < 4; j++) {
						if (!this.cells[i][j].isDone())
							return false;
					}
				}
				return true;
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.game {
		text-align: center;
	}

	.row {
		width: 224px;
		height: 54px;
		margin: 5px auto;
	}

	.row div {
		border: 1px black solid;
		margin: 2px;
		height: 50px;
		width: 50px;
		margin: 2px;
		display: inline-block;
	}

	.row div.white {
		background: white;
	}

	.row div.red {
		background: red;
	}

	.row div.green {
		background: green;
	}

	.row div.blue {
		background: blue;
	}

	.row div.yellow {
		background: yellow;
	}

	.row div.black {
		background: black;
	}

	.row div.orange {
		background: orange;
	}

	.row div.brown {
		background: brown;
	}

	.row div.gray {
		background: gray;
	}
</style>
