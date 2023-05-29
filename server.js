var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

priselecArr = []
grassArr = [];
grassEaterArr = [];
predatorArr = [];
virusArr = []
antivirusArr = []
matrix = []



function matrixGenerator(Y, X, G, GE, PR, VR, ANV, PRS) {
  let arr = []
  for (let i = 0; i < X; i++) {

    arr.push([])

    for (let j = 0; j < Y; j++) {

      arr[i].push([0])

    }
  }
  for (let j = 0; j < G; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 1
  }
  for (let j = 0; j < GE; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 2
  }
  for (let j = 0; j < PR; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 3
  }
  for (let j = 0; j < VR; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 4
  }
  for (let j = 0; j < ANV; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 5
  }
  for (let j = 0; j < PRS; j++) {

    let x = Math.floor(Math.random() * X)
    let y = Math.floor(Math.random() * Y)

    arr[y][x] = 6
  }
  io.emit("send matrix", matrix)

  return arr
}



matrix = matrixGenerator(50, 50, 300, 350, 170, 200, 130, 170)




const Grass = require("./class")
const GrassEater = require("./grassEater")
const Predator = require("./predator")
const Virus = require("./virus")
const Antivirus = require("./antivirus")
const Priselec = require("./priselec")
function cretateOBJ() {

  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y, 1);
        grassArr.push(gr);
      }
      else if (matrix[y][x] == 2) {
        var gre = new GrassEater(x, y, 2);
        grassEaterArr.push(gre);
      }
      else if (matrix[y][x] == 3) {
        var pre = new Predator(x, y, 3);
        predatorArr.push(pre);
      }
      else if (matrix[y][x] == 4) {
        var vrs = new Virus(x, y, 4);
        virusArr.push(vrs);
      }
      else if (matrix[y][x] == 5) {
        var anvrs = new Antivirus(x, y, 5);
        antivirusArr.push(anvrs);
      }
      else if (matrix[y][x] == 6) {
        var prs = new Priselec(x, y, 6);
        priselecArr.push(prs);
      }
    }
  }



  io.emit("send matrix", matrix)

}

cretateOBJ()
let GrassCount=grassArr.length //////////////////////////|
let GrassEaterCount=grassEaterArr.length //////////////////////////|
let predatorCount=predatorArr.length //////////////////////////|
let virusCount=virusArr.length //////////////////////////|
let antivirusCount=antivirusArr.length //////////////////////////|
let PrsCount=priselecArr.length //////////////////////////|
function playGame() {

  // if (!a || a.a)
  // {
  for (var i in grassArr) {
    grassArr[i].mul();
  }
  for (var i in grassEaterArr) {
    grassEaterArr[i].eat()
  }
  for (var i in predatorArr) {
    predatorArr[i].eat()
  }

  // console.log(virusArr.length)

  for (var i in virusArr) {
    virusArr[i].eat()

  }
  for (var i in antivirusArr) {
    antivirusArr[i].eat()
  }
  for (var i in priselecArr) {
    priselecArr[i].eat()
  }
  // }
  GrassCount = grassArr.length;
  GrassEaterCount = grassEaterArr.length;
  predatorCount=predatorArr.length
  virusCount=virusArr.length
  antivirusCount=antivirusArr.length
 PrsCount=priselecArr.length
  io.emit("send matrix", matrix)

}

setInterval(playGame, 500)
// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == 1) {
//         a++
//       }
//     }
//   }
//   io.emit("grass", a)
// }, 2000)


// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {

//       if (matrix[i][j] == 2) {
//         a++
//       }
//     }
//   }
//   io.emit("grassEater", a)
//   // console.log(a)
// }, 2000)

// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == 3) {
//         a++
//       }
//     }
//   }
//   io.emit("predator", a)
// }, 2000)
// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == 4) {
//         a++
//       }
//     }
//   }
//   io.emit("virus", a)
  
// }, 2000)
// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == 5) {
//         a++
//       }
//     }
//   }
//   io.emit("antivirus", a)
// }, 2000)
// setInterval(() => {
//   let a = 0
//   for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] == 6) {
//         a++
//       }
//     }
//   }
//   io.emit("priselec", a)
// }, 2000)

setInterval(() => {
  
  io.emit("grassli",GrassCount)
  /////////////////////////////////////////////////////////
},1000)

setInterval(() => {
  
  io.emit("grassEaterli",GrassEaterCount)
  /////////////////////////////////////////////////////////
},1000)

setInterval(() => {
  
  io.emit("predatorli",predatorCount)
  /////////////////////////////////////////////////////////
},1000)

setInterval(() => {
  
  io.emit("virusli",virusCount)
  /////////////////////////////////////////////////////////
},1000)

setInterval(() => {
  
  io.emit("antivirusli",antivirusCount)
  /////////////////////////////////////////////////////////
},1000)


setInterval(() => {
  
  io.emit("Prsli",PrsCount)
  /////////////////////////////////////////////////////////
},1000)


function killBlack(params) {
  for (var i in antivirusArr) {
    (matrix[antivirusArr[i].y][antivirusArr[i].x]) = 0;
  }
  antivirusArr = []
}

io.on('connection', function (socket) {
  socket.on("killBlack", killBlack);
});
