console.log("Hola")

const key = "4e5536b1e0f31785b374595576ddf91c"

//ejemplo llamada api


const urlEx = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid="

const url = "https://api.openweathermap.org/data/2.5/weather?"

const urlCityId = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

const metricEndPoint = "&units=metric"

const urlPrueba = "https://api.openweathermap.org/data/2.5/weather?q=Catamarca,AR&appid=4e5536b1e0f31785b374595576ddf91c"

const urlNombrePais = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

// //HACER EL LLAMADO A LA API//

// const urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Key': '4e5536b1e0f31785b374595576ddf91c',
// 		'metric': '&units=metric'
// 	}
// };

// try {
// 	const response = await fetch(urlBase, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


const getCity = async () => {
    const res = await fetch(urlPrueba)
    const data = await res.json()
    //const city = data.result
    console.log(data.name)

}

console.log(getCity())