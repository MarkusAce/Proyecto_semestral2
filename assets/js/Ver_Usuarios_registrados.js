function updateClockAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

    let greeting;
    if (hours >= 6 && hours < 12) {
        greeting = "Buenos días, Bienvenido";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Buenas tardes, Bienvenido";
    } else {
        greeting = "Buenas noches, Bienvenido";
    }

    document.getElementById('greeting').textContent = greeting;

    // Formatear y mostrar la fecha en el formato "martes, 2 de mayo de 2024"
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('date').textContent = dateString;
}

// Actualiza el reloj, el saludo y la fecha cada segundo
setInterval(updateClockAndGreeting, 1000);

// Llama a la función para mostrar la hora, el saludo y la fecha inmediatamente cuando se carga la página
updateClockAndGreeting();





//------------------------------------------------------------------------
let loginButton3 = document.getElementById("btn_ver");
let hideButton = document.getElementById("cerrar");
let loginButton5 = document.getElementById("refrescar");

if (loginButton3) {
    loginButton3.addEventListener("click", function(event) {
        // Función para mostrar la lista de usuarios
        showUserList();
    });
}

if (loginButton5) {
    loginButton5.addEventListener("click", function(event) {
        // Función para refrescar la lista de usuarios
        showUserList();
    });
}

function showUserList() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userList = document.getElementById('ver_usuarios');

    userList.innerHTML = "";

    users.forEach(function(user) {
        let listItem = document.createElement('li');
        listItem.classList.add('user-item');
        listItem.innerHTML =  `
            <div class="registros"> 
                <img class=" perfil2 col-lg-5 col-md-5 col-8 col-sm-6 col-xl-5 " src="${user.foto}" alt="Foto de perfil">
                <p><strong>Nombre:</strong> ${user.nombre}</p>
                <p><strong>Apellido:</strong> ${user.apellido}</p>
                <p><strong>RUT:</strong> ${user.rut}</p>
                <p><strong>Fecha:</strong> ${user.fecha}</p>
                <p><strong>Correo:</strong> ${user.correo}</p>
                <p><strong>Constraseña:</strong> ${user.password1}</p>
                <p><strong>Repetir Constraseña:</strong> ${user.password2}</p>
                <button class="delete-button">Eliminar</button>
            </div>`;
        userList.appendChild(listItem);
    });

    // Agregar listeners para los botones de eliminar
    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            deleteUser(index); // Llamar a la función para eliminar el usuario con el índice correspondiente
        });
    });
}

if (hideButton) {
    hideButton.addEventListener("click", function(event) {
        let userList = document.getElementById('ver_usuarios');
        // Ocultar la lista de usuarios y mostrar el botón de ver usuarios
        userList.innerHTML = "";
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Eliminar el usuario del array
    localStorage.setItem('users', JSON.stringify(users)); // Guardar el array actualizado en el localStorage
    // Volver a cargar la lista de usuarios para reflejar los cambios
    showUserList();
}

