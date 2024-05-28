import { crearCard } from "./crearCards.js";
import { getJuegosConsola } from "./getJuegosConsola.js";
import { getJuegosID } from "./getJuegosID.js"; 

const botonps5 =  document.getElementById("ps5Page");
botonps5.addEventListener('click', async()=>{
    try{
        const ps5 = "Ps5%20Edition"
        getJuegosConsola(ps5)
        .then((data)=>crearCard(data))
    }catch(error){
        console.error('Error al obtener el juego por ID: ', error);
    }
})

const xboxPage = document.getElementById("xboxPage");
xboxPage.addEventListener('click', async()=>{
    try{
        const xbox = "Xbox%20SX%20Series"
        getJuegosConsola(xbox)
        .then((data)=>crearCard(data))
    }catch(error){
        console.error('Error')
    }
})