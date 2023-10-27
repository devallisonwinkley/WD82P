## REFERENCE CODES

// APP.JSX

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchResults from "./components/SearchResults";
import SearchForm from "./components/SearchForm";

function App() {
const [countries, setCountries] = useState([]);
const [filteredResults, setFilteredResults] = useState([]);

useEffect(() => {
axios
.get("https://studies.cs.helsinki.fi/restcountries/api/all")
.then((response) => setCountries(response.data));
}, []);

return (
<div>
<SearchForm
        countries={countries}
        setFilteredResults={setFilteredResults}
      />
<SearchResults filteredResults={filteredResults} />
</div>
);
}

export default App;

// MAIN CODE

// SEARCHRESULTS.JSX

import Country from "./Country";
import SingleCountryView from "./SingleCountryView";

function SearchResults({ filteredResults }) {
return (
<div>
{filteredResults.length < 10 ? (
filteredResults.length === 1 ? (
<SingleCountryView country={filteredResults[0]} />
) : (
filteredResults.map((country, index) => (
<Country key={index} country={country} />
))
)
) : (
<p>Too many matches, specify another filter</p>
)}
</div>
);
}

export default SearchResults;

//

// SEARCHFORM.JSX

function SearchForm({ countries, setFilteredResults }) {
const handleSearch = (e) => {
const query = e.target.value;

    if (query.length === 0) setFilteredResults([]);
    else {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredResults(filteredCountries);
    }

};

return (
<div>
find countries <input onChange={handleSearch} />
</div>
);
}

export default SearchForm;

//

// SINGLECOUNTRYVIEW.JSX

import Weather from "./Weather";

function SingleCountryView({ country }) {
return (
<div>
<h1>{country.name.common}</h1>
<p>capital {country.capital[0]}</p>
<p>area {country.area}</p>
<p>
<strong>languages</strong>
</p>
<ul>
{Object.values(country.languages).map((language, index) => (
<li key={index}>{language}</li>
))}
</ul>
<img style={{ width: "150px" }} src={country.flags.png} />
<Weather country={country.name.common} />
</div>
);
}

export default SingleCountryView;

//

// WEATHER.JSX

import axios from "axios";
import { useEffect, useState } from "react";

function Weather({ country }) {
const [weather, setWeather] = useState(null);
const API_KEY = "e72cbe506351290ff39725a41bce3680";
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

//

// COUNTRY.JSX

function Country({ country }) {
return <p key={country.name.official}>{country.name.common}</p>;
}

export default Country;

//
