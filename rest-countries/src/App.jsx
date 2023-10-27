// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import SearchResults from "./components/searchResults";

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [filteredResults, setFilteredResults] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://studies.cs.helsinki.fi/restcountries/api/all")
//       .then((response) => setCountries(response.data));
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value;

//     if (query.length === 0) setFilteredResults([]);
//     else {
//       const filteredCountries = countries.filter((country) =>
//         country.name.common.toLowerCase().includes(query.toLowerCase())
//       );

//       setFilteredResults(filteredCountries);
//     }
//   };

//   // if (filteredResults.length === 1) {
//   //   const {} = filteredResults[0];

//   //   return (
//   //     <div>
//   //       <h1>{filteredResults[0].name.common}</h1>
//   //     </div>
//   //   );
//   // }

//   return (
//     <div>
//       <div>
//         find countries <input onChange={handleSearch} />
//       </div>
//       <SearchResults filteredResults={filteredResults} />
//     </div>
//   );
// }

// export default App;

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
