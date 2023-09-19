console.log("Hola");

const key = "4e5536b1e0f31785b374595576ddf91c";

const url = "https://api.openweathermap.org/data/2.5/weather?q=";

//const urlCityId = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

const metricEndPoint = "&units=metric";

const lang = "&lang=es";

const ciudades = "Catamarca"; //select con las provincias de argentina select.value

const provincias = document.getElementById("Catamarca").value;
// Obtén el elemento select por su ID o cualquier otro selector apropiado
const selectElement = document.getElementById("miSelect");

selectElement.addEventListener("change", (e) => {
  let valorSeleccionado = e.target.value;
  console.log(`${valorSeleccionado}`);
});

let iconoURL = "https://openweathermap.org/img/wn/";

const pais = "AR"; //

const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${provincias},${pais}&appid=${key}${metricEndPoint}${lang}`;

// const urlNombrePais = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

const getCity = async () => {
  const res = await fetch(urlPrueba);
  const data = await res.json();
  //const city = data.result
  console.log(data.weather); //devuelve un [{id, main, description:"clear sky", icon:"01d", id:800, main:"Clear"}]
  console.log(data.name);
  console.log(data.main.temp);
  console.log(data.sys.country);
  //return data.weather.icon
  console.log(data.weather.icon);
};

console.log(getCity());

//se puede hacer que recorra todo y que me devuelva solo las ciudades que contengan AR?
//filtrar toda la data y que me devuelva solo ciudades que tengan ar
const soloAR = (nombres, search) => {
  const ciudadesFiltradas = data.filter((nombre) => nombre.includes("AR"));
  console.log(ciudadesFiltradas);
};

//mostrar los iconos https://openweathermap.org/img/wn/${icono}@4x.png

let getIcon = async () => {
  const res = await fetch(urlPrueba);
  const data = await res.json();
  //const city = data.result
  console.log(data.weather); //devuelve un [{id, main, description:"clear sky", icon:"01d", id:800, main:"Clear"}]
  console.log(data.name);
  console.log(data.main.temp);
  console.log(data.sys.country);
  //return data.weather.icon
  let icono = data.weather[0].icon;
  let row = document.getElementById("divRow");
  return (row.innerHTML += `<img src="${iconoURL}${icono}@4x.png" alt="">
  <p class="pTitle">${data.name}</p>`);
};

console.log(getIcon());
