import { crearCardNoticia } from "./crearNoticia.js";

const obtenerNoticias = async () =>{
    try{
        const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-06-01&sortBy=publishedAt&apiKey=cf0b48e7634940da8624ea3bd0865dd6");

        if (!response.ok){
            throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        return data.articles;
    }catch(error){
        console.error(`Error al obtener articles: ${error.message}`);
        return null;
    }
}

obtenerNoticias()
.then((articles) =>{
    crearCardNoticia(articles);
})
.catch(error=> {
    console.error(`Error al obtener juegos: ${error.message}`);
});


// // Función para mostrar las noticias en la página HTML
// const mostrarNoticias = async () => {
//     const listaNoticias = document.getElementById('lista-noticias');
//     const noticias = await obtenerNoticias();

//     if (noticias.length === 0) {
//         listaNoticias.innerHTML = '<li>No se encontraron noticias.</li>';
//         return;
//     }

//     // Limpiar la lista de noticias
//     listaNoticias.innerHTML = '';

//     // Mostrar cada noticia en la lista
//     noticias.forEach(noticia => {
//         const li = document.createElement('li');
//         const enlace = document.createElement('a');
//         enlace.href = noticia.url;
//         enlace.textContent = noticia.title;
//         li.appendChild(enlace);
//         listaNoticias.appendChild(li);
//     });
// };

// // Llamar a la función para mostrar las noticias al cargar la página
// mostrarNoticias();
