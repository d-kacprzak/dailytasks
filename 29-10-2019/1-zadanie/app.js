class Brick {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.graphic = 'yellow.png';
    this.width = 500;
    this.height = 400;
    this.type = 'Game';
    this.live = 5;
  }

  print() {
    console.log(`${this.x}, ${this.y}, ${this.graphic}, ${this.width}, ${this.height}, ${this.type}, ${this.live}`);
  }

  init() {
    console.log('dodano na planszę');
  }
}

const newBlock = new Brick(200, 100);
newBlock.print();
newBlock.init();

class BrickBlue extends Brick {
  constructor(graphic, live) {
    super(graphic, live);
    this.graphic = 'blue.png';
    this.live = 10;
  }

  print() {
    super.print();
  }

  init() {
    super.init();
  }
}

class BrickRed extends Brick {
  constructor(graphic, live) {
    super(graphic, live);
    this.graphic = 'red.png';
    this.live = 15;
  }

  print() {
    super.print();
  }

  init() {
    super.init();
  }
}

class BrickGreen extends Brick {
  constructor(graphic, live) {
    super(graphic, live);
    this.graphic = 'green.png';
    this.live = 20;
  }

  print() {
    super.print();
  }

  init() {
    super.init();
  }
}

const newBlockRed = new BrickRed(100, 300);
newBlockRed.print();
newBlockRed.init();

const newBlockBlue = new BrickBlue(400, 100);
newBlockBlue.print();
newBlockBlue.init();

const newBlockGreen = new BrickGreen(200, 150);
newBlockGreen.print();
newBlockGreen.init();

class BrickAnim extends Brick {
  constructor(speed) {
    super(speed)
    this.speed = speed;
    this.x = 100;
    this.y = 300;
  }

  moveHorizontal() {
    console.log(`poruszam się poziomo z szybkością ${this.speed}`);
  }
}

const newBrickAnim = new BrickAnim(500);
newBrickAnim.print();
newBrickAnim.init();
newBrickAnim.moveHorizontal();
