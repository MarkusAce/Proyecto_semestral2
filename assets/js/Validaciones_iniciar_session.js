//Validación de iniciar sessión
document.addEventListener("DOMContentLoaded", function() {
    const loginPassword = document.getElementById("loginPassword");
    const togglePassword = document.getElementById("togglePassword");

    


    function togglePasswordVisibility() {
        
        if (loginPassword.type === "password") {
            loginPassword.type = "text";
            setTimeout(function() {
                loginPassword.type = "password";
                togglePassword.textContent = "Mostrar contraseña";
            }, 2000); // Ocultar la contraseña después de 1 segundos
        }
    }

    togglePassword.addEventListener("click", () =>{
        togglePasswordVisibility();

    })


    // Función para verificar si el usuario existe en el localStorage
    function verificarUsuario(correo) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.correo === correo);
    }
    // Función para verificar si las credenciales son correctas
    function verificarCredenciales(correo, contraseña) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        return users.some(user => user.correo === correo && user.password1 === contraseña);
    }
    // Función para manejar el inicio de sesión
    function iniciarSesion() {
        const correo = $('#loginUsername').val();
        const contraseña = $('#loginPassword').val();
    
        const usuarioExiste = verificarUsuario(correo);
    
        if (usuarioExiste) {
            const credencialesCorrectas = verificarCredenciales(correo, contraseña);
            if (credencialesCorrectas) {
                alert("¡Inicio de sesión exitoso!");
                // Ambos campos están completos y el correo es válido
                $('#condicionLabel').text("Iniciando sesión...");
                
                condicionLabel.textContent = "Iniciando sesión...";
                console.log("Ambos campos están completos y el correo es válido.");
                
                const validador = ["estalog", correo];
                localStorage.setItem('validador', JSON.stringify(validador));
                Cambiar();
                
                // Aquí podrías agregar más acciones después del inicio de sesión exitoso
            } else {
                alert("La contraseña es incorrecta. Por favor, inténtalo de nuevo.");
            }
        } else {
            alert("El usuario no existe.");
        }
    }

    //------------------------------------------------------------
    
    // Creamos variables
    let email = "";
    let pass = "";
    let condicionLabel = document.getElementById("condicion");
    let loginButton = document.getElementById("btn_ingresar");
    

    function isValidEmail(email) {
        const email_verificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email_verificar.test(email);
    }

    function Cambiar(){
        // Redirigir a otra página después de un pequeño retraso (por ejemplo, 1 segundo)
        setTimeout(function() {
            window.location.href = "./index.html"; // Cambiar la dirección del HTML
        }, 1000); // Tiempo en milisegundos
    }

    function limpiar() {
        document.getElementById("confir_email").value = "";
        document.getElementById("confir_pass").value = "";
    }

    if (loginButton) {
        loginButton.addEventListener("click", function( event) {
            event.preventDefault();

            document.getElementById("confir_email").textContent = "";
            document.getElementById("confir_pass").textContent = "";

            // Obtenemos los valores de entrada y los guardamos en email y pass.
            email = document.getElementById("loginUsername").value;
            pass = document.getElementById("loginPassword").value;


            if (email === ""){
                
                document.getElementById("confir_email").textContent = "Debe agregar una cuenta";
                document.getElementById("confir_email").style.color = "red";
                //return;
            }
            if (pass === "") {

                document.getElementById("confir_pass").textContent = "Debe agregar una contraseña";
                document.getElementById("confir_pass").style.color = "red";
            }
            if(email === "" && pass === "") {
                condicionLabel.textContent = "Por favor, complete todos los campos.";

            }

            if (email !== "") {
                if (isValidEmail(email)) {
                    iniciarSesion();

                
                        
                    
                    

                } else {
                    // Mostrar mensaje de error si el correo no es válido
                    document.getElementById("confir_email").textContent = "Por favor, ingrese un correo electrónico válido";
                    document.getElementById("confir_email").style.color = "red";
                    console.log("Por favor, ingrese un correo electrónico válido.");

                }
            }
        });
        
    };
});