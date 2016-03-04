import Tile from 'objects/Tile';
import Properties from 'Properties';

class Board {
  constructor(game, scoreText, xPos, yPos, gameState) {
    this.game = game;
    this.gameState = gameState;
    this.scoreText = scoreText;
    this.board = [];

    this.group = this.game.add.group();
    this.group.x = xPos;
    this.group.y = yPos;

    this.targets = [];
    this.currentPoint = 0;

    for (var y = 0; y < Properties.rows; y++){
      var row = [];
      for (var x = 0; x < Properties.columns; x++){
        var tile = new Tile(this.game, this.group, x, y, this);
        row.push(tile);
      }
      this.board.push(row);
    }

    this.touchTimer = this.game.time.events.loop(Properties.durtime, this.cleanTouched, this).timer;

    this.init();
  }

  cleanTouched() {
    console.log("clear touched");
    for (var tile of this.targets){
      tile.isTouched = false;
    }
  }

  getRandomTile() {
    var x = Math.floor(Math.random() * Properties.rows);
    var y = Math.floor(Math.random() * Properties.columns);
    return this.board[x][y];
  }

  setTargets() {
    for (var tile of this.targets){
      tile.isTarget = false;
      tile.isTouched = false;
    }
    this.targets = [];
    var tile = this.getRandomTile();
    for (var i = 0; i < this.targetNum; i++){
      while (tile.isTarget){
        tile = this.getRandomTile();
      }
      this.targets.push(tile);
      tile.isTarget = true;
    }
  }

  getPoints() {
    var canGetPoint = true;
    for (var tile of this.targets){
      if (!tile.touched){
        canGetPoint = false;
      }
    }
    if (canGetPoint){
      this.point = this.point + 10;
      this.gameState.healthBar.currentValue = this.gameState.healthBar.currentValue + 10;
      this.setTargets();
    }
  }

  init() {
    this.touchTimer.start();
    this.point = 0;
    this.targetNum = 2;
    this.setTargets();
  }

  get point() {
    return this.currentPoint;
  }

  set point(point) {
    this.currentPoint = point;
    this.scoreText.text = "Point: " + this.currentPoint.toString();
    console.log(this.currentPoint);
  }
}

export default Board;
