import { crearCard, juegosCarrusel } from "./crearCards.js";
import { getJuegos } from "./getJuegos.js";
// import { getJuegosID } from "./getJuegosID.js";
// import { getJuegosConsola } from "./getJuegosConsola.js";
import { indexPage } from "./indexPage.js";

const obtenerJuegos = async () =>{
    try{
        const data = await getJuegos();
        return data;
    }catch(error){
        console.error(`Error al obtener juegos: ${error.message}`);
        return null;
    }
}

(async () =>{
    try {
        let juegos;
        if (!localStorage.getItem('ArregloDeJuegos')){
            juegos = await obtenerJuegos();
            localStorage.setItem('ArregloDeJuegos', JSON.stringify(juegos));
        }else{
            juegos = JSON.parse(localStorage.getItem('ArregloDeJuegos'));
        }

        const pagVerdadero = indexPage();
        crearCard(juegos);

        if (pagVerdadero === true){
            juegosCarrusel();
        }
        window.onload = async () => {
            // Obtener el juego a buscar desde la URL (si lo pasaste por parámetros)
            const params = new URLSearchParams(window.location.search);
            const juegoABuscar = params.get('juego');
            
            if (juegoABuscar) {
                // Si hay un juego a buscar, llamar a la función buscarJuego
                await buscarJuego(juegoABuscar);
            }
        };
    }catch(error){
        console.error(`Error al obtener juegos: ${error.message}`);
    }
})();