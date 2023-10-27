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
