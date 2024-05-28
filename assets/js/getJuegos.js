export const getJuegos = async()=>{
    return await fetch(`https://mega-games-api.onrender.com/`)
    .then((response) => (response.status === 200) ? response.json() : false)
    .then((data) => data.juegos)
    .catch(error => console.log("Error obt. Juego:", error))
}