import { verProducto } from "./verProducto.js";

export const crearCard = (juegos) =>{

    let juegosRow = document.getElementById("juegosRow")

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