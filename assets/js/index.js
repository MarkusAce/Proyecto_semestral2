import { crearCard } from "./crearCards.js";

const obtenerJuegos = async () =>{
    try{
        const response = await fetch("https://mega-games-project.onrender.com");

        if (!response.ok){
            throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(`Error al obtener juegos: ${error.message}`);
        return null;
    }
}

obtenerJuegos()
.then((juegos) =>{
    crearCard(juegos);
})
.catch(error=> {
    console.error(`Error al obtener juegos: ${error.message}`);
});