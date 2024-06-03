const usuarioCerrar = document.getElementById('usuarioCerrar');
const cerrarSesion = document.getElementById('cerrarSesion');
const usuarioActual = JSON.parse(localStorage.getItem('validador'));

usuarioCerrar.textContent = usuarioActual[1];

cerrarSesion.addEventListener('click',()=>{
    localStorage.removeItem('validador');
    window.location.href = './iniciar-sesion.html'
})