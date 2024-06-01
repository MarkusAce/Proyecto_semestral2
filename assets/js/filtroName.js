 import { crearCard } from "./crearCards.js";
 import { getJuegosName } from "./getJuegosName.js";

 const buscarJuegoPage = document.getElementById('buscarJuegoPage');
 const botonBuscarPage = document.getElementById('botonBuscarPage');

 let juegoABuscar = '';

 export const buscarJuego = async (juegoABuscar)=>{
     try {
         const data = await getJuegosName(juegoABuscar);
         crearCard(data);
     }catch(error){
         console.error('Error al obtener el juego por nombre: ', error);
     }
 };

 const ejecutarBusqueda = async () =>{
    if (juegoABuscar || juegoABuscar === "Buscar"){
        crearCard(JSON.parse(localStorage.getItem('ArregloDeJuegos')));
    }else{
        await buscarJuego(juegoABuscar);
    }
    localStorage.setItem('juegoABuscar',JSON.stringify(juegoABuscar));
    window.location.href = './Catalogo.html';
 };

 buscarJuegoPage.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        juegoABuscar = event.target.value;
        await ejecutarBusqueda();
    }
});
botonBuscarPage.addEventListener('click', async (event)=>{
    event.preventDefault();
    juegoABuscar = buscarJuegoPage.value;
    await ejecutarBusqueda();
})