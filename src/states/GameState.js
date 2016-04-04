import Board from 'objects/Board';
import HealthBar from 'objects/HealthBar'
import GameOver from 'objects/GameOver'
import Properties from 'Properties';


class GameState extends Phaser.State {

	preload() {
		var assets = Properties.assets;
		for (let i = 0; i < Properties.rows; i++) {
			for (let j = 0; j < Properties.columns; j++) {
				this.game.load.spritesheet(`tile_${i}_${j}`, `assets/tile_${i}_${j}.png`, Properties.tileWidth, Properties.tileHeight, Properties.tileFrame);
			}
		}
		this.game.load.image(assets.replay.name, assets.replay.URL);
		this.game.load.image(assets.background.name, assets.background.URL);
		this.game.load.image(assets.body.name, assets.body.URL);
		this.game.load.image(assets.head_1.name, assets.head_1.URL);
		this.game.load.image(assets.head_2.name, assets.head_2.URL);
		this.game.load.image(assets.arm_1.name, assets.arm_1.URL);
		this.game.load.image(assets.arm_2_left.name, assets.arm_2_left.URL);
		this.game.load.image(assets.arm_2_right.name, assets.arm_2_right.URL);
		this.game.load.image(assets.leg_1.name, assets.leg_1.URL);
		this.game.load.image(assets.leg_2_left.name, assets.leg_2_left.URL);
		this.game.load.image(assets.leg_2_right.name, assets.leg_2_right.URL);
		this.game.load.image(assets.aura_1.name, assets.aura_1.URL);
		this.game.load.image(assets.aura_2.name, assets.aura_2.URL);
	}

	create() {
		this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.wealthBar = new HealthBar(this.game, 100, 36, 112, 40, 338);
		this.healthBar = new HealthBar(this.game, 100, 708, 112, 40, 338);

		//add background
    this.background = this.game.add.sprite(0, 0, Properties.assets.background.name);

		var scoreText = new Phaser.Text(this.game, 90, 32, 'Point: 0', { font: '40px Arial', fill: 'white'});
		this.game.stage.addChild(scoreText);

		this.aura_1 = this.game.add.sprite(250, 455, Properties.assets.aura_1.name);
//		this.aura_2 = this.game.add.sprite(250, 245, Properties.assets.aura_2.name);

		this.board = new Board(this.game, scoreText, Properties.boardLeft, Properties.boardTop, this);

		this.gameOver = new GameOver(this.game, this);

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
	}

}

export default GameState;
