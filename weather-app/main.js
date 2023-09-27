import "./style.css";
import fetchData from "./src/helpers/fetchData";
import displayData from "./src/helpers/displayData";

const form = document.querySelector("form");

async function main() {
  e.preventDefault();

  const location = document.getElementById("search").value;

  if (location === "") return;

  const apiKey = "59fa57386ada2a8664847073a913e290";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const weatherData = await fetchData(weatherApiUrl);
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  displayData({ weatherData, weatherIcon });
}

form.addEventListener("submit", main);
