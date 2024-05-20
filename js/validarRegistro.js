function validarFormulario() {
    const nombre = document.getElementById('name').value;
    const apellido= document.getElementById("lastname").value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    if (apellido.trim() === ""){
        alert("Por favor ingrese tu apellido");
        return false;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo)) {
        alert('Por favor, ingresa una dirección de correo válida.');
        return false;
    }

    if (contraseña.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
   
// Si todas las validaciones pasan, puedes enviar el formulario al servidor
        return true;
}
