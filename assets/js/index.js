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

obtenerJuegos()
.then((juegos) =>{
    localStorage.setItem('ArregloDeJuegos', JSON.stringify(juegos));

    var pagVerdadero = indexPage();

    crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));

    if (pagVerdadero===true){
        juegosCarrusel();
    }
    
})
.catch(error=> {
    console.error(`Error al obtener juegos: ${error.message}`);
});