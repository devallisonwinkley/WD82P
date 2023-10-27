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
