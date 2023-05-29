
const LivingCreatur = require("./LivingCreature")
module.exports =  class Antivirus extends LivingCreatur  {
    constructor(x, y) {
     
        super(x,y)
         
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
    mul() {
        var newCell = this.random(this.chooseCell(0));
        if (newCell) {
            var newAntivirus = new Antivirus(newCell[0], newCell[1]);
            antivirusArr.push(newAntivirus);
            matrix[newCell[1]][newCell[0]] = 4;
            this.energy = 10
        }
    }
    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = this.random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
    }

    eat() {
        let foods = this.chooseCell(4)
        let food = this.random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            
            for (var i in virusArr) {
                if (newX == virusArr[i].x && newY == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }
            }
        
            if (this.energy >= 12) {
                this.mul()
            }
        }
        else
        {
            this.move()
        }
    }
}