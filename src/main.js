console.log("Hola")

const key = "4e5536b1e0f31785b374595576ddf91c"

const url = "https://api.openweathermap.org/data/2.5/weather?q="

//const urlCityId = "https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

const metricEndPoint = "&units=metric"

const ciudades = "Catamarca" //select con las provincias de argentina select.value

const pais = "AR" //

const urlPrueba = `https://api.openweathermap.org/data/2.5/weather?q=${ciudades},${pais}&appid=${key}${metricEndPoint}`

// const urlNombrePais = "https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

const getCity = async () => {
    const res = await fetch(urlPrueba)
    const data = await res.json()
    //const city = data.result
    console.log(data.weather) //devuelve un [{id, main, description:"clear sky", icon:"01d", id:800, main:"Clear"}]
    console.log(data.name)
    console.log(data.main.temp)

}

console.log(getCity())