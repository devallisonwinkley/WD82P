import "./style.css";
import fetchData from "./src/helpers/fetchData";
import displayData from "./src/helpers/displayData";

async function main() {
  const apiKey = "59fa57386ada2a8664847073a913e290";
  const location = "Manila";
  const weatherApiUrl =
    "api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherMapApiKey}";
  const weatherIcon = "https://openweathermap.org/img/wn/${}.png";

  const data = await fetchData(url);

  displayData(data);
}

main();
