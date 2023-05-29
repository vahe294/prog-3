let socket = io()

var side = 20;


var button = document.getElementById("ashun");
button.addEventListener("click", Ashun);

function Ashun() {

    colors[0] = "#eae2b7"
    colors[1] = "orange"
    colors[3] = "#94d2bd"
    colors[2] = "#bb3e03"
    colors[4] = "#1b263b"
    colors[5] = "#f7a072"



}


var button = document.getElementById("chmer");
button.addEventListener("click", Chmer);

function Chmer() {

    colors[0] = "blue"
    colors[1] = "#219ebc"
    colors[3] = "#8ecae6"
    colors[2] = "#5390d9"
    colors[4] = "#90e0ef"
    colors[5] = "#bde0fe"






}


var button = document.getElementById("garun");
button.addEventListener("click", Garun);

function Garun() {

    colors[0] = "green"
    colors[1] = "#ffd166"
    colors[3] = "#ff8fab"
    colors[2] = "#ba181b"
    colors[4] = "#023e8a"
    colors[5] = "#cdb4db"





}



var button = document.getElementById("amar");
button.addEventListener("click", Amar);

function Amar() {
    colors[0] = "green"
    colors[1] = "#ffff3f"
    colors[3] = "#e63946"
    colors[2] = "#34a0a4"
    colors[4] = "#72efdd"
    colors[5] = "#5fa8d3"
}


//  var button = document.getElementById("time");
//  button.addEventListener("click", breakk);

//  function breakk(){

//     colors[0] = "#acacac"
//     colors[1] = "#acacac"
//     colors[3] = "#acacac"
//     colors[2] = "#acacac"
//     colors[4] = "#acacac"
//     colors[5] = "#acacac"

//  }

//  var button = document.getElementById("tim");
//  button.addEventListener("click", brekk);

//  function brekk(){

//     colors[0] = "green"
//     colors[1] = "yellow"
//     colors[3] = "#8ecae6"
//     colors[2] = "red"
//     colors[4] = "black"
//     colors[5] = "purple"

//  }


function setup() {
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}

let colors = ["green", "yellow", "red", "#8ecae6", "black", "purple"]


var killBlack = document.getElementById("killBlack");
killBlack.addEventListener("click", kill_black);

function kill_black(a) {
    socket.emit("killBlack")
}

function drawGame(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(colors[0]);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(colors[1]);
            }
            else if (matrix[y][x] == 3) {
                fill(colors[2]);
            }
            else if (matrix[y][x] == 4) {
                fill(colors[3]);
            }
            else if (matrix[y][x] == 5) {
                fill(colors[4]);
            }
            else if (matrix[y][x] == 6) {
                fill(colors[5]);
            }
            rect(x * side, y * side, side, side);
        }
    }
}

// for(var i in matrix){

//     for (var y = 0; y < matrix.length; y++){
//         for (var x = 0; x < matrix[y].length; x++) {

// if (matrix%2==0){

// console.log(matrix)

// }

//         }

// }



// console.log(matrix[grassArr.length])



// }

socket.on("send matrix", drawGame)
// socket.on("grass",
//     function state(a) {
//         var p = document.getElementById("statistik")

//         p.textContent = a;

//     })

// socket.on("send matrix", drawGame)
// socket.on("grassEater",
//     function (a) {
//         var p = document.getElementById("statistikk")

//         p.textContent = a;

//     })
// socket.on("send matrix", drawGame)
// socket.on("predator",
//     function (a) {
//         var p = document.getElementById("statistikkk")

//         p.textContent = a;

//     })
// socket.on("send matrix", drawGame)
// socket.on("virus",
//     function (a) {
//         var p = document.getElementById("statistikkkk")

//         p.textContent = a;

//     })
// socket.on("send matrix", drawGame)
// socket.on("antivirus",
//     function (a) {
//         var p = document.getElementById("statistikkkkk")

//         p.textContent = a;

//     })
// socket.on("send matrix", drawGame)
// socket.on("priselec",
//     function (a) {
//         var p = document.getElementById("statistikkkkkk")

//         p.textContent = a;

//     })


socket.on("grassli",sts)

 var GrassCount = document.getElementById("statistik");

function sts(a) {

    GrassCount.innerText = a
   
    
}

socket.on("grassEaterli",stsE)

 var GrassEaterCount = document.getElementById("statistikk");

function stsE(b) {

    GrassEaterCount.innerText = b
   
    console.log(b);
}


socket.on("predatorli",stsEw)

 var predatorCount = document.getElementById("statistikkk");

function stsEw(c) {

    predatorCount.innerText = c
   
    console.log(c);
}

socket.on("virusli",stsEwn)

 var virusCount = document.getElementById("statistikkkk");

function stsEwn(d) {

    virusCount.innerText = d
   
    console.log(d);
}

socket.on("antivirusli",stsEwm)

 var antivirusCount = document.getElementById("statistikkkkk");

function stsEwm(i) {

  antivirusCount.innerText = i
   
    console.log(i);
}

socket.on("Prsli",stsEwms)

 var PrsCount = document.getElementById("statistikkkkkk");

function stsEwms(f) {

  PrsCount.innerText = f
   
    console.log(f);
}

