// Validar formulario

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

// Evento Submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    // Validar formulario
    const {nombre,email,mensaje} = datos;
    if (nombre == '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return;
    }
    // Enviado correctamente
    mostrarAlerta('Enviado correctamente');
})

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos); // test is ok...
}

// Mostrar alerta en pantalla

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    // Alerta desaparece despues de 3 segundos
    setTimeout(()=>{
        alerta.remove();
    },3000);
}