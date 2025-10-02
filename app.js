async function fetchWeather(City) {
  let loading = document.querySelector(".loader");

  try {
    loading.style.visibility = "visible";
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2ddc0f1f717f4077bab143247252504&q=${City}&days=3&aqi=no&alerts=no`
    );
    let data = await response.json();
    loading.style.visibility = "hidden";

    // Current weather
    document.getElementById("temp").innerHTML = data.current.temp_c + "°C";
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("icon").src = data.current.condition.icon;
    document.getElementById("feels-like").innerHTML = data.current.feelslike_c + "°C";
    document.getElementById("Humidity").innerHTML = data.current.humidity + "%";
    document.getElementById("wind-speed").innerHTML = data.current.wind_kph + " km/h";
    document.getElementById("adress").innerHTML =
      data.location.name + ", " + data.location.region + ", " + data.location.country;

    // Forecast
    data.forecast.forecastday.forEach((day, index) => {
      document.querySelector(`.date${index + 1}`).innerHTML =
        new Date(day.date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric"
        });
      document.querySelector(`.weather${index + 1}`).innerHTML = day.day.condition.text;
      document.querySelector(`.max${index + 1}`).innerHTML = "Max: " + day.day.maxtemp_c + "°C";
      document.querySelector(`.min${index + 1}`).innerHTML = "Min: " + day.day.mintemp_c + "°C";
    });
  } catch (error) {
    loading.style.visibility = "hidden";
    alert("Sorry! City not found");
  }
}

async function Getcity(inputId) {
  let City = document.getElementById(inputId).value;
  if (!City) {
    alert("Please enter a city name");
    return;
  }

  // अगर search पहली screen से हो रही है तो transition दो
  if (inputId === "SearchStart") {
    const start = document.getElementById("start");
    const main = document.getElementById("main");

    start.classList.add("fade-out");
    setTimeout(() => {
      start.style.display = "none";
      main.classList.remove("hidden");
      main.classList.add("fade-in");
    }, 800);
  }

  // Weather लाओ
  await fetchWeather(City);
}
