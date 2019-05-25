var hobbiesString = prompt("ingresa hobbies")
var hobbiesArray = hobbiesString.split(",")

console.log(hobbiesArray)

for (var i = 0 ; i < hobbieArray.length; i ++) {

if (hobbiesArray[i] != "futbol"){
  document.querySelector(".sports-list").innerHTML += "<li>" + hobbiesArray[i] + "</li>"
}
else {
  continue;
}

//if (hobbiesArray[i] == "basta"){
//  break;  podria ser continue para solo saltear este o podria ser return para indicar cual es el resultado de la funcion (conviene break) -- (break y return son para cortar la funcion)
//}
//else {
//  ;
//}

}



var i=0
while(prompt("decinos") != "basta"){


i++
}
// si escribis basta, frena la funcion
//mejor no usar este



// +EN FETCH+
// .then(function(resultado){
//   console.log(res.data.image_url);
//   document.querySelector("avatar-user").src = resultado.data.image_url para imprimir un gif al azar
// })
