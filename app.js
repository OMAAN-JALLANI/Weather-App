let City = "Bahawalnagar";
 let loading = document.querySelector(".loader");
async function Getcity() {
  City = document.getElementById("Search").value;
  console.log(City);
  await data(City);
}

async function data(City) {
  let API = `http://api.weatherapi.com/v1/forecast.json?key=2ddc0f1f717f4077bab143247252504&q=${City}&days=3&aqi=no&alerts=no`;

  try {
    loading.style.visibility = "visible";
    let response = await fetch(API);
    let result = await response.json();
    loading.style.visibility = "hidden";
    console.log(result);
if(!response.ok){     
    alert("City Not Found");
}
    // 🔹 DOM update yahan karo:
    document.getElementById("temp").innerHTML = result.current.temp_c + "°C";
    document.getElementById("condition").innerHTML = result.current.condition.text;
    document.getElementById("icon").src = result.current.condition.icon;
    document.getElementById("feels-like").innerHTML = result.current.feelslike_c + "°C";
    document.getElementById("Humidity").innerHTML = result.current.humidity + "%";
    document.getElementById("wind-speed").innerHTML = result.current.wind_kph + " km/h";
    document.getElementById("adress").innerHTML =result.location.name + ", " + result.location.region + ", " + result.location.country;

    // 🔹 Forecast Day 1
    document.querySelector(".date1").innerHTML = new Date(result.forecast.forecastday[0].date).toDateString().slice(0, 10);
    document.getElementById("icon1").src = result.forecast.forecastday[0].day.condition.icon;
    document.querySelector(".weather1").innerHTML =  result.forecast.forecastday[0].day.condition.text;
    document.querySelector(".max1").innerHTML = "Max: " + result.forecast.forecastday[0].day.maxtemp_c + "°C";
    document.querySelector(".min1").innerHTML = "Min: " + result.forecast.forecastday[0].day.mintemp_c + "°C";

    // 🔹 Forecast Day 2
    document.querySelector(".date2").innerHTML = new Date(result.forecast.forecastday[1].date).toDateString().slice(0, 10);
    document.getElementById("icon2").src = result.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".weather2").innerHTML =  result.forecast.forecastday[1].day.condition.text;
    document.querySelector(".max2").innerHTML = "Max: " + result.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.querySelector(".min2").innerHTML = "Min: " + result.forecast.forecastday[1].day.mintemp_c + "°C";

    // 🔹 Forecast Day 3
    document.querySelector(".date3").innerHTML = new Date(result.forecast.forecastday[2].date).toDateString().slice(0, 10);
    document.getElementById("icon3").src = result.forecast.forecastday[2].day.condition.icon;
    console.log(result.forecast.forecastday[2].day.condition.icon);
    document.querySelector(".weather3").innerHTML =  result.forecast.forecastday[2].day.condition.text;
    document.querySelector(".max3").innerHTML = "Max: " + result.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.querySelector(".min3").innerHTML = "Min: " + result.forecast.forecastday[2].day.mintemp_c + "°C";
    console.log(result.forecast.forecastday[2].day.mintemp_c);
  } catch (error) {
     
  }
}

/*88888888888888888*/
