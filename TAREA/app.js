const formulario = document.getElementById("formulario-notas");
const mensaje = document.getElementById("mensaje");
const contenedorNotas = document.getElementById("contenedor-notas");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  formulario.classList.add("validado");

  const titulo = document.getElementById("titulo-nota").value.trim();
  const contenido = document.getElementById("contenido-nota").value.trim();

  // Prevención de notas vacías
  if (!titulo || !contenido) {
    mostrarMensaje(
      "No se puede agregar una nota vacía. Completa todos los campos.",
      "error"
    );
    return;
  }

  // Crear elemento de la nota
  const div = document.createElement("div");
  div.className = "item-nota";
  div.innerHTML = `
    <div>
      <strong>${titulo}</strong>
      <p style="margin: 4px 0 0; color: var(--color-suave);">${contenido}</p>
    </div>
    <button type="button" class="boton-eliminar">Eliminar</button>
  `;

  // Acción destructiva con confirmación
  div.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      div.remove();
      mostrarMensaje("Nota eliminada.", "info");
    }
  });

  contenedorNotas.appendChild(div);
  formulario.reset();
  formulario.classList.remove("validado");
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});
