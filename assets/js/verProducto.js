
export const verProducto = (juego) => {
    
    const rutaArchivoHtml = '../juego.html';

    fetch(rutaArchivoHtml)
    .then( response => response.text() )
    .then ((html)=>{

        console.log(juego);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const imagePage = doc.getElementById('imagePage');
        imagePage.src = juego.img;

        const titlePage = doc.getElementById('titlePage');
        titlePage.textContent = juego.name + " - " +juego.consola;

        const cantidadEstiloPage = doc.getElementById('cantidadEstiloPage');
        cantidadEstiloPage.textContent = "Cantidad Disponible:\u00A0";

        const cantidadPage = doc.getElementById('cantidadPage');
        cantidadPage.textContent = juego.cantidad + " Unidades";

        const precioEstiloPage = doc.getElementById('precioEstiloPage');
        precioEstiloPage.textContent = "Precio:\u00A0"

        const precioPage = doc.getElementById('precioPage');
        precioPage.textContent = "$"+juego.precio;

        const nuevoHTML = new XMLSerializer().serializeToString(doc);

        document.body.innerHTML = nuevoHTML;
    })
    .catch((error)=>{
        console.error(`Error al cargar los datos :${error}`);
    })

}

document.addEventListener('DOMContentLoaded',(event)=> {
    const imagen = document.getElementById('imagenSilkson');
    imagen.addEventListener('click', ()=>{
        verProductoPersonalizado(juegos, 12);
    })
})

export const verProductoPersonalizado = (juegos,id) => {
    
    const rutaArchivoHtml = '../juego.html';
    const juegoEncontrado = juegos.find(juego =>juego.id === id);

    fetch(rutaArchivoHtml)
    .then( response => response.text() )
    .then ((html)=>{

        console.log(juegoEncontrado);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const imagePage = doc.getElementById('imagePage');
        imagePage.src = juegoEncontrado.img;

        const titlePage = doc.getElementById('titlePage');
        titlePage.textContent = juegoEncontrado.name + " - " +juegoEncontrado.consola;

        const cantidadEstiloPage = doc.getElementById('cantidadEstiloPage');
        cantidadEstiloPage.textContent = "Cantidad Disponible:\u00A0";

        const cantidadPage = doc.getElementById('cantidadPage');
        cantidadPage.textContent = juegoEncontrado.cantidad + " Unidades";

        const precioEstiloPage = doc.getElementById('precioEstiloPage');
        precioEstiloPage.textContent = "Precio:\u00A0"

        const precioPage = doc.getElementById('precioPage');
        precioPage.textContent = "$"+juegoEncontrado.precio;

        const nuevoHTML = new XMLSerializer().serializeToString(doc);

        document.body.innerHTML = nuevoHTML;
    })
    .catch((error)=>{
        console.error(`Error al cargar los datos :${error}`);
    })

}