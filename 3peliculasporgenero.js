window.onload = function(){

  fetch("https://api.giphy.com/v1/gifs/trending?api_key=oDTxfeJUVjbbzW3BQmumHLRIMuDsukrL&limit=25&rating=G")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {
     console.log("uhrjdfk");
     console.log(resultado);
     console.log(resultado.data);
  //   var arrayDeGifs = resultado.data si quiero en ves de resultado.data
     // document.querySelector(".avatar-user").src = resultado.data
     for (var i = 0; i < resultado.data.length; i++) {
      var id = resultado.data[i].id
      var title = resultado.data[i].title
      var url = resultado.data[i].images.original.url

      document.querySelector("h1").innerHTML += "<p><a href='5detallepelicula.html?id=" + id + "'>" + title + "</p>";
      document.querySelector("h1").innerHTML += "<img src=" + url + ">"

     }
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

}
