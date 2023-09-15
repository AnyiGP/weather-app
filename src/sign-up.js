/////VALIDACIÓN/////
//regexr.com para practicar expresiones regulares

//1-validar cada uno de los input

//1.1 busco los input
const signUpForm = document.getElementById("sign-up-form");
const inputsSignUpForm = document.getElementById("sign-up-form input");
const nombre = document.getElementById("nombre"); 
const user = document.getElementById("user"); 
const password = document.getElementById("password"); 
const email = document.getElementById("email");

//1.2 creo expresiones para validad cada uno de los campos 

const expresion = {
  nombre: /^[a-zA-z]{4,20}$/, //Debe validar nombre completo del usuario (no puede contener caracteres especiales o numeros)
  usuario: /^[\w-]{4,5}$/, //Debe contener al menos 4 caracteres, puede contener numeros y/o guion medio o guion bajo.
  password: /^.{8,15}$/, //Debe contener al menor 8 caracteres (no tiene limitacion de caracteres especiales o numeros)
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{3}$/ //Debe contener @ y .
};

const checkValue = (e) => {
  if (e.target.name === "nombre") {
    if (expresion.nombre.test(e.target.value)) {
      console.log("Paso la validacion");
    } else {
      console.log(
        "Tu nombre debe contener de 1 a 40 chars. No puede contener numeros"
      );
    }
  }
  if (e.target.name === "user") {
    if (expresion.usuario.test(e.target.value)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu nombre de usuario debe contener al menos 4 caracteres, puede contener numeros y/o guion medio o guion bajo."
      );
    }
  }
  if (e.target.name === "password") {
    if (expresion.password.test(e.target.value)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu password debe contener al menos 8 caracteres (no tiene limitacion de caracteres especiales o numeros)"
      );
    }
  }
  if (e.target.name === "email") {
    if (expresion.email.test(e.target.value)) {
        console.log("Paso la validacion");
    } else {
      console.log(
        "Tu email debe contener al menos 8 caracteres (no tiene limitacion de caracteres especiales o numeros)"
      );
    }
  }
};

nombre.addEventListener('keyup', checkValue)
user.addEventListener('keyup', checkValue)
password.addEventListener('keyup', checkValue)
email.addEventListener('keyup', checkValue)

const btnRegistrarUsuario = document.getElementById("btn-registrar-usuario");

/////////OTRA OPCIÓN///////////////////

//         function checkValue() {
//             var nombre = document.getElementById("nombre").value;
//             var usuario = document.getElementById("user").value;
//             var password = document.getElementById("password").value;
//             var email = document.getElementById("email").value;

//             // Expresiones regulares para validar los campos
//             var regexNombre = /^[a-zA-Z\s]+$/;
//             var regexUsuario = /^[\w-]{4,}$/;
//             var regexPassword = /^.{8,}$/;
//             var regexEmail = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/;

//             if (!regexNombre.test(nombre)) {
//                 alert("Por favor, ingrese un nombre válido (sin caracteres especiales ni números).");
//                 return false;
//             }

//             if (!regexUsuario.test(usuario)) {
//                 alert("El usuario debe contener al menos 4 caracteres y puede contener números, guiones medios o guiones bajos.");
//                 return false;
//             }

//             if (!regexPassword.test(password)) {
//                 alert("La contraseña debe contener al menos 8 caracteres.");
//                 return false;
//             }

//             if (!regexEmail.test(email)) {
//                 alert("Por favor, ingrese una dirección de correo electrónico válida.");
//                 return false;
//             }

//             return true;
//         }

// nombre.addEventListener('keyup', checkValue)
// user.addEventListener('keyup', checkValue)
// password.addEventListener('keyup', checkValue)
// email.addEventListener('keyup', checkValue)




//crear evento del btn para que me suba los datos ingresados en el input
//pushear datos sobre el array de objetos






//compara con un metodo de array
