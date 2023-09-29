import {
  api,
  provinciasArgentinaArray,
  paisesAmerica,
  paisesEuropa,
  paisesAfrica,
  paisesAsia,
  paisesOceania,
} from "./datos.mjs";

////////BUSCADOR DE CIUDADES////////

const buscarCiudad = (ciudad) => {
  const urlCiudad = `${api.url}${ciudad}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  //console.log(urlCiudad);
  getCity(urlCiudad);
};

const buscarCiudad2 = (ciudad) => {
  const urlCiudad2 = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${api.key}`;
  // console.log(urlCiudad);
  getCityWorld(urlCiudad2); //devuelve un listado de 5 ciudades con el mismo nombre.
};

document.querySelector("#search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ciudad = document.querySelector("#search-input").value;
  buscarCiudad(ciudad);
  buscarCiudad2(ciudad);
  // ciudad.value = ""
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

////////BUSCAR CIUDAD + PAIS CON BOTONES////////

const btn_europa = document.querySelector("#btn-europa");
const btn_asia = document.querySelector("#btn-asia");
const btn_africa = document.querySelector("#btn-africa");
const btn_oceania = document.querySelector("#btn-oceania");
const btn_america = document.querySelector("#btn-america");
const selectorPaises = document.querySelector("#paises-continente");
const inputCiudad = document.querySelector("#search-country");
const buscar_ciudad = document.querySelector("#buscar-ciudad");
const nueva_busqueda = document.querySelector("#nueva-busqueda");

const buscarCiudadPais = (ciudadPais, pais) => {
  const urlCiudadPais = `${api.url}${ciudadPais},${pais}&appid=${api.key}${api.metricEndPoint}${api.lang}`;
  getCity(urlCiudadPais);
};

btn_africa.addEventListener("click", () => {
  selectorPaises.innerHTML = `
  <option selected>Selecciona un país África</option>`;
  paisesAfrica.map((paises) => {
    selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `;
  });
});

btn_europa.addEventListener("click", () => {
  selectorPaises.innerHTML = `
  <option selected>Selecciona un país Europa</option>`;
  paisesEuropa.map((paises) => {
    selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `;
  });
});

btn_america.addEventListener("click", () => {
  selectorPaises.innerHTML = `
  <option selected>Selecciona un país de América</option>`;
  paisesAmerica.map((paises) => {
    selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `;
  });
});

btn_asia.addEventListener("click", () => {
  selectorPaises.innerHTML = `
  <option selected>Selecciona un país de Asia</option>`;
  paisesAsia.map((paises) => {
    selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `;
  });
});

btn_oceania.addEventListener("click", () => {
  selectorPaises.innerHTML = `
  <option selected value="">Selecciona un país de Oceanía</option>`;
  paisesOceania.map((paises) => {
    selectorPaises.innerHTML += `
      <option value="${paises.value}">${paises.label}</option>
      `;
  });
});

buscar_ciudad.addEventListener("click", () => {
  const selectedCountry = selectorPaises.value;

  if (
    paisesOceania.some((pais) => pais.value === selectedCountry) ||
    paisesAfrica.some((pais) => pais.value === selectedCountry) ||
    paisesAmerica.some((pais) => pais.value === selectedCountry) ||
    paisesEuropa.some((pais) => pais.value === selectedCountry) ||
    paisesAsia.some((pais) => pais.value === selectedCountry)
  ) {
    buscarCiudadPais(inputCiudad.value, selectorPaises.value);
  } else {
    alert("Por favor, elija un continente y un país.");
  }
});

nueva_busqueda.addEventListener("click", () => {
  selectorPaises.innerHTML = `<option selected>Selecciona un país</option>`;
  inputCiudad.innerHTML = "";
});

////////FX OBTENER DATOS////////

const getCity = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("No se pudo obtener la información de la ciudad");
    }

    const data = await res.json();
    //const city = data.result
    let icono = data.weather[0].icon;
    let row = document.getElementById("divRow");
    row.innerHTML = "";
    return (row.innerHTML += `
      
    <h3 class="ciudad">${data.name}, ${data.sys.country}</h3>
    <p class="fecha">Fecha: ${new Date(data.dt * 1000)}</p>
                  
    <div>
                <div class="container-fluid text-center">
                  <div class="row d-flex flex-column">
                    <div class="col" style="margin-top: -30px;">
                                  <img
                        src="${api.iconoURL}${icono}@4x.png" alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="temperatura">${data.main.temp} ºC</p>
                      </div>

                      <div class="container text-center">
                      <div class="row justify-content-md-center">
                        <div class="col col-lg-12" style="margin-bottom: 10px;">Sensación Térmica ${
                          data.main.feels_like
                        } ºC
                        </div>
                      </div>
                      </div>
                    
                      <!-- MIN Y MAX -->
                      <div class="container text-center">
                      <div class="row justify-content-md-center">
                        <div class="col col-lg-6 miniDiv">
                          MIN ${data.main.temp_min}
                        </div>
                        <div class="col col-lg-6 miniDiv">
                          MAX ${data.main.temp_max}
                        </div>
                      </div>
                    </div>

                    <!-- VIENTO Y HUMEDAD -->
                    <div class="container text-center">
                      <div class="row justify-content-md-center">
                        <div class="col col-lg-6 miniDiv">Viento ${Math.ceil
                          (data.wind.speed)
                        }km/h </div>
                        <div class="col col-lg-6 miniDiv">Humedad ${
                          data.main.humidity
                        }%</div>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>
                <div>
                  <p class="descripcion">Descripción: ${
                    data.weather[0].description
                  }</p>
                </div>
      `);
  } catch (error) {
    // console.error("Error:", error);
    alert("Prueba agregando el nombre completo de la ciudad");
  }
};

