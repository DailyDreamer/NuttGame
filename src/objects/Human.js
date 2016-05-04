import Properties from 'Properties';

class Human {
  constructor(game) {
    this.game = game;

    this.group = this.game.add.group();
		this.group.x = 0;
		this.group.y = 0;

		this.head_1 = this.game.add.sprite(316, 60, Properties.assets.head_1.name, 0, this.group);
		this.head_2 = this.game.add.sprite(316, 60, Properties.assets.head_2.name, 0, this.group);

		this.arm_1_left = this.game.add.sprite(350, 230, Properties.assets.arm_1.name, 0, this.group);
		this.arm_1_left.anchor.setTo(0.51, 0.12);

		this.arm_1_right = this.game.add.sprite(400, 230, Properties.assets.arm_1.name, 0, this.group);
		this.arm_1_right.anchor.setTo(0.51, 0.12);

		this.arm_2_left = this.game.add.sprite(260, 137, Properties.assets.arm_2_left.name, 0, this.group);
		this.arm_2_right = this.game.add.sprite(400, 137, Properties.assets.arm_2_right.name, 0, this.group);

		this.leg_1_left = this.game.add.sprite(325, 329, Properties.assets.leg_1.name, 0, this.group);
		this.leg_1_right = this.game.add.sprite(390, 329, Properties.assets.leg_1.name, 0, this.group);

		this.leg_2_left = this.game.add.sprite(345, 344, Properties.assets.leg_2_left.name, 0, this.group);
		this.leg_2_left.anchor.setTo(0.78, 0.07);

		this.leg_2_right = this.game.add.sprite(405, 344, Properties.assets.leg_2_right.name, 0, this.group);
		this.leg_2_right.anchor.setTo(0.11, 0.07);

		this.body = this.game.add.sprite(316, 210, Properties.assets.body.name, 0, this.group);

    this.aura_1 = this.game.add.sprite(250, 455, Properties.assets.aura_1.name);
		this.aura_2 = this.game.add.sprite(250, 245, Properties.assets.aura_2.name);
  }

  init() {
    this.head_init();
    this.arm_left_init();
    this.arm_right_init();
    this.leg_left_init();
    this.leg_right_init();
    this.body_init();
    this.aura_init();
  }

  head_init() {
    this.head_1.visible = true;
    this.head_2.visible = false;
  }

  head_high() {
    this.head_1.visible = false;
    this.head_2.visible = true;
  }

  arm_left_init() {
    this.arm_1_left.angle = 40;
    this.arm_1_left.visible = true;
    this.arm_2_left.visible = false;
  }

  arm_left_mid() {
    this.arm_1_left.angle = 70;
    this.arm_1_left.visible = true;
    this.arm_2_left.visible = false;
  }

  arm_left_high() {
    this.arm_1_left.visible = false;
    this.arm_2_left.visible = true;
  }

  arm_right_init() {
    this.arm_1_right.angle = -40;
    this.arm_1_right.visible = true;
    this.arm_2_right.visible = false;
  }

  arm_right_mid() {
    this.arm_1_right.angle = -70;
    this.arm_1_right.visible = true;
    this.arm_2_right.visible = false;
  }

  arm_right_high() {
    this.arm_1_right.visible = false;
    this.arm_2_right.visible = true;
  }

  leg_left_init() {
    this.leg_1_left.visible = true;
    this.leg_2_left.visible = false;
  }

  leg_left_high() {
    this.leg_1_left.visible = false;
    this.leg_2_left.visible = true;
  }

  leg_right_init() {
    this.leg_1_right.visible = true;
    this.leg_2_right.visible = false;
  }

  leg_right_high() {
    this.leg_1_right.visible = false;
    this.leg_2_right.visible = true;
  }

  body_init() {
    this.group.y = 0;
  }

  body_high() {
    this.group.y = -30;
  }

  aura_init() {
    this.aura_1.visible = true;
    this.aura_2.visible = false;
  }

  aura_high() {
    this.aura_1.visible = false;
    this.aura_2.visible = true;
  }
}

export default Human;
