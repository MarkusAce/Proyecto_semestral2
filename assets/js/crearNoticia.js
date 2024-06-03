export const crearCardNoticia = (noticias) => {
    let mostrarNoticias = document.getElementById("mostrarNoticias");

    mostrarNoticias.innerHTML = "";
    noticias.map((noticia) => {
        const { title, url, urlToImage, description } = noticia;

        if (!url || !title) {
            return;
        }

        const divContainer = document.createElement("div");
        divContainer.classList.add("container-fluid", "mt-4", "mb-2");

        const divRow = document.createElement("div");
        divRow.classList.add("row", "d-flex", "justify-content-center");

        const divCol = document.createElement("div");
        divCol.classList.add("col-11", "fondo-carrito", "bordear2");
        divCol.style.cursor = "pointer";
        divCol.addEventListener("click", () => {
            window.location.href = url;
        });

        const tituloNoticias = document.createElement("h2");
        tituloNoticias.classList.add("text-center");
        tituloNoticias.textContent = title;

        const hr = document.createElement("hr");

        const divRowContent = document.createElement("div");
        divRowContent.classList.add("row", "mb-4");

        const divImgCol = document.createElement("div");
        divImgCol.classList.add("col-sm-12", "col-md-5", "col-lg-4", "col-xl-4", "d-flex", "align-items-start", "justify-content-start");

        const img = document.createElement("img");
        img.classList.add("img-fluid", "tamaño-noticia", "bordear2");
        img.src = urlToImage || "../assets/img/no-foto.avif";
        img.alt = "";

        const divTextCol = document.createElement("div");
        divTextCol.classList.add("d-none", "d-sm-block", "col-sm-12", "col-md-7", "col-lg-8", "col-xl-8", "d-flex", "align-items-center");

        const textParagraph = document.createElement("p");
        textParagraph.textContent = description;

        divImgCol.appendChild(img);
        divTextCol.appendChild(textParagraph);
        divRowContent.appendChild(divImgCol);
        divRowContent.appendChild(divTextCol);

        divCol.appendChild(tituloNoticias);
        divCol.appendChild(hr);
        divCol.appendChild(divRowContent);

        divRow.appendChild(divCol);
        divContainer.appendChild(divRow);

        mostrarNoticias.appendChild(divContainer);
    });
};