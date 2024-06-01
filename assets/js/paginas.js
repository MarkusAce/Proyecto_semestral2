export const indexPage = () => {
 
    const urlActual = window.location.href;
    return urlActual.endsWith('index.html')
}
export const catalogoPage = () => {
 
    const urlActual = window.location.href;
    return urlActual.endsWith('Catalogo.html')
}
export const carritoPage = () => {
 
    const urlActual = window.location.href;
    return urlActual.endsWith('carrito.html')
}
