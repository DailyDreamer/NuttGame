class HealthBar {
  constructor(game, maxValue, xPos, yPos, width, height) {
    this.game = game;
    this.maxValue = maxValue;
    this.width = width;
    this.height = height;
    this.bar = new Phaser.BitmapData(this.game, 'healthBar', this.width, this.height);
    this.game.add.sprite(xPos, yPos, this.bar);
    this.init();
  }
  updateBar() {
    this.bar.context.clearRect(0, 0, this.width, this.height);
    if (this.currentValue < this.maxValue * 0.25) {
       this.bar.context.fillStyle = '#f00';
    }
    else if (this.currentValue < this.maxValue * 0.5) {
        this.bar.context.fillStyle = '#ff0';
    }
    else {
        this.bar.context.fillStyle = '#0f0';
    }
    this.bar.context.fillRect(0, 0, this.width, (this.currentValue / this.maxValue) * this.height);
    // important - without this line, the context will never be updated on the GPU when using webGL
    this.bar.dirty = true;
  }

  get value() {
    return this.currentValue;
  }

  set value(currentValue) {
    this.currentValue = currentValue;
  }

  init() {
    this.currentValue = this.maxValue;
    this.game.add.tween(this).to({currentValue: 0}, 5000, null, true, 0, 0);
  }
}

export default HealthBar
