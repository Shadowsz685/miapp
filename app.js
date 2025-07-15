const formulario = document.querySelector(".form-create");
let contador = 1;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div class="publicacion">
            <p>id:${contador}</p>
            <p>${descripcion}</p>
            <button id="editar" onclick="editar(this)">Editar</button>
            <button id ="eliminar" onclick="eliminar(this)">Eliminar</button>
        </div>`; 
        contador++;
});

function editar(e) {
    const publicacion = e.parentElement;
    const descripcion = publicacion.querySelector("p:nth-child(2)");
    const nuevoTexto = prompt("Editar descripción:", descripcion.textContent);
    if (nuevoTexto !== null) {
        descripcion.textContent = nuevoTexto;
    }
}

function eliminar(e) {
    const publicacion = e.parentElement;
    publicacion.remove();
}