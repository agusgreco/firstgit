window.onload = function() {

//Populares
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {

     for (var i = 0; i < 6; i++) {
       var nombrePeli13 = resultado.results[i].title;
       console.log(nombrePeli13);
       var h1q = document.querySelector(".peli" + (i + 1))
       console.log(h1q);
       h1q.innerText=nombrePeli13
       var img12 = document.querySelector(".img" + (i + 1))
       img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
     }
   })
   .catch(function(error) {
     console.log(error);
   })

//Rankeadas
     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
      .then(function(resultado) {
        for (var i = 0; i < 6; i++) {
          var nombrePeli13 = resultado.results[i].title;
          var h1q = document.querySelector(".peli" + (i + 7))
          h1q.innerText=nombrePeli13
          var img12 = document.querySelector(".img" + (i + 7))
          img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
        }
      })
      .catch(function(error) {
        console.log(error);
      })

//Estrenos
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
         .then(function(response) {
           return response.json();
         })
         .then(function(resultado) {

           for (var i = 0; i < 6; i++) {
             var nombrePeli13 = resultado.results[i].title;
             var h1q = document.querySelector(".peli" + (i + 13))
             h1q.innerText=nombrePeli13
             var img12 = document.querySelector(".img" + (i + 13))
             img12.setAttribute("src", "https://image.tmdb.org/t/p/original" + resultado.results[i].poster_path)
           }

         })
         .catch(function(error) {
           console.log(error);
         })

}
