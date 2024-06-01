import { buscarJuego } from "./filtroName.js";
import { crearCard } from "./crearCards.js";

window.onload = async () =>{
    const juegoABuscar = JSON.parse(localStorage.getItem('juegoABuscar'));
    console.log(juegoABuscar);
    if (juegoABuscar && juegoABuscar !== "Buscar"){
        await buscarJuego(juegoABuscar);
        console.log("ola");
    }else{
        crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));
        console.log("cai en el else, y en la pasta");
    }
    localStorage.removeItem('juegoABuscar')
}