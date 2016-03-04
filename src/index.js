import GameState from 'states/GameState';
import Properties from 'Properties';

class Game extends Phaser.Game {

	constructor() {
		super(Properties.screenWidth, Properties.screenHeight, Phaser.AUTO, '');
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
	}

}

new Game();
