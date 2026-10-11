const botonRespuestas = document.getElementById("boton-respuestas");
const respuestas = document.querySelector(".respuestas");

const cantidadRespuestas = document.querySelectorAll(".comentario").length;

botonRespuestas.textContent = cantidadRespuestas + " respuestas";

botonRespuestas.addEventListener("click", function() {

    if (respuestas.style.display === "none") {
        respuestas.style.display = "block";
    } else {
        respuestas.style.display = "none";
    }

});
const botonesLike = document.querySelectorAll(".boton-like");

botonesLike.forEach(function(boton) {

    boton.addEventListener("click", function() {
        if (boton.textContent === "♡ Me gusta") {
    boton.textContent = "❤️ Me gusta";
} else {
    boton.textContent = "♡ Me gusta";
}

boton.classList.remove("animar-like");

void boton.offsetWidth;

boton.classList.add("animar-like");
    });

});
const botonesResponder = document.querySelectorAll(".boton-responder");

botonesResponder.forEach(function(boton) {

    boton.addEventListener("click", function() {

    const comentario = boton.closest(".comentario");

    const cajaExistente = comentario.querySelector(".caja-respuesta");

    if (cajaExistente) {
        cajaExistente.remove();
        return;
    }

    const caja = document.createElement("div");
    caja.className = "caja-respuesta";

    caja.innerHTML = `
        <input type="text" placeholder="Escribí tu respuesta...">
        <button>Responder</button>
    `;
    const input = caja.querySelector("input");
const botonEnviar = caja.querySelector("button");

botonEnviar.addEventListener("click", function() {

    if (input.value.trim() === "") {
        return;
    }

    const nuevaRespuesta = document.createElement("div");
    nuevaRespuesta.className = "comentario";

    nuevaRespuesta.innerHTML = `
        <p class="nombre-comentario">👤 Estudiante</p>
        <p>${input.value}</p>
    `;

    comentario.appendChild(nuevaRespuesta);

    const cantidad = comentario.querySelectorAll(".comentario").length;
    botonRespuestas.textContent = cantidad + "respuestas";

    input.value ="";
});

comentario.appendChild(caja);

});

});
