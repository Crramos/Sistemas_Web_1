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
function validaedad (fecha_naci) {
    
    var valores = fecha_naci.split ("-");
    var dia_naci = parseInt(valores [2]);
    var mes_naci = parseInt(valores [1]);
    var anio_naci = parseInt(valores [0]);
    
    
    var fecha_act = new Date();
    var dia_act = fecha_act.getDate();
    var mes_act = fecha_act.getMonth()+ 1;
    var anio_act = fecha_act.getFullYear();
	if((anio_act - anio_naci) > 18){
		return true;
	}else if ((anio_act - anio_naci) == 18) {
		if((mes_naci-mes_act)>=0){
			if((dia_naci-dia_act)>=0){
				return true;
			}
		}
	}
	alert("Debes ser mayor de edad para registrarte.")
    return false;
	}

    