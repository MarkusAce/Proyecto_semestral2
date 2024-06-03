export function crearCarrito() {
    document.addEventListener("DOMContentLoaded", function() {
        const totalJuegosRow = document.getElementById("totalJuegosRow");
        const arregloCarrito = JSON.parse(localStorage.getItem('carritos'));

        arregloCarrito.forEach((juegoCarrito, index) => {
            
            const divRow = document.createElement("div");
            divRow.classList.add("col-5", "col-lg-4", "px-0", "py-0", "d-flex", "flex-column", "justify-content-center", "align-items-center", "tamaño-carrito", "mx-auto");

            const img = document.createElement("img");
            img.classList.add("img-fluid", "w-75");
            img.src = juegoCarrito.img;
            img.alt = "";
            divRow.appendChild(img);

            const nombreProducto = document.createElement("p");
            nombreProducto.classList.add("text-center", "mt-2", "negrita");
            nombreProducto.textContent = juegoCarrito.nombre;
            divRow.appendChild(nombreProducto);

            const cantidadCol = document.createElement("div");
            cantidadCol.classList.add("col-4", "col-lg-4", "px-0", "py-0", "d-flex", "flex-column", "justify-content-center", "align-items-center", "negrita", "mx-auto", "mb-4");

            const cantidadProducto = document.createElement("p");
            cantidadProducto.classList.add("cantidadProducto");
            cantidadProducto.textContent = juegoCarrito.cantidad;
            cantidadCol.appendChild(cantidadProducto);

            const btnContainer = document.createElement("div");
            btnContainer.classList.add("d-flex", "justify-content-center", "align-items-center", "mt-2");

            const btnMenos = document.createElement("button");
            btnMenos.classList.add("btn-menos");
            btnMenos.textContent = "-";
            btnMenos.addEventListener('click', () => {
                if (juegoCarrito.cantidad > 1) {
                    juegoCarrito.cantidad--;
                    cantidadProducto.textContent = juegoCarrito.cantidad;
                    actualizarPrecio();
                    localStorage.setItem('carritos', JSON.stringify(arregloCarrito));
                } else {
                    alert('Cantidad mínima de productos alcanzada.');
                }
            });

            const btnMas = document.createElement("button");
            btnMas.classList.add("btn-mas");
            btnMas.textContent = "+";
            btnMas.addEventListener('click', () => {
                if (juegoCarrito.cantidad < juegoCarrito.cantidadMaxima) {
                    juegoCarrito.cantidad++;
                    cantidadProducto.textContent = juegoCarrito.cantidad;
                    actualizarPrecio();
                    localStorage.setItem('carritos', JSON.stringify(arregloCarrito));
                } else {
                    alert('Cantidad máxima alcanzada, no existen más unidades de este juego');
                }
            });

            btnContainer.appendChild(btnMenos);
            btnContainer.appendChild(btnMas);
            cantidadCol.appendChild(btnContainer);

            const precioCol = document.createElement("div");
            precioCol.classList.add("col-3", "col-md-2", "col-xl-", "px-0", "py-0", "col-lg-4", "d-flex", "flex-column", "justify-content-center", "align-items-center", "negrita", "mx-auto", "mt-2");

            const precioProducto = document.createElement("p");
            const precioSinSimbolo = juegoCarrito.precio.replace("$", "");
            const precioFinal = precioSinSimbolo.replace(".", "");

            function actualizarPrecio() {
                const total = parseInt(precioFinal) * juegoCarrito.cantidad;
                precioProducto.textContent = "$" + total.toLocaleString();
            }

            actualizarPrecio(); // Inicializa el precio la primera vez
            precioCol.appendChild(precioProducto);

            const btnBorrar = document.createElement("button");
            btnBorrar.classList.add("bordear2", "mt-2");
            btnBorrar.textContent = "Borrar";
            btnBorrar.addEventListener('click', () => {
                arregloCarrito.splice(index, 1);
                localStorage.setItem('carritos', JSON.stringify(arregloCarrito));
                totalJuegosRow.innerHTML = '';
                divRow.remove();
                cantidadCol.remove();
                precioCol.remove();
                hr.remove();
                window.location.href = './carrito.html';
            });

            precioCol.appendChild(btnBorrar);

            totalJuegosRow.appendChild(divRow);
            totalJuegosRow.appendChild(cantidadCol);
            totalJuegosRow.appendChild(precioCol);

            const hr = document.createElement("hr");
            totalJuegosRow.appendChild(hr);
        });
    });
}