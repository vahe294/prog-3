
const LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature{
   

mul() {
        this.multiply++;
        var newCell = this.random(this.chooseCell(0));
        if (this.multiply >= 2 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;  
        }
    }
}