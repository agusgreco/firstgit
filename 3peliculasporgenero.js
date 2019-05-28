// window.onload = function(){
//
//   fetch("https://api.giphy.com/v1/gifs/trending?api_key=oDTxfeJUVjbbzW3BQmumHLRIMuDsukrL&limit=25&rating=G")
//    .then(function(response) {
//      return response.json();
//    })
//    .then(function(resultado) {
//      console.log("uhrjdfk");
//      console.log(resultado);
//      console.log(resultado.data);
//   //   var arrayDeGifs = resultado.data si quiero en ves de resultado.data
//      // document.querySelector(".avatar-user").src = resultado.data
//      for (var i = 0; i < resultado.data.length; i++) {
//       var id = resultado.data[i].id
//       var title = resultado.data[i].title
//       var url = resultado.data[i].images.original.url
//
//       document.querySelector("h1").innerHTML += "<p><a href='5detallepelicula.html?id=" + id + "'>" + title + "</p>";
//       document.querySelector("h1").innerHTML += "<img src=" + url + ">"
//
//      }
//    })
//    .catch(function(error) {
//     console.log("Error: " + error);
//    })
//
// var hey = "hey"
// console.log(hey);
//
// }

window.onload = function(){

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=a6cd418a24c7359fa07f8d31cab596b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {
     console.log(resultado);
     console.log(resultado.results);
     var mainurl = "https://image.tmdb.org/t/p/original/"


     for (var i = 0; i < 10; i++) {
      var id = resultado.results[i].id
      var title = resultado.results[i].title
      var poster = resultado.results[i].poster_path

      var article = ""
      article += "<article>"
        article += "<a href='5detallepelicula.html?id=" + id + "'> <p> " + title + " </p>"
        article += "<img src='" + mainurl+ poster + "' style='width: 300px;' > </a>"
      article += "</article>"
      document.querySelector("main").innerHTML += article




     }
   })
   .catch(function(error) {
    console.log("Error: " + error);
   })

var hey = "hey"
console.log(hey);

}
