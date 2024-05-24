import { juegosPorConsola } from "./crearCards.js";

export const verProducto = (juego) => {
    
    const rutaArchivoHtml = '../juego.html';

    fetch(rutaArchivoHtml)
    .then( response => response.text() )
    .then ((html)=>{

        const juegosRandom = juegosPorConsola(juego);

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const imagePage = doc.getElementById('imagePage');
        imagePage.src = juego.img;

        const titlePage = doc.getElementById('titlePage');
        titlePage.textContent = juego.name + " - " +juego.consola;
        

        const descripcionPage = doc.getElementById('descripcionPage');
        descripcionPage.textContent = juego.descripcion;

        const cantidadEstiloPage = doc.getElementById('cantidadEstiloPage');
        cantidadEstiloPage.textContent = "Cantidad Disponible:\u00A0";

        const cantidadPage = doc.getElementById('cantidadPage');
        cantidadPage.textContent = juego.cantidad + " Unidades";

        const precioEstiloPage = doc.getElementById('precioEstiloPage');
        precioEstiloPage.textContent = "Precio:\u00A0"

        const precioPage = doc.getElementById('precioPage');
        precioPage.textContent = "$"+juego.precio;

        const imagenJuego1Page = doc.getElementById('imagenJuego1Page');
        imagenJuego1Page.src = juegosRandom[0].img;

        const tituloJuego1Page = doc.getElementById('tituloJuego1Page');
        tituloJuego1Page.textContent = juegosRandom[0].name;

        const subtituloJuego1Page = doc.getElementById('subtituloJuego1Page');
        subtituloJuego1Page.textContent = juegosRandom[0].consola;

        const imagenJuego2Page = doc.getElementById('imagenJuego2Page');
        imagenJuego2Page.src = juegosRandom[1].img;

        const tituloJuego2Page = doc.getElementById('tituloJuego2Page');
        tituloJuego2Page.textContent = juegosRandom[1].name;

        const subtituloJuego2Page = doc.getElementById('subtituloJuego2Page');
        subtituloJuego2Page.textContent = juegosRandom[1].consola;

        const nuevoHTML = new XMLSerializer().serializeToString(doc);

        document.body.innerHTML = nuevoHTML;
        irJuegoRandom(juegosRandom);
    })
    .catch((error)=>{
        console.error(`Error al cargar los datos :${error}`);
    })
}

const irJuegoRandom = (juegosPorConsola)=>{
    const imagenJuego1Page = document.getElementById('imagenJuego1Page');
    imagenJuego1Page.addEventListener('click',()=>{
        verProducto(juegosPorConsola[0]);
    }
    )
    const imagenJuego2Page = document.getElementById('imagenJuego2Page');
    imagenJuego2Page.addEventListener('click',()=>{
        verProducto(juegosPorConsola[1]);
    }
    )
}

