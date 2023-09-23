export default function displayWeatherData(weatherData) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent =
    "Location: `${location}` Temperature: `${openWeatherMapApiKey}`";

  const main = document.createElement("main");

  const iconContainer = document.createElement("div");
  const weatherIcon = document.createElement("img");
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const temperatureContainer = document.createElement("div");
  const temp = document.createElement("h2");
  temp.textContent = `${kelvinToCelsius(weatherData.main.temp)}°C`;

  const detailsContainer = document.createElement("div");

  iconContainer.appendChild(weatherIcon);
  tempContainer.appendChild(temp);
  main.append(h1, iconContainer, tempContainer, detailsContainer);

  app.append(main);
}
