import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import personService from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [results, setResults] = useState(persons);
  const [notification, setNotification] = useState("");

  // PURELY ASYNC AWAIT METHOD
  // const fetchPersons = async () => {
  //   const response = await fetch("http://localhost:3001/persons");
  //   const data = await response.json();

  //   setPersons(data);
  //   setResults(data);
  // };

  // AWAIT ASYNC WITH AXIOS METHOD
  // const fetchPersons = async () => {
  //   const response = await axios.get("http://localhost:3001/persons");

  //   setPersons(data);
  //   setResults(data);
  // };

  // useEffect does not need to assign this to a variable
  // Param1 = callback function
  // Param2 = dependency array (so that the effect will only run once and not infinitely)
  // useEffect(param1, param2)
  // AXIOS METHOD

  // useEffect(() => {
  //   // use .delete if you want to delete data
  //   // use .host if you want to add new data
  //   // axios.get("http://localhost:3001/persons").then((response) => {
  //   //   setPersons(response.data);
  //   //   setResults(response.data);
  //   // });

  //   personService.getAll().then((response) => {
  //     setPersons(response.data);
  //     setResults(response.data);
  //   });
  // }, []);

  //Shorter and better code
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setResults(initialPersons);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook App</h1>
      <Notification notification={notification} />
      <Search persons={persons} setResults={setResults} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setResults={setResults}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <ul>
        {results.map((person) => (
          <Person
            key={person.id}
            person={person}
            persons={persons}
            setPersons={setPersons}
            setResults={setResults}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

// -----------------

// Rest - referring to individual objects as resources
// For a better practice, we want to extract the communication to database into a module > under source and name the folder as services

// -----------------

// JSON server follows a rest convention - RESTful API
// RESTful API is a convention/guide on how to design your API. It's a good practice to design your API based on it.
// A specific item in a server is called a resource and every thing > resources
// RESTful API has 4 HTTP methods you can use - GET, POST, UPDATE, DELETE | you can use these methods by using the resource's unique id
// GET - fetching data | POST - creating a new resource | UPDATE -  | DELETE -
