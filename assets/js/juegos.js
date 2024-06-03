// import { actualizarCarrito } from "./carrito.js";

export function agregarAlCarrito(nombre, precio, cantidad, juegosCarrito, img, cantidadMaxima) {
    parseInt(cantidad);
    if (cantidad >= 1) {
        // Crear objeto del juego actual
        const juegoActual = { nombre, precio, cantidad, img, cantidadMaxima};

        // Agregar el juego actual a la lista de juegos en el carrito
        juegosCarrito.push(juegoActual);

        // Almacenar la lista actualizada en localStorage
        localStorage.setItem('carritos', JSON.stringify(juegosCarrito));
        
    } else {
        console.log('No se encontró ningún artículo en el carrito.');
    }
};