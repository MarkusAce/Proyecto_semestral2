const defaultFile = './assets/img/Perfil.png';

const fileInput = document.getElementById('foto');
const img = document.getElementById('img');
const formulario = document.getElementById('formulario');

fileInput.addEventListener('change', e => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(event) {
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    } else {
        img.src = defaultFile;
    }
});
