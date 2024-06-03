document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar si el usuario existe en el localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    function verificarUsuario(correo) {
        
        return users.some(user => user.correo === correo);
    }

    function iniciarSesion() {
        const correo = document.getElementById("e_correo").value;
        console.log(correo);
        const usuarioExiste = verificarUsuario(correo);
    
        if (!usuarioExiste) {
            // El usuario no existe, se procede al registro del nuevo usuario
            console.log("Paso 6 y 7: registro y contraseñas.");
            e_nombre = document.getElementById("e_nombre").value;
            e_apellido = document.getElementById("e_apellido").value;
            e_rut = document.getElementById("e_rut").value;
            e_fecha = document.getElementById("e_fecha").value;
            e_correo = document.getElementById("e_correo").value;
            e_contraseña = document.getElementById("e_contraseña").value;
            e_repetir = document.getElementById("e_repetir").value;
            foto = imagenBase64;
    
    
            let userData = {
                foto: foto,
                nombre: e_nombre,
                apellido: e_apellido,
                rut: e_rut,
                fecha: e_fecha,
                correo: e_correo,
                password1: e_contraseña,
                password2: e_repetir
            };
    
            console.log("userData:", userData);
    
            // Añade el objeto userData al final del array users
            users.push(userData);
            // Guardar el array actualizado en el localStorage
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso!');
            Cambiar();
        } else {
            // El usuario ya existe, mostrar alerta
            condicionLabel3.textContent = "El correo electrónico ya está registrado.";
            alert('El correo electrónico ya está registrado. Vaya al apartado de iniciar sesión.');
            Cambiar();
        }
    }
    
    /*---------------------------------------------------------------------------------------------*/




    //Guardar imagen en el local storage
    let imagenBase64; // Declaración de la variable para almacenar la imagen en formato base64

    const defaultFile = './assets/img/Perfil.png';
    const fileInput = document.getElementById('foto');
    const img = document.getElementById('img');
    const formulario = document.getElementById('formulario');
    let imagenResultado;

    fileInput.addEventListener('change', e => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(event) {
                img.src = event.target.result;
                imagenBase64 = event.target.result; // Guardar la imagen en formato base64
                // Aquí puedes hacer lo que necesites con imagenBase64
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            img.src = defaultFile;
            imagenBase64 = defaultFile; // Guardar la imagen por defecto en formato base64
            // Aquí puedes hacer lo que necesites con imagenBase64
        }
    });

    // Al finalizar todo el proceso, asignar el valor de imagenBase64 a imagenResultado
    imagenResultado = imagenBase64;

    // Creamos el formato del rut (hace que se pongan los puntos y y el guión de manera automatica)
    const rutInput = document.getElementById("e_rut"); // Obtener el elemento input del RUT

    rutInput.addEventListener("input", function() {
        // Obtener el valor actual del RUT sin formato
        let rutSinFormato = rutInput.value.trim();

        // Validar que el RUT solo contenga números y K
        rutSinFormato = rutSinFormato.replace(/[^\dKk]/g, "");

        // Limitar la longitud del rut a 12 caracteres (incluyendo el guión)
        if (rutSinFormato.length > 9) {
            rutSinFormato = rutSinFormato.substring(0, 9); /*substring limita la cantidad caracteres */
        }

        // Construir el RUT formateado con puntos y guion
        let rutFormateado = "";
        for (let i = 0; i < rutSinFormato.length; i++) {
            if (i === 2 || i === 5) {
                rutFormateado += ".";
            } else if (i === 8) {
                rutFormateado += "-";
            }
            rutFormateado += rutSinFormato[i];
        }
        if (rutSinFormato.length === 8) {
            rutSinFormato = rutSinFormato.substring(0, 9);
        
            rutFormateado = "";
            for (let i = 0; i < rutSinFormato.length; i++) {
                if (i === 1 || i === 4) {
                    rutFormateado += ".";
                } else if (i === 7) {
                    rutFormateado += "-";
                }
                rutFormateado += rutSinFormato[i];
            }
        }
        

        // Actualizar el valor del campo de texto con el RUT formateado
        rutInput.value = rutFormateado;
    });

    //------------------------------------------------------------------------------------------------------------------------------
    
    // Validador de fecha (año, mes, dia)
    
    function validarFecha(fechaString, formatoFecha = "yyyy-MM-dd") {
        // Verificar que la fecha tenga el formato correcto
        const regex = new RegExp(`^\\d{4}-\\d{2}-\\d{2}$`);
        if (!regex.test(fechaString)) {
            return { valido: false, error: `El formato de la fecha debe ser "yyyy-MM-dd"` };
        }
    
        // Separar el string en componentes de fecha
        const [anio, mes, dia] = fechaString.split('-').map(Number);
        const fecha = new Date(anio, mes - 1, dia);
    
        // Verificar que la fecha ingresada sea válida
        if (fecha.getFullYear() !== anio || fecha.getMonth() + 1 !== mes || fecha.getDate() !== dia) {
            return { valido: false, error: "La fecha ingresada no es válida" };
        }
    
        // Obtener la fecha actual
        const fechaActual = new Date();
        const año2 = fechaActual.getFullYear();
        const mes2 = fechaActual.getMonth();
        const dia2 = fechaActual.getDate();
    
        // Mostrar el año, mes y día actuales para depuración
        console.log("año2", año2);
        console.log("mes2", mes2 + 1); // Añadir 1 al mes para mostrar el mes correcto (legible para humanos)
        console.log("dia2", dia2);
    
        // Comparar la fecha ingresada con la fecha actual
        if (fecha > fechaActual) {
            return { valido: false, error: "La fecha ingresada no puede ser mayor que la actual" };
        } else {
            return { valido: true };
        }
    }

    //------------------------------------------------------------------------------------------------------------------------------

    // Creamos variables
    let e_nombre = "";
    let e_apellido = "";
    let e_rut = "";
    let e_fecha = "";
    let e_correo = "";
    let e_contraseña = "";
    let e_repetir = "";
    let foto = "";
    let condicionLabel3 = document.getElementById("condicion");
    let loginButton3 = document.getElementById("btn_registrar");

    //------------------------------------------------------------------------------------------------------------------------------
    
    // Función de validar el correo
    function isValidEmail(e_correo) {
        const email_verificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email_verificar.test(e_correo);
    }

    //------------------------------------------------------------------------------------------------------------------------------
    
    // Función de validar el nombre  
    function validarNombreSoloLetrasAcentos(e_nombre) {
        // Expresión regular que acepta solo letras y acentos
        const regex = /^[A-Za-zÀÁÉÈÍÓÚÜÑñáéèíóúüñ]+$/;
      
        // Se evalúa si el nombre cumple con la expresión regular
        return regex.test(e_nombre);
    }

    //------------------------------------------------------------------------------------------------------------------------------
    
    // Función de validar el rut
    function validarRUT(rutCompleto) {
        // 1. Eliminar puntos y guiones del RUT
        rutCompleto = rutCompleto.replace(/[^\dkK-]/g, ""); // Expresión regular que elimina puntos, guiones y cualquier caracter no válido
      
        // 2. Separar el cuerpo y el dígito verificador
        const partes = rutCompleto.split("-"); // Divide la cadena en dos partes usando el guion como separador
        if (partes.length !== 2) {
            return false; // Asegurarse de que hay un cuerpo y un dígito verificador
        }
        const cuerpo = partes[0]; // Cuerpo del RUT (primera parte)
        const digitoVerificador = partes[1].toUpperCase(); // Dígito verificador (segunda parte)
      
        // 3. Validar el formato del cuerpo
        if (!/^[0-9]+$/.test(cuerpo) || cuerpo.length < 7) { // Validación de formato de números y longitud mínima
            return false; // Si el formato no es válido, retorna falso
        }
      
        // 4. Calcular el checksum
        let suma = 0;
        let multiplicador = 2;
      
        for (let i = cuerpo.length - 1; i >= 0; i--) { // Recorremos el cuerpo del RUT de derecha a izquierda
            const digito = parseInt(cuerpo[i]); // Convertimos el dígito en número
            suma += digito * multiplicador; // Multiplicamos el dígito por el multiplicador y lo agregamos a la suma
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1; // Actualizamos el multiplicador (2 a 7)
        }
      
        // 5. Calcular el dígito esperado
        const checksum = suma % 11; // Residuo de la suma
        let digitoEsperado = 11 - checksum; // Calculamos el dígito esperado (restando 11 al checksum)
      
        if (digitoEsperado === 11) {
            digitoEsperado = '0';
        } else if (digitoEsperado === 10) {
            digitoEsperado = 'K';
        } else {
            digitoEsperado = digitoEsperado.toString();
        }
      
        // 6. Comparar el dígito verificador con el dígito esperado
        return digitoVerificador === digitoEsperado; // Comparamos si coinciden
    }
    //------------------------------------------------------------------------------------------------------------------------------


    //Nos redirige a otra pagina
    function Cambiar(){
        // Redirigir a otra página después de un pequeño retraso (por ejemplo, 1 segundo)
        setTimeout(function() {
            window.location.href = "./iniciar-sesion.html"; // Cambiar la dirección del HTML
        }, 1000); // Tiempo en milisegundos
    }

    function limpiar3(){
        document.getElementById("e_nombre").value = "";
        document.getElementById("e_apellido").value = "";
        document.getElementById("e_rut").value = "";
        document.getElementById("e_fecha").value = "";
        document.getElementById("e_correo").value = "";
        document.getElementById("e_contraseña").value = "";
        document.getElementById("e_repetir").value = "";
    }

    if (loginButton3) {
        loginButton3.addEventListener("click", function(event) {
            event.preventDefault();

            // Limpiamos el label de errores
            document.getElementById("error_nombre").textContent = "";
            document.getElementById("error_apellido").textContent = "";
            document.getElementById("error_rut").textContent = "";
            document.getElementById("error_fecha").textContent = "";
            document.getElementById("error_correo").textContent = "";
            document.getElementById("error_contraseña").textContent = "";
            document.getElementById("error_repetir").textContent = "";
            
            // Agregamos los datos a las variables
            e_nombre = document.getElementById("e_nombre").value;
            e_apellido = document.getElementById("e_apellido").value;
            e_rut = document.getElementById("e_rut").value;
            e_fecha = document.getElementById("e_fecha").value;
            e_correo = document.getElementById("e_correo").value;
            e_contraseña = document.getElementById("e_contraseña").value;
            e_repetir = document.getElementById("e_repetir").value;
            foto = img.src;

            // Validación de campo de nombre
            if(e_nombre === ""){
                document.getElementById("error_nombre").textContent = "El nombre es obligatorio";
                document.getElementById("error_nombre").style.color = "red";
            }

            // Validación de campo de apellido
            if(e_apellido === ""){
                document.getElementById("error_apellido").textContent = "El apellido es obligatorio";
                document.getElementById("error_apellido").style.color = "red";
            }

            // Validación de campo de rut
            if(e_rut === ""){
                document.getElementById("error_rut").textContent = "El Rut es obligatorio";
                document.getElementById("error_rut").style.color = "red";
            }

            // Validación de campo de fecha de nacimiento
            if(e_fecha === ""){
                document.getElementById("error_fecha").textContent = "La fecha de nacimiento es obligatoria";
                document.getElementById("error_fecha").style.color = "red";
            }

            // Validación de campo de correo electrónico
            if(e_correo === ""){
                document.getElementById("error_correo").textContent = "El correo electrónico es obligatorio";
                document.getElementById("error_correo").style.color = "red";
            }

            // Validación de campo de contraseña
            if(e_contraseña === ""){
                document.getElementById("error_contraseña").textContent = "La contraseña es obligatoria";
                document.getElementById("error_contraseña").style.color = "red";
            }
            

            // Validación de campo de repetir contraseña
            if(e_repetir === ""){
                document.getElementById("error_repetir").textContent = "Debe repetir la contraseña";
                document.getElementById("error_repetir").style.color = "red";
            }

            if(e_nombre === "" && e_apellido === "" && e_rut === "" && e_rut === "" && e_fecha === "" && e_correo === "" && e_contraseña === "" && e_repetir === ""){
                condicionLabel3.textContent = "Por favor, complete todos los campos.";
            }

            //------------------------------------------------------------------------------------------------------------------------------

            if (e_nombre !== "" && validarNombreSoloLetrasAcentos(e_nombre)) {
                console.log("1-Paso nombre: ",e_nombre);
                if (e_apellido !== "" && validarNombreSoloLetrasAcentos(e_apellido)) {
                    console.log("2-Paso apellido: ",e_apellido);
                    if (e_rut !== "" && validarRUT(e_rut)) {
                        console.log("3-Paso rut: ", e_rut);
                        const validacionFecha = validarFecha(e_fecha);
                        if (e_fecha !== "" && validacionFecha.valido) {
                            console.log("4-Paso fecha: ",e_fecha);
                            if (e_correo !== "" && isValidEmail(e_correo)) {
                                console.log("5-Paso correo: ",e_correo);
                                if (e_contraseña !== "" && e_repetir !== "" && e_contraseña === e_repetir) {
                                    if(e_contraseña.length >= 8){
                                        iniciarSesion();

                                    }else{
                                        document.getElementById("error_contraseña").textContent = "La contraseña debe tener al menos 8 caracteres.";
                                        document.getElementById("error_contraseña").style.color = "red";

                                        document.getElementById("error_repetir").textContent = "La contraseña debe tener al menos 8 caracteres.";
                                        document.getElementById("error_repetir").style.color = "red";
                                    }

                                    



                                } else {
                                    document.getElementById("error_contraseña").textContent = "Las contraseñas no coinciden, por favor verifique";
                                    document.getElementById("error_contraseña").style.color = "red";

                                    document.getElementById("error_repetir").textContent = "Las contraseñas no coinciden, por favor verifiquea";
                                    document.getElementById("error_repetir").style.color = "red";

                                    console.log("Las contraseñas no coinciden");
                                }
                            } else {
                                console.log("Correo electrónico no válido");
                                document.getElementById("error_correo").textContent = "Ingrese un correo electrónico válido, por favor";
                                document.getElementById("error_correo").style.color = "red";
                            }
                        } else {
                            document.getElementById("error_fecha").textContent = "Ingrese un fecha válida, por favor";
                            document.getElementById("error_fecha").style.color = "red";
                            console.log("La fecha ingresada no puede ser mayor que la actual", e_fecha);
                        }
                    } else {
                        document.getElementById("error_rut").textContent = "Ingrese un RUT válido, por favor";
                        document.getElementById("error_rut").style.color = "red";
                        console.log("RUT no válido");
                    }
                } else {
                    document.getElementById("error_apellido").textContent = "Ingrese un apellido válido, por favor";
                    document.getElementById("error_apellido").style.color = "red";
                    console.log("Apellido no válido");
                }
            } else {
                document.getElementById("error_nombre").textContent = "Ingrese un nombre válido, por favor";
                document.getElementById("error_nombre").style.color = "red";
                console.log("Nombre no válido");
            }
        });

        limpiar3();
    }
});
