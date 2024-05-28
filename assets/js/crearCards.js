import { verProducto } from "./verProducto.js";

export const crearCard = (juegos) =>{
    let juegosRow = document.getElementById("juegosRow")

    juegosRow.innerHTML="";
    juegos.map((juego)=>{
        const { name, consola, img : imagen} = juego;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-6");
        divRow.classList.add("col-md-6");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-4");
        divRow.classList.add("mx-auto");
        divRow.classList.add("text-center");
        

        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mx-auto");
        card.classList.add("bordear");
        card.classList.add("tamaño-card");
        card.addEventListener("click", ()=>{

            verProducto(juego);

        });

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");
        img.classList.add("bordear");
        img.classList.add("tam_foto");

        const divBody = document.createElement("div")
        divBody.classList.add("card-body");

        const titulo = document.createElement("p");
        titulo.classList.add("card-text");
        titulo.classList.add("texto-card");
        titulo.textContent = name;

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.classList.add("texto-card");
        subTitulo.textContent = consola;

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);

        juegosRow.appendChild(divRow);
    })
}

export const juegosCarrusel = ()=>{

    const juegos = JSON.parse(localStorage.getItem('ArregloDeJuegos'));

    const imagenSilksong = document.getElementById('imagenSilksong');
    const imagenGtaTrilo = document.getElementById('imagenGtaTrilo');
    const imagenCyber = document.getElementById('imagenCyber');

    imagenSilksong.addEventListener('click',()=>{
        const juegoEncontrado = juegos.find(juego =>juego.id === 12);
        verProducto(juegoEncontrado)
    })
    imagenGtaTrilo.addEventListener('click',()=>{
        const juegoEncontrado = juegos.find(juego =>juego.id === 37);
        verProducto(juegoEncontrado)
    })
    imagenCyber.addEventListener('click',()=>{
        const juegoEncontrado = juegos.find(juego =>juego.id === 3);
        verProducto(juegoEncontrado)
    })
};


export function juegosPorConsola(juegoConsola){

    const ArregloJuegos = JSON.parse(localStorage.getItem('ArregloDeJuegos'));
    const juegosConsola = ArregloJuegos.filter(juego => juego.consola.includes(juegoConsola.consola));
    var indiceJuego = encontrarIndicePorId(juegoConsola.id, juegosConsola);

    var esTrue = false;
    var numAleatorio, numAleatorio2;

    while(!esTrue){
        numAleatorio = Math.floor(Math.random()*12);
        if (indiceJuego !== numAleatorio){
            numAleatorio2 = Math.floor(Math.random()*12);
            if (numAleatorio !== numAleatorio2 && numAleatorio2!==indiceJuego){
                esTrue = true;
            }
        }   
    };
    var juego = juegosConsola[numAleatorio];
    
    var juego2 = juegosConsola[numAleatorio2];
    return [juego,juego2];
}

function encontrarIndicePorId(id, juegosConsola) {
    for (var i = 0; i < juegosConsola.length; i++) {
        if (juegosConsola[i].id === id) {
            return i; 
            
        }
    }
}