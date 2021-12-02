let nombre , apellido, email;
let form = document.getElementById('form')
let mostrarNombre = document.getElementById('mostrarNombre')
let btnGuardar = document.getElementById('btnGuardar')


form.addEventListener('submit',formSubmit)

function formSubmit(e){
    e.preventDefault()
}

btnGuardar.addEventListener('click',capturarDatos)

function capturarDatos(){

    nombre = document.getElementById('inputNombre').value;
    apellido = document.getElementById('inputApellido').value;
    email = document.getElementById('inputEmail').value;
    console.log(nombre, apellido, email);
    guardarLocalStorage(nombre, apellido, email)
    listarDatos()
}

function guardarLocalStorage(nombre, apellido, email){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Email',email)
}

function listarDatos(){
   let nom = localStorage.getItem('Nombre')
   let ape = localStorage.getItem('Apellido')
   let ema = localStorage.getItem('Email')


   mostrarNombre.innerHTML = `
    <h4>${nom +" "+ape }</h4>
`
}