window.onload = function() {

//Populares
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f61f9e045cc4f90eaffcb0e1aff08fb&language=en-US&page=1")
   .then(function(response) {
     return response.json();
   })
   .then(function(resultado) {

     var nombrePeli1 = resultado.results[0].title;
     var nombrePeli2 = resultado.results[1].title;
     var nombrePeli3 = resultado.results[2].title;
     var nombrePeli4 = resultado.results[3].title;
     var nombrePeli5 = resultado.results[4].title;
     var nombrePeli6 = resultado.results[5].title;

     // var url = resultado;
     // console.log(url);
   var h1e = document.querySelector(".peli1")
      h1e.innerText=nombrePeli1
//     //  var img = document.querySelector(".img1")
//     // img.setAttribute("src", url)

    var h1f = document.querySelector(".peli2")
    h1f.innerText=nombrePeli2
// //    var img2 = document.querySelector(".img2")
// //   img2.setAttribute("src", url)

  var h1g = document.querySelector(".peli3")
  h1g.innerText=nombrePeli3
// //  var img3 = document.querySelector(".img3")
// // img3.setAttribute("src", url)

var h1h = document.querySelector(".peli4")
h1h.innerText=nombrePeli4
// // var img4 = document.querySelector(".img4")
// // img4.setAttribute("src", url)

var h1i = document.querySelector(".peli5")
h1i.innerText=nombrePeli5
// // var img5 = document.querySelector(".img5")
// // img5.setAttribute("src", url)

var h1j = document.querySelector(".peli6")
h1j.innerText=nombrePeli6
// // var img6 = document.querySelector(".img6")
// // img6.setAttribute("src", url)
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

        var nombrePeli7 = resultado.results[0].title;
        var nombrePeli8 = resultado.results[1].title;
        var nombrePeli9 = resultado.results[2].title;
        var nombrePeli10 = resultado.results[3].title;
        var nombrePeli11= resultado.results[4].title;
        var nombrePeli12= resultado.results[5].title;

        // var url = resultado;
        // console.log(url);

        var h1k = document.querySelector(".peli7")
        h1k.innerText=nombrePeli7
        // var img7 = document.querySelector(".img7")
        // img7.setAttribute("src", url)

        var h1l = document.querySelector(".peli8")
        h1l.innerText=nombrePeli8
        // var img8 = document.querySelector(".img8")
        // img8.setAttribute("src", url)

        var h1m = document.querySelector(".peli9")
        h1m.innerText=nombrePeli9
        // var img9 = document.querySelector(".img9")
        // img9.setAttribute("src", url)

        var h1n = document.querySelector(".peli10")
        h1n.innerText=nombrePeli10
        // var img10 = document.querySelector(".img10")
        // img10.setAttribute("src", url)

        var h1o = document.querySelector(".peli11")
        h1o.innerText=nombrePeli11
        // var img11 = document.querySelector(".img11")
        // img11.setAttribute("src", url)

        var h1p = document.querySelector(".peli12")
        h1p.innerText=nombrePeli12
        // var img12 = document.querySelector(".img12")
        // img12.setAttribute("src", url)
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

           var nombrePeli13 = resultado.results[0].title;
           var nombrePeli14= resultado.results[1].title;
           var nombrePeli15= resultado.results[2].title;
           var nombrePeli16 = resultado.results[3].title;
           var nombrePeli17= resultado.results[4].title;
           var nombrePeli18= resultado.results[5].title;

        // var url = resultado;
        // console.log(url);

           var h1q = document.querySelector(".peli13")
           h1q.innerText=nombrePeli13
        //    // // var img13 = document.querySelector(".img13")
        //    // // img13.setAttribute("src", url)

           var h1r = document.querySelector(".peli14")
           h1r.innerText=nombrePeli14
        //    // // var img14 = document.querySelector(".img14")
        //    // // img14.setAttribute("src", url)

           var h1s = document.querySelector(".peli15")
           h1s.innerText=nombrePeli15
        //    // // var img15= document.querySelector(".img15")
        //    // // img15.setAttribute("src", url)

           var h1t = document.querySelector(".peli16")
           h1t.innerText=nombrePeli16
        //    // // var img16 = document.querySelector(".img16")
        //    // // img16.setAttribute("src", url)

           var h1u = document.querySelector(".peli17")
           h1u.innerText=nombrePeli17
        //    // // var img17 = document.querySelector(".img17")
        //    // // img17.setAttribute("src", url)

           var h1v = document.querySelector(".peli18")
           h1v.innerText=nombrePeli18
        //    // // var img18 = document.querySelector(".img18")
        //    // // img18.setAttribute("src", url)

         })
         .catch(function(error) {
           console.log(error);
         })



}
