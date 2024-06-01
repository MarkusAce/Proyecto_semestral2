import { buscarJuego } from "./filtroName.js";
import { crearCard } from "./crearCards.js";

window.onload = async () =>{
    const juegoABuscar = JSON.parse(localStorage.getItem('juegoABuscar'));
    if (juegoABuscar && juegoABuscar !== "Buscar"){
        await buscarJuego(juegoABuscar);
    }else{
        crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));
    }
    localStorage.removeItem('juegoABuscar')
}