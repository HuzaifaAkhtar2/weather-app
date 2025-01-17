const apiKey = "f32fde6e8f6d9120082052632a6669df"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const input = document.querySelector('.search input')
const button = document.querySelector('.search button')
const weather = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    } else {
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&deg;C"
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h"
        document.querySelector('.weather-text').innerHTML = data.weather[0].main
        document.querySelector('.feels-like').innerHTML = "Feels Like: " + Math.round(data.main.feels_like) + "&deg;C"

        if (data.weather[0].main == "Clear") { weather.src = "images/clear.png" }
        else if (data.weather[0].main == "Clouds") { weather.src = "images/clouds.png" }
        else if (data.weather[0].main == "Drizzle") { weather.src = "images/drizzle.png" }
        else if (data.weather[0].main == "Mist") { weather.src = "images/mist.png" }
        else if (data.weather[0].main == "Rain") { weather.src = "images/rain.png" }
        else if (data.weather[0].main == "Snow") { weather.src = "images/snow.png" }
        else { weather.src = "images/clear.png" }

        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"
    }
}

button.addEventListener("click", () => {
    checkWeather(input.value)
})