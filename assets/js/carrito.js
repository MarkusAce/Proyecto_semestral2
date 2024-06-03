import { carritoPage } from "./paginas.js";
import { crearCarrito } from "./crearCarrito.js";


const pagVerdadero = carritoPage();
if(pagVerdadero === true){
    crearCarrito();
    actualizarTotales();

    function actualizarTotales(){
        const totalCarritoPage = document.getElementById('totalCarritoPage');
    const subTotalCarritoPage = document.getElementById('subTotalCarritoPage');
    const ivaTotalCarritoPage = document.getElementById('ivaTotalCarritoPage');
    const juegosPrecioTotal = JSON.parse(localStorage.getItem('carritos'));

    let total = 0;
    let subTotal = 0;
    let iva = 0;
    juegosPrecioTotal.forEach((juego)=>{
        let precioSimbolo = juego.precio;
        let precioSinSimbolo = precioSimbolo.replace("$","");
        let precioFinal = precioSinSimbolo.replace(".","");

        const cantidadJuegos = parseInt(juego.cantidad);
        const valorJuego = parseInt(precioFinal);
        total += cantidadJuegos*valorJuego;
    

    
    });
    iva = total*0.19;
    subTotal=total-iva;
    totalCarritoPage.textContent = "$" + total.toLocaleString();
    subTotalCarritoPage.textContent = "$" + subTotal.toLocaleString();
    ivaTotalCarritoPage.textContent = "$" + iva.toLocaleString();
    }
    
    document.addEventListener('click', function (event) {
        if (event.target && (event.target.classList.contains('btn-mas') || event.target.classList.contains('btn-menos'))) {
            actualizarTotales();
        }
    });
}