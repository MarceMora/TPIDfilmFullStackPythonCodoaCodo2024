const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const direccion = document.getElementById('adress');
const email = document.getElementById('email');
const telefono = document.getElementById('phone');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
    const apellidoValue =apellido.value.trim();
    const direccionValue =adress.value.trim();
	const emailValue = email.value.trim();
	const telefonoValue = phone.value.trim();
	const asuntoValue = asunto.value.trim();
    const mensajeValue = message.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}

    if(apellidoValue === '') {
		setErrorFor(apellido, 'No puede dejar el apellido en blanco');
	} else {
		setSuccessFor(apellido);
	}

    if(direccionValue === '') {
		setErrorFor(adress, 'No puede dejar la direccion en blanco');
	} else {
		setSuccessFor(adress);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(telefonoValue === '') {
		setErrorFor(phone, 'Telefono no debe ingresar en blanco.');
	} else {
		setSuccessFor(phone);
	}
	
	if(asuntoValue === '') {
		setErrorFor(asunto, 'Asunto no debe ingresar en blanco');
	
	} else{
		setSuccessFor(asunto);
	}
    if(mensajeValue === '') {
		setErrorFor(message, 'Mensaje no debe ingresar en blanco');
	
	} else{
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}