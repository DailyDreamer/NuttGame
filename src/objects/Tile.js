import Properties from 'Properties';

class Tile {
  constructor(game, group, column, row, board, assetsname) {
    this.game = game;
    this.column = column;
    this.row = row;
    this.act = this.row * Properties.rows + this.column;
    this.x = column * Properties.tileWidth + column * Properties.boardMid;
    this.y = row * Properties.tileHeight + row * Properties.boardMid;
    this.board = board;
    this.sprite = game.add.sprite(this.x, this.y, assetsname, 0, group);
    this.target = false;
    this.touched = false;
    this.sprite.inputEnabled = false;
    this.sprite.events.onInputDown.add(this.inputDown, this);
    this.sprite.events.onInputUp.add(this.inputUp, this);
  }

  get isTarget() {
    return this.target;
  }

  set isTarget(target) {
    if (target){
      this.sprite.inputEnabled = true;
      this.sprite.animations.frame = 1;
    }else{
      this.sprite.inputEnabled = false;
      this.sprite.animations.frame = 0;
    }
    this.target = target;
  }

  get isTouched() {
    return this.touched;
  }

  set isTouched(touched) {
    this.touched = touched;
  }

  get getSprite(){
    return this.sprite;
  }

  inputDown() {
    this.sprite.anchor.setTo(0.0, 0.0);
    this.game.add.tween(this.sprite).to({angle: 360}, 500, Phaser.Easing.Exponential.easeOut).start();

    this.sprite.animations.frame = 2;
    this.isTouched = true;

    this.board.getPoints(this.act)
    this.board.gameState.humanAct(this.act);
  }

  inputUp() {
    this.sprite.animations.frame = 1;
  }
}

export default Tile;
