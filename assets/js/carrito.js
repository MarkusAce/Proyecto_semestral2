export function actualizarCarrito(juegosCarrito) {


        let carritoid = document.getElementById('Carrito');

        juegosCarrito.forEach((juego) => {

            const li = document.createElement('li');
            li.textContent = `Nombre: ${juego.nombre} - Precio: ${juego.precio} - Cantidad: ${juego.cantidad}`;
            console.log(li.textContent);

            carritoid.appendChild(li);

        });
        window.location.href = 'carrito.html';

}
