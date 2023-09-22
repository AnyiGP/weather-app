import {
  api,
  provinciasArgentinaArray,
  paisesAmerica,
  paisesEuropa,
  paisesAfrica,
  paisesAsia,
  paisesOceania
} from "./datos.mjs";

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

// ////////BUSCAR CIUDAD + PAIS////////

// const buscarCiudadPais = (ciudadPais, pais) => {
//   const urlCiudadPais = `${api.url}${ciudadPais},${pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
//   //  console.log(urlProvincias);
//   getCity(urlCiudadPais);
// };

// ////////SELECT AFRICA////////

// const mySelectAfrica = document.getElementById("selectPaisesAfrica");

// paisesAfrica.forEach((pais) => {
//   const opcion = document.createElement("option");
//   opcion.value = pais.value;
//   opcion.textContent = pais.label;
//   mySelectAfrica.appendChild(opcion);
// });

// mySelectAfrica.addEventListener("change", (e) => {
//   e.preventDefault();
//   const pais = e.target.value;
//   //const ciudadPais = "Mendoza"
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   buscarCiudadPais(ciudadPais, pais);
// });

// ////////SELECT AMÉRICA////////

// const mySelectAmerica = document.getElementById("selectPaisesAmerica");

// paisesAmerica.forEach((pais) => {
//   const opcion = document.createElement("option");
//   opcion.value = pais.value;
//   opcion.textContent = pais.label;
//   mySelectAmerica.appendChild(opcion);
// });

// mySelectAmerica.addEventListener("change", (e) => {
//   e.preventDefault();
//   const pais = e.target.value;
//   //const ciudadPais = "Mendoza"
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   buscarCiudadPais(ciudadPais, pais);
// });

// ////////SELECT ASIA////////

// const mySelectAsia = document.getElementById("selectPaisesAsia");

// paisesAsia.forEach((pais) => {
//   const opcion = document.createElement("option");
//   opcion.value = pais.value;
//   opcion.textContent = pais.label;
//   mySelectAsia.appendChild(opcion);
// });

// mySelectAsia.addEventListener("change", (e) => {
//   e.preventDefault();
//   const pais = e.target.value;
//   //const ciudadPais = "Mendoza"
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   buscarCiudadPais(ciudadPais, pais);
// });

// ////////SELECT EUROPA////////

// const mySelectEuropa = document.getElementById("selectPaisesEuropa");

// paisesEuropa.forEach((pais) => {
//   const opcion = document.createElement("option");
//   opcion.value = pais.value;
//   opcion.textContent = pais.label;
//   mySelectEuropa.appendChild(opcion);
// });

// mySelectEuropa.addEventListener("change", (e) => {
//   e.preventDefault();
//   const pais = e.target.value;
//   //const ciudadPais = "Mendoza"
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   buscarCiudadPais(ciudadPais, pais);
// });

// ////////SELECT OCEANIA////////

// const mySelectOceania = document.getElementById("selectPaisesOceania");

// paisesOceania.forEach((pais) => {
//   const opcion = document.createElement("option");
//   opcion.value = pais.value;
//   opcion.textContent = pais.label;
//   mySelectOceania.appendChild(opcion);
// });

// mySelectOceania.addEventListener("change", (e) => {
//   e.preventDefault();
//   const pais = e.target.value;
//   //const ciudadPais = "Mendoza"
//   const ciudadPais = document.querySelector("#search-input-ciudad-pais").value;
//   buscarCiudadPais(ciudadPais, pais);
// });

////////BUSCAR CIUDAD + PAIS CON BOTONES////////

const btn_europa=  document.querySelector("#btn-europa")
const btn_asia= document.querySelector("#btn-asia")
const btn_africa= document.querySelector("#btn-africa")
const btn_oceania= document.querySelector("#btn-oceania")
const btn_america = document.querySelector("#btn-america")
const selectorPaises = document.querySelector("#paises-continente")
const inputCiudad = document.querySelector('#search-country')
const buscar_ciudad = document.querySelector("#buscar-ciudad")

const buscarCiudadPais = (ciudadPais, pais) => {
  const urlCiudadPais = `${api.url}${ciudadPais},${pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  getCity(urlCiudadPais);
}

btn_africa.addEventListener('click', ()=>{
  selectorPaises.innerHTML = ""
  paisesAfrica.map( paises => {
      selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `
  })
})

btn_europa.addEventListener('click', ()=>{
  selectorPaises.innerHTML = ""
  paisesEuropa.map( paises => {
      selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `
  })
})

btn_america.addEventListener('click', ()=>{
  selectorPaises.innerHTML = ""
  paisesAmerica.map( paises => {
      selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `
  })
})

btn_asia.addEventListener('click', ()=>{
  selectorPaises.innerHTML = ""
  paisesAsia.map( paises => {
      selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `
  })
})

btn_oceania.addEventListener('click', ()=>{
  selectorPaises.innerHTML = ""
  paisesOceania.map( paises => {
      selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `
  })
})

buscar_ciudad.addEventListener("click", ()=> {
  // console.log(inputCiudad.value, selectorPaises.value)
  buscarCiudadPais(inputCiudad.value, selectorPaises.value)
})

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

const urlCiudad = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4e5536b1e0f31785b374595576ddf91c";
console.log(urlCiudad)

// const getCityDirecta = async (urlCiudad) => {
//   const res = await fetch(urlCiudad);
//   const data = await res.json();
//   //const city = data.result
//   let icono = data.weather[0].icon;
//   let row = document.getElementById("divRow");
//   row.innerHTML = "";
//   return (row.innerHTML += `<img src="${api.iconoURL}${icono}@4x.png" alt="">
//     <p class="pTitle">${data.name}</p>
//   `);
// };

// console.log(getCityDirecta(urlCiudad));

// const countriesList = require("countries-list");

// const paises = Object.entries(countriesList.countries).map(([codigo, nombre]) => ({
//   value: codigo,
//   label: nombre,
// }));

// console.log(paises);
