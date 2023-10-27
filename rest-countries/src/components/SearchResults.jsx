// import Weather from "./Weather";

// function SearchResults({ filteredResults }) {
//   return (
//     <div>
//       {/* if else ternary operator */}
//       {filteredResults.length < 10 ? (
//         filteredResults.length === 1 ? (
//           <div>
//             <h1>{filteredResults[0].name.common}</h1>
//             <p>Capital: {filteredResults[0].capital[0]}</p>
//             <p>Area: {filteredResults[0].area}</p>
//             {/* <ul>{filteredResults[0].languages}</ul> */}
//             <ul>
//               {Object.values(filteredResults[0].languages).map(
//                 (language, index) => (
//                   <li key={index}>{language}</li>
//                 )
//               )}
//             </ul>
//             <img
//               style={{ width: "150px" }}
//               src={filteredResults[0].flags.png}
//               alt=""
//             />
//             <Weather country={filteredResults[0].name.common} />
//           </div>
//         ) : (
//           filteredResults.map((country) => (
//             <p key={country.name.official}>{country.name.common}</p>
//           ))
//         )
//       ) : (
//         <p>Too many matches, specify another filter</p>
//       )}
//     </div>
//   );
// }

// export default SearchResults;

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
