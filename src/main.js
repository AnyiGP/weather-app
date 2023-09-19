console.log("Hola");

const key = "4e5536b1e0f31785b374595576ddf91c";

const metricEndPoint = "&units=metric";

const lang = "&lang=es";

const inputBuscador = document.getElementById("buscador");

const url = "https://api.openweathermap.org/data/2.5/weather?q=";

let iconoURL = "https://openweathermap.org/img/wn/";

const pais = "AR"; //

//const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${provincias},${pais}&appid=${key}${metricEndPoint}${lang}`;

const obtenerUrl = (provincias, pais) => {
  const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${provincias},${pais}&appid=${key}${metricEndPoint}${lang}`;
  console.log(urlPrueba);
  getCity(urlPrueba);
};

//const provincias = document.getElementById("Catamarca").value;

const selectElement = document.getElementById("miSelect");

selectElement.addEventListener("change", (e) => {
  const provincias = e.target.value;
  obtenerUrl(provincias, pais);
});
//hacer que cuando seleccionno una provinica desaparezca la otra event prevent default

const getCity = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  //const city = data.result
  console.log(data.weather);
  console.log(data.name);
  console.log(data.main.temp);
  console.log(data.sys.country);
  //return data.weather.icon
  let icono = data.weather[0].icon;
  let row = document.getElementById("divRow");
  return (row.innerHTML += `<img src="${iconoURL}${icono}@4x.png" alt="">
  <p class="pTitle">${data.name}</p>
  <p class="pTitle">${data.main.temp}</p>
  <p class="pTitle">${data.sys.country}</p>
  <p class="pTitle">${data.weather[0].description}</p>`);
};

getCity();

//se puede hacer que recorra todo y que me devuelva solo las ciudades que contengan AR?
//filtrar toda la data y que me devuelva solo ciudades que tengan ar
const soloAR = (nombres, search) => {
  const ciudadesFiltradas = data.filter((nombre) => nombre.includes("AR"));
  console.log(ciudadesFiltradas);
};

//mostrar los iconos https://openweathermap.org/img/wn/${icono}@4x.png

const obtenerUrlCiudad = (ciudadDelMundo) => {
  const urlCiudad = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadDelMundo}&appid=${key}${metricEndPoint}${lang}`;
  console.log(urlCiudad);
  getCityWorld(urlCiudad);
};

const getCityWorld = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  //const city = data.result

  console.log(data.name);
};

getCityWorld();

//onclick al botón de buscar
document.querySelector("#buscador").addEventListener("blur", (e) => {
  const ciudadDelMundo = e.target.value;
  obtenerUrlCiudad(ciudadDelMundo);
});

// const buscarCiudad = () => {
//   let inputValue = document.querySelector("#buscador").value
//   let urlBusqueda = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue},&appid=${key}${metricEndPoint}${lang}`
//   console.log(urlBusqueda)
// }
//hacer una función parecida a get city
