// Zadanie 1
function Car(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

Car.prototype.printDetails = function () {
    
    return `${this.name} ${this.brand} ${this.engine} ${this.mile} ${this.age}`;
};

const maluch = new Car("maluch", "Fiat", "V6", 125000, 35);

console.log(maluch.printDetails());

// Zadanie 2
function Enemy(name, speed, attack, posX) {
    this.name = name;
    this.live = 5;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.move = function () {
   let makeMove = this.posX - this.speed;
   console.log(`Jestem ${this.name} znajduje się na pozycji ${makeMove}`)
};

Enemy.prototype.attackEnemy = function () {
    console.log(`Jestem ${this.name} Atakuje gracza z pozycji ${this.posX} z siłą ${this.attack}`)
};

Enemy.prototype.hit = function () {
    this.live --;
    console.log(`Jestem ${this.name} mam teraz życia ${this.live}`)
};

const one = new Enemy("łata",30, 4, 100);
one.move();
one.move();
one.move();
one.attackEnemy();
one.attackEnemy();
one.attackEnemy();

const two = new Enemy("piti",45, 3, 500);
two.hit();
two.hit();

