/*console.log("Hola mundo desde un archivo externo de javascript")

DOM
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});*/
let links = document.querySelectorAll(".close");
//agregar un elemento a cada uno de ellos
  links.forEach(function(bus){
    bus.addEventListener("click", function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");
//Quitar clases de animacion de entrada
      content.classList.remove("jello");
      content.classList.remove("animated");

//agragar clases de animacion de salida
      content.classList.add("fadeOutUp");
      content.classList.add("animated");
      setTimeout(function(){
        location.href = "/boletines";
      },700);

      return false;
    });
});

/*let iconos = document.querySelectorAll("i");
  iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star-half-alt")
  })*/
