window.onload = function(){
  var URLParams = new URLSearchParams(window.location.search);
  var id = URLParams.get('id');
console.log(id);

  var url = "https://api.giphy.com/v1/gifs/" + id + "?api_key=oDTxfeJUVjbbzW3BQmumHLRIMuDsukrL"

    fetch(url)
      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(resultado) {
        console.log(resultado);
        console.log(resultado.data);
        // for (var i = 0; i < resultado.data.length; i++) {
         var id = resultado.data.id
         var title = resultado.data.title
         var url = resultado.data.images.original.url
         console.log("dgd");
         console.log(title);
         document.querySelector("h1").innerHTML += "<p>" + title + "</p>";
         document.querySelector("h1").innerHTML += "<img src=" + url + ">"

         var source = resultado.data.source
         document.querySelector("h2").innerHTML += "<p>" + source + "</p>";



        // }

      })
      .catch(function(error) {
        console.log("Error: " + error);
      })



}
