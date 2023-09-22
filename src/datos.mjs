export const api = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "4e5536b1e0f31785b374595576ddf91c",
  metricEndPoint: "&units=metric",
  lang: "&lang=es",
  iconoURL: "https://openweathermap.org/img/wn/",
  pais: "AR",
};

export const provinciasArgentinaArray = [
  { value: "Ciudad Autónoma de Buenos Aires", label: "Buenos Aires" },
  { value: "catamarca", label: "Catamarca" },
  { value: "chaco", label: "Chaco" },
  { value: "chubut", label: "Chubut" },
  { value: "Córdoba", label: "Córdoba" },
  { value: "corrientes", label: "Corrientes" },
  { value: "Entre Rios", label: "Entre Ríos" },
  { value: "formosa", label: "Formosa" },
  { value: "San Salvador de Jujuy", label: "Jujuy" },
  { value: "La Pampa", label: "La Pampa" },
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
//PARA TRANSFORMAR UN OBJ EN UN ARR DE CLAVES Object.keys(OBJETO).forEach.....

// o usar un for in
// for (const key in provinciasArgentina) {
//   if (provinciasArgentina.hasOwnProperty(key)) {
//     const opcion = document.createElement("option");
//     opcion.value = provinciasArgentina[key].value;
//     opcion.textContent = provinciasArgentina[key].label;
//     miSelect.appendChild(opcion);
//   }
// }

export const paisesAmerica = [
  { value: 'AR', label: 'Argentina' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'BR', label: 'Brasil' },
  { value: 'CA', label: 'Canadá' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'CR', label: 'Costa Rica' },
  { value: 'CU', label: 'Cuba' },
  { value: 'DO', label: 'República Dominicana' },
  { value: 'EC', label: 'Ecuador' },
  { value: 'SV', label: 'El Salvador' },
  { value: 'US', label: 'Estados Unidos' },
  { value: 'GT', label: 'Guatemala' },
  { value: 'HN', label: 'Honduras' },
  { value: 'MX', label: 'México' },
  { value: 'NI', label: 'Nicaragua' },
  { value: 'PA', label: 'Panamá' },
  { value: 'PY', label: 'Paraguay' },
  { value: 'PE', label: 'Perú' },
  { value: 'PR', label: 'Puerto Rico' },
  { value: 'UY', label: 'Uruguay' },
  { value: 'VE', label: 'Venezuela' },
  { value: 'AG', label: 'Antigua y Barbuda' },
  { value: 'BS', label: 'Bahamas' },
  { value: 'BB', label: 'Barbados' },
  { value: 'BZ', label: 'Belice' },
  { value: 'DM', label: 'Dominica' },
  { value: 'GD', label: 'Granada' },
  { value: 'GY', label: 'Guyana' },
  { value: 'HT', label: 'Haití' },
  { value: 'JM', label: 'Jamaica' },
  { value: 'LC', label: 'Santa Lucía' },
  { value: 'VC', label: 'San Vicente y las Granadinas' },
  { value: 'SR', label: 'Surinam' },
  { value: 'TT', label: 'Trinidad y Tobago' },
  { value: 'UY', label: 'Uruguay' },
];

console.log(paisesAmerica);

