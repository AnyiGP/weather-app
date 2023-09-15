//**Ejercicio 1:** Crea una página web con dos inputs: uno para ingresar el nombre de usuario y otro para la edad. Al hacer clic en un botón "Guardar", almacena estos datos en Local Storage.

//1-agarrar el valor que el usuario pone en el input

let user = [];
console.log(user);

let userJSON = JSON.stringify(user);
console.log(userJSON);

localStorage.setItem("user", userJSON);

const btnGuardar = document.getElementById("btn-guardar");

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre-usuario").value;
  let edad = document.getElementById("edad-usuario").value;

  let user2 = {
    nombre: nombre,
    edad: edad,
  };

  let userParsed = JSON.parse(localStorage.getItem("user"));

  userParsed.push(user2);

  //                    a la key,
  localStorage.setItem("user", JSON.stringify(userParsed));

  console.log(userParsed);
  mostrarNombres();
});

// **Ejercicio 2:** Desarrolla una página que recupere los datos almacenados en Local Storage (nombre y edad) y los muestre en pantalla.

const divRoot = document.getElementById("root");

const mostrarNombres = () => {
  const datos = JSON.parse(localStorage.getItem("user"));

  datos.forEach((datos) => {
    divRoot.innerHTML += `
        <h2>${datos.nombre}</h2>
        <h2>${datos.edad}</h2>
        `;
  });
};
