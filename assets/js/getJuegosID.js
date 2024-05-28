export const getJuegosID = async (id) =>{
    return await fetch(`https://mega-games-api.onrender.com/byId/${id}`)
    .then((response) => (response.status === 200) ? response.json() : false)
    .then((data) => data.juego)
    .catch(error => console.log("Error obt. Juego:", error))
}