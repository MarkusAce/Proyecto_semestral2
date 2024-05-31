export const getJuegosName = async(name) => {
    return await fetch (`https://mega-games-api.onrender.com/byName/${name}`)
    .then((response) => (response.status === 200) ? response.json() : false)
    .then((data) => data.juegosName)
    .catch(error => console.log("Error obt. Juego:", error))
}