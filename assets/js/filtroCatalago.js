import { crearCard } from "./crearCards.js";
import { getJuegosConsola } from "./getJuegosConsola.js";

const todosJuegosPage =  document.getElementById("todosJuegosPage");
todosJuegosPage.addEventListener('click', async()=>{
    try{
        crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));
    }catch(error){
        console.error('Error al obtener el juego por consola: ', error);
    }
})

const ps5Page =  document.getElementById("ps5Page");
ps5Page.addEventListener('click', async () =>{
    try {
        let juegosPs5 = localStorage.getItem('arregloPs5');
        if (!juegosPs5){
            const ps5 = "Ps5%20Edition";
            const data = await getJuegosConsola(ps5);
            localStorage.setItem('arregloPs5', JSON.stringify(data));
            juegosPs5 = JSON.stringify(data);
        }
        crearCard(JSON.parse(juegosPs5));
    }catch{
        console.error('Error al obtener el juego por consola: ', error);
    }
})


const switchPage = document.getElementById("switchPage");
switchPage.addEventListener('click', async()=>{
    try{
        let juegosSwitch = localStorage.getItem('arregloSwitch');
        if(!juegosSwitch){
            const nintendoswitch = "Nintendo%20Switch";
            const data = await getJuegosConsola(nintendoswitch);
            localStorage.setItem('arregloSwitch', JSON.stringify(data));
            juegosSwitch = JSON.stringify(data);
        }
        crearCard(JSON.parse(juegosSwitch));
    }catch(error){
        console.error('Error al obtener el juego por consola: ', error)
    }
})

const xboxPage = document.getElementById("xboxPage");
xboxPage.addEventListener('click', async()=>{
    try{
        let juegosXbox = localStorage.getItem('arregloXbox');
        if(!juegosXbox){
            const xbox = "Xbox%20SX%20Series"
            const data = await getJuegosConsola(xbox);
            localStorage.setItem('arregloXbox', JSON.stringify(data));
            juegosXbox = JSON.stringify(data);
        }
        crearCard(JSON.parse(juegosXbox));
    }catch(error){
        console.error('Error al obtener el juego por consola: ', error)
    }
})

const ps4Page = document.getElementById("ps4Page");
ps4Page.addEventListener('click', async()=>{
    try{
        let juegosPs4 = localStorage.getItem('arregloPs4');
        if(!juegosPs4){
            const ps4 = "Ps4%20Edition"
            const data = await getJuegosConsola(ps4);
            localStorage.setItem('arregloPs4', JSON.stringify(data));
            juegosPs4 = JSON.stringify(data);
        }
        crearCard(JSON.parse(juegosPs4));
    }catch(error){
        console.error('Error al obtener el juego por consola: ', error)
    }
})