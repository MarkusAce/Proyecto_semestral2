//import { actualizarCarrito } from "./carrito.js";

export function agregarAlCarrito(nombre, precio, cantidad, juegosCarrito) {

 
    if (cantidad >= 1) {
        // Crear objeto del juego actual
        const juegoActual = { nombre, precio, cantidad };
        
        // Agregar el juego actual a la lista de juegos en el carrito
        juegosCarrito.push(juegoActual);
        
        // Almacenar la lista actualizada en localStorage
        localStorage.setItem('carritos', JSON.stringify(juegosCarrito));

        console.log("juegos carrito",juegosCarrito);
        
        juegosCarrito.forEach(juego => {
            console.log(`Nombre: ${juego.nombre}, Precio: ${juego.precio}, Cantidad: ${juego.cantidad}`);    
        });

        // actualizarCarrito(juegosCarrito);


    } else {
        console.log('No se encontró ningún artículo en el carrito.');
    }
};
















// Guardar la lista en el local storage
// localStorage.setItem('listaJuegos', JSON.stringify(juegos));



// Recuperar la lista del local storage
// const listaJuegosGuardada = JSON.parse(localStorage.getItem('listaJuegos'));
// console.log(listaJuegosGuardada);

// Verificar si la lista se ha guardado y recuperado correctamente
// if (listaJuegosGuardada) {
//     listaJuegosGuardada.forEach(juego => {
//         console.log(Nombre: ${juego.name}, Consola: ${juego.consola}, Precio: ${juego.precio});
//     });
// } else {
//     console.log('No se encontró ninguna lista guardada en el local storage.');
// }