// Llama a la función getCity con la URL deseada
//getCity();

// TOAST
//     document.getElementById("my-toast").innerHTML += `
//     <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
//   <div class="d-flex">
//     <div class="toast-body">
//     Prueba agregando el nombre completo de la ciudad
//     </div>
//     <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
//   </div>
// </div>`

const getCityWorld = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  //const city = data.result
  // console.log(city)
  let row = document.getElementById("divRow2");
  row.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const objeto = data[i];
    row.innerHTML += `
    <p class="pTitle">${objeto.name}</p>
    <p class="pTitle">${objeto.country}</p>
    <p class="pTitle">${objeto.state}</p>
  `;
  }
};

//getCityWorld();

//const urlCiudad = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4e5536b1e0f31785b374595576ddf91c";
//console.log(urlCiudad)

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

///////////////////////////GET CITY FILTRANDO CADA NOMBRE///////////////////////////
//////////////////////////////////////////////////
// const getCity = async (url) => {
//   const res = await fetch(url);
//   const data = await res.json();

//   let row = document.getElementById("divRow");
//   row.innerHTML = "";

//   // Filtra las ciudades con el mismo nombre
//   const citiesWithSameName = data.filter(data => data.name === cityName);

//   // Recorre las ciudades filtradas y muestra su información
//   citiesWithSameName.forEach(city => {
//     let icono = city.weather[0].icon;
//     row.innerHTML += `<img src="${api.iconoURL}${icono}@4x.png" alt="">
//       <p class="pTitle">${city.name}</p>
//       <p class="pTitle">${city.main.temp}</p>
//       <p class="pTitle">${city.sys.country}</p>
//       <p class="pTitle">${city.weather[0].description}</p>`;
//   });
// };

// // Llama a la función con la URL de la API y el nombre de la ciudad deseado
// //getCity("URL_DE_TU_API_AQUI", "NOMBRE_DE_LA_CIUDAD");

/////////////////////////////////////////////////////////////
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
