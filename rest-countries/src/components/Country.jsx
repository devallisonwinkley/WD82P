function Country({ country }) {
  return <p key={country.name.official}>{country.name.common}</p>;
}

export default Country;
