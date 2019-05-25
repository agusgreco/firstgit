window.onload = function(){


var URLParams = new URLSearchParams(window.location.search);
var query = URLParams.get('buscador');

console.log(query);


  var url = "https://api.giphy.com/v1/gifs/search?api_key=oDTxfeJUVjbbzW3BQmumHLRIMuDsukrL&q="+ query +"&limit=25&offset=0&rating=G&lang=en"
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
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

         document.querySelector("h1").innerHTML += "<p><a href='detalle.html?id=" + id + "'>" + title + "</p>";
         document.querySelector("h1").innerHTML += "<img src=" + url + ">"


        }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })
