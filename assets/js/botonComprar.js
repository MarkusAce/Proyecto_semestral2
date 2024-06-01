import { agregarAlCarrito } from "./juego.js";

export function botonComprar3 (nombre, precio, cantidad, juegosCarrito) {
    const botonComprar2 = document.getElementById('botonComprar');
    botonComprar2.addEventListener('click', (event) => {
        event.preventDefault();

        
        
        agregarAlCarrito(nombre, precio, cantidad, juegosCarrito);
        
    })  
}
