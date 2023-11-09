// import "./Person.css";
import personService from "../services/persons";

function Person({ person, persons, setPersons, setResults }) {
  const { id, name, number } = person;

  const handleDelete = (id) => {
    personService.deletePerson(id).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const updatedPersons = persons.filter((person) => person.id !== id);

        setPersons(updatedPersons);
        setResults(updatedPersons);
      } else {
        console.log("No such contact!");
      }
    });
  };

  return (
    //<li className="person" style={{ color: "blue" }}> - INILINE STYLING - BAD PRACTICE
    <li className="p-4 bg-slate-200 m-4 w-fit align-middle">
      <button
        className="align-middle bg-red-500 p-2 rounded-full h-10 "
        onClick={() => handleDelete(id)}
      >
        x
      </button>{" "}
      {name} {number}
    </li>
  );
}

export default Person;
