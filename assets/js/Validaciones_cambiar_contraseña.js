document.addEventListener("DOMContentLoaded", function() {


    
    // Creamos variables
    let email_c = "";
    let pass_b = "";
    let pass_n = "";
    let condicionLabel2 = document.getElementById("condicion2");
    let loginButton2 = document.getElementById("btn_cambiar");

    function modificarContraseña(correo, nuevaContraseña) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        // Busca el usuario con el correo proporcionado
        const usuarioIndex = users.findIndex(user => user.correo === correo);
        if (usuarioIndex !== -1) {
            // Actualiza la contraseña del usuario
            users[usuarioIndex].password1 = nuevaContraseña;
            users[usuarioIndex].password2 = nuevaContraseña;
            // Guarda el array actualizado en el localStorage
            localStorage.setItem('users', JSON.stringify(users));
            condicionLabel2.textContent = "Contraseña cambiada con exito";
            console.log("Ambos campos están completos y el correo es válido.");
            Cambiar2();
            return true; // Indica que la contraseña se modificó con éxito
        } else {
            // Muestra un mensaje indicando que el usuario no existe
            condicionLabel2.textContent = "El usuario no existe";
            alert("El usuario no existe");
            return false; // Indica que el usuario no existe
        }
    }
    
    
    // Llama a esta función cuando necesites modificar la contraseña de un usuario
    // Pasando el correo del usuario y la nueva contraseña como parámetros
    // Por ejemplo:
    // modificarContraseña('correo@ejemplo.com', 'nuevaContraseña');
    



    //-----------------------------------------------------------------------------------------------------

    

    function isValidEmail(email) {
        const email_verificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email_verificar.test(email);
    }

    function Cambiar2() {
        // Redirigir a otra página después de un pequeño retraso (por ejemplo, 1 segundo)
        setTimeout(function() {
            window.location.href = "./index.html"; // Cambiar la dirección del HTML
        }, 1000); // Tiempo en milisegundos
    }

    function limpiar2() {
        document.getElementById("loginUserEmail").value = "";
        document.getElementById("loginPasswordB").value = "";
        document.getElementById("loginPasswordN").value = "";
    }

    if (loginButton2) {
        loginButton2.addEventListener("click", function( event) {
            event.preventDefault();

            // Limpiamos mensajes de error
            document.getElementById("email_current").textContent = "";
            document.getElementById("pass_before").textContent = "";
            document.getElementById("pass_new").textContent = "";

            // Obtenemos los valores de entrada
            email_c = document.getElementById("loginUserEmail").value;
            pass_b = document.getElementById("loginPasswordB").value;
            pass_n = document.getElementById("loginPasswordN").value;

            if (email_c === "") {
                
                document.getElementById("email_current").textContent = "Debe agregar su correo actual";
                document.getElementById("email_current").style.color = "red";
            }

            if (pass_b === "") {
                
                document.getElementById("pass_before").textContent = "Debe ingresar su nueva contraseña";
                document.getElementById("pass_before").style.color = "red";
            }

            if (pass_n === "") {
                
                document.getElementById("pass_new").textContent = "Debe ingresar su nueva contraseña";
                document.getElementById("pass_new").style.color = "red";
            }
            //hacer un if con correo verificado y comprobar que ambas contraseñas sean iguales y luego pasa
            
            //-------------
            if (email_c === "" && pass_b === "" && pass_n === "") {
                // Mostrar mensaje de error si alguno de los campos está vacío
                condicionLabel2.textContent = "Por favor, complete todos los campos.";
                console.log("Por favor, complete todos los campos.");
            }
            
            if (email_c !== "" ){
                if (isValidEmail(email_c)) {
                    // Ambos campos están completos y el correo es válido
                    if (pass_b !== "" && pass_n !== "" && pass_b === pass_n){
                        modificarContraseña(email_c , pass_n);

                        
                    }else{
                        document.getElementById("pass_before").textContent = "Las contraseñas no coinciden, por favor verifique";
                        document.getElementById("pass_before").style.color = "red";

                        document.getElementById("pass_new").textContent = "Las contraseñas no coinciden, por favor verifique";
                        document.getElementById("pass_new").style.color = "red";
                    }
                    
                    

                } else {
                    // Mostrar mensaje de error si el correo no es válido
                    document.getElementById("email_current").textContent = "Por favor, ingrese un correo electrónico válido.";
                    document.getElementById("email_current").style.color = "red";
                    console.log("Por favor, ingrese un correo electrónico válido.");

                }
            }
            
        });
    };
});
