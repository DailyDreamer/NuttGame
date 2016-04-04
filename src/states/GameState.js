import Board from 'objects/Board';
import HealthBar from 'objects/HealthBar'
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

		this.group = this.game.add.group();
		this.group.x = -30;
		this.group.y = 0;

		this.head_1 = this.game.add.sprite(346, 60, Properties.assets.head_1.name, 0, this.group);
		this.head_1.visible = false;
		this.head_2 = this.game.add.sprite(346, 60, Properties.assets.head_2.name, 0, this.group);

		this.arm_1_left = this.game.add.sprite(380, 230, Properties.assets.arm_1.name, 0, this.group);
		this.arm_1_left.anchor.setTo(0.51, 0.12);
		this.arm_1_left.angle = 60;
		this.arm_1_left.visible = false;

		this.arm_1_right = this.game.add.sprite(430, 230, Properties.assets.arm_1.name, 0, this.group);
		this.arm_1_right.anchor.setTo(0.51, 0.12);
		this.arm_1_right.angle = -60;
		this.arm_1_right.visible = false;

		this.arm_2_left = this.game.add.sprite(290, 137, Properties.assets.arm_2_left.name, 0, this.group);
		this.arm_2_right = this.game.add.sprite(430, 137, Properties.assets.arm_2_right.name, 0, this.group);

		this.leg_1_left = this.game.add.sprite(355, 329, Properties.assets.leg_1.name, 0, this.group);
		this.leg_1_left.visible = false;
		this.leg_1_right = this.game.add.sprite(420, 329, Properties.assets.leg_1.name, 0, this.group);
		this.leg_1_right.visible = false;

		this.leg_2_left = this.game.add.sprite(375, 344, Properties.assets.leg_2_left.name, 0, this.group);
		this.leg_2_left.anchor.setTo(0.78, 0.07);

		this.leg_2_right = this.game.add.sprite(435, 344, Properties.assets.leg_2_right.name, 0, this.group);
		this.leg_2_right.anchor.setTo(0.11, 0.07);

		this.body = this.game.add.sprite(346, 210, Properties.assets.body.name, 0, this.group);


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
