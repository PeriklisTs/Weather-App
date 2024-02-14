const apiKey = "3341d699fae6d56934057ef5d636dab0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.svg";
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.svg";
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.svg";
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.svg";
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.svg";
    }
    else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.svg";
    }
    else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/thunderstorm.svg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
}
)

searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
}
)

