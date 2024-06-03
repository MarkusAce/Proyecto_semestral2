const pagarBtn = document.getElementById('pagarBtn');
const totalJuegosRow = document.getElementById('totalJuegosRow');
const form = document.querySelector('#pagoModal form');
const tarjeta = document.querySelector('#tarjeta');
const fecha = document.querySelector('#fecha');

function removerEspacios(str) {
    return str.replace(/\s/g, '');
}

function formatoTarjeta(str) {
    return str.replace(/(.{4})/g, '$1 ').trim();
}

tarjeta.addEventListener('input', function(event) {
    const valorActual = removerEspacios(event.target.value);
    event.target.value = formatoTarjeta(valorActual);
});
fecha.addEventListener('input', function(event) {
    let valor = event.target.value.trim();
    if (valor.length === 2 && !valor.includes('/')) {
        event.target.value = valor + '/';
    }
});

pagarBtn.addEventListener('click', function(event) {
    const validador = JSON.parse(localStorage.getItem('validador'));
    if (!validador) {
        alert("Debe loguearse para comprar");
        window.location.href = './iniciar-sesion.html';
    } else {
        if (totalJuegosRow.children.length === 0) {
            event.preventDefault();
            alert('El carrito está vacío. Por favor, añade productos antes de pagar.');
        } else {
            const modal = new bootstrap.Modal(document.getElementById('pagoModal'));
            modal.show();

            const btnEnviar = document.getElementById('btnEnviar');
            btnEnviar.addEventListener('click', (event) => {
                event.preventDefault();

                const nombre = document.querySelector('#nombre');
                const direccion = document.querySelector('#direccion');
                const cvv = document.querySelector('#cvv');

                let valid = true;

                if (nombre.value.trim() === '') {
                    alert('El nombre es obligatorio');
                    valid = false;
                }
                if (direccion.value.trim() === '') {
                    alert('La dirección es obligatoria');
                    valid = false;
                }

                const tarjetaSinEspacios = removerEspacios(tarjeta.value);
                if (tarjetaSinEspacios.trim() === '' || !/^\d{16}$/.test(tarjetaSinEspacios)) {
                    alert('El número de tarjeta es obligatorio y debe tener 16 dígitos');
                    valid = false;
                } else {
                    tarjeta.value = formatoTarjeta(tarjetaSinEspacios);
                }

                if (fecha.value.trim() === '' || !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(fecha.value)) {
                    alert('La fecha de expiración es obligatoria y debe estar en formato MM/AA');
                    valid = false;
                }

                if (cvv.value.trim() === '' || !/^\d{3,4}$/.test(cvv.value)) {
                    alert('El CVV es obligatorio y debe tener 3 o 4 dígitos');
                    valid = false;
                }

                if (valid) {
                    localStorage.removeItem('carritos');
                    alert('Su compra fue realizada con éxito.');
                    window.location.href = './carrito.html';
                    form.submit();
                }
            });
        }
    }
});