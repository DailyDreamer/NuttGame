import Properties from 'Properties';

class GameOver {
  constructor(game, gameState) {
    this.game = game;
    this.gameState = gameState;

    this.replayButton = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Properties.assets.replay.name);
    this.replayButton.anchor.setTo(0.5, 0.5);
    this.replayButton.visible = false;
    this.replayButton.inputEnabled = false;
    this.replayButton.events.onInputDown.add(this.replayButtonDown, this);
  }

  show() {
    this.replayButton.visible = true;
    this.replayButton.inputEnabled = true;
  }

  hide() {
    this.replayButton.visible = false;
    this.replayButton.inputEnabled = false;
  }

  replayButtonDown() {
    this.hide();
    this.gameState.restartGame();
  }
}

export default GameOver;
