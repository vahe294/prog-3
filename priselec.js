
const LivingCreature = require("./LivingCreature")


module.exports = class Priselec extends LivingCreature {


  constructor(x, y) {
    super(x, y)
    this.energy = 18
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }

  mul() {
    var newCell = this.random(this.chooseCell(0));
    if (newCell) {
      var newPriselec = new Priselec(newCell[0], newCell[1]);
      priselecArr.push(newPriselec);
      matrix[newCell[1]][newCell[0]] = 6;
      this.energy = 10
    }
  }
  move() {

    let emptyCells = this.chooseCell(0)
    let newCell = this.random(emptyCells)
    if (newCell) {
      let newX = newCell[0]
      let newY = newCell[1]
      matrix[this.y][this.x] = 0
      matrix[newY][newX] = 6
      this.x = newX
      this.y = newY
    }

    if (this.energy > 5) {
      this.energy--
    }
    // if (this.energy <= 0) {
    //     this.die()
    // }
  }

chooseCell(character) {
  this.getNewCoordinates()
  var found = [];
  for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          if (matrix[y][x] == character) {
              found.push(this.directions[i]);
          }
      }
  }
  return found;
}

chooseCellPriselec(character) {
  this.getNewCoordinates()
  var found = [];
  for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
          if (matrix[y][x] == character[0] || matrix[y][x] == character[1]) {
              found.push(this.directions[i]);
          }
      }
  }
  return found;
}
eat() {
  let foods = this.chooseCellPriselec([1,2])
  let food = this.random(foods)
  if (food) {
      this.energy++
      matrix[this.y][this.x] = 0
      let newX = food[0]
      let newY = food[1]
      matrix[food[1]][food[0]] = 6
      this.x = newX
      this.y = newY

      for (var i in grassEaterArr) {
          if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
              grassEaterArr.splice(i, 1);
              break;
          }
      }
      for (var i in grassArr) {
          if (newX == grassArr[i].x && newY == grassArr[i].y) {
              grassArr.splice(i, 1);
              break;
          }
      }
        
  }
  else {
      this.move()
  }
}
die() {
  matrix[this.y][this.x] = 0
  for (var i in virusArr) {
      if (this.x == priselecArr[i].x && this.y == priselecArr[i].y) {
        priselecArr.splice(i, 1);
          break;
      }
  }
}
}