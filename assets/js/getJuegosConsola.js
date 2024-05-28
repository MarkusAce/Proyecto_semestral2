export const getJuegosConsola = async(consola) => {
    return await fetch (`https://mega-games-api.onrender.com/byConsola/${consola}`)
    .then((response) => (response.status === 200) ? response.json() : false)
    .then((data) => data.juegosConsola)
    .catch(error => console.log("Error obt. Juego:", error))
}