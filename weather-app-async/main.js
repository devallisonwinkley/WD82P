import "./style.css";
// import displayData from "./src/displayWeatherData";
// import fetchData from "./src/fetchWeatherData";

// async function main() {
//   const apiKey = "59fa57386ada2a8664847073a913e290";
//   const location = "Manila";
//   const weatherApiUrl =
//     "api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherMapApiKey}";
//   const weatherIcon = "https://openweathermap.org/img/wn/${}.png";

//   const data = await fetchData(url);

//   displayData(data);
// }

// main();

// const weatherContainer = document.getElementById("weather-container");
// const cityInput = document.getElementById("city-input");

// weatherContainer.addEventListener("click", (event) => {
//   event.preventDefault();

//   const input = cityInput.value;
// });

document.querySelector("#app").innerHTML = `

<div id="weather" class="weather">
<form id="weather-container">
  <input id="city-input" type="text" placeholder="Enter Your City" required />
  <button id="search-btn" type="submit">Search</button>
</form>
</div>
`;
