const LivingCreature = require("./LivingCreature")

module.exports =  class Predator  extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.countEating = 0
        this.energy = 20
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

chooseCell(character) {
    this.getNewCoordinates();
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

eat() {
    let grassenN = this.chooseCell(1)
    let grassenEaterN = this.chooseCell(2)
    let all = grassenN.concat(grassenEaterN)

    let oneP = this.random(all)
    if (oneP) {
     
        matrix[this.y][this.x] = 0
        let newX = oneP[0]
        let newY = oneP[1]
        matrix[oneP[1]][oneP[0]] = 3
        this.x = oneP[0]
        this.y = oneP[1]

        for (var i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i]) {
                grassEaterArr.splice(i, 1)
                break;
            }
        }
        for (var j in grassArr) {
            if (newX == grassArr[j].x && newY == grassArr[j].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    } else {
        this.move()
    }
    if (this.countEating > 50) {
        this.die();
    }
}



move() {
    let emptyCell = this.chooseCell(0)
    let newCell = this.random(emptyCell)

    if (newCell) {

        let newX = newCell[0]
        let newY = newCell[1]
        matrix[this.y][this.x] = 0
        matrix[newY][newX] = 3
        this.x = newX
        this.y = newY
    }
}

die() {
    matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i,1);
                break;
            }
        }
    }
    mul() {
        var newCell = this.random(this.chooseCell(2));
        if (newCell) {
            var newGrass = new Predator(newCell[0], newCell[1], this.index);
            predatorArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 3;
        
        }
    }
}
      