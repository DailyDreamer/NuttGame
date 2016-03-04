import Board from 'objects/Board';
import HealthBar from 'objects/HealthBar'
import GameOver from 'objects/GameOver'
import Properties from 'Properties';


class GameState extends Phaser.State {

	preload() {
		var assets = Properties.assets;
		this.game.load.spritesheet(assets.tiles.name, assets.tiles.URL, assets.tiles.width, assets.tiles.height, assets.tiles.frames);
		this.game.load.image(assets.replay.name, assets.replay.URL);
	}

	create() {
		this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

		this.game.stage.backgroundColor = '#0072bc';

		var scoreText = new Phaser.Text(this.game, 0, 0, 'Point: 0', { font: '15px Arial', fill: 'white', align: 'center' });
		this.game.stage.addChild(scoreText);

		this.healthBar = new HealthBar(this.game, 100, 140, 0, 10, 40);

		this.board = new Board(this.game, scoreText, Properties.boardLeft, Properties.boardTop, this);

		this.gameOver = new GameOver(this.game, this);

	}

	update() {
	  this.healthBar.updateBar();
		if (this.healthBar.value == 0){
			this.gameOver.show();
		}
	}

	restartGame() {
		this.board.init();
		this.healthBar.init();
	}

}

export default GameState;
