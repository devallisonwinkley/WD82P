import axios from "axios";
import { useState } from "react";
import personService from "../services/persons";

function PersonForm({ persons, setPersons, setResults }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    //   personService.create(newPerson).then((response) => {
    //     setPersons(persons.concat(response.data));
    //     setResults(persons.concat(response.data));
    //     setNewName("");
    //     setNewNumber("");
    //   });
    // };

    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setResults(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  //   axios.post("http://localhost:3001/persons", newPerson).then((response) => {
  //     setPersons(persons.concat(response.data));
  //     setResults(persons.concat(response.data));
  //     setNewName("");
  //     setNewNumber("");
  //   });
  // };

  //   useEffect(() => {
  //     personService.getAll().then((response) => {
  //       setPersons(newPerson.response.data);
  //       setResults(newPerson.response.data);
  //     });
  //   }, []);
  // };

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} required />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} required />
      </div>
      <button type="submit">add</button>
    </form>
  );
}

export default PersonForm;
