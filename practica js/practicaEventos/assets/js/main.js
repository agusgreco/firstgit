

window.onload = function(){

var abracadabra = document.querySelector("#abracadabra")
 var titular = document.querySelector("#titular")

 function colorAlAzar() {
   var colors = ["red", "blue", "green", "white", "black"]
   var numRandom = Math.floor((Math.random() * 4))
   console.log(colors[numRandom])
   return colors[numRandom]

 }





abracadabra.onmouseover = function(){
  var nombre = prompt("cual es su nombre?");
  titular.innerHTML = "Hi. I'm <strong>" + nombre + "</strong>"
  var strong = document.querySelector("strong")
  strong.style.color = colorAlAzar()
}


 var boxstyle1 = document.querySelector("section.farm1")
 var boxstyle2 = document.querySelector("section.farm2")
var boxstyle3 = document.querySelector("section.farm3")

boxstyle1.onclick = function() {
  var h3 = this.querySelector("section.farm1 h3")
  console.log(h3)
  alert("clickeaste sobre el" + h3.innerText)
}

boxstyle2.onclick = function() {
  var h32 = this.querySelector("section.farm2 h3")
  alert("clickeaste sobre el " + h32.innerText)
}

boxstyle3.onclick = function() {
  var h33 = this.querySelector("section.farm3 h3")
  alert("clickeaste sobre el " + h33.innerText)
}



var buttonwork = document.querySelector("a.miss")

buttonwork.onmouseover = function(){
  var para = document.querySelector(".para")
  para.style.color = colorAlAzar()
}

buttonwork.onmouseout = function(){
  var para = document.querySelector(".para")
  para.style.color = "black"
}


var lechuza = document.querySelector("#lechuza")

lechuza.onclick = function(){
  alert("preparate para el futuro...")
}

var time = setTimeout(functime, 5000)
function functime() {
  alert("y el futuro ya llego")
}

var body = document.querySelector("body")

body.onkeypress = function(event){
  console.log(event.keyCode)
  if(event.keyCode == 32){
    alert("ey, tocaste la barra!")
  }
}

var email = document.querySelector("#email")
email.onkeypress = function(event){
  if(event.keyCode == 32){
    alert("ey, tocaste la barra!")
    event.preventDefault()
  }
}


//var estadoSecreto = 0
// TENGO QUE CREAR VARIABLES PARA ESTO

//var cero = ?
var estadouno = "s"
var estadodos = "se"
var estadotres = "sec"
var estadocuatro = "secr"
var estadocinco = "secre"
var estadoseis = "secret"


// TENGO QUE CAPTURAR LA TECLA QUE EL USUARIO presiona
var body = document.querySelector("body")
body.addEventListener("onkeypress", function(event){
  if(event.keyCode == 115){
console.log("s")
  }
  else if(event.keyCode == 101){
console.log("e")
    }
  else if(event.keyCode == 99){
console.log("c")
    }
  else if(event.keyCode == 114){
console.log("r")
    }
  else if(event.keyCode == 101){
console.log("e")
    }
  else if(event.keyCode == 116){
console.log("t")
    }
})


//index.Of

//teclaPresionada = event1.keyCode

// valido si la tecla presionada es una de las letras de secreto

// TENGO QUE USAR IF PARA LAS VALIDACIONES

// if (teclaPresionada == estadoSecreto[0])

// 1) Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1
// 2) Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2
// 3) Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3
// 4) Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4
// 5) Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5
// 6) Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6
// 7) Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se
// dispara una alerta que diga “SECRETO MAGICO”
// 8) Si no se cumple ninguna de las condiciones el estado vuelve a 0




}
