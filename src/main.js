import { api, provinciasArgentinaArray, paisesAmerica  } from "./datos.mjs";




////////SELECT DE PROVINCIAS////////

const selectProvincias = (provincias) => {
  const urlProvincias = `${api.url}${provincias},${api.pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //  console.log(urlProvincias);
  getCity(urlProvincias);
};

const miSelect = document.getElementById("miSelect");

provinciasArgentinaArray.forEach((provincia) => {
  const opcion = document.createElement("option");
  opcion.value = provincia.value;
  opcion.textContent = provincia.label;
  miSelect.appendChild(opcion);
});

miSelect.addEventListener("change", (e) => {
  e.preventDefault();
  const provincias = e.target.value;
  selectProvincias(provincias);
});

////////BUSCADOR DE CIUDADES////////

const buscarCiudad = (ciudad) => {
  const urlCiudad = `${api.url}${ciudad}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  console.log(urlCiudad);
  getCity(urlCiudad);
};

document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ciudad = document.querySelector("#search-input").value;
  buscarCiudad(ciudad);
  //ciudad.value = ""
});

////////SECCIONES CON CONTINENTES, select CON PAISES Y BUSCADOR DE CIUDADES POR PAIS elegido en el select////////

////////SELECT AMÉRICA////////
//pushear los paises de américa al select

const selectAmerica = (ciudadPais, pais) => {
  const urlCiudadPais = `${api.url}${ciudadPais},${pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //  console.log(urlProvincias);
  getCity(urlCiudadPais);
};

// document.querySelector("#search-ciudad-pais").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   selectAmerica(ciudadPais);
//   //ciudad.value = ""
// });


const mySelectAmerica = document.getElementById("selectPaisesAmerica");

paisesAmerica.forEach((pais) => {
  const opcion = document.createElement("option");
  opcion.value = pais.value;
  opcion.textContent = pais.label;
  mySelectAmerica.appendChild(opcion);
});

mySelectAmerica.addEventListener("change", (e) => {
  e.preventDefault();
  const pais = e.target.value;
  //const ciudadPais = "Mendoza"
  const ciudadPais = document.querySelector("#search-input-ciudad-pais").value
  selectAmerica(ciudadPais, pais);
});

////////BUSCADOR DE CIUDADES POR PAÍSES////////
//una vez que selecciona el país agregarlo a la parte de la url que tiene el país para que luego al ingresar una ciudad de ese país en el INPUT muestre la temperatura de esa ciudad (por ejemplo mendoza de argentina y mendoza de mexico)




////////////////////////////////////////

// const selectPaises = (provincias, pais) => { //provincias.value(Lo que escriba el usuario en el input), pais.value(pais que elija el usuario en el select)
//   const urlProvincias = `${api.url}${provincias},${pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
//   //  console.log(urlProvincias);
//   getCity(urlProvincias);
// };



////////FX OBTENER DATOS////////

const getCity = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  //const city = data.result
  let icono = data.weather[0].icon;
  let row = document.getElementById("divRow");
  row.innerHTML = "";
  return (row.innerHTML += `<img src="${api.iconoURL}${icono}@4x.png" alt="">
    <p class="pTitle">${data.name}</p>
    <p class="pTitle">${data.main.temp}</p>
    <p class="pTitle">${data.sys.country}</p>
    <p class="pTitle">${data.weather[0].description}</p>`);
};

getCity();

//   const urlCiudad = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4e5536b1e0f31785b374595576ddf91c";


// const getCityDirecta = async (urlCiudad) => {
//   const res = await fetch(urlCiudad);
//   const data = await res.json();
//   //const city = data.result
//   let icono = data.weather[0].icon;
//   let row = document.getElementById("divRow");
//   row.innerHTML = "";
//   return (row.innerHTML += `<img src="${api.iconoURL}${icono}@4x.png" alt="">
//     <p class="pTitle">${data.name}</p>
//     <p class="pTitle">${data.main.temp}</p>
//     <p class="pTitle">${data.sys.country}</p>
//     <p class="pTitle">${data.weather[0].description}</p>`);
// };

// console.log(getCityDirecta(urlCiudad));


// const countriesList = require("countries-list");

// const paises = Object.entries(countriesList.countries).map(([codigo, nombre]) => ({
//   value: codigo,
//   label: nombre,
// }));

// console.log(paises);

