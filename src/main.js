console.log("Hola");

const api = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "4e5536b1e0f31785b374595576ddf91c",
  metricEndPoint: "&units=metric",
  lang: "&lang=es",
  iconoURL: "https://openweathermap.org/img/wn/",
  pais: "AR",
  
};

const key = "4e5536b1e0f31785b374595576ddf91c";

const metricEndPoint = "&units=metric";

const lang = "&lang=es";

const url = "https://api.openweathermap.org/data/2.5/weather?q=";

let iconoURL = "https://openweathermap.org/img/wn/";

const pais = "AR"; //

//const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${provincias},${pais}&appid=${key}${metricEndPoint}${lang}`;

const selectProvincias = (provincias) => {
  const urlProvincias = `${api.url}${provincias},${api.pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //  console.log(urlPrueba);
  getCity(urlProvincias);
};

//
document.getElementById("miSelect").addEventListener("change", (e) => {
  e.preventDefault();
  const provincias = e.target.value;
  selectProvincias(provincias);
});
//hacer que cuando selecciono una provinica desaparezca la otra

const buscarCiudad = (ciudad) => {
  const urlCiudad = `${api.url}${ciudad}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  console.log(urlCiudad);
  getCity(urlCiudad);
};

document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ciudad = document.querySelector("#search-input").value;
  buscarCiudad(ciudad);
});
  
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
    row.innerHTML = ""
    return (row.innerHTML += `<img src="${api.iconoURL}${icono}@4x.png" alt="">
    <p class="pTitle">${data.name}</p>
    <p class="pTitle">${data.main.temp}</p>
    <p class="pTitle">${data.sys.country}</p>
    <p class="pTitle">${data.weather[0].description}</p>`);
  };
  
  getCity();
