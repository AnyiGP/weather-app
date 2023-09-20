console.log("Hola");

////////OBJETOS////////

const api = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "4e5536b1e0f31785b374595576ddf91c",
  metricEndPoint: "&units=metric",
  lang: "&lang=es",
  iconoURL: "https://openweathermap.org/img/wn/",
  pais: "AR",
};

const provinciasArgentina = {
  BuenosAires: {
    value: "Ciudad Autónoma de Buenos Aires",
    label: "Buenos Aires",
  },
  Catamarca: { value: "catamarca", label: "Catamarca" },
  chaco: { value: "chaco", label: "Chaco" },
  chubut: { value: "chubut", label: "Chubut" },
  cordoba: { value: "Córdoba", label: "Córdoba" },
  corrientes: { value: "corrientes", label: "Corrientes" },
  entreRios: { value: "Entre Ríos", label: "Entre Ríos" },
  formosa: { value: "formosa", label: "Formosa" },
  Jujuy: { value: "San Salvador de Jujuy", label: "Jujuy" },
  laPampa: { value: "Entre Ríos", label: "La Pampa" },
  laRioja: { value: "La Rioja", label: "La Rioja" },
  Mendoza: { value: "Mendoza", label: "Mendoza" },
  misiones: { value: "misiones", label: "Misiones" },
  neuquen: { value: "neuquén", label: "Neuquén" },
  rioNegro: { value: "rioNegro", label: "Río Negro" },
  salta: { value: "salta", label: "Salta" },
  sanJuan: { value: "San Juan", label: "San Juan" },
  sanLuis: { value: "san Luis", label: "San Luis" },
  santaCruz: { value: "Santa Cruz Province", label: "Santa Cruz" },
  santaFe: { value: "Santa Fe", label: "Santa Fe" },
  santiagoDelEstero: { value: "Santa Fe", label: "Santiago del Estero" },
  tierraDelFuego: { value: "tierraDelFuego", label: "Tierra del Fuego" },
  tucuman: { value: "Tucumán Province", label: "Tucumán" },
};
//const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${provincias},${pais}&appid=${key}${metricEndPoint}${lang}`;

////////SELECT DE PROVINCIAS////////

const selectProvincias = (provincias) => {
  const urlProvincias = `${api.url}${provincias},${api.pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //  console.log(urlProvincias);
  getCity(urlProvincias);
};

const miSelect = document.getElementById("miSelect");

for (const key in provinciasArgentina) {
  if (provinciasArgentina.hasOwnProperty(key)) {
    const opcion = document.createElement("option");
    opcion.value = provinciasArgentina[key].value;
    opcion.textContent = provinciasArgentina[key].label;
    miSelect.appendChild(opcion);
  }
}

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
});

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
