import { crearCard, juegosCarrusel } from "./crearCards.js";
import { getJuegos } from "./getJuegos.js";
import { indexPage } from "./paginas.js";

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
        if (pagVerdadero === true){
            juegosCarrusel();
            crearCard(juegos);
        }
    }catch(error){
        console.error(`Error al obtener juegos: ${error.message}`);
    }
})();