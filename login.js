var theForm = document.querySelector("#Myform");
theForm.onsubmit = function(event){
  var boton = document.querySelector("#nom");
  var boton2 = document.querySelector("#contra");
  var boton3 = document.querySelector("#mail");


  if(boton.value == "" || boton2.value == "" || boton3.value == ""){
    event.preventDefault();
    alert("Porfavor, llene todos los campos");
  }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(boton3.value))){
    event.preventDefault();
    alert("Usted ingreso un mail no valido")
  }else {
    var name = boton.value;
    var pass = boton2.value;
    var mail = boton3.value;
    localStorage.setItem("nombre",name);
    localStorage.setItem("contrasenia",pass);
    localStorage.setItem("mail", mail);
    console.log(name);
    console.log(localStorage);
    var modal = document.querySelector("#modal-example");
    modal.style.display = "none";
    var login = document.querySelector("#Mylogin");
    login.style.display = "none";
    var nombre = localStorage.getItem("nombre");
    var span = document.querySelector("#span");
    span.innerText = nombre;
    var user = document.querySelector("#user");
    user.style.display = "inline-block";

  }
}
