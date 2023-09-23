export default async function fetchWeatherData(location) {
  const apiKey = "59fa57386ada2a8664847073a913e290";
  const weatherApiUrl =
    "api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openWeatherMapApiKey}";
  const weatherIcon = "https://openweathermap.org/img/wn/${}.png";

  const response = await fetch(weatherApiUrl);
  const data = await response.json();

  return data;
}
