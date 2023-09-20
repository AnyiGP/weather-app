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

// const provinciasArgentina = {
//   BuenosAires: {
//     value: "Ciudad Autónoma de Buenos Aires",
//     label: "Buenos Aires",
//   },
//   Catamarca: { value: "catamarca", label: "Catamarca" },
//   chaco: { value: "chaco", label: "Chaco" },
//   chubut: { value: "chubut", label: "Chubut" },
//   cordoba: { value: "Córdoba", label: "Córdoba" },
//   corrientes: { value: "corrientes", label: "Corrientes" },
//   entreRios: { value: "Entre Ríos", label: "Entre Ríos" },
//   formosa: { value: "formosa", label: "Formosa" },
//   Jujuy: { value: "San Salvador de Jujuy", label: "Jujuy" },
//   laPampa: { value: "Entre Ríos", label: "La Pampa" },
//   laRioja: { value: "La Rioja", label: "La Rioja" },
//   Mendoza: { value: "Mendoza", label: "Mendoza" },
//   misiones: { value: "misiones", label: "Misiones" },
//   neuquen: { value: "neuquén", label: "Neuquén" },
//   rioNegro: { value: "rioNegro", label: "Río Negro" },
//   salta: { value: "salta", label: "Salta" },
//   sanJuan: { value: "San Juan", label: "San Juan" },
//   sanLuis: { value: "san Luis", label: "San Luis" },
//   santaCruz: { value: "Santa Cruz Province", label: "Santa Cruz" },
//   santaFe: { value: "Santa Fe", label: "Santa Fe" },
//   santiagoDelEstero: { value: "Santa Fe", label: "Santiago del Estero" },
//   tierraDelFuego: { value: "tierraDelFuego", label: "Tierra del Fuego" },
//   tucuman: { value: "Tucumán Province", label: "Tucumán" },
// };

////////ARRAY OBJETOS////////

const provinciasArgentinaArray = [
  { value: "Ciudad Autónoma de Buenos Aires", label: "Buenos Aires" },
  { value: "catamarca", label: "Catamarca" },
  { value: "chaco", label: "Chaco" },
  { value: "chubut", label: "Chubut" },
  { value: "Córdoba", label: "Córdoba" },
  { value: "corrientes", label: "Corrientes" },
  { value: "Entre Ríos", label: "Entre Ríos" },
  { value: "formosa", label: "Formosa" },
  { value: "San Salvador de Jujuy", label: "Jujuy" },
  { value: "Entre Ríos", label: "La Pampa" },
  { value: "La Rioja", label: "La Rioja" },
  { value: "Mendoza", label: "Mendoza" },
  { value: "misiones", label: "Misiones" },
  { value: "neuquén", label: "Neuquén" },
  { value: "rioNegro", label: "Río Negro" },
  { value: "salta", label: "Salta" },
  { value: "San Juan", label: "San Juan" },
  { value: "san Luis", label: "San Luis" },
  { value: "Santa Cruz Province", label: "Santa Cruz" },
  { value: "Santa Fe", label: "Santa Fe" },
  { value: "Santa Fe", label: "Santiago del Estero" },
  { value: "tierraDelFuego", label: "Tierra del Fuego" },
  { value: "Tucumán Province", label: "Tucumán" },
];

////////SELECT DE PROVINCIAS////////

const selectProvincias = (provincias) => {
  const urlProvincias = `${api.url}${provincias},${api.pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //  console.log(urlProvincias);
  getCity(urlProvincias);
};

const miSelect = document.getElementById("miSelect");

// for (const key in provinciasArgentina) {
//   if (provinciasArgentina.hasOwnProperty(key)) {
//     const opcion = document.createElement("option");
//     opcion.value = provinciasArgentina[key].value;
//     opcion.textContent = provinciasArgentina[key].label;
//     miSelect.appendChild(opcion);
//   }
// }

provinciasArgentinaArray.forEach((provincia) => {
  const opcion = document.createElement("option");
  opcion.value = provincia.value; // Establece el valor de la opción
  opcion.textContent = provincia.label; // Establece el texto de la opción
  miSelect.appendChild(opcion); // Agrega la opción al select
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
