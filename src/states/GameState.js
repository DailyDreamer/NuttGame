import Board from 'objects/Board';
import HealthBar from 'objects/HealthBar'
import Human from 'objects/Human'
import GameOver from 'objects/GameOver'
import Properties from 'Properties';


class GameState extends Phaser.State {

	preload() {
		for (let i = 0; i < Properties.rows; i++) {
			for (let j = 0; j < Properties.columns; j++) {
				this.game.load.spritesheet(`tile_${i}_${j}`, `assets/tile_${i}_${j}.png`, Properties.tileWidth, Properties.tileHeight, Properties.tileFrame);
			}
		}
		var assets = Properties.assets;
		for (let key of Object.keys(assets)) {
			this.game.load.image(assets[key].name, assets[key].URL);
		}
	}

	create() {
		this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.wealthBar = new HealthBar(this.game, 100, 36, 112, 40, 338);
		this.healthBar = new HealthBar(this.game, 100, 708, 112, 40, 338);

		//add background
    this.background = this.game.add.sprite(0, 0, Properties.assets.background.name);

		var scoreText = new Phaser.Text(this.game, 90, 32, 'Point: 0', { font: '40px Arial', fill: 'white'});
		this.game.stage.addChild(scoreText);

		this.human = new Human(this.game);

		this.board = new Board(this.game, scoreText, Properties.boardLeft, Properties.boardTop, this);

		this.gameOver = new GameOver(this.game, this);

		this.restartGame();
	}

	update() {
		this.wealthBar.updateBar();
	  this.healthBar.updateBar();
		if (this.healthBar.value == 0){
			this.gameOver.show();
		}
	}

	restartGame() {
		this.board.init();
		this.healthBar.init();
		this.wealthBar.init();
		this.human.init();
	}

	humanAct(act) {
		switch (act) {
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				break;
			default:

		}
	}

}

export default GameState;
