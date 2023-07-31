import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener elementos del document object model
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function(){
        // Remover el activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
    
    // Agregar clase active al enlace actual
    this.classList.add('active')
    // Obtener contenido segun el enlace
    let contenido = obtenerContenido(this.textContent)

    // Trae informacion del activo correspondiente y mostrar su contenido
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    precioElemento.innerHTML = contenido.precio
})
})

// Funcion para traer informacion desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace]
}