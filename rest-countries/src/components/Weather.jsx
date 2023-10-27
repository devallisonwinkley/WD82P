import axios from "axios";
import { useEffect, useState } from "react";

function Weather({ country }) {
  const [weather, setWeather] = useState(null);
  const API_KEY = "59fa57386ada2a8664847073a913e290";
  const API_URL = `https://api.openweathermap.org/data/2.5/find?q=${country}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    axios.get(API_URL).then((response) => setWeather(response.data.list[0]));
  }, []);

  if (!weather) {
    return <p>Fetching weather...</p>;
  }

  return (
    <div>
      <h2>Weather in {country}</h2>
      <p>temperature {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
