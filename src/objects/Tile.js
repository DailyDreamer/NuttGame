import Properties from 'Properties';

class Tile{
  constructor(game, group, column, row, board) {
    this.game = game;
    this.x = column * Properties.assets.tiles.width;
    this.y = row * Properties.assets.tiles.height;
    this.board = board;
    this.sprite = game.add.sprite(this.x, this.y, Properties.assets.tiles.name, 0, group);
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
      this.sprite.animations.frame = 7;
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

    this.isTouched = true;
    this.board.getPoints();
  }

  inputUp() {

  }
}

export default Tile;
