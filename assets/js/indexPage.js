export const indexPage = () => {
 
    const urlActual = window.location.href;
    return urlActual.endsWith('index.html')
}