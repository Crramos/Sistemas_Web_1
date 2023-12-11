function guardarImagen(imagen, titulo, descripcion) {
    localStorage.setItem('imagenSeleccionada', imagen);
    localStorage.setItem('texto', titulo);
    localStorage.setItem('descripcion', descripcion);

}

document.addEventListener("DOMContentLoaded", function () {
    let imagenSeleccionada = localStorage.getItem('imagenSeleccionada');
    let texto = localStorage.getItem("texto");
    let descripcion = localStorage.getItem("descripcion");
    
    if (imagenSeleccionada) {
        document.getElementById("imagenMostrada").src = imagenSeleccionada;
        document.getElementById("textoMostrado").textContent = texto;
        document.getElementById("descripcionMostrada").textContent = descripcion;
    } else {
        // Puedes mostrar una imagen predeterminada o un mensaje de error si no se seleccionó ninguna imagen.
        // Por ejemplo:
        document.getElementById("imagenMostrada").src = "imagen_por_defecto.jpg";
    }
});

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("passwordC").value;

    if (password !== confirmPassword) {
        return false; // Evita que el formulario se envíe si las contraseñas no coinciden
    }

    return true; // Envía el formulario si las contraseñas coinciden
}