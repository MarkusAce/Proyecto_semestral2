const btnIniciar = document.getElementById('btnIniciar');
const btnIniciar2 = document.getElementById('btnIniciar2');

btnIniciar.addEventListener('click',()=>{
    const usuarioActual = JSON.parse(localStorage.getItem('validador'));
    if (!usuarioActual){
        window.location.href = './iniciar-sesion.html'
    }else{
        window.location.href = './cerrar-sesion.html'
    }
})

btnIniciar2.addEventListener('click',()=>{
    const usuarioActual = JSON.parse(localStorage.getItem('validador'));
    if (!usuarioActual){
        window.location.href = './iniciar-sesion.html'
    }else{
        window.location.href = './cerrar-sesion.html'
    }
})