console.log("hey")

for (i=1; i < 46; i++){
console.log(3* i)
 }


var aleatorio = 0
var i=0
while(aleatorio != 19){
  aleatorio = Math.floor((Math.random() * 37)+1)
  console.log(aleatorio)
  if (aleatorio == 19) {
    console.log("salio el 19, se tomaron" + i + "intentos")
      break;
  }
i++
}

var array = []
for (var i = 0; i < 100; i++) {
 if (i % 2 == 0){
 array.push(i)
}
  }
  console.log(array);


var hobbiesString = prompt("ingresa hobbies")
var hobbiesArray = hobbiesString.split(",")
console.log(hobbiesArray)

for (var i = 0 ; i < hobbiesArray.length; i ++) {
  document.querySelector(".class").innerHTML += "<li>" + hobbiesArray[i] + "</li>"
}


var itemLista = document.querySelectorAll("li")
console.log(itemLista);
for (var i = 0 ; i < itemLista.length; i ++) {
  itemLista[i].style.color = "blue";

}

for (var i = 0 ; i < itemLista.length; i ++) {
  itemLista[i].onclick = function(){
  alert("cliqueaste " + this.innerText)}

}

var arraydefor = []
  for (var i = 1 ; i < 20; i ++){
    arraydefor.push(i)

  }

for (var i = 0 ; i < arraydefor.length; i ++){
}
console.log(arraydefor.map(Math.sqrt))

var suma = 0
var arraylargo = ["1", 1, "a", 2, 2, 5, "p", 7, 5]
for (var i = 0 ; i < arraylargo.length; i ++){
  console.log(typeof arraylargo[i]);
  if (typeof arraylargo[i] == "number"){
    suma = suma + arraylargo[i]
  console.log(suma)
  }

}
console.log(suma)
