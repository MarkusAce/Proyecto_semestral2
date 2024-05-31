 import { crearCard, juegosCarrusel } from "./crearCards.js";
 import { getJuegosName } from "./getJuegosName.js";

 const buscarJuegoPage = document.getElementById('buscarJuegoPage');

 let juegoABuscar = '';
 const buscarJuego = async (juegoABuscar)=>{
     try {
         const data = await getJuegosName(juegoABuscar);
         crearCard(data);
     }catch(error){
         console.error('Error al obtener el juego por nombre: ', error);
     }
 };

 buscarJuegoPage.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario
        juegoABuscar = event.target.value;
        if (!juegoABuscar || juegoABuscar=== "Buscar"){
            crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));
        }else{
            buscarJuego(juegoABuscar);
        }
         window.location.href = './Catalogo.html';
         window.onload = async () => {
             await buscarJuego(juegoABuscar);
            
         };
    }
});