 import { crearCard } from "./crearCards.js";
 import { getJuegosName } from "./getJuegosName.js";

 const buscarJuegoPage = document.getElementById('buscarJuegoPage');
 const botonBuscarPage = document.getElementById('botonBuscarPage');
 console.log('ola');
 const buscarJuego = async ()=>{
     try {
         const juegoABuscar = buscarJuegoPage.value;
         console.log(juegoABuscar);
         const data = await getJuegosName(juegoABuscar);
         crearCard(data);
     }catch(error){
         console.error('Error al obtener el juego por nombre: ', error);
     }
 };

 botonBuscarPage.addEventListener('click', async(event)=>{
     event.preventDefault();
     await buscarJuego();
 });

 buscarJuegoPage.addEventListener('keydown', (event)=>{
     if (event.key === 'Enter'){
         event.preventDefault();
         buscarJuego();
     }
 })