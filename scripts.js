var boton = document.getElementById("botoncito");
var textoPrincipal = document.getElementById("texto guion principal")

boton.addEventListener("click", CambiarTexto)

function CambiarTexto()
{
    if (boton.classList.contains("Bienvenida") === true)
    {
      boton.classList.remove("Bienvenida")
      boton.classList.add("Despedida")
      textoPrincipal.innerText = "Por Favor no te vayas tenemos ofertas :("
    }
    if (boton.classList.contains("Despedida") === true) 
    {
      boton.classList.remove("Despedida")
      boton.classList.add("Bienvenida")
      textoPrincipal.innerText = "¡Bienvenido a mi web!"
    }
}
