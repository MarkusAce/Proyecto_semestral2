const pagarBtn = document.getElementById('pagarBtn');
const totalJuegosRow = document.getElementById('totalJuegosRow');

pagarBtn.addEventListener('click', function(event){
    const validador = JSON.parse(localStorage.getItem('validador'));
    if (!validador){
        alert("Debe loguearse para comprar");
        window.location.href = './iniciar-sesion.html'
    }else{
        if (totalJuegosRow.children.length===0) {
            event.preventDefault();
            alert('El carrito está vacío. Por favor, añade productos antes de pagar.')
        
        }else{
            const modal = new bootstrap.Modal(document.getElementById('pagoModal'));
            modal.show();

            const btnEnviar = document.getElementById('btnEnviar');
            btnEnviar.addEventListener('click',()=>{
                localStorage.removeItem('carritos');
                alert('Su compra fue realizada con exito.')
                window.location.href = './carrito.html'
            })
        }
    }
});