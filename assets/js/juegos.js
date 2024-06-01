// import { actualizarCarrito } from "./carrito.js";

export function agregarAlCarrito(nombre, precio, cantidad, juegosCarrito, img) {
    console.log(cantidad);
    parseInt(cantidad);
    console.log(cantidad);
    if (cantidad >= 1) {
        // Crear objeto del juego actual
        const juegoActual = { nombre, precio, cantidad, img };

        // Agregar el juego actual a la lista de juegos en el carrito
        juegosCarrito.push(juegoActual);

        // Almacenar la lista actualizada en localStorage
        localStorage.setItem('carritos', JSON.stringify(juegosCarrito));
        // console.log("juegos carrito",juegosCarrito);
        // juegosCarrito.forEach(juego => {
        //     console.log(`Nombre: ${juego.nombre}, Precio: ${juego.precio}, Cantidad: ${juego.cantidad}`);
        // });
    } else {
        console.log('No se encontró ningún artículo en el carrito.');
    }
};